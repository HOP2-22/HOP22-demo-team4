import { useState } from "react";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";

import { AuthProvider } from "@/provider/AuthContext";
import SideBar from "@/components/layout/SideBar";

const App = ({ Component, pageProps }) => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <AuthProvider hamburger={hamburger} setHamburger={setHamburger}>
      <Toaster position="top-right" reverseOrder={false} />
      <div className={`${hamburger && "h-screen"} relative overflow-hidden`}>
        <Component {...pageProps} />
        <SideBar />
      </div>
    </AuthProvider>
  );
};

export default App;
