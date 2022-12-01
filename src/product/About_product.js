import React from "react";
import { Accordion, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { counteraction } from "../data/data";

function About_product() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { owl, idowl,sendata } = counteraction;
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
            src="./images/stock-photo-confident-in-his-style-full-length-of-good-looking-young-man-keeping-hand-in-pocket-and-looking-at-720914785.svg"
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
            src="./images/stock-photo-confident-in-his-style-full-length-of-good-looking-young-man-keeping-hand-in-pocket-and-looking-at-720914785.svg"
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
            src="./images/stock-photo-confident-in-his-style-full-length-of-good-looking-young-man-keeping-hand-in-pocket-and-looking-at-720914785.svg"
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
            src="./images/stock-photo-confident-in-his-style-full-length-of-good-looking-young-man-keeping-hand-in-pocket-and-looking-at-720914785.svg"
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
            src="./images/stock-photo-confident-in-his-style-full-length-of-good-looking-young-man-keeping-hand-in-pocket-and-looking-at-720914785.svg"
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
            src="./images/stock-photo-confident-in-his-style-full-length-of-good-looking-young-man-keeping-hand-in-pocket-and-looking-at-720914785.svg"
            alt="t-shert"
          />
          <div className="sale">30%</div>
          <div className="about">
            <p>T-Shirt Summer Vibes</p>
            <span className="red">$89.99</span>
            <span className="ops">$119.99</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_product;
