import { AuthContext } from "@/provider/AuthContext";
import { useRouter } from "next/router";
import React, { useContext } from "react";

const GuardFromUser = ({ children }) => {
  const { user } = useContext(AuthContext);

  const { push } = useRouter();

  if (user?.role === "user") return push("/404");

  return <>{children}</>;
};

export default GuardFromUser;
