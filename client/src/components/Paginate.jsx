import { useRouter } from "next/router";
import { useContext } from "react";

import { AuthContext } from "@/provider/AuthContext";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const Paginate = ({ paginate }) => {
  const { handleToTop } = useContext(AuthContext);

  const { query, push, asPath } = useRouter();

  return (
    <div className="col-span-10 w-full flex items-center justify-end gap-10 pt-8">
      <div className="text-2xl font-medium text-black/80">
        Хуудас: {query.page ? query.page : "1"}
      </div>
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 flex justify-center items-center ${
            paginate?.prevPage === "open page"
              ? "bg-[#00bfe0]/80"
              : "bg-[#00bfe0] cursor-pointer"
          } text-white font-black rounded-[8px]`}
          onClick={() => {
            if (query.page) {
              handleToTop();
              if (paginate?.prevPage === 1) {
                delete query.page;
                delete query.slugify;

                push({
                  pathname: asPath.split("?")[0],
                  query: {
                    ...query,
                  },
                });
              } else {
                delete query.slugify;

                push({
                  pathname: asPath.split("?")[0],
                  query: {
                    ...query,
                    page: paginate?.prevPage,
                  },
                });
              }
            }
          }}
        >
          <BsChevronLeft />
        </div>
        <div
          className={`w-10 h-10 flex justify-center items-center ${
            paginate?.nextPage === "last page"
              ? "bg-[#00bfe0]/80"
              : "bg-[#00bfe0] cursor-pointer"
          } text-white font-black rounded-[8px]`}
          onClick={() => {
            delete query.slugify;
            if (paginate?.nextPage !== "last page") {
              handleToTop();
              push({
                pathname: asPath.split("?")[0],
                query: {
                  ...query,
                  page: paginate?.nextPage,
                },
              });
            }
          }}
        >
          <BsChevronRight />
        </div>
      </div>
    </div>
  );
};
