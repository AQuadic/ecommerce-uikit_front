import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { counteraction } from "../data/data";
import Dec from "../product/Dec";

import { useTranslation } from "react-i18next";

function TsSummer() {
  const { t, i18n } = useTranslation();

  const navegate = useNavigate();
  const srcimage = useSelector((state) => state.counter.id);
  const valname = useSelector((state) => state.counter.name);
  const countTs = useSelector((state) => state.counter.countts);
  /*const allitem = useSelector((state) => state.counter.allitem);*/
  //const getdata = useSelector((state) => state.counter.getdata);
  const [love, setlove] = useState(false);
  const dispatch = useDispatch();
  const { counter, additem, pay, sendata, recount } = counteraction;
  const [itemget, setitremget] = useState({
    id: valname,
    imgurl: srcimage,
  });
  const target_product = useSelector((state) => state.counter.target_product);
  const category_idd = useSelector((state) => state.counter.category_id);
  console.log(category_idd);
  console.log(target_product);
  useEffect(() => {
    dispatch(recount());

    reval();
  }, [category_idd]);
  const reval = () => {
    setitremget({
      id: valname,
      imgurl: srcimage,
    });
  };
  return (
    <>
      <div className="nav2">
        <div className="container">
          <div className="crump">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">
                    <img src="./images/noun_Home_2102808.svg" alt="" />
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/allproduct">Men`s Tops</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/allproduct">{t("ts.crumb2")}</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {target_product.name[i18n.language]}
                </li>
              </ol>
            </nav>
          </div>

          <div className="delevery">
            <div className="part1">
              <img src="./images/noun_delivery_2057282.svg" alt="" />
              <div className="about">
                <h2>{t("ts.delevery1")}</h2>
                <p>{t("ts.delevery11")}</p>
              </div>
            </div>
            <div className="part2">
              <img src="./images/noun_Fast  Delivery_1212438.svg" alt="" />
              <div className="about">
                <h2>{t("ts.delevery2")}</h2>
                <p>{t("ts.delevery22")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="order">
        <div className="container">
          <div className="images">
            {valname !== "ahmed" ? (
              <>
                <img src={target_product.image.url} className="image1" alt="" />
                <img src={target_product.image.url} className="image2" alt="" />
              </>
            ) : (
              <>
                <img
                  src="./images/AdobeStock_236655482.svg"
                  className="image1"
                  alt=""
                />
                <img src="./images/AdobeStock_236655483.svg" alt="" />
              </>
            )}
          </div>
          <div className="about">
            <div className="nameorder">
              <div className="productname">
                {target_product.before_price > 0 ? (
                  <p className="sal">{t("ts.sale")}</p>
                ) : null}

                <h1>{target_product.name[i18n.language]}</h1>
                {target_product.before_price > 0 ? (
                  <>
                    <span className="red">${countTs * 90 - 0.1}9</span>
                    <span className="ops">${countTs * 120 - 0.1}9</span>
                  </>
                ) : (
                  <span className="">${target_product.price}</span>
                )}
              </div>
              <div className="productid">
                <p className="idpro">
                  Product ID:
                  <br />
                  {target_product.category_id}
                </p>
                <h4>HOUSE MY BRAND</h4>
              </div>
            </div>
            <div className="colororder">
              <h2>Color:</h2>
              <div className="allcolor">
                <span className="c-black"></span>
                <span className="c-tea"></span>
                <span className="c-blue"></span>
                <span className="c-white"></span>
              </div>
            </div>
            <div className="sizeorder">
              <div className="aboutsize">
                <h2>{t("ts.Size")}:</h2>
                <p>{target_product.weight[i18n.language]}</p>
              </div>
              <button>
                Choose siZE
                <img src="./images/Path 3.svg" alt="" />
              </button>
            </div>
            <div className="numorder">
              <h2>{t("ts.Quantity")}:</h2>
              <div className="qorder">
                <div className="btn-num">
                  <form>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        /*dispatch({ type: "countnig", payload: 1 });*/
                        if (countTs > 1) {
                          dispatch(counter(-1));
                          dispatch(
                            sendata({
                              id: valname ? valname : "ahmed",
                              imgurl: srcimage
                                ? srcimage
                                : "./images/AdobeStock_236655482.svg",
                              countitem: countTs,
                            })
                          );
                        }
                      }}
                    >
                      -
                    </button>
                    <p>{countTs}</p>
                    <button
                      onClick={(e) => {
                        e.preventDefault();

                        dispatch(counter(1));
                        dispatch(
                          sendata({
                            id: valname ? valname : "ahmed",
                            imgurl: srcimage
                              ? srcimage
                              : "./images/AdobeStock_236655482.svg",
                            countitem: countTs,
                          })
                        );
                      }}
                      className="blus"
                    >
                      +
                    </button>
                  </form>
                </div>
                <button
                  className="add"
                  onClick={() => {
                    dispatch(
                      sendata({
                        id: valname ? valname : "ahmed",
                        imgurl: srcimage
                          ? srcimage
                          : "./images/AdobeStock_236655482.svg",
                        countitem: target_product.price,
                      })
                    );
                    alert(
                      "you shwor from this order : " +
                        countTs +
                        " from " +
                        target_product.name[i18n.language] +
                        " by   $" +
                        target_product.price
                    );
                    dispatch(additem());

                    dispatch(pay());
                    navegate("/pay");
                  }}
                >
                  {t("ts.Add")}
                </button>
                <div className="love" onClick={(e) => {}}>
                  {love ? (
                    <img
                      src="./images/noun_Heart_2102871 (2).svg"
                      alt=""
                      onClick={(e) => {
                        e.target.classList.toggle("love-click");
                        setlove(!love);
                      }}
                    />
                  ) : (
                    <img
                      src="./images/noun_Heart_2102871 (1).svg"
                      alt=""
                      onClick={(e) => {
                        e.target.classList.toggle("love-click");
                        setlove(!love);
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dec />
    </>
  );
}

export default TsSummer;
