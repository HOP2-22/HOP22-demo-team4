import React from "react";

const CatDetailName = ({ setCategory, category }) => {
  return (
    <div className="flex items-center pb-8">
      <label htmlFor="" className="text-indigo-500 text-[28px] pr-4">
        Name:
      </label>
      <input
        type="text"
        value={category?.name}
        onChange={(event) =>
          setCategory({ ...category, name: event.target.value })
        }
        className="px-4 py-[10px]  border-b-2 border-red-400 outline-red-400 text-[20px]"
      />
    </div>
  );
};

export default CatDetailName;
