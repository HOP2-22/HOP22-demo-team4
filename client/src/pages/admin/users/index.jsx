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
import Row from "@/components/admin/user/UserRow";

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

  const [role, setRole] = useState("user");

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

      const { data } = await axios.post(`${process.env.BASE_URL}/user/signup`, {
        ...values,
        role: role,
      });

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
    <AdminSideBar className={"pt-[50px] px-10 flex flex-col gap-10 h-screen"}>
      <div className="flex justify-between items-end pb-5 border-b border-black/60">
        <div className="flex flex-col gap-5">
          <p className="text-[22px] text-black font-medium">
            Шинэ хэрэглэгч үүсгэх
          </p>
          <AdminInput
            value={values?.name}
            label={"Name"}
            onChangeHandler={nameHandler}
            onkeydownHandler={keyDownHandler}
            inputRef={nameRef}
            inputClassName={"w-[400px]"}
          />
          <AdminInput
            value={values?.email}
            label={"Email"}
            onChangeHandler={emailHandler}
            onkeydownHandler={keyDownHandler}
            inputRef={emailRef}
            inputClassName={"w-[400px]"}
          />
          <AdminInput
            value={values?.password}
            label={"Password"}
            onChangeHandler={passwordHandler}
            onkeydownHandler={keyDownHandler}
            inputRef={passwordRef}
            inputClassName={"w-[400px]"}
          />
          <div className="flex flex-col gap-2">
            <p className="pl-2 text-indigo-900 font-medium text-[20px]">
              Role:
            </p>
            <select
              value={role}
              className="w-[400px] outline outline-indigo-500 rounded-[20px] px-5 py-[10px]"
              onChange={(event) => {
                setRole(event.target.value);
              }}
            >
              <option value="user">user</option>
              <option value="admin">admin</option>
            </select>
          </div>
        </div>
        <button
          onClick={() => register()}
          className="px-[30px] py-[15px] text-[25px] font-medium rounded-[15px] text-white bg-blue-500"
        >
          Register
        </button>
      </div>
      <div className="">
        <TableContainer>
          <TableContainer>
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
          </TableContainer>
        </TableContainer>
      </div>
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
