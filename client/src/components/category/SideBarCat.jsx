import { useRouter } from "next/router";

export const SideBarCat = ({ currentCat, categories }) => {
  const { push } = useRouter();

  return (
    <div className="flex flex-col gap-2">
      <p>Категор:</p>
      <select
        className="w-full border border-black hover:border-[#44BAF0] rounded-[5px] text-[12px] py-[10px] cursor-pointer"
        value={currentCat}
        onChange={(event) => push(`/category/${event.target.value}`)}
      >
        <option key={currentCat} value={currentCat}>
          {currentCat}
        </option>
        {categories?.map((item, index) => (
          <option key={index} value={item.slugify}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
