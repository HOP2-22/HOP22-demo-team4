import { AuthProvider } from "@/provider/AuthContext";
import { BooleanProvider } from "@/provider/BooleanContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <BooleanProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </BooleanProvider>
  );
}
