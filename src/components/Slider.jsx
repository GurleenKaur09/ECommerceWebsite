import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Container } from "react-bootstrap"
import SlideCard from "./SliderCard/SlideCard"
import { AdData, SliderData } from "../utils/products"
import AdSlider from "./AdSlider/AdSlider"

const SliderHome = () => {
  const settings = {
    nav:false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
      <section className='homeSlide'>
        <Container>
          <Slider {...settings}>
          {SliderData.map((value, index) => {
            return (
              <SlideCard key={index} title={value.title} cover={value.cover} desc={value.desc} />
            )
          })}
        </Slider><br />
        <Slider {...settings}>
          {AdData.map((value, index) => {
            return (
              <AdSlider key={index} imgUrl={value.imgUrl} />
            )
          })}
        </Slider>
        </Container>
      </section>
  )
}

export default SliderHome
