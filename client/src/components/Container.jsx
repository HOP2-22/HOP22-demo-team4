export default function Container({ children, className }) {
  return (
    <div className={`${className} grow w-full h-full flex justify-center`}>
      <div className="w-full sm:w-[576px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1180px] 3xl:w-[1330px] h-full">
        {children}
      </div>
    </div>
  );
}
