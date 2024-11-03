import "./slider.css";
//? SWIPER IMPORTS
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
//? SWIPER CSS
import "swiper/css/bundle";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderItem from "./SliderItem";
import { useSelector } from "react-redux";

const Slider = () => {
  // güncel zamanı aldık
  // const currentDate = new Date();
  // const day = currentDate.getDate()
  // const monthIndex = currentDate.getMonth()
  // const year = currentDate.getFullYear()
  // const monthNames = [
  //   'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  //   'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
  // ];
  // const fullYear = `${day} ${monthNames[monthIndex]} ${year}`
  const { blogData } = useSelector((store) => store.blogData);
  return (
    <div
      className=" dark:bg-dark-primary transition-all px-10 relative "
      style={{ paddingTop: "14vh" }}
    >
      <div className=" w-full px-10 " style={{ height: "70vh" }}>
        <Swiper
          modules={[Autoplay, Keyboard, Navigation, Pagination]}
          className="bg-light-secondary dark:bg-dark-secondary shadow-lg relative z-0"
          spaceBetween={1}
          sPerView={1.5}
          autoplay={{
            delay: 5000,
          }}
          keyboard={{
            enabled: true,
            onlyInViewport: false,
          }}
          navigation={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          loop={true}
        >
          {blogData.slice(0, 4).map((slide) => {
            //blogdata nın ilk 4 elemanını mapliyorum çünkü sliderım 4 pageli olsun istiyorum
            return (
              <SwiperSlide
                key={Math.random()}
                id={slide.id}
                className="flex p-20 justify-around items-center text-lg"
                style={{ height: "60vh" }}
              >
                <SliderItem
                  img={slide.img}
                  date={slide.date}
                  paragraph={slide.paragraph}
                  title={slide.title}
                  blogType={slide.blogType}
                />
                
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
