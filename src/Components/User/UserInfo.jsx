const UserInfo = () => {
  return (
    <div className="flex flex-col gap-5 w-2/5 ">
      <div className=" flex gap-5 justify-between items-center">
        <span className="whitespace-nowrap">kullanıcı adı:</span>
        <input type="text" readOnly className="w-full justify-between px-5 py-2 outline-none" placeholder="aliguvenc" />
      </div>
      <div className=" flex gap-5 justify-between items-center">
        <span className="whitespace-nowrap">Email:</span>
        <input type="text" readOnly className="w-full justify-between px-5 py-2 outline-none" placeholder="aliguvenc" />
      </div>
      <div className=" flex gap-5 justify-between items-center">
        <span className="whitespace-nowrap">şifre:</span>
        <input type="text" readOnly className="w-full justify-between px-5 py-2 outline-none" placeholder="aliguvenc" />
      </div>
    </div>
  );
};

export default UserInfo;
