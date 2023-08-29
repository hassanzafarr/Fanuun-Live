import React from "react";
import "./blog.css";
import { Banner, Navbar } from "../../components";
import { Footer } from "../../containers";
import blogbanner from "../../assets/blog-banner.svg";
import blogimg1 from "../../assets/blog1-img.png";
import blogimg2 from "../../assets/blogimg2.png";
import sec2img from "../../assets/sec2img.png";
import guide_img from "../../assets/guide_img.png";
import bloge1 from "../../assets/Mask Group 38.png";
import bloge2 from "../../assets/Mask Group 39.png";
import bloge3 from "../../assets/Mask Group 40.png";
import bloge4 from "../../assets/Mask Group 41.png";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import CTA from "../../components/cta/CTA";
import BlogComp from "../../components/blog-comp/blog-comp";
import { Info } from "../../components/info/Info";
import can1 from "../../assets/last-sec.png";
import {Helmet} from 'react-helmet'

const Blog = () => {
  const data = [
    "With a diverse and robust economy, the UK offers businesspersons the opportunity to start a business in various sectors, such as tech.",
    "With the Start-Up visa, one of the significant advantages is that no investment funds are required. However, both visas require an endorsement from a UK body",
    "As a global hub of commerce and trade, the UK offers excellent networking and connectivity opportunities to entrepreneurs, both locally and internationally. With some of the best educational institutes in the world, such as Oxford. ",
    "Entrepreneurs will have access to a large pool of talented, multicultural, and educated individuals as potential employees.",
    "Applicants can bring their dependents along and work another job besides their business.",
  ];
  const data2 =
    "The UK offers two excellent business visa options: the Start-Up Visa and the Innovator Founder Visa. These visas allow entrepreneurs to establish an innovative business in the UK and stay there for 2-3 years.";
  return (
    <>
    <Helmet>
      <title>FANUUN | Blog</title>
    </Helmet>
    <div className="screening__main-container">
      <Navbar />
      <div className="main__container">
        <div className="section__container section__padding1">
          <div className="banner-container ">
            <Banner text="Our " textred="Blog" img={blogbanner} />
          </div>
          <Fade bottom>
            <div className="blog_section-content sec__padding">
              {/* Section One */}
              {/* Blog1 */}
              <div className="blog-sec-one">
                <div className="blog-read">
                  <div className="bimg-cont">
                    <img src={blogimg1} alt="" />
                  </div>
                  <div className="blog-caption">
                    <h1>
                      Updates from the Canadian Immigration Policy & Plan 2023
                    </h1>
                    <p>
                      Canada is targeting 410,000 to 505,000 new permanent
                      residents in the year 2023, according to the 2023–2025
                      Immigration Levels Plan.
                    </p>
                    <Link to="/contact">
                      <button>Read More</button>
                    </Link>
                  </div>
                </div>
                {/* Blog2 */}
                <div className="blog-read">
                  <div className="bimg-cont">
                    <img src={blogimg2} alt="" />
                  </div>
                  <div className="blog-caption">
                    <h1>
                      Emphasis on Visas for Advanced
                      Degree Holders & Skilled Workers
                    </h1>
                    <p>
                      The Biden administration plans to increase the number of EB-2 visas available each year. It also plans to make it easier for foreign nationals with advanced degrees to qualify for EB-2 visas.
                    </p>
                    <Link to="/contact">
                      <button>Read More</button>
                    </Link>
                  </div>
                </div>

                <div className="side-panel ">
                  <div>
                    <h1 style={{ fontSize: 17, lineHeight: 2 }}>
                      Are you looking to Invest in the US?
                    </h1>
                    <p>
                      There's some good news for businesspersons looking to invest in the US via the EB-5 visa. Based on the EB-5 Reform and Integrity Act 2022, reserved visas known as 'Set-Aside Visa' have been introduced to reduce the process's waiting time for investors from high-demand countries.
                    </p>

                  </div>
                  <div>
                    <h1 style={{ fontSize: 17, lineHeight: 2 }}>
                      FANUUN: Your Partner in Immigration
                    </h1>
                    <p>
                      We've helped countless clients successfully immigrate to the US, Canada, and beyond.
                    </p>
                    <Link to="/contact">
                      <button>Read More</button>
                    </Link>
                  </div>
                </div>
                {/* Section One */}
              </div>

              {/* Section Two */}
              <div className="blog-sec-two sec__padding ">
                <div className="blog-read-lg">
                  <div className="bimg-cont-lg">
                    <img src={sec2img} alt="" />
                  </div>
                  <div className="blog-caption">
                    <h1 style={{ color: 'black', fontSize: '26px', lineHeight: '36px' }}>
                      Preparing a Business Visa Application that’s bound to
                      succeed!
                    </h1>
                    <p className="Familiarization">
                      Familiarization with the Requirements – The Ideal Starting Point
                    </p>
                    <p>
                      Each country has specific requirements for its investor or
                      startup business visa programs.
                    </p>
                    <Link to="/contact">
                      <button>Read More</button>
                    </Link>
                  </div>
                </div>

                <div className="blog-read">
                  <div className="bimg-cont">
                    <img src={guide_img} alt="" />
                  </div>
                  <div className="blog-caption">
                    <h1>Let the Experts Guide You!</h1>
                    <p>
                      The visa application process is a complex matter. It is
                      always best to seek expert help when applying for any visa
                      application, especially for a business visa application
                      owing to the added requirements.
                    </p>
                    <Link to="/contact">
                      <button>Read More</button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Section Two */}
              {/* Section Three */}
              <Fade bottom>
                <div className="blog-sec-three sec__padding ">
                  <BlogComp
                    imgg={bloge1}
                    caption="Language Proficiency Varies with Immigration Programs"
                    readtext="One key aspect to note is that the language proficiency required varies from immigration program to program and country to country."
                  />
                  <BlogComp
                    imgg={bloge2}
                    caption="Navigating the Intricacies of
                  Employment-Based Visas"
                    readtext="Employment-based visas, or work visas as commonly known, are among the most popular visa categories. "
                  />
                  <BlogComp
                    imgg={bloge3}
                    caption="Are you applying for a Business
                  Visa? Here’s some advice"
                    readtext="While the dos and don’ts and best practices related to applying for a business visa generally vary from one country to another."
                  />
                  <BlogComp
                    imgg={bloge4}
                    caption="Getting a Job Offer"
                    readtext="Even though getting a job offer is a requirement for some Express Entry programs, such as the Federal Skilled Workers Program"
                  />
                </div>
              </Fade>
              {/* Section Three */}
              <div className="doc__container-feature sec__padding ">
                <Fade left>
                  <div className="info__cont">
                    <Info
                      title="The UK Start-Up & Innovator Founder Visas"
                      text={data2}
                      isList={false}
                    />
                    <Info text={data} isList={true} />
                  </div>
                </Fade>
                <Fade right>
                  <div className="blog-img-cont">
                    <img src={can1} alt="document" />
                  </div>
                </Fade>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <CTA htag="Contact " red="FANUUN" htag2="to schedule a consultation" />
      <Footer />
    </div>
    </>
  );
};

export default Blog;
