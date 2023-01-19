import axios from "axios";
import React, { useEffect,  useState } from "react";

import "react-multi-carousel/lib/styles.css";
import { Link} from "react-router-dom";
import Slider from "react-slick";
import Shap from "./Shap";



function Owlpage() {
  
  const [banners ,setbanners] =useState()
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 1500,
  nextArrow:  <img  src='./images/noun_Arrow Left_2682937.svg' alt=""/>,
   prevArrow:  <img  src='./images/noun_Arrow Left_2682938.svg' alt=""/>
  };

 
    
   
    useEffect(()=>{
      const handelcat =()=>{
        axios.get("https://v2.freshfarm.ae/api/v1/meta/data",{
      headers:{
        "Content-Type": "application/json",
          "Accept": "application/json",
          "Accept-Language": "ar",
      }
      }).then((res)=>{console.log(res.data);setbanners(res.data.banners)}).catch((err)=>{console.log(err)}) 
      }
      handelcat()
    },[])
  return (
    <>
    <div className="imagepage">
     <div className="owlnav">
     {/* <img className="gray" src='./images/beautiful-clothing-fashion-2498791.svg' alt=""/> */}
       
         <Slider {...settings}>
          {
banners? banners.map((banner)=>{
  return(
    <a href={banner.click_action.ar} className="imgpage">
          <img 
            id={banner.id}
            src={banner.image.url}
            alt="banner" 
          
          />
        </a>
  )
})

    :  <div className="imgpage">
    <img
      id="ground"
      src='./images/img_page_nav.jpg'
      alt="t-shert"
    />
  </div>
  }
          
        
          
        </Slider> 
        <div className="about">
            <h2>Sale of the <br/>
summer <br/>
collection</h2>
           
                <Link to='/product'>
                    <div><img src='./images/Ellipse 48.svg' alt=""/>
                    <img className="rightsahm" src='./images/noun_Arrow right_2682937.svg' alt=""/>
                    </div>
                <p>Shop now</p>
                </Link>

            
        </div>
      
        </div>
        <Shap/>
        </div>
    </>
  );
}

export default Owlpage;
