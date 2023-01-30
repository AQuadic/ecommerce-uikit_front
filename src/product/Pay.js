import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { counteraction } from "../data/data";
import { useTranslation } from "react-i18next";

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';



  
    
 

function Pay() {
  const { t, i18n } = useTranslation();

  const valname = useSelector((state) => state.counter.name);
  const countTs = useSelector((state) => state.counter.countts);
  const allitem = useSelector((state) => state.counter.itempay);
  const totalprice = useSelector((state) => state.counter.totelprice);

  const dispatch = useDispatch();
  const { removeitem } = counteraction;
  const navigate = useNavigate();
  const [promo, setpromo] = useState();
  return (
    <Container>
      <div className="all-shopping">
        <div className="shopping">
          <h2>{t("pay.head")}</h2>
          <div className="shopping-icon">
            <img src="./images/active shop.svg" alt=""></img>
            <span></span>
            <img
              src="./images/noun_delivery_1665162.svg"
              onClick={() => navigate("/payment")}
              alt=""
            ></img>
          </div>
        </div>

        <Table responsive>
          <thead>
            <tr>
              <th>{t("pay.table1")}</th>
              <th>Color</th>
              <th>{t("pay.table2")}</th>
              <th>{t("pay.table3")}</th>
              <th>{t("pay.table4")}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allitem[0] ? (
              allitem.map((item) => (
                <tr key={Math.random()}>
                  <td className="fristtd">
                    <img src={item.imgurl} alt="" />
                    <div className="about">
                      <h2>{item.name}</h2>
                      <p className="codeproduct">#261311</p>
                    </div>
                  </td>
                  <td>dark</td>
                  <td>XL</td>
                  <td>{item.qiitem}</td>
                  <td>${item.qiitem * 90 - 0.01}</td>
                  <td
                    onClick={() => {
                      dispatch(removeitem(item.id));
                    }}
                  >
                 <Tooltip title="Delete">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
          </tbody>
        </Table>

        <div className=" pay-about">
          <div className="">
            {" "}
            <button
              className="back"
              onClick={() => {
                navigate("/allproduct");
              }}
            >
              <img src="./images/noun_Arrow Left_2682937.svg" alt="" />
              <h3>{t("pay.pay_f1")}</h3>
            </button>
          </div>
          <div className="">
            <input
              type="text"
              placeholder={t("pay.pay_f2")}
              onChange={(e) => {
                setpromo(e.target.value);
              }}
            ></input>
          </div>
          <div className="">
            <h4 className="totel-cost">
              <span>{t("pay.pay_f3")} </span> $
              {totalprice === 1 ? "0" : totalprice}
            </h4>
          </div>
          <div className="">
            <button
              className="check"
              onClick={() => {
                promo
                  ? navigate("/payment")
                  : alert("please Enter promo code ");
              }}
            >
              {t("pay.pay_f4")}
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Pay;
