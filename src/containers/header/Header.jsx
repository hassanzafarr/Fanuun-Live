import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/banner-image.png";
import "./header.css";
import Fade from "react-reveal/Fade";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slider4icon1 from "../../assets/slider_banner/saudi-arabia-logo-B1987125DE-seeklogo.com.png";
import slider4icon2 from "../../assets/slider_banner/united-arab-png.png";

const Header = () => {
  return (
    <>
      {/* <div className="immi__header-content">
      <Fade bottom>
        <h1 className="gradient__text">
          The <span className="future">art</span> of <br />
          immigration
        </h1>
        <p>
          Facilitating the adaptation, integration, and pursuit of <br />
          possiblities of immigrants
        </p>
      </Fade>
      <div className="immi__header-content__input">
        <Fade bottom>
          <button type="button">Calculate Your Chances</button>
        </Fade>
      </div>
    </div> */}

      <div className="slider_banner">
        <Slide
        // autoplay={true}
        // infinite={true}
        // easing={"linear"}
        // transitionDuration={2000}
        >
          <div className="each-slide-effect">
            <div
              className="slider_main_div"
              id="slider1"
              // style={{
              //   backgroundImage: `url(${slider1})`,
              // }}
            >
              <div className="slide_main_content_div">
                <div className="slider_left_div">
                  <h1>
                    The <span className="future"> Art </span> Of <br />
                    Immigration
                  </h1>
                  <p>
                    Facilitating the adaptation, integration, and pursuit of
                    <br /> possiblities of immigrants
                  </p>
                  <Link to="/solutions">
                    <button> Immigration Opportunities </button>
                  </Link>
                </div>

                <div className="slider_right_div"></div>
              </div>
            </div>
          </div>
          <div className="each-slide-effect">
            <div
              className="slider_main_div"
              id="slider2"
              // style={{
              //   backgroundImage: `url(${slider2})`,
              // }}
            >
              <div className="slide_main_content_div">
                <div className="slider_left_div">
                  <h1>Job Seeker Visa in Portugal </h1>
                  <p>
                    Explore employment & residential opportunities in Portugal
                    with FANUUN
                    {/* <br /> possiblities of immigrants */}
                  </p>
                  <Link to="/portugal">
                    <button> More Details </button>
                  </Link>
                </div>

                <div className="slider_right_div"></div>
              </div>
            </div>
          </div>
          <div className="each-slide-effect">
            <div
              className="slider_main_div"
              id="slider3"
              // style={{
              //   backgroundImage: `url(${slider3})`,
              // }}
            >
              <div className="slide_main_content_div">
                <div className="slider_left_div">
                  <h1>
                    {" "}
                    5 Year Multiple Entry <br /> Visa for UAE
                  </h1>
                  <p>
                    Enter any place in UAE with this five-year tourist Visa
                    consultation provided by FANUUN
                    {/* <br /> possiblities of immigrants */}
                  </p>
                  <Link to="/uae">
                    <button> More Details </button>
                  </Link>
                </div>

                <div className="slider_right_div"></div>
              </div>
            </div>
          </div>
          <div className="each-slide-effect">
            <div
              className="slider_main_div"
              id="slider4"
              // style={{
              //   backgroundImage: `url(${slider4})`,
              // }}
            >
              <div className="slide_main_content_div">
                <div className="slider_left_div">
                  <h1>
                    Unparalleled Expertise of <br />
                    Company Formation in <br />
                    <span style={{ color: '#13663C', }}> KSA </span> &
                    <span className="future"> UAE </span>
                  </h1>
                  <div className="slider4_inner_icon_div">
                    <img src={slider4icon1} alt="" />
                    <img src={slider4icon2} alt="" />
                  </div>
                  <Link to="/formation">
                    <button> Read More </button>
                  </Link>
                </div>

                <div className="slider_right_div"></div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
};

export default Header;
