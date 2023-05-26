import { Container } from "../Container";

export const Footer = () => {
  return (
    <div className="w-full flex flex-col gap-8 justify-center items-center pt-[120px] bg-[#f4f4f4]">
      <Container className={"grid grid-cols-2 gap-4 items-center px-5 sm:px-0"}>
        <div className="relative w-full">
          <img
            width={400}
            height={400}
            src="https://res.cloudinary.com/dymjjmeyc/image/upload/v1680950252/rlyvfvI_mff9dw.jpg"
            className="w-full h-[120px] rounded-[15px] object-cover"
            alt=""
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-[15px] p-5 bg-gradient-to-r from-black/60 to-transparent">
            <div className="xsm:w-3/4 sm:w-2/3 lg:w-1/2 xl:w-1/3 h-full flex items-center">
              <p className="text-white text-[16px] font-medium">
                Дахиж MID хайх хэрэггүй шууд худалдаж ав.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <img
            width={400}
            height={400}
            src="https://res.cloudinary.com/dymjjmeyc/image/upload/v1680949311/5538374_f9hv6h.jpg"
            className="w-full h-[120px] rounded-[15px] object-cover"
            alt=""
          />
          <div className="absolute top-0 left-0 w-full h-full flex justify-end items-end rounded-[15px] p-5 bg-gradient-to-tl from-black/60 to-transparent">
            <div className="xsm:w-3/4 sm:w-2/3 lg:w-1/2 xl:w-1/3 h-full flex items-center">
              <p className="text-white text-[16px] font-medium text-end">
                Таны итгэлийг даах SWAPZONE.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div className="w-full h-[45px] sm:h-[60px] bg-white flex justify-center items-center">
        <p className="bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500 sm:font-medium text-[16px] sm:text-[18px]">
          @copyright 2023
        </p>
      </div>
    </div>
  );
};
