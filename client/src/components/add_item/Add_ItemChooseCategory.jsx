import React, { useEffect, useState } from "react";

import Add_ItemEachElementTitle from "./Add_ItemEachElementTitle";

const Add_ItemChooseCategory = ({ data, choosenCat, setChoosenCatId }) => {
  const [choosenCatName, setChoosenCatName] = useState(null);

  useEffect(() => {
    const choosenCatInfo = data.filter((item) => item.name === choosenCatName);

    setChoosenCatId({ ...choosenCat, catId: choosenCatInfo[0]?._id });
  }, [choosenCatName]);

  return (
    <div className="col-span-12 flex flex-col gap-2">
      <Add_ItemEachElementTitle className={""}>
        Тоглоомоо сонгоно уу?
      </Add_ItemEachElementTitle>
      <select
        className="w-full border border-black/50 hover:border-[#44BAF0] rounded-[7px] text-[14px] py-2 pl-2 cursor-pointer"
        value={choosenCatName ? choosenCatName : "none"}
        onChange={(event) => {
          setChoosenCatName(event.target.value);
        }}
      >
        <option>None</option>
        {data?.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Add_ItemChooseCategory;
