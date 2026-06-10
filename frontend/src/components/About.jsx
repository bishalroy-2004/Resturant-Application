import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>Serving delicious food made with fresh ingredients and authentic recipes.</p>
          </div>

          <p className="mid">
            Foodies is a place where great food meets exceptional hospitality. We serve freshly prepared dishes made with quality ingredients, offering a perfect blend of taste, freshness, and creativity. Whether you're dining with family, friends, or colleagues, our goal is to provide a memorable experience with delicious food, excellent service, and a welcoming atmosphere.
          </p>

          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about"/>
        </div>
      </div>
    </section>
  );
};

export default About;