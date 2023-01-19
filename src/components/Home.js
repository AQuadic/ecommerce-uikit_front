import React from "react";

import Footer from "./Footer";
import Owlone from "./Owlone";

import AllImage from "./AllImage";
import Owlpage from "./Owlpage";

import { useTranslation } from 'react-i18next';



function Home() {
const { t, i18n } = useTranslation();
  
  return (
    <>  
    <Owlpage />

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
