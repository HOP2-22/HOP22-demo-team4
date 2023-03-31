export default function HamburgerMenu({ hamburger, setHamburger }) {
  return (
    <div>
      <div
        className={`${
          hamburger ? "" : "border border-gray-300"
        } flex flex-col  rounded gap-1 items-center justify-center w-8 h-8 md:hidden`}
        onClick={() => setHamburger(!hamburger)}
      >
        <div
          className={`${
            !hamburger
              ? "bg-white"
              : "bg-[#C0904D] rotate-45 translate-y-[2.5px]"
          } h-[1.5px] rounded w-[60%] transition duration-200`}
        ></div>
        <div
          className={`${
            !hamburger ? "bg-white" : "hidden"
          } h-[1.5px] rounded w-[60%] transition duration-200`}
        ></div>
        <div
          className={`${
            !hamburger
              ? "bg-white"
              : "bg-[#C0904D] -rotate-45 -translate-y-[2.5px]"
          } h-[1.5px] rounded w-[60%] transition duration-200`}
        ></div>
      </div>
    </div>
  );
}
