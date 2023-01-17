import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const [socials , setdata]=useState("")
  useEffect(()=>{
    const handelcat =()=>{
      axios.get("https://v2.freshfarm.ae/api/v1/meta/data",{
    headers:{
      "Content-Type": "application/json",
        "Accept": "application/json",
        "Accept-Language": "ar",
    }
    }).then((res)=>{console.log(res.data);setdata(res.data)}).catch((err)=>{console.log(err)}) 
    }
    handelcat()
  },[])
  return (
   <>
 
<div className="newfooter">
  <div className="container">
    <footer className="footer-dec">
  
      <div className="l-footer">
          <ul>
    <li className="head-footer">
      <img src="./images/footerlogo.svg" alt=""/> <p> <span className="recolor">E-</span>Shop</p>
      
    </li>
    <li>
      <h4>House My Brand designs clothing for the young, the old &
everyone in between – but most importantly, for the fashionable</h4>
   </li>
   <li>
    <p className="footer-links">
      <a href={socials.facebook} className="link-1"><img src="./images/002-facebook-logo.svg" alt=""/></a>
      
      <a href={socials.twitter}><img src="./images/001-twitter-logo-silhouette.svg" alt=""/></a>
    
   
    
      <a href={socials.instagram}><img src="./images/instagram (1).svg" alt=""/></a>
      
      <a href={socials.youtube}><img src="./images/005-youtube.svg" alt=""/></a>
    </p>
   </li>
          </ul>  
      </div>
  
     <div className="r-footer">
     <ul>
      <li className="r-title">Shopping online</li>
      <li><Link href="">Order Status</Link></li>
      <li><Link href="">Shipping and Delivery</Link></li>
      <li><Link href="">Returns</Link></li>
      <li><Link href="">Payment Options</Link></li>
      <li><Link href="">Contact Us</Link></li>
     </ul>
     <ul>
      <li className="r-title">Information</li>
      <li><Link href="#">Gift Cards</Link></li>
      <li><Link href="#">Find a store</Link></li>
      <li><Link href="">Newsletter</Link></li>
      <li><Link href="">Bacome a member</Link></li>
      <li><Link href="">Site feedback</Link></li>
     </ul>
     <ul>
      <li className="r-title">Contact</li>
      <li><p>store@uikit.com</p></li>
      <li><p>Hotline: +1 131 138 138</p></li>
     </ul>
    
      
     </div>
    </footer>
  </div>
  
  
  </div>
  
  
  
 

<div className="copy">
  <h4>DESIGN BY ICEO.CO - © 2019. ALL RIGHTS RESERVED.</h4>
</div>


   </>
  )
}

export default Footer