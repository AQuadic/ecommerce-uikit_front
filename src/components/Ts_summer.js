import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { counteraction } from "../data/data";

function Ts_summer() {
  const navegate = useNavigate();
  const srcimage = useSelector((state) => state.counter.id);
  const valname = useSelector((state) => state.counter.name);
  const countTs = useSelector((state) => state.counter.countts);
  const allitem = useSelector((state) => state.counter.allitem);
  const getdata = useSelector((state) => state.counter.getdata);
 

 const [love ,setlove]=useState(false);

  const dispatch = useDispatch();
  const { counter,additem,pay,sendata,recount } = counteraction;
  const [itemget , setitremget]=useState({
    id:valname,
    imgurl :srcimage, 
  });
  useEffect(()=>{
   dispatch(recount())
  reval()
  },[])
 const reval = ()=>{
  setitremget({
    id:valname,
    imgurl:srcimage
   });
    console.log(itemget)
 }
  return (
    <>
    
      <div className="order">
        
        <div className="container">
          <div className="images">
            {valname !== "ahmed" ? (
              <>
                <img src={srcimage} className="image1" alt="" />
                <img src={srcimage} className="image2" alt="" />
              </>
            ) :  (
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
                <p className="sal">SALE</p>
                <h1>T-Shirt Summer Vibes</h1>
                <span className="red">${(countTs*90)-0.10}9</span>
                <span className="ops">${(countTs*120)-0.10}9</span>
              </div>
              <div className="productid">
                <p className="idpro">
                  Product ID:
                  <br />
                  261311
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
                <h2>Size:</h2>
                <p>See size table</p>
              </div>
              <button>
                Choose siZE
                <img src="./images/Path 3.svg" alt="" />
              </button>
            </div>
            <div className="numorder">
              <h2>Quantity:</h2>
              <div className="qorder">
                <div className="btn-num">
                  <form>
                    <button
                      onClick={(e) => {
                       
                        e.preventDefault();
                        /*dispatch({ type: "countnig", payload: 1 });*/
                        if (countTs > 1) {
                          dispatch(counter(-1));
                          dispatch(sendata({ id: valname ? valname:"ahmed", imgurl: srcimage ? srcimage: "./images/AdobeStock_236655482.svg", countitem:countTs }))
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
                        dispatch(sendata({ id: valname ? valname:"ahmed", imgurl: srcimage ? srcimage: "./images/AdobeStock_236655482.svg", countitem:countTs }))
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
              
                    dispatch(sendata({ id: valname ? valname:"ahmed", imgurl: srcimage ? srcimage: "./images/AdobeStock_236655482.svg", countitem:countTs }))
                    alert("you shwor from this order : " +countTs+ " from " +valname +" by   $"+((countTs*90)-0.10)+"9");
                    dispatch(additem());
                    console.log(getdata)
                    dispatch(pay())
                    navegate("/pay");
                  }}
                >
                  Add to cart
                </button>
                <div
                  className="love"
                 onClick={(e)=>{ }}
                 
                >
                  {
                    love?  <img src="./images/noun_Heart_2102871 (2).svg" alt="" onClick={(e)=>{e.target.classList.toggle("love-click");setlove(!love)}}   />:
                    <img src="./images/noun_Heart_2102871 (1).svg" alt="" onClick={(e)=>{e.target.classList.toggle("love-click");setlove(!love)}}  />
                  }
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ts_summer;
