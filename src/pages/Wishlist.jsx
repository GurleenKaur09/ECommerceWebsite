import { useContext, useEffect, useState } from "react"
import { DataContainer } from "../App"
import { Col, Container, Row } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import{SlTrash} from 'react-icons/sl'
import { Checkout } from "./Checkout";

const Cart = () => {
  const [expand, setExpand] = useState(false);
  const { WishlistItem, setWishlistItem, deleteWishlist, addToWishlist} =useContext(DataContainer);  
  const [hasItems, setHasItems] = useState(WishlistItem.length > 0);

  useEffect(()=> {
    window.scrollTo(0,0);
    if(WishlistItem.length === 0) {
      const storedWishlist = localStorage.getItem("WishlistItem");
      setWishlistItem(JSON.parse(storedWishlist));
    }
  },[])
  return (
      <section className='cart-items'>
        <Container style={{maxWidth: '1600px'}}>
        
          <Row className="justify-content-center">
              <Col>
              <h5> Wishlist({WishlistItem.length}) </h5>
               <hr />
                {WishlistItem.map((item) => {
                //   const productQty = item.price * item.qty
                  return (
                    <div className='cart-list' key={item.id}>
                      <Row>
                        <Col className="image-holder" sm={4} md={3}>
                          <img src={item.imgUrl} alt='' />
                        </Col>
                        <Col sm={8} md={9}>
                          <Row className="cart-content justify-content-center">
                            <Col xs={12} sm={9} className="cart-details">
                              <h3>{item.productName}</h3>
                              <p style={{fontSize:'15px', color:'gray'}}>Estimated Delivery: <span style={{color: 'green'}}>Today</span></p>
                              <h4 style={{marginTop: '0px'}}>
                                ${item.price}.00 
                                {/* <span>${productQty}.00</span> */}
                              </h4>
                            </Col>
                          </Row>
                        </Col>
                        <button className="delete" onClick={()=> deleteWishlist(item)}>
                            <SlTrash /> Remove
                        </button>
                      </Row>
                    </div>
                  )
                })}
              </Col>
          </Row>
        </Container>
      </section>
  )
}

export default Cart
