import Header from "./Header/Header"
import Slider from "./Slider/Slider"
import Cards from "./Cards/Cards"

const Home = () => {
  return (
    <div className="flex flex-col h-full bg-light-primary">
      <Header/>
      <Slider/>
      <Cards/>
      

    </div>
  )
}

export default Home
