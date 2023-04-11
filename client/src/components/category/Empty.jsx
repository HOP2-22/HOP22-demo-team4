import { useRouter } from "next/router";

export const Empty = () => {
  const { push } = useRouter();

  return (
    <div className="pt-28 col-span-10 md:col-span-7">
      <p className="md:text-[16px] lg:text-[18px]">
        Энэ категорт ямар ч бараа алга байна.
        <span
          className="underline underline-offset-4 cursor-pointer"
          onClick={() => push("/")}
        >
          Нүүр хуудас руу буцах
        </span>
      </p>
    </div>
  );
};
