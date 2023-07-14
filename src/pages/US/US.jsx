import React from "react";
import "./us.css";
import shape5 from "../../assets/Group 48.png";

import { Navbar } from "../../components";
import { Footer } from "../../containers";
import prof from "../../assets/prof.svg";
import person from "../../assets/person.svg";
import home from "../../assets/home.svg";
import visa from "../../assets/visafinal.png";

import Fade from "react-reveal/Fade";
import economy from "../../assets/economy.svg";
import environment from "../../assets/environment.svg";
import wages from "../../assets/wages.svg";
import improve from "../../assets/improve.svg";
import request from "../../assets/request.svg";
import right from "../../assets/rightwavy.svg";
import bannerimg from "../../assets/Group_489.png";
import bulb from "../../assets/Group 480.svg";



const US = () => (
  <div className="us__main-container ">
    <Navbar />
    <div className="main__container">
      <div className="us__possiblity-main section__padding1">
        <div className="us__possibility " id="possibility">
          <div className="us__possibility-content">
            <Fade top>
              <h1 className="gradient__text">
                <span className="future"> US </span> Visas
              </h1>
            </Fade>
          </div>

          <div className="us__possibility-image">
            <Fade bottom>
              <img src={shape5} alt="possibility" />
            </Fade>
          </div>
        </div>

        <div className="us__section-intro" id="possibility">
          <div className="us__section-intro-content banner_content_div">
            <Fade bottom>
              <h1 className="gradient__text">
                The National Interest Waiver (NIW)
              </h1>
              <p>
                Program is available to foreign nationals of exceptional ability
                in the sciences, arts, or business, and advanced degreed
                professionals. The National Interest Waiver is a procedure to
                bypass the cumbersome labor certification process which
                ordinarily is a prerequisite in obtaining permanent residence
                through the EB2 employment-based green card category.
              </p>
            </Fade>
          </div>
        </div>

        <div
          className="us__section-help"
          style={
            {
              // backgroundImage: `url(${bannerimg})`,
              // backgroundRepeat: "no-repeat",
              // backgroundSize: "contain",
              // backgroundPositionY: "150px",
            }
          }
        >
          <div className="us__section-intro-content">
            <Fade bottom>
              <h1 className="gradient__text">How We Can Help?</h1>
              <p>
                FANUUN’s experienced immigration attorneys will prepare and file
                all the required documents for foreign
              </p>
            </Fade>
          </div>
          <Fade bottom>
            <div className="us__section-logo-container">
              <div className="container-a">
                <img src={prof} alt="prof" />
                <p>
                  Professionals with <br /> Advanced degrees
                </p>
              </div>
              <div className="container-a">
                <img src={person} alt="person" />
                <p>
                  People of exceptional <br /> ability
                </p>
              </div>
              <div className="container-a">
                <img src={home} alt="home" />
                <p>
                  U.S. sponsor applying for <br /> Permanent Residence
                </p>
              </div>
              <div className="container-a">
                <img src={visa} alt="visa" />
                <p>
                  On-demand visa options <br /> such as investors etc
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div
          className="us__section-ability"
          style={{
            backgroundImage: `url(${bannerimg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <div className="us__section-ability-content">
            <Fade bottom>
              <h1 style={{ color: "#060056" }}>
                People with Exceptional Ability
              </h1>
              <p style={{ marginLeft: "2rem" }}>
                To be classified as a person with exceptional ability, you must
                provide documented proof of at least three of the following:
              </p>

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
                      color: "#262453",
                    }}
                  >
                    A.
                  </p>
                  <p style={{ margin: 0, textAlign: "justify" }}>
                    An official academic record showing the alien has a degree,
                    diploma, certificate or similar award from a college,
                    university, school or other institution of learning relating
                    to the area of exceptional ability
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
                    B.
                  </p>
                  <p style={{ margin: 0 }}>
                    Letters documenting at least ten years of full-time
                    experience
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
                    C.
                  </p>
                  <p style={{ margin: 0 }}>
                    A license to practice the profession or certification for a
                    particular profession or occupation
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
                    D.
                  </p>
                  <p style={{ margin: 0 }}>
                    Evidence that you command a salary or other remuneration for
                    services which demonstrates exceptional ability
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
                    E.
                  </p>
                  <p style={{ margin: 0 }}>
                    Membership in professional associations
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
                    F.
                  </p>
                  <p style={{ margin: 0 }}>
                    Documents which prove recognition for achievements and
                    significant contributions to the industry or field by peers,
                    government entities, professional or business organizations
                  </p>
                </div>
              </div>
            </Fade>
          </div>

          <div className="us__section-ability-content div2">
            <Fade bottom>
              <p className="card_footer_div" style={{ marginLeft: "2rem" }}>
                If the above standards do not apply, the USCIS may also accept
                other comparable evidence of eligibility.
              </p>
            </Fade>
          </div>
        </div>
        <div className="us__section-intro">
          <div className="us__section-intro-content persons_main_div">
            <Fade bottom>
              <h1 className="gradient__text">
                People Holding Advanced Degrees
              </h1>
              <p style={{ width: "100%" }}>
                To be classified as a person holding an advanced degree, you
                must possess a master's degree or a bachelor's degree with at
                least five years progressive post-bachelor degree experience.
                <br /> Your Occupation Serves the National Interest The term
                "national interest" is not defined in law. However, the USCIS
                Office of Administrative Appeals has developed a list of factors
                to consider when applying the National Interest Test. Factors
                that may be considered in determining national interest include,
                but are not limited to:
              </p>
            </Fade>
          </div>
          {/* card  */}
          <Fade bottom>
            <div className="us__section-advance-container">
              <div
                className="container-b"
                style={{
                  backgroundImage: `url(${right}) `,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "bottom",
                }}
              >
                <img src={economy} alt="wages" width={100} />
                <p>
                  US economy <br /> improvement
                </p>
              </div>
              <div
                className="container-b"
                style={{
                  backgroundImage: `url(${right}) `,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "bottom",
                }}
              >
                <img src={wages} alt="wages" width={100} />
                <p>
                  Improving Wages and <br /> Working Conditions for <br /> U.S.
                  Workers
                </p>
              </div>
              <div
                className="container-b"
                style={{
                  backgroundImage: `url(${right}) `,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "bottom",
                }}
              >
                <img src={improve} alt="improve" width={100} />
                <p>
                  Improving Education and <br /> Training Programs for U.S.
                </p>
              </div>
              <div
                className="container-b"
                style={{
                  backgroundImage: `url(${right}) `,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "bottom",
                }}
              >
                <img src={environment} alt="environment" width={100} />
                <p>
                  Environmental <br /> improvement
                </p>
              </div>
              <div
                className="container-b"
                style={{
                  backgroundImage: `url(${right}) `,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "bottom",
                }}
              >
                <img src={request} alt="request" width={100} />
                <p>
                  Requests from Interested <br /> U.S. Government <br />
                  Agencies
                </p>
              </div>
            </div>
          </Fade>
          {/* card  */}
        </div>


        <div className="us_section-explore">
          <Fade bottom>
            <h1 className="heading-explore">
              What is Next to Explore?
            </h1>
            <div className="accordion-main">
              <div class="accordion" id="myAccordion">
            
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">What is the success rate of EB2 NIW approval?</button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                      <div class="card-body">
                        <p>The success rate of EB2 NIW approval varies depending on several factors, including the strength of the applicant's case, the complexity of the case, and the current workload of the USCIS. However, according to the USCIS, the overall approval rate for EB2 NIW petitions was 88.8% in fiscal year 2022.</p>
                      </div>
                    </div>
                  </div>
               
              
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button type="button" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">Is it difficult to get an EB2 NIW?</button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#myAccordion">
                      <div class="card-body">
                        <p>The difficulty of getting an EB2 NIW depends on the strength of your case. You have a good chance of success if you have strong qualifications and the evidence to support your case. However, if your case is weak, you may have difficulty getting approved.</p>
                      </div>
                    </div>
                  </div>
              
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">How do I apply for an EB2 NIW?</button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                      <div class="card-body">
                        <p>The application process for an EB2 NIW is as follows:
                          File Form I-140, Immigrant Petition for Alien Worker.
                          Submit supporting evidence, including letters of support from experts in your field,
                          publications, and other documentation that demonstrates your qualifications and the national
                          importance of your proposed endeavour
                          Pay the filing fees.
                          Wait for USCIS to adjudicate your case.</p>
                      </div>
                    </div>
                  </div>
                

              </div>
              <div class="accordion" id="myAccordion">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour">What forms are required for an EB2 NIW visa?</button>
                  </h2>
                  <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                    <div class="card-body">
                      <p>Form I-140, Immigrant Petition for Alien Worker
                        Form ETA-750B, Application for Alien Employment Certification
                        Supporting evidence letters from experts in your field, publications, and other documentation.
                        The filing fees for EB2 NIW vary depending on the country of application.</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button type="button" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseFive">Can I self-petition for EB2 NIW without a job offer?</button>
                  </h2>
                  <div id="collapseFive" class="accordion-collapse collapse show" data-bs-parent="#myAccordion">
                    <div class="card-body">
                      <p>Yes, one of the unique aspects of the EB-2 NIW category is that it allows individuals to self-petition without a job offer from a U.S. employer. This gives you the freedom to pursue your career goals independently.</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSix">How long does it take to process an EB2 NIW application?</button>
                  </h2>
                  <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                    <div class="card-body">
                      <p>The processing time for an EB2 NIW application can vary, but it typically takes between 12 and 18 months. However, the processing time can be longer if your case is complex or there are any delays in the adjudication process.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion" id="myAccordion">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSeven">Can I add a spouse to my Green Card application after my I-140 is submitted?</button>
                  </h2>
                  <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                    <div class="card-body">
                      <p>Yes, after your I-140 is submitted and approved, your family members (spouses and unmarried children under 21) can apply with you for an adjustment of status or immigrant Visa.</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button type="button" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseEight">Is the EB-2 NIW a good choice for Indians and Chinese?</button>
                  </h2>
                  <div id="collapseEight" class="accordion-collapse collapse show" data-bs-parent="#myAccordion">
                    <div class="card-body">
                      <p>An alternative option for applicants from these countries is the EB-1A category, which has current priority dates for all nationalities. Suppose you are ineligible for the EB-1A category. In that case, another approach is to apply for an EB-2 NIW to secure your priority date and potentially request an extension of your H-1B status while awaiting the availability of the Green Card. </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseNine">Does the EB-2 NIW give me work authorization?</button>
                  </h2>
                  <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                    <div class="card-body">
                      <p>The approval of an EB-2 NIW does not provide work authorization on its own. If you are currently in the U.S., it is important to ensure that you possess a valid work visa, such as an O-1, H-1B, or E-2, in order to work legally. Additionally, you can simultaneously file for an adjustment of status, which typically takes 5-6 months, to obtain work authorization. To determine the most suitable option for your situation, we recommend consulting with our team for personalized guidance.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion" id="myAccordion">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTen">
                    <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTen">What are the advantages of an EB2 NIW?</button>
                  </h2>
                  <div id="collapseTen" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                    <div class="card-body">
                      <p>There are several advantages to applying for an EB2 NIW, including:
                        You do not need a job offer to apply for an EB2 NIW.
                        The application process is typically faster than the labour certification
                        process
                        You are not subject to the annual numerical caps on employment-based
                        green cards</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingEleven">
                    <button type="button" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseEleven">What are the disadvantages of an EB2 NIW?</button>
                  </h2>
                  <div id="collapseEleven" class="accordion-collapse collapse show" data-bs-parent="#myAccordion">
                    <div class="card-body">
                      <p>The main disadvantage of an EB2 NIW is that the application process can be complex and time-consuming. You will need to gather significant evidence to support your case, and the process can take several years to complete.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>



        <div
          className="us__possibilitytop"
          id="possibility"
        // style={{
        //   backgroundImage: `url(${s1}) `,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "contain",
        // }}
        >
          <div className="us__left-text">
            <Fade left>
              <h1>Unique Knowledge and skills</h1>
              <p>
                They need unique knowledge and skills that set them apart from
                other professionals, and apply those qualities to activities
                that bring benefit to the nation and Influence the country.
              </p>
            </Fade>
          </div>
          <div className="us__right-image">
            <Fade right>
              <img src={bulb} alt="bulb" />
            </Fade>
          </div>
        </div>

        <div
          className="us__section-ability"
          style={{ borderColor: "white" }}
        >
          <div className="us__section-ability-content">
            <Fade bottom>
              <h1 style={{ color: "#060056" }}>
                US Start-Up Visa: FAQs
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
                    What are EB2 NIW 3 Prongs?
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
                    The EB-2 NIW (Employment-Based Second Preference National Interest Waiver) category requires applicants to demonstrate eligibility based on three prongs or criteria. These three prongs are used to determine if the applicant qualifies for the national interest waiver, allowing them to self-petition for a green card without the need for a job offer or labor certification.
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
                    What is EB2 NIW Premium Processing?
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
                    The USCIS has specified that premium processing is not available for employment-based immigrant petitions filed under the EB-2 NIW category. This means that EB-2 NIW petitions do not qualify for the premium processing service.
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
                    What is EB2 NIW Premium Processing Time?
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
                    Generally, USCIS processing times can range from several months to over a year for employment-based immigrant petitions. It is important to note that these are only estimates and processing times can change without prior notice.
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
                    What are EB2 NIW Requirements/ new requirements?
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
                    To qualify for EB-2 NIW, you must demonstrate exceptional ability in your field, show that your work is in the national interest of the United States, possess an advanced degree or exceptional ability, and meet other general eligibility requirements for employment-based immigration.
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
                    Can I self-petition for EB2 NIW without a job offer?
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
                    A: Yes, one of the unique aspects of the EB-2 NIW category is that it allows individuals to self-petition without a job offer from a U.S. employer. This gives you the freedom to pursue your career goals independently.
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
                    What form required for EB2 NIW visa from Pakistan?
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
                    The primary form required for the EB-2 NIW visa application from Pakistan is Form I-140, Immigrant Petition for Alien Worker. This form is used to petition the U.S. Citizenship and Immigration Services (USCIS) to classify you as an employment-based immigrant under the EB-2 NIW category.
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
                    What is EB2 NIW timeline 2023?
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
                    The processing times for EB-2 NIW petitions can vary and are influenced by factors such as USCIS workload, case complexity, and other external factors. It is recommended to regularly
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>

    {/* <Brand /> */}
    <Footer />
  </div>
);

export default US;
