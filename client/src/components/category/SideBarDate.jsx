import { useRouter } from "next/router";

export const SideBarDate = () => {
  const { query, push, asPath } = useRouter();

  const dataHandler = (event) => {
    delete query.slugify;
    delete query.d;

    if (event.target.value === "increase") {
      push({
        pathname: asPath.split("?")[0],
        query: {
          d: "date",
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
          d: "-date",
          ...query,
        },
      });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <p>Нийтэлсэн өдөр:</p>
      <select
        className="w-full border border-black hover:border-[#44BAF0] rounded-[5px] text-[12px] py-[6px] cursor-pointer"
        value={
          query.d === "-date"
            ? "decrease"
            : query.d === "date"
            ? "increase"
            : "none"
        }
        onChange={dataHandler}
      >
        <option key={"none"} value={"none"}>
          none
        </option>
        <option key={"increase"} value={"increase"}>
          Эхнийхаас
        </option>
        <option key={"decrease"} value={"decrease"}>
          Сүүлийнхаас
        </option>
      </select>
    </div>
  );
};
