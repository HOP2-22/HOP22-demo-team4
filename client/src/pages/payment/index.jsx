import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import { Container } from "@/components/Container";
import { Layout } from "@/components/layout/Layout";
import { AuthContext } from "@/provider/AuthContext";
import PaymendCards from "@/components/payment/PaymendCards";
import PaymentButton from "@/components/payment/PaymentButton";
import PaymentTitle from "@/components/payment/PaymentTitle";

const index = ({ data }) => {
  const { query } = useRouter();

  const { user } = useContext(AuthContext);

  const [checks, setChecks] = useState(new Array(data.length).fill(false));
  const [accountDetail, setAccountDetail] = useState({});

  const getAccount = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/account/${query.d}`
      );

      setAccountDetail(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (query.d) {
      getAccount();
    }
  }, [query]);

  const changeChecked = (index) => {
    let newArr = new Array(data.length).fill(false);

    if (!checks[index]) {
      newArr[index] = true;
    }
    setChecks(newArr);
  };

  const buy = async () => {
    try {
      const index = checks.findIndex((item) => item === true);

      console.log({
        payment: data[index].name,
        price: accountDetail.price,
        content: `${accountDetail._id}`,
        buyiedUser: user?.name,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Container className={"pt-[100px] px-5 sm:px-0"}>
        <PaymentTitle>Төлбөрөө төлөх хэрэгсэл ээ сонгоно уу</PaymentTitle>
        <PaymendCards
          changeChecked={changeChecked}
          checks={checks}
          data={data}
        />
        <PaymentButton />
      </Container>
    </Layout>
  );
};

export default index;

export async function getStaticProps(context) {
  const res = await axios.get("http://localhost:8000/api/v1/payment");

  return {
    props: {
      data: res.data.data,
    },
  };
}
