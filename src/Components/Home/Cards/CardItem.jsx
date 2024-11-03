import { Avatar } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//MATERİAL Uİ
import avatar from "../../../Assets/images/avatar.jpg";

import { useDispatch } from "react-redux";
import { setBlog } from "../../Slices/BlogSlice";

import ReadMore from "../ReadMore";

const CardItem = ({
  img,
  blogType,
  title,
  paragraph,
  date,
  w, //bir yerde kaç tane card yan yana kalmalı onu hesaplar
  height,
  sum,
}) => {
  const dispatch = useDispatch();

  const limitedText = paragraph.slice(0, 200);

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
  const scheme = 90/w;

  return (
    //! card ile
    <Card
      sx={{ width:`${scheme}%`, backgroundColor:"#b7b7a4"}}
      className= {` flex flex-wrap dark:bg-dark-secondary transition-all`}
    >
      <CardMedia
        component="img"
        style={{ height: "25vh", objectFit: "fill", padding:"1rem" }}
        image={img}
      />
      <CardContent className=" gap-5 flex flex-col">
        <div>
          <span className="font-semibold">{
          blogType.slice(0,2).map((item) => {
            return(
              <span key={Math.random()}>{item} - </span>
            )
          })
          }</span>
          <span className="text-gray-600 dark:text-gray-500 transition-all"> {date}</span>
        </div>
        <div className="font-bold text-black  transition-all">{title}</div>
        <p className="flex flex-col gap-6">
          <span className="text-black opacity-100  dark:opacity-90 transition-all">{limitedText}...</span>
          <ReadMore setBlogItem={setBlogItem} />
        </p>
        <div className="flex gap-3">
          <div className="little-photo">
            <Avatar sx={{ width: 56, height: 56 }} src={avatar} />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">İlayda Girişken</span>
            <span>ceng student</span>
          </div>
        </div>
      </CardContent>
    </Card>

    //!normal
    // <div
    //   className={` dark:bg-gray-900 p-6 flex flex-col  gap-5 justify-between mb-10  w-${w} `}
    //   style={{ height: `${height != null ? height : "60vh"}` }}
    // >
    //   <div
    //     className="flex justify-center rounded-full"
    //     style={{ height: "60vh" }}
    //   >
    //     <img
    //       src={img}
    //       className="object-fill w-full"
    //       style={{ height: "20vh" }}
    //       alt=""
    //     />
    //   </div>
    //   <div>
    //     <span className="font-semibold">{blogType} -</span>
    //     <span className="text-gray-600"> {date}</span>
    //   </div>
    //   <div className="font-bold  ">{title}</div>
    //   <p className="flex flex-col gap-6">
    //     <span>{limitedText}...</span>
    //     <ReadMore setBlogItem={setBlogItem} />
    //   </p>
    //   <div className="flex gap-3">
    //     <div className="little-photo">
    //       <Avatar sx={{ width: 56, height: 56 }} src={avatar} />
    //     </div>
    //     <div className="flex flex-col">
    //       <span className="font-semibold">İlayda Girişken</span>
    //       <span>ceng student</span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CardItem;
