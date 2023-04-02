export default function HamburgerMenu({ hamburger, setHamburger }) {
  return (
    <div>
      <div
        className={`${
          hamburger ? "border border-[#FF6900]" : "border border-black"
        } flex flex-col transition-colors duration-200 rounded gap-1 items-center justify-center w-8 h-8 sm:hidden`}
        onClick={() => setHamburger(!hamburger)}
      >
        <div
          className={`${
            !hamburger
              ? "bg-black"
              : "bg-[#FF6900] rotate-45 translate-y-[2.5px]"
          } h-[1.5px] rounded w-[60%] transition duration-200`}
        ></div>
        <div
          className={`${
            !hamburger ? "bg-black" : "hidden"
          } h-[1.5px] rounded w-[60%] transition duration-200`}
        ></div>
        <div
          className={`${
            !hamburger
              ? "bg-black"
              : "bg-[#FF6900] -rotate-45 -translate-y-[2.5px]"
          } h-[1.5px] rounded w-[60%] transition duration-200`}
        ></div>
      </div>
    </div>
  );
}
