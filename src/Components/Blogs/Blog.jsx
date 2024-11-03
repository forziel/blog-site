import { Avatar } from "@mui/material";
import avatar from "../../Assets/images/avatar.jpg";
import CardItem from "../Home/cards/CardItem";
import { useSelector } from "react-redux";
import Header from "../Home/Header/Header";
// img, blogType, title, paragraph, date, sum

const Blog = () => {
  const { blog } = useSelector((store) => store.blog);
  const {blogData} = useSelector(store => store.blogData);

  return (
    <>
      <Header />

      <div
        className="w-screen flex justify-center items-center mt-16 bg-light-primary transition-all dark:bg-dark-primary"
        style={{ paddingTop: "11vh" }}
      >
        <div className="w-1/2 ">
          <div className="flex flex-col gap-10">
            {/* üstteki metin */}
            <div className="top-text border-b-2 border-gray-300 dark:border-gray-600 flex flex-col gap-5 pb-5">
              <div className="text-5xl font-bold text-black dark:text-gray-100 transition-all">{blog.title}</div>
              <span className="text-2xl text-black dark:text-gray-200 transition-all">{blog.sum}</span>
            </div>

            <img src={blog.img} alt="" />

            <p className="indent-20 leading-10 text-xl font-serif text-black dark:text-gray-100 transition-all">
              {blog.paragraph}
            </p>
            <div className="text-type flex gap-5">
              {blog.blogType.length <= 1 ? (
                <span
                  key={Math.random}
                  className="rounded-full bg-gray-700 p-3 text-white cursor-pointer"
                >
                  {blog.blogType}
                </span>
              ) : (
                blog.blogType.map((item) => {
                  return (
                    <span
                      key={Math.random}
                      className="rounded-full bg-gray-700 p-3 text-white cursor-pointer"
                    >
                      {item}
                    </span>
                  );
                })
              )}
            </div>
            {/* avatar */}
            <div className="flex flex-col text-xl font-medium gap-4 text-black dark:text-gray-100 transition-all">
              <Avatar sx={{ width: 56, height: 56 }} src={avatar} />
              <span>Written by İlayda Girişken</span>
            </div>
            {/* other blogs */}
            <span className="leading-10 text-xl font-serif border-b-2 border-gray-300 opacity-70 text-black dark:opacity-90 dark:text-gray-100 transition-all">
              Other Blogs by İlayda Girişken
            </span>
            <div className=" flex  flex-wrap justify-start" style={{ rowGap: "5vh", columnGap: "10%", paddingBottom:"5vh" }}>
              {blogData.slice(0, 4).map((slide) => {
                return (
                  <CardItem
                    key={slide.id}
                    img={slide.img}
                    blogType={slide.blogType}
                    paragraph={slide.paragraph}
                    title={slide.title}
                    date={slide.date}
                    w={2}
                    height={"60vh"}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
