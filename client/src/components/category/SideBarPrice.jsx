import { useRouter } from "next/router";
import { useState } from "react";

export const SideBarPrice = () => {
  const { query, push, asPath } = useRouter();

  const priceHandler = (event) => {
    delete query.slugify;
    if (query.sort?.includes("price"))
      if (query.sort === "price" || "-price") {
        delete query.sort;
      } else {
        query.sort.replace("-price", "");
        query.sort.replace("price", "");
      }

    if (event.target.value === "increase") {
      push({
        pathname: asPath.split("?")[0],
        query: {
          sort: `${query.sort ? `${query.sort}%20price` : "price"}`,
          ...query,
        },
      });
    }
    if (event.target.value === "none") {
      push({
        pathname: asPath.split("?")[0],
        query: {
          ...query,
        },
      });
    }
    if (event.target.value === "decrease") {
      push({
        pathname: asPath.split("?")[0],
        query: {
          sort: `${query.sort ? `${query.sort}%20-price` : "-price"}`,
          ...query,
        },
      });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <p>Үнэ:</p>
      <select
        className="w-full border border-black hover:border-[#44BAF0] rounded-[5px] text-[12px] py-[6px] cursor-pointer"
        value={
          query.sort === "-price"
            ? "decrease"
            : query.sort === "price"
            ? "increase"
            : "none"
        }
        onChange={priceHandler}
      >
        <option key={"none"} value={"none"}>
          none
        </option>
        <option key={"increase"} value={"increase"}>
          Багаас их рүү
        </option>
        <option key={"decrease"} value={"decrease"}>
          Ихээс баг руу
        </option>
      </select>
    </div>
  );
};
