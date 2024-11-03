import { useSelector } from "react-redux";
import CardItem from "../Home/cards/CardItem";
import Header from "../Home/Header/Header";
// import Blog from "./Blog"
const Blogs = () => {
  const {blogData} = useSelector(store => store.blogData);
  return (
    <>
      <Header />
      <div className="  pt-32 pb-10 px-20 bg-light-primary dark:bg-dark-primary text-black dark:text-white text-3xl transition-all">
        <div className="border-b-2 border-black dark:border-white p-3">Tüm Bloglar</div>
      </div>

      <div
        style={{ rowGap: "5vh", columnGap: "3.33%" }}
        className="bg-light-primary dark:bg-dark-primary transition-all px-20  flex flex-wrap justify-start"
      >
        {blogData.map((slide) => {
          return (
            <CardItem
              key={slide.id}
              img={slide.img}
              blogType={slide.blogType}
              paragraph={slide.paragraph}
              title={slide.title}
              date={slide.date}
              w={4}
              height={"70vh"}
              sum={slide.sum}
            />
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
