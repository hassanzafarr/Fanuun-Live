import React from "react";
import "./blog.css";
import { Banner, Navbar } from "../../components";
import { Footer } from "../../containers";
import blogbanner from "../../assets/blog-banner.svg";
import blogimg1 from "../../assets/blog1-img.png";
import blogimg2 from "../../assets/blogimg2.png";
import sec2img from "../../assets/sec2img.png";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import CTA from "../../components/cta/CTA";
import BlogComp from "../../components/blog-comp/blog-comp";

const Blog = () => {
  return (
    <div className="screening__main-container">
      <Navbar />
      <div className="main__container">
        <div className="section__container section__padding1">
          <div className="banner-container ">
            <Banner text="Blog " textred="Policy" img={blogbanner} />
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

                <div className="side-panel ">
                  <div>
                    <h1 style={{ fontSize: 17, lineHeight: 2 }}>
                      Updates from the Canadian Immigration Policy & Plan 2023
                    </h1>
                    <p>
                      There's some good news for businesspersons looking to
                      invest in the US via the EB-5 visa. Based on the EB-5
                      Reform and Integrity Act 2022.
                    </p>
                    <Link to="/contact">
                      <button>Read More</button>
                    </Link>
                  </div>
                  <div>
                    <h1 style={{ fontSize: 17, lineHeight: 2 }}>
                      FANUUN: Your Partner in Immigration
                    </h1>
                    <p>
                      We've helped countless clients successfully immigrate to
                      the US, Canada, and beyond, and we are committed to
                      providing high-quality consultancy services to each
                      client.
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

                <div className="blog-read">
                  <div className="bimg-cont">
                    <img src={blogimg2} alt="" />
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
              </div>
              {/* Section Two */}
              {/* Section Three */}
              <div className="blog-sec-three sec__padding ">
                <BlogComp
                  imgg={blogimg2}
                  caption="Language Proficiency Varies with Immigration Programs"
                  readtext="One key aspect to note is that the language proficiency required varies from immigration program to program and country to country."
                />
                <BlogComp
                  imgg={blogimg2}
                  caption="Language Proficiency Varies with Immigration Programs"
                  readtext="One key aspect to note is that the language proficiency required varies from immigration program to program and country to country."
                />
                <BlogComp
                  imgg={blogimg2}
                  caption="Language Proficiency Varies with Immigration Programs"
                  readtext="One key aspect to note is that the language proficiency required varies from immigration program to program and country to country."
                />
                <BlogComp
                  imgg={blogimg2}
                  caption="Language Proficiency Varies with Immigration Programs"
                  readtext="One key aspect to note is that the language proficiency required varies from immigration program to program and country to country."
                />
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <CTA htag="Contact " red="FANUUN" htag2="to schedule a consultation" />
      <Footer />
    </div>
  );
};

export default Blog;
