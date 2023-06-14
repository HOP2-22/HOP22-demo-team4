import { useEffect, useState } from "react";

import HomeFilterOptions from "./HomeFilterOptions";

import { AiOutlineSearch } from "react-icons/ai";

export const HomeFilter = ({
  currentType,
  setCurrentType,
  types,
  searchValue,
  setSearchValue,
  firstAllCategories,
  setCategories,
}) => {
  useEffect(() => {
    if (searchValue.length > 0) {
      let newArr = [];

      const timer = setTimeout(() => {
        newArr = firstAllCategories.filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        );

        setCategories(newArr);
      }, 1500);
      return () => clearTimeout(timer);
    } else if (searchValue === "") {
      const timer = setTimeout(() => {
        setCategories(firstAllCategories);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [searchValue, firstAllCategories]);

  const searchInputHandler = (event) => {
    setSearchValue(event.target.value);
  };

  const [focused, setFocused] = useState(false);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <>
      <div className="w-full flex flex-wrap-reverse sm:flex-wrap justify-between items-center gap-3 px-5 sm:px-0 mt-5 mb-8">
        <div className="relative group w-full sm:w-auto">
          <input
            onFocus={onFocus}
            onBlur={onBlur}
            className="w-full sm:w-[250px] placeholder:text-[13px] h-[37px] pl-3 rounded-full border-[3px] border-black/30 focus:border-[#44BAF0] focus:outline-none"
            value={searchValue}
            onChange={searchInputHandler}
            placeholder="Тоглоомныхоо нэрээр хайна уу"
          />
          <div className="absolute top-0 right-[5px] h-full flex items-center">
            <AiOutlineSearch
              className={`h-6 w-6 rounded-full ${focused && "text-[#44BAF0]"}`}
            />
          </div>
        </div>
        <HomeFilterOptions
          types={types}
          currentType={currentType}
          setSearchValue={setSearchValue}
          setCurrentType={setCurrentType}
        />
      </div>
    </>
  );
};
