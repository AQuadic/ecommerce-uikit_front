import { Pagination } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {  Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { counteraction } from "../data/data";

function AboutProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { owl, idowl,sendata } = counteraction;
  const [alldata ,setalldata]=useState();
  const [page ,setPage]=useState();
  console.log(page)
  useEffect(()=>{re();  },[page])
  const re =()=>{
    const url = new URL(
      "https://v2.freshfarm.ae/api/v1/users/products"
  );
    const params = {
     
      "page":page
     
  };
  Object.keys(params)
      .forEach(key => url.searchParams.append(key, params[key]));
      const handelsame =()=>{
        axios.get(url,{
      headers:{
        "Content-Type": "application/json",
          "Accept": "application/json",
          "Accept-Language": "ar",
      }
      }).then((res)=>{console.log(res.data.data); setalldata(res.data.data)
      }).catch((err)=>{console.log(err)}) 
      }
      handelsame()
  }
  
  return (
    <div className="about-product">
      <div className="part1">
        <h2>Men's Tops (133)</h2>
        <div>
          <h3>sort:</h3>
          <Form.Select onChange={(e)=>console.log(e.target.value)} aria-label="Default select example">
            <option value="Popular1">Popular1</option>
            <option value="Popular2">Popular2</option>
            <option value="Popular3">Popular3</option>
          </Form.Select>
        </div>
      </div>
      <div className="part2">
        {
          alldata? 
           alldata.map((data)=>{return(
            <div className="item"
          onClick={(e) => {
            window.scrollTo(100, 100);
            dispatch(sendata({
              id:e.target.id,
              imgurl:e.target.src
          }))
            navigate("/product");
            dispatch(owl(e.target.src));
            dispatch(idowl(e.target.id));
          }}
        >
          <img
            id={data.id}
            src={data.image.url}
            alt="t-shert"
          />
          <div className="sale">30%</div>
          <div className="about">
            <p>{data.name.ar}</p>
            <span className="red">${data.price}</span>
            <span className="ops">$119.99</span>
          </div>
        </div>
           )})
            :
           <>
            <div className="item"
          onClick={(e) => {
            window.scrollTo(100, 100);
            dispatch(sendata({
              id:e.target.id,
              imgurl:e.target.src
          }))
            navigate("/product");
            dispatch(owl(e.target.src));
            dispatch(idowl(e.target.id));
          }}
        >
          <img
            id="ahmed"
            src="./images/stock-photo-conf.svg"
            alt="t-shert"
          />
          <div className="sale">30%</div>
          <div className="about">
            <p>T-Shirt Summer Vibes</p>
            <span className="red">$89.99</span>
            <span className="ops">$119.99</span>
          </div>
        </div>
        <div className="item"
          onClick={(e) => {
            window.scrollTo(100, 100);
            dispatch(sendata({
              id:e.target.id,
              imgurl:e.target.src
          }))
            navigate("/product");
            dispatch(owl(e.target.src));
            dispatch(idowl(e.target.id));
          }}
        >
          <img
            id="sayed"
            src="./images/AdobeStock_118120200.svg"
            alt="t-shert"
          />
          <div className="about">
            <p>Loose Knit 3/4 Sleeve</p>
            <span>$119.99</span>
          </div>
        </div>
           </>
          
        }
        {/* <div className="item"
          onClick={(e) => {
            window.scrollTo(100, 100);
            dispatch(sendata({
              id:e.target.id,
              imgurl:e.target.src
          }))
            navigate("/product");
            dispatch(owl(e.target.src));
            dispatch(idowl(e.target.id));
          }}
        >
          <img
            id="ahmed"
            src="./images/stock-photo-conf.svg"
            alt="t-shert"
          />
          <div className="sale">30%</div>
          <div className="about">
            <p>T-Shirt Summer Vibes</p>
            <span className="red">$89.99</span>
            <span className="ops">$119.99</span>
          </div>
        </div>
        <div className="item"
          onClick={(e) => {
            window.scrollTo(100, 100);
            dispatch(sendata({
              id:e.target.id,
              imgurl:e.target.src
          }))
            navigate("/product");
            dispatch(owl(e.target.src));
            dispatch(idowl(e.target.id));
          }}
        >
          <img
            id="sayed"
            src="./images/AdobeStock_118120200.svg"
            alt="t-shert"
          />
          <div className="about">
            <p>Loose Knit 3/4 Sleeve</p>
            <span>$119.99</span>
          </div>
        </div>
        <div className="item">
          <img
            id="ahmed"
            src="./images/stock-photo-conf.svg"
            alt="t-shert"
          />
          <div className="sale">30%</div>
          <div className="about">
            <p>T-Shirt Summer Vibes</p>
            <span className="red">$89.99</span>
            <span className="ops">$119.99</span>
          </div>
        </div>
        <div className="item"
          onClick={(e) => {
            window.scrollTo(100, 100);
            navigate("/product");
            dispatch(owl(e.target.src));
            dispatch(idowl(e.target.id));
          }}
        >
          <img
            id="ahmed"
            src="./images/stock-photo-conf.svg"
            alt="t-shert"
          />
          <div className="sale">30%</div>
          <div className="about">
            <p>T-Shirt Summer Vibes</p>
            <span className="red">$89.99</span>
            <span className="ops">$119.99</span>
          </div>
        </div>
        <div className="item"
          onClick={(e) => {
            window.scrollTo(100, 100);
            navigate("/product");
            dispatch(owl(e.target.src));
            dispatch(idowl(e.target.id));
          }}
        >
          <img
            id="sayed"
            src="./images/AdobeStock_118120200.svg"
            alt="t-shert"
          />
          <div className="about">
            <p>Loose Knit 3/4 Sleeve</p>
            <span>$119.99</span>
          </div>
        </div>
        <div className="item">
          <img
            id="ahmed"
            src="./images/stock-photo-conf.svg"
            alt="t-shert"
          />
          <div className="sale">30%</div>
          <div className="about">
            <p>T-Shirt Summer Vibes</p>
            <span className="red">$89.99</span>
            <span className="ops">$119.99</span>
          </div>
        </div>
        <div className="item"
          onClick={(e) => {
            window.scrollTo(100, 100);
            navigate("/product");
            dispatch(owl(e.target.src));
            dispatch(idowl(e.target.id));
          }}
        >
          <img
            id="ahmed"
            src="./images/stock-photo-conf.svg"
            alt="t-shert"
          />
          <div className="sale">30%</div>
          <div className="about">
            <p>T-Shirt Summer Vibes</p>
            <span className="red">$89.99</span>
            <span className="ops">$119.99</span>
          </div>
        </div>
        <div className="item"
          onClick={(e) => {
            window.scrollTo(100, 100);
            navigate("/product");
            dispatch(owl(e.target.src));
            dispatch(idowl(e.target.id));
          }}
        >
          <img
            id="sayed"
            src="./images/AdobeStock_118120200.svg"
            alt="t-shert"
          />
          <div className="about">
            <p>Loose Knit 3/4 Sleeve</p>
            <span>$119.99</span>
          </div>
        </div>
        <div className="item">
          <img
            id="ahmed"
            src="./images/stock-photo-conf.svg"
            alt="t-shert"
          />
          <div className="sale">30%</div>
          <div className="about">
            <p>T-Shirt Summer Vibes</p>
            <span className="red">$89.99</span>
            <span className="ops">$119.99</span>
          </div>
        </div> */}
      </div>
      <Pagination count={10} variant="outlined" color="secondary"  
          onChange={(e,p) => {
           setPage(p)
          }}   />
      
    </div>
  );
}

export default AboutProduct;
