import React from "react";
import "../App.css";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="container">
        <h1 style={{ textAlign: "center" }}>About</h1>
        <div className="content">
          <div className="description">
            <h2
              style={{
                marginBottom: "40px",
                fontSize: "25px",
                fontWeight: "700",
                lineHeight: "33px",
              }}
            >
              About the Oman and its government
            </h2>
            <p
              style={{
                fontFamily: "poppins",
                fontWeight: "400",
                lineHeight: "27px",
                textAlign: "left",
                marginBottom: "30px",
              }}
            >
              Until October 2006, two more former wilayat (Provinces) were part
              of this region: Al Buraymi and Mahdha. Al Buraimi Governorate was
              created from them in October 2006, as a new governorate. As well,
              a third wilaya (Province), of Al Sunaynah was created from rural
              parts of Al Buraymi and Mahdha.Until October 2006, two more former
              wilayat (Provinces) were part of this region: Al Buraymi and
              Mahdha. Al Buraimi Governorate was were part of this region: Al
              Buraymi and Mahdha. Al Buraimi were part of this region: Al
              Buraymi and Mahdha. Al Buraimi were part of this region: Al
              Buraymi and Mahdha. Al Buraimi were part of this region: Al
              Buraymi and Mahdha. Al Buraimi{" "}
            </p>
            <h3 className="about-btn">Load More</h3>
          </div>
          <div className="image">
            <img src="/Frame 12.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
