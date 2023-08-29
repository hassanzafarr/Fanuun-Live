import "./App.css";

import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Career from "./pages/Career/Career";
import USvisa from "./pages/US/US";
import UKvisa from "./pages/UK/UK";
import Contact from "./pages/Contact/Contact";
import Canada from "./pages/Canada/Canada";
import Formation from "./pages/Formation/Formation";
import UAE from "./pages/UAE/uae";
import GERMANY from "./pages/Germany/germany";
import Blog from "./pages/Blog/Blog";

import UaeIncorporation from "./pages/UaeIncororation/uaeIncorporation";

import {
  Attest,
  Document,
  Screening,
  Sealed,
  Translation,
} from "./pages/Services-subpage";

import { Route, Routes } from "react-router-dom";
import Test from "./pages/Test/Test";
import ScrollToTop from "./ScrollToTop";
import Privacy from "./pages/Privacy/Privacy";
import PORTUGAL from "./pages/PORTUGAL/portugal";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
          <title>FANUUN | Premier Global Immigration & Visa Consultation Services</title>
          <meta name="FANUUN | Premier Global Visa Consultation & Immigration Service" 
          content="Unlock Your Passport to Boundless Horizons with FANUUN's finest global visa consultation and immigration services" />
      </Helmet>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/uk" element={<UKvisa />} />
        <Route path="/us" element={<USvisa />} />
        <Route path="/uae" element={<UAE />} />
        <Route path="/uaeincop" element={<UaeIncorporation />} />
        <Route path="/canada" element={<Canada />} />
        <Route path="/germany" element={<GERMANY />} />
        <Route path="/portugal" element={<PORTUGAL />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/formation" element={<Formation />} />
        <Route path="/attest" element={<Attest />} />
        <Route path="/document" element={<Document />} />
        <Route path="/sealed" element={<Sealed />} />
        <Route path="/screening" element={<Screening />} />
        <Route path="/translation" element={<Translation />} />

        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
