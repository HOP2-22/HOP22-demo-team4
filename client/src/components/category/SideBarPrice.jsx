import { useRouter } from "next/router";

export const SideBarPrice = () => {
  const { query, push, asPath } = useRouter();

  const priceHandler = (event) => {
    delete query.slugify;
    delete query.p;

    if (event.target.value === "increase") {
      push({
        pathname: asPath.split("?")[0],
        query: {
          p: "price",
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
          p: "-price",
          ...query,
        },
      });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <p>Үнэ:</p>
      <select
        className="w-full border border-black hover:border-[#44BAF0] rounded-[5px] text-[12px] py-[10px] cursor-pointer"
        value={
          query.p === "-price"
            ? "decrease"
            : query.p === "price"
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
