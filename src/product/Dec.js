import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

function Dec() {
  const { t, i18n } = useTranslation();
  const dec1 = useRef();
  const dec2 = useRef();
  const part1 = useRef();

  const part2 = useRef();
  useEffect(() => {
    part2.current.style.display = "none";
  }, []);

  const handeldec = (e) => {
    e.target.className = "activebtn";
    dec2.current.className = "opcolor";

    part2.current.style.display = "none";
    part1.current.style.display = "flex";
  };
  const handeldec2 = (e) => {
    e.target.className = "activebtn";

    dec1.current.className = "opcolor";

    part1.current.style.display = "none";
    part2.current.style.display = "flex";
  };

  return (
    <>
      <div className="dec">
        <div className="container">
          <div className="headbtn">
            <button
              id="dec"
              ref={dec1}
              onClick={(e) => handeldec(e)}
              className="activebtn"
            >
              {" "}
              {t("ts.Description")}
            </button>
            <button
              id="rev"
              ref={dec2}
              onClick={(e) => handeldec2(e)}
              className="opcolor"
            >
              {t("ts.Reviews")} (2)
            </button>
          </div>

          <div className="part" ref={part1} id="part">
            <div className="part11">
              <img
                src="./images/noun_description_192324.svg"
                className="iconimg"
                alt="iconimg"
              />
              <h2>Details and product description</h2>
              <p>
                White Summer Vibes T-shirt in the uiKit line with a colorful
                print. Made of jersey cotton. T-shirt fits perfectly with jeans,
                pants or shorts.
              </p>
            </div>
            <div className="part22">
              <img
                src="./images/outline(ใช้ส่ง).svg"
                className="iconimg"
                alt="iconimg"
              />
              <h2>Material(s) and care</h2>
              <div>
                <p>Body: 98% COTTON - 2% ELASTANE</p>
                <img src="./images/image 2.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="part2" ref={part2} id="part2">
            <div className="rat">
              <div className="degrat">
                <div className="value">
                  <h2>4.5</h2>
                  <div className="stars">
                    <img src="./images/noun_Star_1822860.svg" alt="" />
                    <img src="./images/noun_Star_1822860.svg" alt="" />
                    <img src="./images/noun_Star_1822860.svg" alt="" />
                    <img src="./images/noun_Star_1822860.svg" alt="" />
                    <img src="./images/noun_Star_1822861.svg" alt="" />
                  </div>
                  <div className="numrat">
                    <img src="./images/noun_profile_1287413.svg" alt="" />
                    <p>81 all opinions</p>
                  </div>
                </div>
                <div className="svalue">
                  <div className="one">
                    <img src="./images/noun_Star_1822860.svg" alt="" />
                    <p>1</p>
                    <span></span>
                  </div>
                  <div className="one">
                    <img src="./images/noun_Star_1822860.svg" alt="" />
                    <p>2</p>
                    <span></span>
                  </div>
                  <div className="one">
                    <img src="./images/noun_Star_1822860.svg" alt="" />
                    <p>3</p>
                    <span className="s14"></span>
                  </div>
                  <div className="one">
                    <img src="./images/noun_Star_1822860.svg" alt="" />
                    <p>4</p>
                    <span className="s24"></span>
                  </div>
                  <div className="one">
                    <img src="./images/noun_Star_1822860.svg" alt="" />
                    <p>5</p>
                    <span className="s113"></span>
                  </div>
                </div>
              </div>
              <button>ADD OPINION</button>
            </div>
            <div className="man">
              <div className="man1">
                <img src="./images/Ellipse 135.svg" alt="" />
                <div className="about">
                  <h2>John Doe</h2>
                  <div className="stars">
                    <img src="./images/noun_Star_1822860.svg" alt="" />
                    <img src="./images/noun_Star_1822860.svg" alt="" />
                    <img src="./images/noun_Star_1822860.svg" alt="" />
                    <img src="./images/noun_Star_1822860.svg" alt="" />
                    <img src="./images/noun_Star_1822861.svg" alt="" />
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>
              <div className="man1">
                <img src="./images/Ellipse 136.svg" alt="" />
                <div className="about">
                  <h2>John Doe</h2>
                  <div className="stars">
                    <img src="./images/noun_Star_1822860.svg" alt="" />
                    <img src="./images/noun_Star_1822860.svg" alt="" />
                    <img src="./images/noun_Star_1822860.svg" alt="" />
                    <img src="./images/noun_Star_1822860.svg" alt="" />
                    <img src="./images/noun_Star_1822861.svg" alt="" />
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>
              <div className="man1">
                <img src="./images/Ellipse 137.svg" alt="" />
                <div className="about">
                  <h2>John Doe</h2>
                  <div className="stars">
                    <img src="./images/noun_Star_1822860.svg" alt="" />
                    <img src="./images/noun_Star_1822860.svg" alt="" />
                    <img src="./images/noun_Star_1822860.svg" alt="" />
                    <img src="./images/noun_Star_1822860.svg" alt="" />
                    <img src="./images/noun_Star_1822861.svg" alt="" />
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dec;
