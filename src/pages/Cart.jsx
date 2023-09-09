import { useContext, useEffect, useState } from "react"
import { DataContainer } from "../App"
import { Col, Container, Row } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import{SlTrash} from 'react-icons/sl'
import { Checkout } from "./Checkout";

const Cart = () => {
  const [expand, setExpand] = useState(false);
  const { CartItem, setCartItem, addToCart, decreaseQty, deleteProduct} =useContext(DataContainer);
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)
  const [hasItems, setHasItems] = useState(CartItem.length > 0);
  

  const navigate = useNavigate()
  const handleCheckoutClick = () =>{
    if (hasItems) {
     navigate('/checkout',{
      state: {
        cartItems: CartItem,
        totalAmount: totalPrice
      }
     })
     
    }
  }

  useEffect(()=> {
    window.scrollTo(0,0);
    if(CartItem.length ===0) {
      const storedCart = localStorage.getItem("cartItem");
      setCartItem(JSON.parse(storedCart));
    }
  },[])
  return (
      <section className='cart-items'>
        <Container style={{maxWidth: '1600px'}}>
        
          <Row className="justify-content-center">
              <Col md={8}>
              <h5> Shopping Cart({CartItem.length}) </h5>
               <hr />
                {CartItem.length === 0 && <h1 className='no-items product'>No Items are added in Cart</h1>}
                {CartItem.map((item) => {
                  const productQty = item.price * item.qty
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
                                <span>${productQty}.00</span>
                              </h4>
                            </Col>
                            <Col xs={12} sm={3} className='cartControl'>
                              <p>Qty</p> <button className='incCart' onClick={() => addToCart(item)}>
                                <i className='fa-solid fa-plus'></i>
                              </button>
                              <h4>{item.qty}</h4>
                              <button className='desCart' onClick={() => decreaseQty(item)}>
                                <i className='fa-solid fa-minus'></i>
                              </button>
                            </Col>
                          </Row>
                        </Col>
                        <button className="delete" onClick={()=> deleteProduct(item)}>
                            <SlTrash /> Remove
                        </button>
                      </Row>
                    </div>
                  )
                })}
              </Col>
              <Col md={4}>
                <div className='cart-total' >
                  <h2>Cart Summary</h2>
                  <h5 style={{fontSize: '14px'}}>Price Details ({CartItem.length})</h5>
                  <div className="d-flex" style={{fontSize:'14px'}}>
                   <p style={{marginTop: '10px'}}>MRP Total</p>
                   <p style={{marginLeft: '142px', marginTop: '10px'}}>${totalPrice}</p>
                  </div>
                  <div className="d-flex" style={{fontSize:'14px'}}>
                   <p>Discount %</p>
                   <p style={{marginLeft: '135px'}}>0%</p>
                  </div>
                  <div className="d-flex" style={{fontSize:'14px'}}>
                   <p>Delivery Charges</p>
                   <p style={{marginLeft: '100px'}}>Free</p>
                  </div>
                  <hr />
    
                  <div className=' d-flex'>
                    <h3>Total Price :</h3>
                    <h3 style={{marginLeft:'90px'}}>${totalPrice}.00</h3>
                  </div>
                  <hr />
                  <div>
                  {hasItems ? ( <button className="btn btn-success" style={{ width: "100%" }} onClick={handleCheckoutClick}>
                    Continue To Checkout
                  </button>):(<button className="btn btn-success" style={{ width: "100%" }} disabled>
                    Continue To Checkout
                  </button>)}
                  </div>
                </div>
                <div>
                  <Link aria-label="Go to Home Page" to="/" onClick={() => setExpand(false)}>
                    <button className="button-cart">Continue Shopping</button>
                  </Link>
                </div>
              </Col>
          </Row>
        </Container>
      </section>
  )
}

export default Cart
