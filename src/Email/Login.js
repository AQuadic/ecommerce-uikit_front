import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { counteraction } from "../data/data";
import { useTranslation } from "react-i18next";

function Login() {
  const { t, i18n } = useTranslation();

  const { inc } = counteraction;
  const navegate = useNavigate();
  const dispatch = useDispatch();
  const val = useSelector((state) => state.counter.value);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  localStorage.setItem("state", false);
  const navigate = useNavigate();
  const handellogin = () => {
    console.warn(email, password);
    const po = axios
      .post(
        "https://v2.freshfarm.ae/api/v1/users/auth/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: " application/json",
            "Accept-Language": "ar",
          },
        }
      )
      .then((res) => {
        console.log(res.data.user);

        if (res.data.user) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("state", true);

          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });

    console.log(po);
  };
  return (
    <Container>
      <section className="login">
        <button
          className="back"
          onClick={() => {
            navegate("/allproduct");
          }}
        >
          <img src="./images/noun_Arrow Left_2682937.svg" alt="" />
          <h3>
            {t("log.head")} {val}
          </h3>
        </button>

        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">{t("log.log")}</h2>
            <p className="text-center ">{t("log.head3")}</p>
            <Form>
              <Form.Group>
                <Form.Control
                  id="email"
                  type="email"
                  required
                  placeholder="E-mail"
                  onChange={(e) => setemail(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  id="password"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setpassword(e.target.value)}
                />
              </Form.Group>
              <div className="w-100 forget-pass  mt-3">
                <Form.Check
                  type="checkbox"
                  id="default-checkbox"
                  label={t("log.head4")}
                />

                <Link to="/forget"> {t("log.head5")}</Link>
              </div>
              <div className="w-100 Link-email ">
                <Link>
                  <img src="./images/Facebook.svg" alt="" />
                </Link>
                <Link>
                  <img src="./images/Gmail.svg" alt="" />
                </Link>
              </div>

              <Button
                className="w-100 mt-3 btn-log"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handellogin();
                  dispatch(inc());
                }}
              >
                {t("log.log_btn")}
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 not text-center ">
          {t("log.pay_f3")} <Link to="/signup">{t("log.Sign")}</Link>
        </div>
      </section>
    </Container>
  );
}

export default Login;
