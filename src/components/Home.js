import React from "react";

import Footer from "./Footer";
import Owlone from "./Owlone";


import { Link } from "react-router-dom";
import All_image from "./All-image";
import Owlpage from "./Owlpage";
function Home() {
  console.log(document.dir)
  return (
    <>  
    <Owlpage/>
    <Link to="/product">product</Link>
 
   

<div className="div">
  <div className="container">
    <div className="one">
      <img src="./images/adult-black-clothes-dark-1040421.svg" alt="" />
      <div className="about">
        <h2>New arrivals are now in!</h2>
        <input type="button" value="view collection" />
      </div>
    </div>

    <div className="to">
      <img src="./images/beach-black-pants-black-shirt-2001293.svg" alt="" />
      <div className="about">
        <h2>Basic t-shirts <br/> $29,99</h2>
        <input type="button" value="more ditalis" />
      </div>
    </div>

    <div className="three">
      <img src="./images/person-sale-sign-1785138.svg" alt="" />
      <div className="about">
        <h2>Sale this summer</h2>
        <input type="button" value="view all" />
      </div>
    </div>
  </div>
</div>


      <Owlone/>
      <div className="choose">
        <div className="container">
          <div className="que">
            <h1>Why should you choose us?</h1>
          </div>
          <div className="about">
            <div className="chooseabout">
              <img src="images/Free Shipping.svg" />
              <h2>Free Shipping</h2>
              <p>
                All purchases over $399 are eligible for free shipping via UPS
                Pack and Ship.
              </p>
            </div>
            <div className="chooseabout">
              <img src="images/Payments.svg" alt="shipping" />
              <h2>Easy Payments</h2>
              <p>
                All payments are processed instantly over a secure payment
                protocol.
              </p>
            </div>
            <div className="chooseabout">
              <img src="images/Money.svg" alt="shipping" />
              <h2>Money-Back Guarantee</h2>
              <p>
                If an item arrived damaged or you've changed your mind, you can
                send it back for a full refund.
              </p>
            </div>
            <div className="chooseabout">
              <img src="images/Finest Quality.svg" alt="shipping" />
              <h2>Finest Quality</h2>
              <p>
                Designed to last, each of our products has been crafted with the
                finest materials.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Owlone/>
      <All_image/>
      <Footer/>
    </>
  );
}

export default Home;
