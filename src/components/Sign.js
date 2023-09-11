import React, { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'

export const Sign = () => {
    

    const [showSign,setShowSign] =useState(false)

    const handleSignUpClick = () => {
        setShowSign(true)
    }
    const handleSignInClick = () => {
    setShowSign(false)
    }


   
   
    return (
        <div className='body'>
        <div className='logs-body' style={{
            display: 'flex', flexDirection:'column',
            justifyContent:'center', maxWidth: '700px',
            width: '100%', marginLeft: '350px', 
            padding:'50px',
            maxHeight: '1200px'
           }}>
           {!showSign ? (
           <div className='logs-container' style={{marginTop:'30px', border:'1px solid #f1f1f1',
           padding:'50px',paddingLeft: '30px', paddingRight:'30px',
           background:'#fff', borderRadius:'8px'}} >
           <h1>Sign In</h1>
           <div className='logs-inputs'>
            <input type='text' id='email' name='email'
            placeholder='Enter Email/Mobile Number'></input>
            <input type='text' id='password' name='password'
            placeholder='Enter Passwor' style={{marginTop:'20px'}}></input>
           </div>
           <div className='logs-texts'>
           <span>By continuing, you agree to Techtok4u {' '} 
             <a href='#'>Privacy Policy</a>. <span onClick={handleSignUpClick} style={{cursor:'pointer'
            , fontWeight: '600px'}}>SignUp</span> </span>
           </div>
           <button className='btn btn-success'>CONTINUE</button>
           <div style={{marginTop: '30px'}}>
               <hr />
               <div className='google-sign'>
               <h5>Or Continue with </h5>
             <a href = '#'>  <FcGoogle style={{fontSize: '20px', marginLeft: '10px',
            marginTop:'4px'}} /></a>
               </div>
           </div>
           <hr />
           <div></div>
           </div>
           
           ) : (<div className='logs-container' style={{marginTop:'10px', border:'1px solid #f1f1f1',
           padding:'50px',paddingLeft: '30px', paddingRight:'30px',
           background:'#fff', borderRadius:'8px', height:'70%', overflow: 'hidden', maxHeight: '800px'}} >
           <h1>Sign Up</h1>
           <div className='logs-inputs'>
            <input type='text' id='email' name='email'
            placeholder='Enter Email/Mobile Number'></input>
            <input type='text' id='password' name='password'
            placeholder='Enter Password' style={{marginTop:'20px'}}></input>
            <select type='text' id='country' name='country'
            placeholder='Enter Country' style={{marginTop:'20px'}}>
              <option>India</option>
              <option>USA</option>
              <option>London</option>
              <option>Germany</option>
            </select>
           </div>
           <div className='logs-texts'>
           <span>By continuing, you agree to Techtok4u {' '} 
             <a href='#'>Privacy Policy</a>. <span onClick={handleSignInClick} style={{cursor:'pointer'
            , fontWeight: '600px'}}>SignIn</span> </span>
           </div>
           <button className='btn btn-success'>CONTINUE</button>
           <div style={{marginTop: '30px'}}>
               <hr />
               <div className='google-sign'>
               <h5>Or Continue with </h5>
             <a href = '#'>  <FcGoogle style={{fontSize: '20px', marginLeft: '10px',
            marginTop:'4px'}} /></a>
               </div>
           </div>
           <hr />
           <div></div>
           </div>)} 
        </div>
        </div>
    )
}
