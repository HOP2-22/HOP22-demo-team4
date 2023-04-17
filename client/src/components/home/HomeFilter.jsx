import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import HomeFilterOptions from "./HomeFilterOptions";

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
    if (searchValue.length > 0) {
      let newArr = [];

      const timer = setTimeout(() => {
        newArr = firstAllCategories.filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        );

        setCategory(newArr);
      }, 1500);
      return () => clearTimeout(timer);
    } else if (searchValue === "") {
      const timer = setTimeout(() => {
        setCategory(firstAllCategories);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [searchValue]);

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
            className="w-full sm:w-[250px] placeholder:text-[13px] h-[37px] pl-3 rounded-full outline outline-black/60 focus:outline-[#44BAF0]"
            value={searchValue}
            onChange={searchInputHandler}
            placeholder="Категорынхоо нэрээр хайна уу"
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
