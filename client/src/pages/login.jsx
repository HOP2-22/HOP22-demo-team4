import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Image from "next/image";

getSession;

const Login = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        width={200}
        height={200}
        src={`https://res.cloudinary.com/dymjjmeyc/image/upload/v1679913069/AccountTrader/0x0_zfidbn.jpg`}
        alt=""
        className="w-full h-full object-center object-cover"
      />
      <div className="absolute top-0 left-0 px-5 w-full h-full bg-black/40 flex justify-center items-center">
        <div className="w-full sm:w-[420px] h-[500px] rounded-[20px] bg-[#f4f4f4] p-10">
          <p className="w-full text-center text-[36px] font-semibold pb-[100px]">
            Нэвтрэх
          </p>
          <div className="flex flex-col gap-7">
            <div
              className="w-full h-[50px] rounded-[10px] bg-white border flex gap-6 items-center pl-8 sm:pl-14 cursor-pointer"
              onClick={() => {}}
            >
              <Image
                width={32}
                height={32}
                src="https://res.cloudinary.com/dalheltnm/image/upload/v1681460197/Brand%20logo/google-icon_kt3dwd.svg"
                alt=""
              />
              <p className="text-[18px] font-semibold sm:text-[20px] sm:font-bold">
                Sign up with Google
              </p>
            </div>
            <div className="w-full h-[50px] rounded-[10px] bg-gradient-to-b from-[#689edf] to-[#17A9FD] flex gap-6 items-center pl-8 sm:pl-14 cursor-pointer">
              <Image
                width={32}
                height={32}
                src="https://res.cloudinary.com/dalheltnm/image/upload/v1681462186/Brand%20logo/facebook-xxl_q0heqk.png"
                alt=""
              />
              <p className="text-white text-[17px] font-semibold sm:text-[20px] sm:font-bold">
                Sign up with Facebook
              </p>
            </div>
            <div className="w-full h-[50px] rounded-[10px] bg-black flex gap-6 items-center pl-8 sm:pl-14 cursor-pointer">
              <Image
                width={32}
                height={32}
                src="https://res.cloudinary.com/dalheltnm/image/upload/v1681461293/Brand%20logo/apple-xxl_fgv5lp.png"
                alt=""
              />
              <p className="text-white text-[18px] font-semibold sm:text-[20px] sm:font-bold">
                Sign up with Apple
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.getInitialProps = async (context) => {
  return {
    providers: await providers(context),
    session: await getSession(context),
  };
};

export default Login;
