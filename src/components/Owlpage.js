import React, { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Shap from "./Shap";



function Owlpage(props) {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow:  <img  src='./images/noun_Arrow Left_2682937.svg' alt=""/>,
    prevArrow:  <img  src='./images/noun_Arrow Left_2682938.svg' alt=""/>
  };

 
    const we = props.we
   
   
  return (
    <>
    <div className="imagepage">
     <div className="owlnav">
     <img className="gray" src='./images/beautiful-clothing-fashion-2498791.svg' alt=""/>
       {
        we>560?<>  <Slider {...settings}>
        <div className="imgpage">
          <img
            id="ground"
            src='./images/joao-silas-SfkLX6fUObk-unsplash.svg'
            alt="t-shert"
          />
        </div>
        <div className="imgpage">
          <img
            id="ground"
            src='./images/beautiful-beauty-casual-2829173.svg'
            alt="t-shert"
          />
        </div>
        <div className="imgpage">
          <img
            id="ground"
            src='./images/joao-silas-SfkLX6fUObk-unsplash.svg'
            alt="t-shert"
          />
        </div>
          
        </Slider> </>:<> <Slider {...settings}>
        <div className="imgpage">
          <img
            id="ground"
            src='./images/joao-silas-SfkLX6fUObk-unsplash2.svg'
            alt="t-shert"
          />
        </div>
        <div className="imgpage">
          <img
            id="ground"
           src='./images/joao-silas-SfkLX6fUObk-unsplash2.svg'
            alt="t-shert"
          />
        </div>
        <div className="imgpage">
          <img
            id="ground"
              src='./images/joao-silas-SfkLX6fUObk-unsplash2.svg'
            alt="t-shert"
          />
        </div>
          
        </Slider> </>
       }
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
