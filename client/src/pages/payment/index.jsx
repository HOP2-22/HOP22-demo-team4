import React, { useContext, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import { Container } from "@/components/Container";
import { Layout } from "@/components/layout/Layout";
import { AuthContext } from "@/provider/AuthContext";
import PaymendCards from "@/components/payment/PaymendCards";
import PaymentButton from "@/components/payment/PaymentButton";
import PaymentTitle from "@/components/payment/PaymentTitle";
import { Guard } from "@/components/Guard";

const Payment = ({ data, accountDetail }) => {
  const { push, refresh } = useRouter();
  const { user, setLoading, loading } = useContext(AuthContext);

  const [checks, setChecks] = useState(new Array(data.length).fill(false));

  const changeChecked = (index) => {
    let newArr = new Array(data.length).fill(false);

    if (!checks[index]) {
      newArr[index] = true;
    }
    setChecks(newArr);
  };

  const buy = async () => {
    setLoading(true);

    if (accountDetail?.owner._id === user?._id)
      toast.error("Та өөрийнхөө барааг авж болохгүй");

    if (accountDetail?.sold) {
      toast.error("Аль хэдийн зарагдсан байна");
      setLoading(false);
      return;
    }

    if (!checks.find((item) => item === true)) {
      toast.error("Та эхлээд төлбөрийн сонголтоо сонгоно уу");
      setLoading(false);
      return;
    }

    const index = checks.findIndex((item) => item === true);

    console.log({
      payment: data[index].name,
      price: accountDetail.price,
      content: `${accountDetail._id}`,
      buyiedUser: {
        id: user?._id,
        name: user?.name,
      },
      salerUser: {
        name: accountDetail?.owner.name,
        id: accountDetail?.owner._id,
      },
    });

    try {
      await axios.post(`${process.env.BASE_URL}/room`, {
        name: `бараа ${accountDetail?.title} ${accountDetail?._id}`,
        members: [`${user?._id}`, `${accountDetail?.owner._id}`],
        accountId: accountDetail._id,
        userId: user?._id,
      });

      await axios.post(`${process.env.BASE_URL}/account/buy`, {
        accountId: accountDetail?._id,
        userId: user?._id,
      });

      push("/");
      refresh();
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <Guard role={"user"}>
      <Layout>
        <Container className={"pt-[100px] px-5 sm:px-0"}>
          <PaymentTitle>Төлбөрөө төлөх хэрэгсэл ээ сонгоно уу</PaymentTitle>
          <PaymendCards
            changeChecked={changeChecked}
            checks={checks}
            data={data}
          />
          <PaymentButton buy={buy} loading={loading} />
        </Container>
      </Layout>
    </Guard>
  );
};

export default Payment;

export async function getServerSideProps(context) {
  try {
    const { query } = context;

    const res = await axios.get(`${process.env.BASE_URL}/payment`);

    const detail = await axios.get(
      `${process.env.BASE_URL}/account/${query.d}`
    );

    return {
      props: {
        data: res.data.data,
        accountDetail: detail.data.data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
}
