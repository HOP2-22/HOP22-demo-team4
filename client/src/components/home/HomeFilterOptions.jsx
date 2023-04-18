export default function HomeFilterOptions({
  types,
  currentType,
  setSearchValue,
  setCurrentType,
}) {
  return (
    <div className="w-full sm:w-[300px] flex items-center gap-3">
      <p className="font-medium">Төрөл:</p>
      <select
        className="w-full border border-black/60 hover:border-[#44BAF0] rounded-[7px] text-[14px] py-2 pl-2 cursor-pointer"
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
  );
}
