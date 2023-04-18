import { ProfileCard } from "./ProfileCard";

export const ProfileCards = ({ typeAccounts, user }) => {
  return (
    <div className="w-full pt-5 px-5 sm:px-0">
      <p className="text-[24px] sm:font-medium pb-7">
        {typeAccounts
          ? "Таны худалдаж авсан аккаунтууд"
          : "Таны зарж буй аккаунтууд"}
      </p>
      <div className="w-full grid grid-cols-12 gap-x-5 2xl:gap-x-8 gap-y-6">
        {typeAccounts ? (
          <div className="col-span-12">
            {!user?.purchasedAccounts?.length && (
              <p>Таньд худалдаж авсан бараа байхгүй байна</p>
            )}
          </div>
        ) : (
          <div className="col-span-12">
            {!user?.publishedAccounts?.length && (
              <p>Таньд худалдаанд тавьсан бараа байхгүй байна</p>
            )}
          </div>
        )}
        {typeAccounts
          ? user?.purchasedAccounts?.map((item, index) => {
              return <ProfileCard key={index} data={item} />;
            })
          : user?.publishedAccounts?.map((item, index) => {
              return <ProfileCard key={index} data={item} />;
            })}
      </div>
    </div>
  );
};
