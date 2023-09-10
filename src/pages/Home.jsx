import { Fragment, useContext, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import Wrapper from "../components/wrapper/Wrapper"
import Section from "../components/Section"
import {products ,discoutProducts } from "../utils/products"
import { DataContainer } from "../App"
import SliderHome from "../components/Slider"
import Gifts from "../components/Gifts/Gifts"
import newarrival from "../Images/newarrival.jpg"
import midnight from "../Images/midnight.jpg"
import advertisement from "../Images/advertisement.jpg"
import Categories from "../components/Category/Categories"

const Home = () => {
  const {addToCart, addToWishlist} =useContext(DataContainer);
  const newArrivalData = products.filter(item => item.category ==="mobile" || item.category ==="wireless");
  const bestSales = products.filter(item => item.category ==="sofa");
  useEffect(()=> {
    window.scrollTo(0,0);
  },[])
  return (
    <Fragment>
      <SliderHome/><br />
      <Categories /><br />
      <Wrapper /><br />
      <Gifts /><br />
      <Section title="Big Discount" bgColor="#f6f9fc" productItems={discoutProducts} addToCart={addToCart} addToWishlist={addToWishlist}/><br />
      <div>
        <Row style={{marginLeft: '25px'}}>
          <Col xs={6}>
            <img className="ad-img" src={newarrival} />
          </Col>
          <Col xs={6}>
            <img className="ad-img" src={midnight} />
          </Col>
        </Row>
      </div><br />
      <Section title="New Arrivals" bgColor="white" productItems={newArrivalData} addToCart={addToCart} addToWishlist={addToWishlist}/>
      <Section title="Best Sales" bgColor="#f6f9fc" productItems={bestSales} addToCart={addToCart} addToWishlist={addToWishlist}/>
      <div>
        <img className="poster-img" src={advertisement} />
      </div>
      <br />
    </Fragment>
  )
}

export default Home
