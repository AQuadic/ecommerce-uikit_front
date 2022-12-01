import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
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
      <Link href="#" className="link-1"><img src="./images/002-facebook-logo.svg" alt=""/></Link>
      
      <Link href="#"><img src="./images/001-twitter-logo-silhouette.svg" alt=""/></Link>
    
      <Link href="#"><img src="./images/004-linkedin-logo.svg" alt=""/></Link>
    
      <Link href="#"><img src="./images/instagram (1).svg" alt=""/></Link>
      
      <Link href="#"><img src="./images/005-youtube.svg" alt=""/></Link>
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