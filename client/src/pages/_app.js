import { Toaster } from "react-hot-toast";

import { AuthProvider } from "@/provider/AuthContext";
import "@/styles/globals.css";
import "@/styles/auth/style.css";

const App = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default App;
