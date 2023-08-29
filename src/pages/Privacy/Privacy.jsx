import React from "react";
import "./privacy.css";
import { Navbar } from "../../components";
import { Footer } from "../../containers";

import Banner from "../../components/banner/Banner";
import privacy from "../../assets/privacy.svg";
import docimg from "../../assets/policy.png";

import { Info } from "../../components/info/Info";
import CTA from "../../components/cta/CTA";
import Fade from "react-reveal/Fade";
import {Helmet} from 'react-helmet'

const Privacy = () => {
  const data =
    "We may collect basic information about our clients, such as name and contact information, through account creation, interests, and preferences, to provide a personalized experience.";

  const data2 =
    "We shall not insist on giving out any sensitive information. Considering international law, the data provided to us IS NOT sold, lent, leased, or shared in any way. However, information may be shared with any governmental institution that, within its lawful authority, requires information to investigate any unlawful activity or other legal matter.";
  const data3 =
    "Financial details regarding credit or debit cards are not shared. As mentioned earlier, based on the regulations of international law, data IS NOT sold, lent, leased, or shared.";

  const data4 =
    "Cookies are pieces of information that a website may place on your computer for enhancing and customizing your communication and interaction with it. We may use cookies to customize your visit and deliver content similar to your interest on FANUUN's website.";
  const data5 =
    "Please keep checking the policy periodically to ensure you are satisfied with any potential changes that occur occasionally.";
  const data6 = [
    "The term `FANUUN`, `us`, and `we` refers to the owners of this website. `You`` refers to our clients.",
    "The contents of our web pages are for your general information and guidance. These are subject to change and modification.",
    "Neither we nor any third parties give any guarantees as to the information's accuracy, completeness, or timeliness. We exclude liability for any inaccuracies or errors to the extent legally permissible",
    "The website contains material owned and/or licensed by FANUUN. Any reproduction of the material is prohibited except per the copyright notice included in these terms and conditions",
    "All trademarks reproduced in this website, which are not the property of or licensed to the operator, are acknowledged on the website.",
    "Unauthorized use of the website or its content may provide grounds for a claim for damages and/or a criminal offence",
    "Occasionally, we may provide links to other websites for your convenience and guidance. However, we do not take this as an endorsement of these websites nor take any responsibility for their content. Additionally, we do not take any responsibility for the protection and privacy of your information on such websites. Please refer to the privacy statements of these websites for information regarding the same.",
  ];
  const data8 = [
    "By accessing and using our website, you agree to the contents of this policy. You also acknowledge that FANUUN has the right to change, add, modify, or omit portions from our policy at our discretion.",
  ];
  return (
    <>
    <Helmet>
      <title>FANUUN | Privacy Policy</title>
    </Helmet>
    <div className="screening__main-container">
      <Navbar />
      <div className="main__container">
        <div className="section__padding1">
          <div className="section__container">
            <div className="banner-container ">
              <Banner text="Privacy " textred="Policy" img={privacy} />
            </div>
            <Fade bottom>
              <div className="screen__section-ability-content sec__padding">
                <p>
                  Your privacy is of the highest priority to us. To ensure that
                  your privacy is always protected, we adhere to the following
                  privacy policy based on international laws. Whenever your
                  information is requested, it will be according to this policy.
                </p>
              </div>
            </Fade>
            <div className="privacy__container-feature sec__padding ">
              <Fade left>
                <div className="info__cont">
                  <Info title="What We Keep" text={data} isList={false} />
                  <Info title="What We Share" text={data2} isList={false} />
                  <Info
                    title="What We Do Not Share"
                    text={data3}
                    isList={false}
                  />
                  <Info title="Cookies" text={data4} isList={false} />
                  <Info
                    title="Modification In Policy"
                    text={data5}
                    isList={false}
                  />
                </div>
              </Fade>
              <Fade right>
                <div className="img-cont2">
                  <img src={docimg} alt="document" />
                </div>
              </Fade>
            </div>
            <div className="info__container sec__padding ">
              <Fade right>
                <div className="info__container-feature ">
                  <Info
                    title="Terms and Conditions"
                    text={data6}
                    isList={true}
                  />
                </div>
              </Fade>
            </div>
          </div>

          <div className="privacy__container-feature sec__padding ">
            <Info
              title="Acceptance Of Our Policy "
              text={data8}
              isList={false}
            />
          </div>
        </div>
      </div>
      <CTA htag="Contact " red="FANUUN" htag2="to schedule a consultation" />
      <Footer />
    </div>
    </>
  );
};

export default Privacy;
