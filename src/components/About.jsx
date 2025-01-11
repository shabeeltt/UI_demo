import React from "react";
import "../App.css";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-heading">
          <h2>About The Governorate</h2>
        </div>
        <div className="about-content">
          <div className="card">
            <img src="/Frame 81.png" alt="" />
            <h3 className="shift-up">Mission</h3>
            <p className="shift-up">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </p>
          </div>
          <div className="card">
            <img src="/Frame 82.png" alt="" />
            <h3>Value</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </p>
          </div>
          <div>
            <div className="card">
              <div className="animation-content">
                <img className="moving-animate" src="/Layer 2.png" alt="" />
              </div>
              <div style={{ paddingTop: "140px" }}>
                <h3>Vision</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
