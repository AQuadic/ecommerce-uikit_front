import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
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
const { t, i18n } = useTranslation();


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
      <h4>{t('footer.footer_about')}</h4>
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
      <li className="r-title"  >{t('footer.footer_head.head1')}</li>
      <li><Link href="">{t('footer.footer_head1.1')}</Link></li>
      <li><Link href="">{t('footer.footer_head1.2')}</Link></li>
      <li><Link href="">{t('footer.footer_head1.3')}</Link></li>
      <li><Link href="">{t('footer.footer_head1.4')}</Link></li>
      <li><Link href="">{t('footer.footer_head1.5')}</Link></li>
     </ul>
     <ul>
      <li className="r-title" >{t('footer.footer_head.head2')}</li>
      <li><Link href="#">{t('footer.footer_head2.1')}</Link></li>
      <li><Link href="#">{t('footer.footer_head2.2')}</Link></li>
      <li><Link href="">{t('footer.footer_head2.3')}</Link></li>
      <li><Link href="">{t('footer.footer_head2.4')}</Link></li>
      <li><Link href="">{t('footer.footer_head2.5')}</Link></li>
     </ul>
     <ul>
      <li className="r-title">{t('footer.footer_head.head3')}</li>
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