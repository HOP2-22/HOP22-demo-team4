import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen w-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
