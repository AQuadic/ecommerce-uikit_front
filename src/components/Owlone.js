import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";

import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { counteraction } from "../data/data";
import Slider from "react-slick";

function Owlone() {
  
  const ref = useRef()
  var settings = {
    dots: false,
    infinite: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
   nextArrow:  <img  src='./images/noun_Arrow Left_2682937.svg' alt=""/>,
  prevArrow:  <img  src='./images/noun_Arrow Left1_2682937.svg' alt=""/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 0,
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
      
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      }
    ]
  };
const [products ,setproducts]= useState()



useEffect(()=>{
  const handelcat =()=>{
    axios.get("https://v2.freshfarm.ae/api/v1/users/products",{
  headers:{
    "Content-Type": "application/json",
      "Accept": "application/json",
      "Accept-Language": "ar",
  }
  }).then((res)=>{console.log(res.data);setproducts(res.data.data); 
  }).catch((err)=>{console.log(err)}) 
  }
  handelcat()
  
},[])

  const dispatch = useDispatch();
  const [how, sethow] = useState("");
  const navigate = useNavigate();

  const [getitem, setgetitem] = useState({
    id: "sayed",
    imgurl: "gg",
  });

  useEffect(() => {}, [how]);
  const { owl, idowl, sendata } = counteraction;
  return (
    <>
      <Container className="product">
        <div className="headselect">
          <h2>Selected just for you</h2>
          <button
            onClick={() => {
              navigate("/allproduct");
              window.scrollTo(100, 100);
            }}
          >
            Show more
          </button>
        </div>

      {
       <Slider  ref={ref}  {...settings }  onInit={()=>{  ref.current? console.log("yes slid"):console.log("noooo slide")}} 
       >
     {
         products? products.map((product)=>{
           return(
            
               <div className="item" key={product.id}>
         <img
           id={product.id}
           src={product.image.url}
           alt="t-shert"
           onClick={(e) => {
             setgetitem({ id: e.target.id, imgurl: e.target.src });
             dispatch(sendata({ id: e.target.id, imgurl: e.target.src }));
   
             window.scrollTo(100, 100);
             sethow(e.target.id);
             dispatch(owl(e.target.src));
             dispatch(idowl(e.target.id));
             navigate("/product");
           }}
         />
       
         
         <div className="about">
         <p>{product.name.ar}</p>
           <span>${product.price}</span>
         </div>
       </div>
            
           )
         }) :null
       }
       </Slider>
      }



       
         
         {/* <div className="item">
            <img
              id="ahmed"
              src="./images/stock-photo-conf.svg"
              alt="t-shert"
              onClick={(e) => {
                setgetitem({ id: e.target.id, imgurl: e.target.src });
                dispatch(sendata({ id: e.target.id, imgurl: e.target.src }));

                window.scrollTo(100, 100);
                sethow(e.target.id);
                dispatch(owl(e.target.src));
                dispatch(idowl(e.target.id));
                navigate("/product");
              }}
            />
            <div className="sale">30%</div>
            <div className="about">
              <p>T-Shirt Summer Vibes</p>
              <span className="red">$89.99</span>
              <span className="ops">$119.99</span>
            </div>
          </div>

          <div className="item">
            <img
              id="sayed"
              src="./images/AdobeStock_118120200.svg"
              alt="t-shert"
              onClick={(e) => {
                setgetitem({ id: e.target.id, imgurl: e.target.src });
                dispatch(sendata({ id: e.target.id, imgurl: e.target.src }));
                window.scrollTo(100, 100);
                sethow(e.target.id);
                dispatch(owl(e.target.src));
                dispatch(idowl(e.target.id));
                navigate("/product");
              }}
            />
            <div className="about">
              <p>Loose Knit 3/4 Sleeve</p>
              <span>$119.99</span>
            </div>
          </div>

          <div className="item">
            <img
              id="hema"
              src="./images/AdobeStock_136908398.svg"
              alt="t-shert"
              onClick={(e) => {
                setgetitem({ id: e.target.id, imgurl: e.target.src });
                dispatch(sendata({ id: e.target.id, imgurl: e.target.src }));
                window.scrollTo(100, 100);
                sethow(e.target.id);
                dispatch(owl(e.target.src));
                dispatch(idowl(e.target.id));
                navigate("/product");
              }}
            />
            <div className="about">
              <p>Basic Slim Fit T-Shirt</p>
              <span>$79.99</span>
            </div>
          </div>
          <div className="item">
            <img
              onClick={(e) => {
                setgetitem({ id: e.target.id, imgurl: e.target.src });
                dispatch(sendata({ id: e.target.id, imgurl: e.target.src }));
                window.scrollTo(100, 100);
                sethow(e.target.id);
                dispatch(owl(e.target.src));
                dispatch(idowl(e.target.id));
                navigate("/product");
              }}
              id="farouk"
              src="./images/AdobeStock_173519034.svg"
              alt="t-shert"
            />
            <div className="about">
              <p>Loose Textured T-Shirt</p>
              <span>$119.99</span>
            </div>
          </div>  */}
      
      </Container>
    </>
  );
}

export default Owlone;
