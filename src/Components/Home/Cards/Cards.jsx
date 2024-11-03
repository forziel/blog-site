import CardItem from "./CardItem";
import { BlogData } from "../../BlogData";
import { Link } from "react-router-dom";

//img, blogType, title, paragraph, date
const Cards = () => {
  return (
    <div
      style={{ rowGap: "", columnGap: "3.33%" }}
      className="bg-light-primary dark:bg-dark-primary transition-all gap-y-10 px-20 flex flex-wrap items-center justify-start"
    >
      {BlogData.slice(0, 6).map((slide) => {
        return (
          <CardItem
            key={slide.id}
            img={slide.img}
            blogType={slide.blogType}
            paragraph={slide.paragraph}
            title={slide.title}
            date={slide.date}
            sum={slide.sum}
            w={4}
          />
        );
      })}
      <Link to={"/blogs"}>
        <button className="flex justify-center items-center rounded  bg-light-secondary dark:bg-dark-secondary text-lg p-3 hover:shadow-md transition-all" >
          Show More
        </button>
      </Link>
    </div>
  );
};

export default Cards;
