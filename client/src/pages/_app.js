import { Toaster } from "react-hot-toast";

import { AuthProvider } from "@/provider/AuthContext";
import { BooleanProvider } from "@/provider/BooleanContext";
import "@/styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <BooleanProvider>
      <AuthProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <Component {...pageProps} />
      </AuthProvider>
    </BooleanProvider>
  );
};

export default App;
