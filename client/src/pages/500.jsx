export default function custom500() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-200 to-gray-300 ">
      <p className="text-[24px] font-medium">
        500 - Server-side error occurred
      </p>
      <p className="text-[17px]">wait a few minute sorry for that</p>
    </div>
  );
}
