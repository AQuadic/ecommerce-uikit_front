import React from "react";
import { Container, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Payment() {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const itempay = useSelector((state) => state.counter.itempay);
  const totalprice = useSelector((state) => state.counter.totelprice);
  console.log(itempay);

  return (
    <Container>
      <div>
        <div className="shopping">
          <h2>{t("payment.head")}</h2>
          <div className="shopping-icon">
            <img
              src="./images/unactive.svg"
              onClick={() => {
                navigate("/pay");
              }}
              alt=""
            ></img>
            <span></span>
            <img src="./images/active.svg" alt=""></img>
          </div>
        </div>
        <div className="about-payment">
          <div className="part1">
            <div className="log-sin">
              <button className="log" onClick={() => navigate("/login")}>
                Log in
              </button>
              <button className="sin" onClick={() => navigate("/signup")}>
                SIGN UP
              </button>
            </div>
            <div className="shipping-information">
              <h2>{t("payment.head2")}</h2>
              <div className="forms">
                <Form>
                  <Form.Group>
                    <Form.Control
                      id="email"
                      type="email"
                      required
                      placeholder="E-mail"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      id="First-Name"
                      type="text"
                      required
                      placeholder="First Name"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      id="Last-Name"
                      type="text"
                      required
                      placeholder="Last Name"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Control
                      id="Phone-number"
                      type="number"
                      required
                      placeholder="Phone number"
                    />
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group>
                    <Form.Control
                      id="Address"
                      type="text"
                      required
                      placeholder="Address"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      id="City"
                      type="text"
                      required
                      placeholder="City"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      id="Postal Code"
                      type="text"
                      required
                      placeholder="Postal Code / ZIP"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Control
                      id="Poland"
                      type="text"
                      required
                      placeholder="Poland"
                    />
                  </Form.Group>
                </Form>
              </div>
            </div>
          </div>
          <div className="part2">
            <div className="payment-method">
              <h2>{t("payment.head3")}</h2>
              <div className="method-img">
                <img src="./images/Paypal.svg" alt=""></img>
                <img src="./images/Visa.svg" alt=""></img>
                <img src="./images/Master card.svg" alt=""></img>
                <img src="./images/Maestro.svg" alt=""></img>

                <img src="./images/Discover.svg" alt=""></img>

                <img src="./images/iDEAL.svg" alt=""></img>
              </div>
            </div>
            <div className="delivery-method">
              <h2>Delivery method</h2>
              <div className="method-img">
                <img src="./images/In post.svg" alt=""></img>
                <img src="./images/DPD.svg" alt=""></img>

                <img src="./images/DHL.svg" alt=""></img>

                <img src="./images/FedEX.svg" alt=""></img>
              </div>
            </div>
          </div>
          <div className="part3">
            <h2>{t("payment.head5")}</h2>
            <div className="your-cart">
              {itempay.map((item) => {
                return (
                  <div key={Math.random()} className="order-about">
                    <img src={item.imgurl} alt="" />
                    <div className="order-name">
                      <h3>
                        {item.qiitem} _ {item.id}
                      </h3>
                      <p>#261311</p>
                    </div>
                    <h4 className="order-salary">${item.qiitem * 90 - 0.01}</h4>
                  </div>
                );
              })}

              <div className="payment-total">
                <h3>Total cost</h3>
                <h4>${totalprice}</h4>
              </div>
            </div>
            <div className="price-dlivery">
              <img src="./images/noun_delivery_2057282.svg" alt="" />
              <p>
                You are <span>$30,02</span> away from free shipping!
              </p>
            </div>
          </div>
        </div>
        <div className=" pay-about">
          <div className="">
            <button
              className="back"
              onClick={() => {
                navigate("/pay");
              }}
            >
              <img src="./images/noun_Arrow Left_2682937.svg" alt="" />
              <h3>{t("payment.pay_f1")} </h3>
            </button>
          </div>
          <div className="btn-shopping">
            <button
              className="btn-continue"
              onClick={() => navigate("/allproduct ")}
            >
              {t("payment.pay_f2")}
            </button>

            <button
              className="check"
              onClick={() => alert("successful operation")}
            >
              {t("payment.pay_f3")}
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Payment;
