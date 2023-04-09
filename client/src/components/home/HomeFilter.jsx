import { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const HomeFilter = ({
  currentType,
  setCurrentType,
  types,
  searchValue,
  setSearchValue,
  firstAllCategories,
  setCategory,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      let newArr = firstAllCategories.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setCategory(newArr);
    }, 1500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  const searchInputHandler = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="w-full flex flex-wrap-reverse sm:flex-wrap justify-between items-center gap-3 px-5 sm:px-0 mt-5 mb-8">
      <div className="relative group w-full sm:w-auto">
        <input
          className="w-full sm:w-[220px] h-[37px] pl-3 rounded-full border border-black/60 focus:outline-0 group-hover:border-[#44BAF0]"
          value={searchValue}
          onChange={searchInputHandler}
        />
        <div className="absolute top-0 right-[5px] h-full flex items-center">
          <AiOutlineSearch className="h-6 w-6 rounded-full group-hover:text-[#44BAF0]" />
        </div>
      </div>
      <div className="w-full sm:w-[300px] flex items-center gap-3">
        <p className="font-medium">Type:</p>
        <select
          className="w-full border border-black hover:border-[#44BAF0] rounded-[7px] text-[14px] py-2 pl-2 cursor-pointer"
          value={currentType}
          onChange={(event) => {
            setSearchValue("");
            setCurrentType(event.target.value);
          }}
        >
          {types?.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
