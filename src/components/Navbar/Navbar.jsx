import { useContext, useEffect, useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap";
import { products } from "../../utils/products";
import { DataContainer } from "../../App";
import { Link } from "react-router-dom";
import SearchBar from "../SeachBar/SearchBar";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
  } from "mdb-react-ui-kit";
  

const NavBar = () => {
  const {CartItem,setCartItem, WishlistItem, setWishlistItem} =useContext(DataContainer);
  const [expand, setExpand] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [filterList,setFilterList] = useState(products.filter(item => item.category ==="sofa"));
  // fixed Header
  function scrollHandler() {
    if (window.scrollY >= 100) {
        setIsFixed(true);
    } else if(window.scrollY <= 50) {
        setIsFixed(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);
  useEffect(()=> {
    if(CartItem.length ===0) {
      const storedCart = localStorage.getItem("cartItem");
      setCartItem(JSON.parse(storedCart));
    }
  },[])

  window.addEventListener("scroll", scrollHandler);
  // useEffect(()=> {
  //   if(WishlistItem.length ===0) {
  //     const storedWishlist = localStorage.getItem("WishlistItem");
  //     setWishlistItem(JSON.parse(storedWishlist));
  //   }
  // },[])

  return (
      <div>
        <div className="nav-upper">
          <span className="nav-upper-items">+91 1235468792</span>{'  '}
          <span className="nav-upper-items">Help</span> {'  '}
          <span className="nav-upper-items">Offer</span> {'  '}
          <span className="nav-upper-items">Currency
          <select className="select">
            <option value="1">INR</option>
            <option value="2">USD</option>
            <option value="3">AUD</option>
            <option value="4">QAR</option>
            <option value="5">EUR</option>
            <option value="6">GBP</option>
            <option value="7">CAD</option>
            <option value="8">AED</option>
          </select>
          </span> {'  '}
          <span className="nav-upper-items">Visit Store</span>{'  '}
          <span className="nav-upper-items">Track Order</span>
        </div>
      <Navbar
      fixed="top"
      expand="md"
      className={isFixed ? "navbar fixed":"navbar"}
      > 
        <Container style={{maxWidth: '1600px'}} className="navbar-container">
            <Navbar.Brand to="/">
              <ion-icon style={{color: 'black'}} name="bag"></ion-icon>
              <h1 className="logo">TechTok4u</h1>
            </Navbar.Brand>
            <SearchBar setFilterList={setFilterList} />
            {/* Media cart and toggle */}
            <div className="d-flex">
              {/* <div className="media-cart">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="nav-icon">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                  </svg>
                  <Link aria-label="Go to Cart Page" to='/cart' className='cart' data-num={CartItem.length}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="nav-icon">
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                  </svg>
                  </Link>
              </div> */}
              <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => {
                  setExpand(expand ? false : "expanded");
              }}
              >
              <span></span>
              <span></span>
              <span></span>
              </Navbar.Toggle>
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Item>
                  <Link aria-label="Go to Home Page" className="navbar-link" to="/" onClick={() => setExpand(false)}>
                      <span className="nav-link-label">Home</span>
                  </Link>
                </Nav.Item>

                <Nav.Item>
                <Link aria-label="Go to Shop Page" className="navbar-link" to="/shop" onClick={() => setExpand(false)}>
                    <span className="nav-link-label">Shop</span>
                </Link>
                </Nav.Item>

                {/* <Nav.Item>
                <Link aria-label="Go to Cart Page" className="navbar-link" to="/cart" onClick={() => setExpand(false)}>
                    <span className="nav-link-label">Cart</span>
                </Link>
                </Nav.Item> */}
                <Nav.Item className="expanded-cart">
                <Link to='/sign'>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="nav-icon">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                  </svg></Link>
                  <p className="nav-icon-details">My</p><br />
                  <span className="nav-icon-details1" style={{marginLeft: '-42px'}}>Profile</span>
                  <Link aria-label="Go to Wishlist Page" to='/wishlist' className='wishlist'> 
                    <ion-icon style={{color: 'black', height: '40px', width: '40px'}} name="heart"></ion-icon>
                  </Link>
                  <p className="nav-icon-details">Wishlist</p><br />
                  <span className="nav-icon-details1" style={{marginLeft: '-75px'}}>{WishlistItem.length} Items</span>
                  <Link aria-label="Go to Cart Page" to='/cart' className='cart' data-num={CartItem.length}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="nav-icon">
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                  </svg>
                  </Link>
                  <p className="nav-icon-details">Cart</p><br />
                  <span className="nav-icon-details1" style={{marginLeft: '-50px'}}>{CartItem.length} Items</span>
                </Nav.Item>
              </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
  )
}

export default NavBar
