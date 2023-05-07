import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

import { AuthContext } from "@/provider/AuthContext";

import { ChevronLeft, ChevronRight } from "lucide-react";

export const Paginate = ({ paginate }) => {
  const { handleToTop } = useContext(AuthContext);

  const { query, push, asPath } = useRouter();

  return (
    <div className="col-span-10 w-full flex items-center justify-end gap-10 pt-8">
      <div className="flex items-center gap-3">
        <ChevronLeft
          className={`text-[24px] flex justify-center items-center ${
            paginate?.prevPage === "open page"
              ? "text-[#40abdd]/80"
              : "text-[#40abdd] cursor-pointer"
          } font-black rounded-[12px]`}
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
        />

        <div
          className={`w-9 h-9 flex justify-center items-center ${
            paginate?.prevPage === "open page"
              ? "hidden"
              : "bg-[#40abdd] hover:bg-[#44BAF0] transition-colors duration-200 cursor-pointer"
          } text-white font-black rounded-[12px]`}
          onClick={() => {
            handleToTop();
            delete query.page;
            delete query.slugify;

            push({
              pathname: asPath.split("?")[0],
              query: {
                ...query,
              },
            });
          }}
        >
          1
        </div>

        <div
          className={`w-9 h-9 flex justify-center items-center ${
            paginate?.prevPage < 2 || paginate?.prevPage === "open page"
              ? "hidden"
              : "bg-[#40abdd]"
          } text-white font-black rounded-[12px]`}
        >
          . . .
        </div>

        <div
          className={`w-9 h-9 flex justify-center items-center bg-[#027ffe] text-white font-black rounded-[12px]`}
        >
          {paginate?.prevPage === "open page" ? 1 : paginate?.prevPage + 1}
        </div>

        <div
          className={`${
            paginate?.prevPage === "open page" && paginate?.pageCount > 1
              ? "bg-[#40abdd] hover:bg-[#44BAF0] transition-colors duration-200 cursor-pointer"
              : paginate?.pageCount > 2 &&
                paginate?.pageCount > paginate?.prevPage + 1
              ? "bg-[#40abdd] hover:bg-[#44BAF0] transition-colors duration-200 cursor-pointer"
              : "hidden"
          } w-9 h-9 flex justify-center items-center  text-white font-black rounded-[12px]`}
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
          {paginate?.prevPage === "open page" ? 2 : paginate?.prevPage + 2}
        </div>

        <div
          className={`${
            paginate?.prevPage === "open page" && paginate?.pageCount > 2
              ? "bg-[#40abdd] hover:bg-[#44BAF0] transition-colors duration-200 cursor-pointer"
              : paginate?.pageCount > 3 &&
                paginate?.pageCount > paginate?.prevPage + 2
              ? "bg-[#40abdd] hover:bg-[#44BAF0] transition-colors duration-200 cursor-pointer"
              : "hidden"
          } w-9 h-9 flex justify-center items-center  text-white font-black rounded-[12px]`}
          onClick={() => {
            delete query.slugify;
            if (paginate?.nextPage !== "last page") {
              handleToTop();
              push({
                pathname: asPath.split("?")[0],
                query: {
                  ...query,
                  page: paginate?.nextPage + 1,
                },
              });
            }
          }}
        >
          {paginate?.prevPage === "open page" ? 3 : paginate?.prevPage + 3}
        </div>

        <ChevronRight
          className={`text-[24px] flex justify-center items-center ${
            paginate?.nextPage === "last page"
              ? "text-[#40abdd]/80"
              : "text-[#40abdd] cursor-pointer"
          } font-black rounded-[12px]`}
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
        />
      </div>
    </div>
  );
};
