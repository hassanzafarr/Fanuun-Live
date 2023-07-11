import React from "react";
import { Link } from "react-router-dom";
import "./comp.css";

const BlogComp = ({ imgg, caption, readtext }) => {
  return (
    <div className="blog_section-content sec__padding">
      <div className="blog-read">
        <div className="bimg-cont">
          <img src={imgg} alt="" />
        </div>
        <div className="blog-caption">
          <h1>{caption}</h1>
          <p>{readtext}</p>
          <Link to="/contact">
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogComp;
