import { useRouter } from "next/router";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const Paginate = ({ pagination }) => {
  const router = useRouter();
  const { query } = useRouter();

  return (
    <div className="w-full flex justify-end pt-8">
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 flex justify-center items-center ${
            pagination.prevPage === "open page"
              ? "bg-[#00bfe0]/80"
              : "bg-[#00bfe0] cursor-pointer"
          } text-white font-black rounded-[8px]`}
          onClick={() => {
            console.log(pagination.prevPage);
            if (query.page)
              if (pagination.prevPage === 1) {
                delete query.page;
                delete query.slugify;

                router.push({
                  pathname: router.asPath.split("?")[0],
                  query: {
                    ...query,
                  },
                });
              } else {
                delete query.slugify;

                router.push({
                  pathname: router.asPath.split("?")[0],
                  query: {
                    ...query,
                    page: pagination.prevPage,
                  },
                });
              }
          }}
        >
          <BsChevronLeft />
        </div>
        <div
          className={`w-10 h-10 flex justify-center items-center ${
            pagination.nextPage === "last page"
              ? "bg-[#00bfe0]/80"
              : "bg-[#00bfe0] cursor-pointer"
          } text-white font-black rounded-[8px]`}
          onClick={() => {
            delete query.slugify;
            if (pagination.nextPage !== "last page")
              router.push({
                pathname: router.asPath.split("?")[0],
                query: {
                  ...query,
                  page: pagination.nextPage,
                },
              });
          }}
        >
          <BsChevronRight />
        </div>
      </div>
    </div>
  );
};
