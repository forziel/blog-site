import { FaRegBookmark } from "react-icons/fa";
const Favorites = () => {
  return (
    <>
        <div className="flex border-b-2 w-3/4 items-center gap-6 pb-3 pl-5">
            <FaRegBookmark className="text-xl" />
            <span className="text-lg">Kaydedilenler</span>
        </div> 
    </>
  )
}

export default Favorites
