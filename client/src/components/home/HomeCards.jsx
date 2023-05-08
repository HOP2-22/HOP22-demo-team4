import { HomeCard } from "./HomeCard";

export const HomeCards = ({ categories }) => {
  return (
    <div className="px-5 sm:px-0 grid grid-cols-2 xsm:grid-cols-3 gap-4 lg:gap-5 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 3xl:grid-cols-9">
      {categories?.map((item, index) => {
        return <HomeCard key={index} data={item} />;
      })}
    </div>
  );
};
