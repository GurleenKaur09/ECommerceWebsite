import React from 'react'
import { Col } from 'react-bootstrap'
import { products } from '../utils/products'
import Cart from './Cart'
import { useLocation } from 'react-router'

export const Checkout = () => {
    
    const location = useLocation();
    const {cartItems, totalAmount} = location.state || {} 
    
    return (
        <div className='checkout'>
        <Col md={8}>
        <h5 style={{marginTop:'20px', marginLeft:'50px'}}>Add Delivery Address</h5>
        <div className='input-wrapper'>
        <label>Select Country </label>
            <select>
                <option>India</option>
                <option>USA</option>
                <option>London</option>
                <option>Ghana</option>
                <option>Germany</option>
                <option>Brazil</option>
                <option>China</option>
            </select>
            <label>Recipient Name</label>
            <input type="text" id="name" name="name" ></input>
            
            <label>Recipient Address</label>
            <input type="text" id="address" name="name" ></input>
            
            <label>Landmark (optional)</label>
            <input type="text" id="name" name="name" ></input>
            
            <div className='city-pincode-wrapper'>
                <div className='city-input'>
                    <label >City</label>
                    <input type='text' id='city' name='city'></input>
                </div>
                <div className='pincode-input'>
                    <label >Pincode</label>
                    <input type='text' id='pincode' name='pincode'></input>
                </div>
            </div>
            
        <label>Phone Number</label>
        <input></input>
        <div className='checkout-btn d-flex' style={{marginTop:'20px'}}>
        <button className='btn btn-primary' style={{width: '100%'}}>Cancel</button>
        <button className='btn btn-success' style={{width: '100%',marginLeft:'10px'}}>Save</button>
     </div>
            </div>
     
     
         
        </Col>
         <div className='checkout-container'>
           <h4> Your Order </h4>
           <hr />
            <div className="d-flex" style={{fontSize:'14px'}}>
                   <p style={{marginTop: '10px'}}>MRP Total</p>
                   <p style={{marginLeft: '142px', marginTop: '10px'}}>${totalAmount}</p>
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
                    <h3 style={{marginLeft:'50px'}}>${totalAmount}.00</h3>
                  </div>
                  <hr />
          
           <div className='payment-container' style={{marginTop:'25px'}}>
            <div className='creditcard d-flex'>
              
              <p>Credit Card</p>
               <div style={{marginLeft:'20px'}}>
              <img src='https://cdn.pixabay.com/photo/2018/04/07/00/20/visa-card-3297475_640.jpg'
              width={'30px'} style={{marginLeft:'10px'}}></img>
              <img src='https://cdn.pixabay.com/photo/2021/09/05/02/17/credit-6598773_640.png'
              width={'40px'} style={{marginLeft:'10px'}}></img>
              <img src='https://cdn.pixabay.com/photo/2017/11/19/09/02/master-card-2962135_640.png'
              width={'30px'} style={{marginLeft:'10px'}}></img>
              </div>
              </div>
              <div>
                <p style={{fontWeight:'600px'}}>Pay with credit card via Authorize Net</p>
                <label>Credit Number</label>
                <input type='text' id='creditnumber' name='creditnumber'
                placeholder='**** **** **** ***'></input>

                <div className='d-flex'>
                    <div>
                    <label>Expiry(MM/YY)</label>
                    <input type='text' id='expiry' name='expiry'
                    placeholder='MM/YY'></input>
                    </div>
                    <div style={{marginLeft: '10px'}}>
                    <label>Card Code</label>
                    <input type='text' id='code' name='code'
                    placeholder='CVC'></input>
                    </div>
                </div>
                <div className='checkbox'>
                    <input type='checkbox' id='checkbox' name='checkbox' width={'10px'} ></input>
                    <p>Your personal data will be used to process your order, support your experience throughout 
                        and for other purposes described in ourr <a href='#'>privacy policy</a> and
                        <a href='#'>terms and conditions.</a>
                    </p>
                </div>
                <div>
                    <button className='btn btn-success' style={{width:'100%'}}>Place Order</button>
                </div>
              </div>
           </div>
           </div>
        </div>
      
       
    )
}
