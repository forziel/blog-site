import { Avatar } from "@mui/material";
import avatar from "../../../Assets/images/avatar.jpg";
import ReadMore from "../ReadMore";
import { useDispatch } from "react-redux";
import { setBlog } from "../../Slices/BlogSlice";

const SliderItem = ({ img, sum, date, paragraph, title, blogType }) => {
  const limitedText = paragraph.slice(0, 200);
  const dispatch = useDispatch();

  const setBlogItem = () => {
    const blogItem = {
      img,
      blogType,
      title,
      date,
      paragraph,
      sum,
    };
    dispatch(setBlog(blogItem));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex gap-20 ">
      <div className="hero w-1/2">
        <img src={img} alt="" />
      </div>
      <div className="text-section  w-1/2 flex flex-col gap-12">
        <div className="font-semibold flex gap-3 items-center">
          {blogType.map((item) => {
                  return (
                    <span
                      key={Math.random}
                      className="rounded-full text-base font-normal bg-gray-700 p-3  text-white cursor-pointer"
                    >
                      {item}
                    </span>
                  );
                })}{" "}
          <span className="opacity-70">{date}</span>
        </div>
        <h1 className="font-bold text-lg text-black transition-all ">{title}</h1>
        <p className="flex flex-col gap-6">
          <span className="text-black opacity-100 dark:opacity-90 transition-all">{limitedText}...</span>
          <ReadMore setBlogItem={setBlogItem} />
        </p>

        <div className="flex gap-3">
          <Avatar sx={{ width: 56, height: 56 }} src={avatar} />
          <div className="flex flex-col text-black transition-all">
            <span>İlayda Girişken</span>
            <span>ceng student</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
