import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Forget() {
  const { t, i18n } = useTranslation();

  const navegate = useNavigate();
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
          <h3>{t("log.head")}</h3>
        </button>

        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">{t("Forgot.head2")}</h2>
            <p className="text-center ">{t("Forgot.head3")}</p>
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
                <div className="or-line">
                  <span className="line"></span>
                  <span className="or">OR</span>
                </div>
                <Form.Control
                  id="phone"
                  type="number"
                  required
                  placeholder="Phone number"
                />
              </Form.Group>

              <Button className="w-100 mt-3 btn-log" type="submit">
                {t("Forgot.Forgot_btn")}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </section>
    </Container>
  );
}

export default Forget;
