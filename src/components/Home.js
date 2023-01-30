import React, { useEffect, useState } from "react";

import Footer from "./Footer";
import Owlone from "./Owlone";

import AllImage from "./AllImage";
import Owlpage from "./Owlpage";

import { useTranslation } from 'react-i18next';
import axios from "axios";



function Home() {
const { t, i18n } = useTranslation();
const [items_offer,setitem_offer]=useState();
const offer = ()=>{
  const url = new URL("https://v2.freshfarm.ae/api/v2/users/products");
  const params = {
    "offers": "1"
  };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  const handelsame = () => {
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Accept-Language": "ar",
        },
      })
      .then((res) => {
        console.log(res.data.data);setitem_offer(res.data.data)
      
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  
  handelsame();
  
}
useEffect(()=>{
  offer()

},[])

//const three_item =  items_offer.slice(0, 3):null;
  return (
    <>  
    <Owlpage />
{
 items_offer ? 
 <div className="div">
 <div className="container">
 { items_offer.slice(0, 3).map((item)=>{
    return (
     
        <div className="one">
          <img src={item.image.url} alt="" />
          <div className="about">
            <h2>{item.name[i18n.language]}</h2>
            <input type="button" value="view collection" />
          </div>
        </div>
    
       
    
   )
  })
}
   </div>
    </div>
  
   
  : 
  <div className="div">
  <div className="container">
    <div className="one">
      <img src='./images/adult-black-clothes-dark-1040421.svg' alt="" />
      <div className="about">
        <h2>New arrivals are now in!</h2>
        <input type="button" value="view collection" />
      </div>
    </div>

    <div className="to">
      <img src='./images/beach-black-pants-black-shirt-2001293.svg' alt="" />
      <div className="about">
        <h2>Basic t-shirts <br/> $29,99</h2>
        <input type="button" value="more ditalis" />
      </div>
    </div>

    <div className="three">
      <img src='./images/person-sale-sign-1785138.svg' alt="" />
      <div className="about">
        <h2>Sale this summer</h2>
        <input type="button" value="view all" />
      </div>
    </div>
  </div>
</div>
}

      <Owlone/>
      <div className="choose">
        <div className="container">
          <div className="que">
            <h1>{t("us.title")}</h1>
          </div>
          <div className="about">
            <div className="chooseabout">
              <img src='./images/Free Shipping.svg' alt=""/>
              <h2>{t("us.head1")}</h2>
              <p>
               {t("us.text1")}
              </p>
            </div>
            <div className="chooseabout">
              <img src='./images/Payments.svg' alt="shipping" />
              <h2>{t("us.head2")}</h2>
              <p>
               {t("us.text2")}
              </p>
            </div>
            <div className="chooseabout">
              <img src='./images/Money.svg' alt="shipping" />
              <h2>{t("us.head3")}</h2>
              <p>
              {t("us.text3")}
              </p>
            </div>
            <div className="chooseabout">
              <img src='./images/Finest Quality.svg' alt="shipping" />
              <h2>{t("us.head4")}</h2>
              <p>
                {t("us.text4")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Owlone/>
      <AllImage/>
      <Footer/>
    </>
  );
}

export default Home;
