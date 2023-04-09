import { Toaster } from "react-hot-toast";

import { AuthProvider } from "@/provider/AuthContext";
import { BooleanProvider } from "@/provider/BooleanContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <BooleanProvider>
      <AuthProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <Component {...pageProps} />
      </AuthProvider>
    </BooleanProvider>
  );
}
