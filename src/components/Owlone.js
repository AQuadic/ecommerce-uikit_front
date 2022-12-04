import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { counteraction } from "../data/data";

function Owlone() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1030 },
      items: 4,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1030, min: 768 },
      items: 3,
      partialVisibilityGutter: 30,
    },
    tablett: {
      breakpoint: { max: 768, min: 530 },
      items: 2.5,
      partialVisibilityGutter: 30,
    },
    tablettx: {
      breakpoint: { max: 530, min: 420 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 420, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };
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
      <Container>
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
        <Carousel
          responsive={responsive}
          className="carousel-react"
          itemClass="carousel-item-padding-100-px"
        >
          <div className="item">
            <img
              id="ahmed"
              src="./images/stock-photo-confident-in-his-style-full-length-of-good-looking-young-man-keeping-hand-in-pocket-and-looking-at-720914785.svg"
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
          </div>
        </Carousel>
      </Container>
    </>
  );
}

export default Owlone;
