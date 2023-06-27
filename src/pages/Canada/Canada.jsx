import React from "react";
import Fade from "react-reveal/Fade";
import "./canada.css";
import shape5 from "../../assets/Group 49.png";

import { Navbar } from "../../components";
import { Footer } from "../../containers";
import biz from "../../assets/Group 218.svg";
import min from "../../assets/minimum.svg";
import lang from "../../assets/language.svg";
import money from "../../assets/money.svg";
import back from "../../assets/backimage.svg";
import { Link } from "react-router-dom";
import { Info } from "../../components/info/Info";
import can1 from "../../assets/can-1.png";
import can2 from "../../assets/can-2.png";
import can3 from "../../assets/can-3.png";

import { WhyFanuun } from "./../../containers";
import FinancialRequirements from "../../components/financialRequirements/financialRequirements ";

const Canada = () => {
  const data = [
    "An amazing start-up ecosystem – large network of venture capitalists and investors",
    "Access to a global market",
    "Free trade agreements between Canada and the US.",
    "Canada ranks as one of the best in terms of quality of life",
    "Quick pathway to PR – in as little as 12 months.",
  ];
  const data2 = [
    "Step 1: Meeting the eligibility requirements.",
    "Step 2: Drafting a business plan.",
    "Step 3: Obtaining a Letter of Support (Loss) from a designated organization. ",
    "Step 4: Applying for Permanent Residence.",
  ];
  const data3 = [
    "Include information about your team members – their professional background and responsibilities.",
    "Explain your innovative business idea in a simple but persuasive manner.",
    "Add clear details about your financials – starting cost, burn rate, etc.",
    "Explain the present state of the business – idea phase? Product prototype phase?",
  ];
  return (
    <div className="canada-wrapper">
      <div className="canada__main-container">
        <Navbar />

        <div className="canada__possiblity-main section__padding1">
          <div className="canada__possibility " id="possibility">
            <div className="canada__possibility-content">
              <Fade left>
                <h1 className="gradient__text">
                  <span className="future"> Canada </span> Start-Up
                  <span className="future"> Visa</span>
                </h1>
              </Fade>
            </div>
            <div className="canada__possibility-image">
              <Fade bottom>
                <img src={shape5} alt="possibility" />
              </Fade>
            </div>
          </div>

          <div className="canada__section-ability ">
            <div className="canada__section-ability-content">
              <Fade top>
                <p className="banner_content_div">
                  The Canadian Start-Up Visa is designed to attract foreign
                  entrepreneurs with innovative business ideas. The program is
                  focused on providing support to entrepreneurs and innovative
                  startups with the potential for job creation and
                  competitiveness on a global scale.
                </p>
                <h1 style={{ color: "#060056" }}>
                  Eligibility for Canada Start-Up Visa
                </h1>
                <p
                  style={{
                    fontWeight: "bolder",
                    color: "rgb(6, 0, 86)",
                    fontSize: "18px",
                    fontFamily: "var(--font-family)",
                  }}
                >
                  Applying entrepreneurs must,
                </p>
              </Fade>
            </div>

            <div
              className="canada__section-help "
              style={{
                backgroundImage: `url(${back})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Fade bottom>
                <div className="canada__section-logo-container">
                  <div className="canada-container-a">
                    <div className="img-cont">
                      <img src={biz} alt="prof" />
                    </div>
                    <p>
                      Have a business that qualifies <br /> specified criteria
                      by the <br />
                      Canadian government.
                    </p>
                  </div>
                  <div className="canada-container-a">
                    <div className="img-cont">
                      <img src={min} alt="prof" />
                    </div>
                    <p>
                      Secure a minimum level of <br /> investment from a <br />
                      designated venture capital <br /> fund, angel investor
                      group,
                      <br /> or business incubator.
                    </p>
                  </div>
                  <div className="canada-container-a">
                    <div className="img-cont">
                      <img src={lang} alt="prof" />
                    </div>
                    <p>
                      Meet the language <br /> requirements.
                    </p>
                  </div>
                  <div className="canada-container-a">
                    <div className="img-cont">
                      <img src={money} alt="prof" />
                    </div>
                    <p>
                      Bring along enough <br /> money to settle <br /> yourself
                      and your <br />
                      dependents.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>

            <div className="canada-container ">
              <div
                className="canada__section-helpp "
                style={
                  {
                    // backgroundImage: `url(${right}) `,
                    // backgroundRepeat: "no-repeat",
                    // backgroundSize: "cover",
                    // backgroundPosition: "right bottom",
                  }
                }
              >
                <div className="canada__section-introo-content">
                  <Fade bottom>
                    <h1 className="gradient__text">How Can Fanuun Help?</h1>
                    <p>
                      Wondering whether you're eligible for the Canada Start-Up
                      Visa? <br /> We offer the best consultancy services to our
                      clients for Canada immigration.
                    </p>
                    <Link to="/contact">
                      <button>Reach out to Fannun Today</button>
                    </Link>
                  </Fade>
                </div>
              </div>
            </div>

            <div className="doc__container-feature sec__padding ">
              <Fade left>
                <div className="info__cont">
                  <Info
                    title="Canada Start-Up Visa: Benefits"
                    text={data}
                    isList={true}
                  />
                </div>
              </Fade>
              <Fade right>
                <div className="img-conta2">
                  <img src={can1} alt="document" />
                </div>
              </Fade>
            </div>

            <div className="doc__container-feature sec__padding ">
              <Fade left>
                <div className="info__cont">
                  <Info
                    title="Canada Start-Up Visa: The Process"
                    text={data2}
                    isList={true}
                  />
                </div>
              </Fade>
              <Fade right>
                <div className="img-conta2">
                  <img src={can2} alt="document" />
                </div>
              </Fade>
            </div>

            <div className="doc__container-feature sec__padding ">
              <Fade left>
                <div className="info__cont">
                  <Info
                    title="Drafting a Winning Business Plan"
                    text={data3}
                    isList={true}
                  />
                </div>
              </Fade>
              <Fade right>
                <div className="img-conta2">
                  <img src={can3} alt="document" />
                </div>
              </Fade>
            </div>
            {/* FAQ */}
            <FinancialRequirements />
            <div
              className="us__section-ability"
              style={{ borderColor: "white" }}
            >
              <div className="us__section-ability-content">
                <Fade bottom>
                  <h1 style={{ color: "#060056" }}>
                    Canada Start-Up Visa: FAQs
                  </h1>

                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: 5,
                      marginBottom: "2rem",
                    }}
                  >
                    <div style={{ display: "flex", gap: 10 }}>
                      <p
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          color: "#ed1b2a",
                        }}
                      >
                        Q.
                      </p>
                      <p
                        style={{
                          margin: 0,
                          textAlign: "justify",
                          color: "#060056",
                          fontWeight: "500",
                        }}
                      >
                        Is the Start-Up Visa a pathway for permanent residency?
                      </p>
                    </div>

                    <div style={{ display: "flex", gap: 10, marginBottom: 40 }}>
                      <p
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          color: "#262453",
                          margin: 0,
                          fontWeight: "500",
                        }}
                      >
                        A.
                      </p>
                      <p style={{ margin: 0 }}>
                        Yes. It is one of the quickest pathways, allowing
                        applicants to obtain PR within as little as 12 months.
                      </p>
                    </div>

                    <div style={{ display: "flex", gap: 10 }}>
                      <p
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          color: "#ed1b2a",
                          fontWeight: "500",
                        }}
                      >
                        Q.
                      </p>
                      <p
                        style={{
                          margin: 0,
                          textAlign: "justify",
                          color: "#060056",
                          fontWeight: "500",
                        }}
                      >
                        What is the application acceptance/approval rate for the
                        Start-Up Visa program?
                      </p>
                    </div>

                    <div style={{ display: "flex", gap: 10, marginBottom: 40 }}>
                      <p
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          color: "#262453",
                          margin: 0,
                        }}
                      >
                        A.
                      </p>
                      <p style={{ margin: 0 }}>
                        The Start-Up Visa program has a relatively high approval
                        rate of more than 75%.
                      </p>
                    </div>

                    <div style={{ display: "flex", gap: 10 }}>
                      <p
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          color: "#ed1b2a",
                        }}
                      >
                        Q.
                      </p>
                      <p
                        style={{
                          margin: 0,
                          textAlign: "justify",
                          color: "#060056",
                          fontWeight: "500",
                        }}
                      >
                        Do I need to apply for a work permit with the Start-Up
                        Visa?
                      </p>
                    </div>

                    <div style={{ display: "flex", gap: 10, marginBottom: 40 }}>
                      <p
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          color: "#262453",
                          margin: 0,
                        }}
                      >
                        A.
                      </p>
                      <p style={{ margin: 0 }}>
                        No, Start-Up Visa applicants do not need to apply for a
                        work permit. Although the option to apply for a
                        Temporary Work Permit is available to applicants.
                      </p>
                    </div>

                    <div style={{ display: "flex", gap: 10 }}>
                      <p
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          color: "#ed1b2a",
                        }}
                      >
                        Q.
                      </p>
                      <p
                        style={{
                          margin: 0,
                          textAlign: "justify",
                          color: "#060056",
                          fontWeight: "500",
                        }}
                      >
                        What is the processing time for the Start-Up Visa?
                      </p>
                    </div>

                    <div style={{ display: "flex", gap: 10, marginBottom: 40 }}>
                      <p
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          color: "#262453",
                          margin: 0,
                        }}
                      >
                        A.
                      </p>
                      <p style={{ margin: 0 }}>
                        The current processing time is around 36 months.
                      </p>
                    </div>

                    <div style={{ display: "flex", gap: 10 }}>
                      <p
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          color: "#ed1b2a",
                        }}
                      >
                        Q.
                      </p>
                      <p
                        style={{
                          margin: 0,
                          textAlign: "justify",
                          color: "#060056",
                          fontWeight: "500",
                        }}
                      >
                        Where can I find the list of designated organizations
                        for obtaining the Letter of Support?
                      </p>
                    </div>

                    <div style={{ display: "flex", gap: 10 }}>
                      <p
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          color: "#262453",
                          margin: 0,
                        }}
                      >
                        A.
                      </p>
                      <p style={{ margin: 0 }}>
                        The IRCC website lists designated organizations
                        (business incubators, angel investor networks, and
                        venture capital funds) for obtaining a Letter of
                        Support.
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
            {/* <WhyFanuun /> */}
          </div>
        </div>

        <div className="need_immigration_for_uk_main_div">
          <div className="need_immigration_for_uk_inner_div1">
            <p>
              Schedule an <span className="future"> Appointment </span>
            </p>

            <p
              style={{
                fontSize: "18px",
                fontWeight: 200,
                fontFamily: "Archivo",
                textAlign: "justify",
                color: "#000",
              }}
            >
              Schedule an appointment with Fanuun today for the best guidance
              and consultancy services for Canada immigration.
            </p>
          </div>

          <div className="need_immigration_for_uk_inner_div2">
            <Link to="/contact">
              <button
                style={{ height: "55px", borderRadius: "20px", border: "none" }}
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Canada;
