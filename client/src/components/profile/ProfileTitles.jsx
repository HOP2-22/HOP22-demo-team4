export const ProfileTitles = ({ user, setTypeAccounts, typeAccounts }) => {
  return (
    <div className="px-5 pb-3 sm:px-0">
      <p className="pt-5 text-[30px] font-semibold tracking-wide">
        {user?.name}
      </p>
      <ul className="mt-5 flex items-start gap-5 h-10">
        <li
          className={`cursor-pointer pb-[6px] font-medium text-[16px] ${
            !typeAccounts && "text-[#027FFE] border-b-2"
          } border-[#027FFE] `}
          onClick={() => setTypeAccounts(false)}
        >
          Зарж буй аккаунтууд
        </li>
        <li
          className={`cursor-pointer pb-[6px] font-medium text-[16px] ${
            typeAccounts && "text-[#027FFE] border-b-2"
          } border-[#027FFE]`}
          onClick={() => setTypeAccounts(true)}
        >
          Худалдаж авсан аккаунтууд
        </li>
      </ul>
    </div>
  );
};
