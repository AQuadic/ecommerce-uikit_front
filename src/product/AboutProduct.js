import { Pagination } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { counteraction } from "../data/data";
import Skeleton from "@mui/material/Skeleton";
import { useTranslation } from "react-i18next";

function AboutProduct() {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { owl, idowl, sendata, send_data, category_id } = counteraction;
  const [alldata, setalldata] = useState();
  const [page, setPage] = useState();
  console.log(page);
  useEffect(() => {
    re();
  }, [page]);
  const re = () => {
    const url = new URL("https://v2.freshfarm.ae/api/v1/users/products");
    const params = {
      page: page,
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
          console.log(res.data.data);
          setalldata(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    handelsame();
  };

  return (
    <div className="about-product">
      <div className="part1">
        <h2>Men's Tops (133)</h2>
        <div>
          <h3>sort:</h3>
          <Form.Select
            onChange={(e) => console.log(e.target.value)}
            aria-label="Default select example"
          >
            <option value="Popular1">Popular1</option>
            <option value="Popular2">Popular2</option>
            <option value="Popular3">Popular3</option>
          </Form.Select>
        </div>
      </div>
      <div className="part2">
        {alldata ? (
          alldata.map((data) => {
            return (
              <div
                className="item"
                onClick={(e) => {
                  window.scrollTo(100, 100);
                  dispatch(
                    sendata({
                      id: e.target.id,
                      imgurl: e.target.src,
                    })
                  );
                  dispatch(send_data(data));
                  dispatch(category_id(data.category_id));
                  navigate("/product");
                  dispatch(owl(e.target.src));
                  dispatch(idowl(e.target.id));
                }}
              >
                <img id={data.id} src={data.image.url} alt="t-shert" />
                {data.before_price > 0 ? <div className="sale">30%</div> : null}
                <div className="about">
                  <p>{data.name[i18n.language]}</p>
                  {data.before_price > 0 ? (
                    <>
                      <span className="red">${data.peice}</span>
                      <span className="ops">${data.peice - 50}</span>
                    </>
                  ) : (
                    <span className="">${data.price}</span>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <>
            <div className="item load">
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={"100%"}
                height={230}
              />
              <Skeleton animation="wave" width={"100%"} />
              <Skeleton
                variant="rounded"
                animation="wave"
                width={100}
                height={20}
              />
            </div>
            <div className="item load">
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={"100%"}
                height={230}
              />
              <Skeleton animation="wave" width={"100%"} />
              <Skeleton
                variant="rounded"
                animation="wave"
                width={100}
                height={20}
              />
            </div>
            <div className="item load">
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={"100%"}
                height={230}
              />
              <Skeleton animation="wave" width={"100%"} />
              <Skeleton
                variant="rounded"
                animation="wave"
                width={100}
                height={20}
              />
            </div>
            <div className="item load">
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={"100%"}
                height={230}
              />
              <Skeleton animation="wave" width={"100%"} />
              <Skeleton
                variant="rounded"
                animation="wave"
                width={100}
                height={20}
              />
            </div>
            <div className="item load">
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={"100%"}
                height={230}
              />
              <Skeleton animation="wave" width={"100%"} />
              <Skeleton
                variant="rounded"
                animation="wave"
                width={100}
                height={20}
              />
            </div>
            <div className="item load">
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={"100%"}
                height={230}
              />
              <Skeleton animation="wave" width={"100%"} />
              <Skeleton
                variant="rounded"
                animation="wave"
                width={100}
                height={20}
              />
            </div>
          </>
        )}
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
      <Pagination
        count={3}
        variant="outlined"
        color="secondary"
        onChange={(e, p) => {
          setPage(p);
        }}
      />
    </div>
  );
}

export default AboutProduct;
