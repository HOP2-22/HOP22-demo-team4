import Layout from "@/components/Layout";
import AuthProvider from "@/provider/AuthContext";
import BooleanProvider from "@/provider/BooleanContext";
import Context from "@/provider/BooleanContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <BooleanProvider>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </BooleanProvider>
  );
}
