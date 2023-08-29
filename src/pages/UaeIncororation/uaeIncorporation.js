
import React, { useState, useRef } from "react";
import axios from "axios";
import "./uaeIncorporation.css";
import shape5 from "../../assets/incorporation.png";

import { Navbar } from "../../components";
import { Footer } from "../../containers";
import Fade from "react-reveal/Fade";
import inter from "../../assets/inadivisor.svg";
import incom from "../../assets/incom.svg";
import inreg from "../../assets/inreg.svg";
import incond from "../../assets/incond.svg";
import lower from "../../assets/Group 688.svg";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import withReactContent from "sweetalert2-react-content";
import {Helmet} from 'react-helmet'

const UaeIncorporation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [services, setService] = useState("");
  const MySwal = withReactContent(Swal);
  const captchaRef = useRef(null);

  function clearConsole() {
    setName("");
    setEmail("");
    setMessage("");
    setPhone("");
    setService("");
  }
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const onSubmit = async (e) => {
    const token = captchaRef.current.getValue();
    console.log(token);

    if (token) {
      var data = JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        message: message,
        services: services,
      });
      var config = {
        method: "post",
        url: "https://backend.fanuun.com:8000/api/user/addquery",

        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));

          return MySwal.fire({
            // title: <p style={{ fontFamily: "monospace" }}>Email Sent</p>,
            title: <h2 className="swal-css">Email Sent</h2>,
            icon: "success",
          });
        })
        .catch(function (error) {
          console.log(error);
        });
      clearConsole();
      captchaRef.current.reset();
    } else {
      return MySwal.fire({
        title: <h2 className="swal-css">Verify that you're not a robot</h2>,
        icon: "success",
      });
    }
  };
  return (
    <>
    <Helmet>
      <title>FANUUN | UaeIncorporation</title>
    </Helmet>
    <div className="uae__main-container">
      <Navbar />
      <div className="uae__incorporation-main  ">
        <div className="uae__incorporation" id="incorporation">
          <div className="uae__incorporation-content">
            <Fade top>
              <h1 className="gradient__text">
                <span className="future"> UAE Company </span>
                <br />
                Incorporation Services
                {/* <span className="future"> 5-Year </span> */}
                {/* Tourist Visa{" "} */}
              </h1>
            </Fade>
          </div>
          <div className="uae__incorporation-image">
            <Fade bottom>
              <img src={shape5} alt="incorporation" />
            </Fade>
          </div>
        </div>

        <div className="uae__section-incorporation">
          <div className="uae__section-incorporation-content">
            <Fade left>
              <p>
                FANUUN provides the best and most comprehensive guidance and
                support regarding company incorporation/formation in the United
                Arab Emirates. Our team possesses in-depth expertise in the
                essentials of the entire process and will ensure the successful
                incorporation of your business in the UAE!
              </p>
            </Fade>
          </div>
        </div>

        <div className="form-content-incorporation">
          <Fade left>
            <h1>How FANNUN Can Help You</h1>
            <p>Our comprehensive Company Formation Services include:</p>
          </Fade>
        </div>

        {/* Section 4  */}
        <div className="form__section-help-incorporation  ">
          <Fade bottom>
            <div className="form__section-logo-container">
              <div className="form-container-a-incorporation">
                <div className="sub-cont">
                  <div className="form-img-cont">
                    <img
                      src={inter}
                      alt="prof"
                      className="logo-help-incorporation"
                    />
                  </div>
                </div>
                <p>
                  Advisory services on procedures and local regulations, along
                  with compliant solutions.
                </p>
              </div>
              <div className="form-container-a-incorporation">
                <div className="sub-cont">
                  <div className="form-img-cont">
                    <img
                      src={inreg}
                      alt="prof"
                      className="logo-help-incorporation"
                    />
                  </div>
                </div>
                <p>
                  Registration completion assistance with relevant, local
                  authorities.
                </p>
              </div>

              <div className="form-container-a-incorporation">
                <div className="sub-cont">
                  <div className="form-img-cont">
                    <img
                      src={incom}
                      alt="prof"
                      className="logo-help-incorporation"
                    />
                  </div>
                </div>
                <p>
                  Due diligence and legal assistance in helping you obtain a
                  company license.
                </p>
              </div>
              <div className="form-container-a-incorporation">
                <div className="sub-cont">
                  <div className="form-img-cont">
                    <img
                      src={incond}
                      alt="prof"
                      className="logo-help-incorporation"
                    />
                  </div>
                </div>
                <p>
                  Conduct entity health checks with your organization to ensure
                  its legal and fiscal standing is adequate.
                </p>
              </div>
            </div>
          </Fade>
        </div>

        <div className="htag">
          <p className="htag-text">
            Schedule a <span style={{ color: "red" }}>consultation</span> with{" "}
            <span style={{ color: "red" }}>FANUUN</span> today to learn more
            about our services and how we can help you start your{" "}
            <span style={{ color: "red" }}>business</span> in the{" "}
            <span style={{ color: "red" }}>UAE!</span>
          </p>
          <div className="fanuun__cta-btn">
            <Link to="/contact">
              <button type="button">Contact Us</button>
            </Link>
          </div>
        </div>
        <div className="companyFormationText">
          <h1>
            {" "}
            <span style={{ color: "red" }}>FANUUN’s</span> Company Formation
            Visa Packages for <span style={{ color: "red" }}>UAE</span>{" "}
          </h1>
        </div>
        <div className="companyFormationSection">
          <div className="leftSectionFormation">
            <h2>One-Person Visa Packages</h2>
            <p>
              In these packages, ONE PERSON may obtain a visa and travel to the
              UAE on behalf of the business. Four different payment packages are
              available, in which the total amount may be paid in 4
              installments:
            </p>
            <ul>
              <li>One-year package: AED 16,500</li>
              <li>Three-year package: AED 39,600</li>
              <li>Five-year package: AED 61,800</li>
              <li>Ten-year package: AED 107,335</li>
            </ul>
            <h2>Two-Persons Visa Packages</h2>
            <p>
              In these packages, TWO PERSONS may obtain a visa and travel to the
              UAE on behalf of the business. Four different payment packages are
              available, in which the total amount may be paid in 4
              installments:
            </p>
            <ul>
              <li>One-year package: AED 20,000</li>
              <li>Three-year package: AED 48,000</li>
              <li>Five-year package: AED 75,000</li>
              <li>Ten-year package: AED 130,000</li>
            </ul>
            <h2>General Package Details</h2>
            <ul>
              <li>
                The above packages are all-inclusive with NO HIDDEN FEES and the
                visa being free for life as long as the company remains active.
              </li>
              <li>Visa renewal: Every 2 years with no extra cost.</li>
            </ul>
          </div>
          <div className="rightSectionFormation">
            <img src={lower} className="rightSectionFormationImg" />
          </div>
        </div>

        <div className="formFormationSection">
          <h1>Connect with Us</h1>
          <h4>
            Schedule a consultation with{" "}
            <span style={{ color: "red" }}>FANUUN</span> today to learn more
            about our amazing<span style={{ color: "red" }}>visa packages</span>{" "}
            and how we can help you start your business in the{" "}
            <span style={{ color: "red" }}>UAE!</span>
          </h4>
          <div className="fcontact__right-text">
            <Fade right>
              <div className="fcontact__section-form">
                <input
                  type="text"
                  className="form__input-fcontact"
                  placeholder="Full Name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <input
                  type="text"
                  className="form__input-fcontact"
                  placeholder="Email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>

                <textarea
                  type="text"
                  className="form__input-fcontact"
                  placeholder="Message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="fcontact__section-form">
                <input
                  type="text"
                  className="form__input-fcontact"
                  placeholder="Mobile No"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
                <input
                  type="text"
                  className="form__input-fcontact"
                  placeholder="Services interested in"
                  id="services"
                  value={services}
                  onChange={(e) => setService(e.target.value)}
                ></input>
                <br />
                <ReCAPTCHA
                  sitekey={process.env.REACT_APP_SITE_KEY}
                  onChange={onChange}
                  ref={captchaRef}
                />
                <button type="button" onClick={onSubmit}>
                  Submit
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );

}

export default UaeIncorporation