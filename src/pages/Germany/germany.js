import React from "react";
import "./germany.css";
import shape5 from "../../assets/germany.png";
import back from "../../assets/backimage.svg";
import { Navbar } from "../../components";
import { Footer } from "../../containers";
import Fade from "react-reveal/Fade";
import freedom from "../../assets/generalIcons/1.svg";
import global from "../../assets/generalIcons/2.svg";
import home from "../../assets/generalIcons/3.svg";
import fast from "../../assets/generalIcons/4.svg";
import lower from "../../assets/interview.svg";
import seeker from "../../assets/seeker.svg";
import Registration from "../../assets/generalIcons/6.svg";
import Documents from "../../assets/generalIcons/7.svg";
import resume from "../../assets/resume.svg";
import passport from "../../assets/passport.svg";
import VisaIssuance from "../../assets/generalIcons/10.svg";
import application from "../../assets/application.svg";
import letter from "../../assets/letter.svg";
import insurance from "../../assets/insurance.svg";
import financial from "../../assets/financial.svg";
import paymant from "../../assets/paymant.svg";



import { CTA } from "./../../components";
import { Link } from "react-router-dom";

const GERMANY = () => {
  return (
    <div className="germany__main-container">
      <Navbar />
      <div className="main__container">
        <div className="uk__possiblity-main   ">
          <div className="germany__possiblity-main  ">
            <div className="germany__possibility" id="possibility">
              <div className="germany__possibility-content">
                <Fade top>
                  <h1 className="gradient__text">
                    <span className="future"> Germany </span> Job Seeker{" "}
                    <span className="future"> Visa</span>
                  </h1>
                </Fade>
              </div>
              <div className="germany__possibility-image">
                <Fade bottom>
                  <img src={shape5} alt="possibility" />
                </Fade>
              </div>
            </div>

            <div className="germany__section-ability  ">
              <div className="germany__section-ability-content">
                <Fade left>
                  <p>
                    The Germany Job Seeker Visa is an excellent visa option that
                    lets applicants stay in Germany for six months and look for
                    employment opportunities within the country. Once the
                    applicant has successfully obtained a job, they may apply
                    for a work visa and residence permit as well!
                  </p>
                </Fade>
              </div>
            </div>

            <div className="jobSeekerDivgermany">
              <div className="jobSeekerSubDivGermany">
                <div className="jobSeekerLeftSectiongermany">
                  <h1 className="jobHeadinggermany">Eligibility</h1>
                  <ul className="paraSeekerDiv">
                    <li className="paraSeeker"> Age: 18 years+</li>
                    <li className="paraSeeker">
                      {" "}
                      Education: Bachelors or Masters Degree
                    </li>
                    <li className="paraSeeker"> Experience: Minimum 5 years</li>
                    <li className="paraSeeker"> Proof of Financial Ability</li>
                  </ul>
                </div>
                <div className="jobSeekerRightSectiongermany">
                  <img src={seeker} className="seekerImggermany" alt="seeker" />
                </div>
              </div>
            </div>

            <div className="generalProcessDivgermany">
              <div className="headindDivGenerl">
                <h1 className="jobHeadinggermany">Documents Required</h1>
              </div>
              <div className="generalProcessSubDivgermany">
                <div className="leftSectionGeneralgermany">
                  <h3 className="subHeadingGeneralGermany">
                    Personal Documents - birth certificate, marriage certificate
                    if applicable, etc.
                  </h3>
                </div>
                <div className="rightSectionGeneralgermany">
                  <img
                    src={Registration}
                    className="rightSectionImggermany1"
                    alt="register"
                  />
                </div>
              </div>
              <div className="generalProcessSubDivgermany">
                <div className="leftSectionGeneralgermany">
                  <h3 className="subHeadingGeneralGermany">
                    Academic Documents
                  </h3>
                </div>
                <div className="rightSectionGeneralgermany">
                  <img
                    src={Documents}
                    className="rightSectionImggermany"
                    alt="img"
                  />
                </div>
              </div>
              <div className="generalProcessSubDivgermany">
                <div className="leftSectionGeneralgermany">
                  <h3 className="subHeadingGeneralGermany">Resume/C.V.</h3>
                </div>
                <div className="rightSectionGeneralgermany">
                  <img
                    src={resume}
                    className="rightSectionImggermany"
                    alt="img"
                  />
                </div>
              </div>
              <div className="generalProcessSubDivgermany">
                <div className="leftSectionGeneralgermany">
                  <h3 className="subHeadingGeneralGermany">Passport</h3>
                </div>
                <div className="rightSectionGeneralgermany">
                  <img
                    src={passport}
                    className="rightSectionImggermany"
                    alt="img"
                  />
                </div>
              </div>
              <div className="generalProcessSubDivgermany">
                <div className="leftSectionGeneralgermany">
                  <h3 className="subHeadingGeneralGermany">
                    THREE Passport Sized Photographs
                  </h3>
                </div>
                <div className="rightSectionGeneralgermany">
                  <img
                    src={VisaIssuance}
                    className="rightSectionImggermany"
                    alt="img"
                  />
                </div>
              </div>
              <div className="generalProcessSubDivgermany">
                <div className="leftSectionGeneralgermany">
                  <h3 className="subHeadingGeneralGermany">
                    TWO Filled Application Forms
                  </h3>
                </div>
                <div className="rightSectionGeneralgermany">
                  <img
                    src={application}
                    className="rightSectionImggermany"
                    alt="img"
                  />
                </div>
              </div>
              <div className="generalProcessSubDivgermany">
                <div className="leftSectionGeneralgermany">
                  <h3 className="subHeadingGeneralGermany">
                    Cover Letter for Application
                  </h3>
                </div>
                <div className="rightSectionGeneralgermany">
                  <img
                    src={letter}
                    className="rightSectionImggermany"
                    alt="img"
                  />
                </div>
              </div>
              <div className="generalProcessSubDivgermany">
                <div className="leftSectionGeneralgermany">
                  <h3 className="subHeadingGeneralGermany">
                    Travel Health Insurance with Proof
                  </h3>
                </div>
                <div className="rightSectionGeneralgermany">
                  <img
                    src={insurance}
                    className="rightSectionImggermany"
                    alt="img"
                  />
                </div>
              </div>
              <div className="generalProcessSubDivgermany">
                <div className="leftSectionGeneralgermany">
                  <h3 className="subHeadingGeneralGermany">
                    Proof of Adequate Financial Ability
                  </h3>
                </div>
                <div className="rightSectionGeneralgermany">
                  <img
                    src={financial}
                    className="rightSectionImggermany"
                    alt="img"
                  />
                </div>
              </div>
              <div className="generalProcessSubDivgermany">
                <div className="leftSectionGeneralgermany">
                  <h3 className="subHeadingGeneralGermany">
                    Payment Confirmation of Visa Fee
                  </h3>
                </div>
                <div className="rightSectionGeneralgermany">
                  <img
                    src={paymant}
                    className="rightSectionImggermany"
                    alt="img"
                  />
                </div>
              </div>
            </div>

            <div className="germany_section_helpp_main_div">
              <div className="germany__section-helpp">
                <div className="germany__section-introo-content ">
                  <Fade bottom>
                    <h1 className="gradient__text">Note</h1>
                    <ul>
                      <li>
                        The respective German Embassy/Consulate has the right to
                        ask for additional documentation.
                      </li>
                      <li>
                        Some bonus documents that aren’t required but help build
                        a stronger case are language certificates and letters of
                        recommendation.
                      </li>
                    </ul>
                    <Link to="/contact">
                      <button>
                       Reach out to Fannun Today
                      </button>
                    </Link>
                  </Fade>
                </div>
              </div>
            </div>

            <div
              className="germany__section-help"
              style={{
                backgroundImage: `url(${back})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Fade bottom>
                <h1 className="generalHeading">General Details</h1>
                <div className="germany__section-logo-container">
                  <div className="germany-container-a">
                    <div className="germany-img-cont-germany">
                      <img src={home} alt="prof" />
                    </div>
                    <p>Completing and Submitting the Visa Application</p>
                  </div>
                  <div className="germany-container-a">
                    <div className="germany-img-cont1germany">
                      <img src={freedom} alt="prof" className="" />
                    </div>
                    <p>Making Visa Appointment</p>
                  </div>
                  <div className="germany-container-a">
                    <div className="germany-img-cont1germany">
                      <img src={fast} alt="prof" />
                    </div>
                    <p>Completing Required Documentation</p>
                  </div>
                  <div className="germany-container-a">
                    <div className="germany-img-cont3germany">
                      <img src={lower} alt="prof" />
                    </div>
                    <p>Interview</p>
                  </div>
                  <div className="germany-container-a">
                    <div className="germany-img-cont2germany">
                      <img src={global} alt="prof" />
                    </div>
                    <p>Submitting Visa Fees</p>
                  </div>
                </div>
              </Fade>
            </div>

            <div className="applySection">
              <div className="subDivApplySection">
                <h1>
                  Schedule a{" "}
                  <span style={{ color: "#ee0324" }}>consultation</span>{" "}
                  appointment <span style={{ color: "#ee0324" }}>TODAY</span>{" "}
                  with us and learn more about{" "}
                  <span style={{ color: "#ee0324" }}>how</span> we can help you{" "}
                  <span style={{ color: "#ee0324" }}>apply </span>
                  for the{" "}
                  <span style={{ color: "#ee0324" }}>
                    Germany Job Seeker
                  </span>{" "}
                  Visa!
                </h1>
                <Link to="/contact" className="applyButton">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default GERMANY