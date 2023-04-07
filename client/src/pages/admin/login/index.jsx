import axios from "axios";

import { useState } from "react";
import { useRouter } from "next/router";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [success, setSuccess] = useState(Boolean);
  const [fail, setFail] = useState(Boolean);
  const [notAdmin, setNotadmin] = useState(Boolean);
  const loginHandeler = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/user/auth/login`,
        {
          email: email,
          password: password,
        }
      );
      // console.log(response.data.success); 
      if (response.data.success === true) {
        if (response.data.data.callBackUser.role == "user") {
          setNotadmin(true);
          setSuccess(false);
        } else {
          setNotadmin(false);
          setFail(false);
          setSuccess(true);
          router.push("/admin");
        }
      } else {
        setSuccess(false);
        setFail(true);
        console.log("amjiltgu");
        
      }
      // console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="border w-[400px] h-[437px] flex flex-col items-center">
        <div className="text-4xl mt-7">Admin login</div>
        <div className="mt-7">
          <div className="text-2xl">User name or email</div>
          <input
            placeholder="Enter mail"
            className="w-[320px] h-[45px] rounded-md text-center mt-1"
            type="mail"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="mt-3">
          <div className="text-2xl">Password</div>
          <input
            placeholder="Enter password"
            type="password"
            className="w-[320px] h-[45px] rounded-md text-center mt-1"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div className="mt-7">
          <button
            className="bg-yellow-400 w-[200px] h-[40px] rounded-md"
            onClick={() => {
              loginHandeler();
            }}
          >
            Login
          </button>
        </div>
        <div className="flex mt-5">
          <div className="mr-[5px]">Forgot password ?</div>
          <button className="text-blue-800 ">reset pass</button>
        </div>
        {success ? <div>login success</div> : <div></div>}
        {fail ? (
          <div className="mt-5 text-xl">Wrong email or password</div>
        ) : (
          <div></div>
        )}
        {notAdmin ? <div>No users allowed only admin</div> : <div></div>}
      </div>
    </div>
  );
}
