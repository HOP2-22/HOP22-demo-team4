import { useRef, useState } from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { toast } from "react-hot-toast";

import AdminSideBar from "@/components/admin/AdminSideBar";
import AdminInput from "@/components/admin/AdminInput";
import Row from "@/components/admin/UserRow";

const Users = ({ data }) => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [users, setUsers] = useState(data);

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const nameHandler = (event) => {
    setValues(() => ({ ...values, name: event.target.value }));
  };

  const emailHandler = (event) => {
    setValues(() => ({ ...values, email: event.target.value }));
  };

  const passwordHandler = (event) => {
    setValues(() => ({ ...values, password: event.target.value }));
  };

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      if (values.name.length === 0) return nameRef.current.focus();
      if (values.email.length === 0) return emailRef.current.focus();
      if (values.password.length === 0) return passwordRef.current.focus();

      register();
    }
  };

  const register = async () => {
    try {
      for (let item in values) {
        if (values[item].length === 0)
          return toast.error("Form дутуу бөглөсөн байна");
      }

      const { data } = await axios.post(
        `${process.env.BASE_URL}/user/signup`,
        values
      );

      setUsers((prev) => {
        let newUsers = [...prev, data.data];

        return newUsers;
      });

      toast.success("signup successfully");
    } catch (error) {
      toast.error("Form оо зөв бөглөнө үү");
    }
  };

  return (
    <AdminSideBar className={"pt-[50px] px-10 flex flex-col gap-10"}>
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-5">
          <AdminInput
            value={values?.name}
            label={"Name"}
            onChangeHandler={nameHandler}
            onkeydownHandler={keyDownHandler}
            inputRef={nameRef}
          />
          <AdminInput
            value={values?.email}
            label={"Email"}
            onChangeHandler={emailHandler}
            onkeydownHandler={keyDownHandler}
            inputRef={emailRef}
          />
          <AdminInput
            value={values?.password}
            label={"Password"}
            onChangeHandler={passwordHandler}
            onkeydownHandler={keyDownHandler}
            inputRef={passwordRef}
          />
        </div>
        <button
          onClick={() => register()}
          className="px-[30px] py-[15px] text-[25px] font-medium rounded-[15px] text-white bg-blue-500"
        >
          Register
        </button>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Public Accounts count</TableCell>
              <TableCell>When created</TableCell>
              <TableCell>Buttons</TableCell>
            </TableRow>
          </TableHead>
          <Row users={users} setUsers={setUsers} />
        </Table>
      </TableContainer>
    </AdminSideBar>
  );
};

export default Users;

export async function getServerSideProps() {
  try {
    const { data } = await axios.get(`${process.env.BASE_URL}/user`);

    return {
      props: {
        data: data.data,
      },
    };
  } catch (error) {
    return {
      redirect: "/",
    };
  }
}
