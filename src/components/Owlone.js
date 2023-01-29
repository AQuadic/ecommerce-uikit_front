import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";

import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { counteraction } from "../data/data";
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';
function Owlone() {
  const {id} = useParams()
  console.log(id)
const { t, i18n } = useTranslation();
console.log(i18n.language)
  const category_idd = useSelector((state) => state.counter.category_id);
  console.log(category_idd)
  const ref = useRef();
  var settings = {
    dots: false,
    infinite: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <img src="./images/noun_Arrow Left_2682937.svg" alt="" />,
    prevArrow: <img src="./images/noun_Arrow Left1_2682937.svg" alt="" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [products, setproducts] = useState();
  const [products_same, setproducts_same] = useState();
  const [check_id, setcheck_id] = useState(0)
  useEffect(() => {

    const handelcat = () => {
      axios
        .get("https://v2.freshfarm.ae/api/v1/users/products", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Language": "ar",
          },
        })
        .then((res) => {
          console.log(res.data.data);
          setproducts(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    handelcat();
 
    
      re()
      re2()
  }, [check_id]);
  
 
 console.log(check_id)
 const re =()=>{
  const url = new URL(
    "https://v2.freshfarm.ae/api/v1/users/products"
);
  const params = {
    "category_id": check_id|"10",
   
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
    }).then((res)=>{console.log(res.data.data); setproducts_same(res.data.data)
    }).catch((err)=>{console.log(err)}) 
    }
    handelsame()
}
const re2 =()=>{
  const url = new URL(
    `https://v2.freshfarm.ae/api/v2/users/products/${id}`
);
  

    const handelsame =()=>{
      axios.get(url,{
    headers:{
      "Content-Type": "application/json",
        "Accept": "application/json",
        "Accept-Language": i18n.language,
    }
    }).then((res)=>{console.log(res.data); setcheck_id(res.data.category_id)
    }).catch((err)=>{console.log(err)}) 
    }
    handelsame()
}


  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [getitem, setgetitem] = useState({
    id: "sayed",
    imgurl: "gg",
  });

  const { owl, idowl, sendata, send_data, category_id } = counteraction;

  const slid = ()=>{
    if(products){
     return(
       check_id >0 ?
        <Slider
          ref={ref}
          {...settings}
          onInit={() => {
            ref.current
              ? console.log("yes slid")
              : console.log("noooo slide");
          }}
        >
          {products_same
            ? products_same.map((product) => {
                return (
                  <div className="item" key={product.id}>
                    <img
                      id={product.id}
                      src={product.image.url}
                      alt="t-shert"
                      onClick={(e) => {
                        setgetitem({ id: e.target.id, imgurl: e.target.src });
                        dispatch(
                          sendata({ id: e.target.id, imgurl: e.target.src })
                        );
                        dispatch(send_data(product));
                        dispatch(category_id(product.category_id));

                        console.log(product);
                        window.scrollTo(100, 100);

                        dispatch(owl(e.target.src));
                        dispatch(idowl(e.target.id));
                        navigate(`/product/${product.id}`);
                      }}
                    />

                    <div className="about">
                      <p>{product.name[i18n.language]}</p>
                      <span>${product.price}</span>
                    </div>
                  </div>
                );
              })
            : null}
        </Slider> :
          <Slider
          ref={ref}
          {...settings}
          onInit={() => {
            ref.current
              ? console.log("yes slid")
              : console.log("noooo slide");
          }}
        >
          {products
            ? products.map((product) => {
                return (
                  <div className="item" key={product.id}>
                    <img
                      id={product.id}
                      src={product.image.url}
                      alt="t-shert"
                      onClick={(e) => {
                        setgetitem({ id: e.target.id, imgurl: e.target.src });
                        dispatch(
                          sendata({ id: e.target.id, imgurl: e.target.src })
                        );
                        dispatch(send_data(product));
                        dispatch(category_id(product.category_id));

                        console.log(product);
                        window.scrollTo(100, 100);

                        dispatch(owl(e.target.src));
                        dispatch(idowl(e.target.id));
                        navigate(`/product/${product.id}`);
                      }}
                    />

                    <div className="about">
                      <p>{product.name[i18n.language]}</p>
                      <span>${product.price}</span>
                    </div>
                  </div>
                );
              })
            : null}
        </Slider>
      
     )
    }else{
     <Slider {...settings }>
       <div className="item">
              <img
                id="sayed"
                src="./images/AdobeStock_118120200.svg"
                alt="t-shert"
                onClick={(e) => {
                  setgetitem({ id: e.target.id, imgurl: e.target.src });
                  dispatch(sendata({ id: e.target.id, imgurl: e.target.src }));
                  window.scrollTo(100, 100);
               
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
     </Slider>
    }
   
  }
  slid()


  return (
    <>
      <Container className="product">
        <div className="headselect">
          <h2>{t("owlone.owl_text")}</h2>
          <button
            onClick={() => {
              navigate("/product");
              window.scrollTo(100, 100);
            }}
          >
            {t("owlone.owl_btn")}
          </button>
        </div>
{
  slid()
}
        {/* { check_id >0 ?
          <Slider
            ref={ref}
            {...settings}
            onInit={() => {
              ref.current
                ? console.log("yes slid")
                : console.log("noooo slide");
            }}
          >
            {products_same
              ? products_same.map((product) => {
                  return (
                    <div className="item" key={product.id}>
                      <img
                        id={product.id}
                        src={product.image.url}
                        alt="t-shert"
                        onClick={(e) => {
                          setgetitem({ id: e.target.id, imgurl: e.target.src });
                          dispatch(
                            sendata({ id: e.target.id, imgurl: e.target.src })
                          );
                          dispatch(send_data(product));
                          dispatch(category_id(product.category_id));

                          console.log(product);
                          window.scrollTo(100, 100);

                          dispatch(owl(e.target.src));
                          dispatch(idowl(e.target.id));
                          navigate("/product");
                        }}
                      />

                      <div className="about">
                        <p>{product.name.i18n}</p>
                        <span>${product.price}</span>
                      </div>
                    </div>
                  );
                })
              : null}
          </Slider> :
            <Slider
            ref={ref}
            {...settings}
            onInit={() => {
              ref.current
                ? console.log("yes slid")
                : console.log("noooo slide");
            }}
          >
            {products
              ? products.map((product) => {
                  return (
                    <div className="item" key={product.id}>
                      <img
                        id={product.id}
                        src={product.image.url}
                        alt="t-shert"
                        onClick={(e) => {
                          setgetitem({ id: e.target.id, imgurl: e.target.src });
                          dispatch(
                            sendata({ id: e.target.id, imgurl: e.target.src })
                          );
                          dispatch(send_data(product));
                          dispatch(category_id(product.category_id));

                          console.log(product);
                          window.scrollTo(100, 100);

                          dispatch(owl(e.target.src));
                          dispatch(idowl(e.target.id));
                          navigate("/product");
                        }}
                      />

                      <div className="about">
                        <p>{product.name.i18n}</p>
                        <span>${product.price}</span>
                      </div>
                    </div>
                  );
                })
              : null}
          </Slider>
        } */}

        {/* 

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
           */}
      </Container>
    </>
  );
}

export default Owlone;
