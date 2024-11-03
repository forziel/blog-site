import AvatarImage from "./AvatarImage"
import Favorites from "./Favorites";
import UserInfo from "./UserInfo";

const User = () => {
  return (
    <section className="flex items-center justify-center" style={{paddingTop:"10%" }}>
      <div className="w-2/3 bg-gray-200 flex flex-col items-center p-10 gap-7">
        <AvatarImage/>
        <UserInfo/>
        <Favorites/>
      </div>
    </section>
  )
}

export default User
