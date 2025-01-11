// import React from "react";
import "../App.css";

const Provinces = () => {
  return (
    <div className="provinces">
      <div className="container">
        <h1 className="provinces-heading">Provinces</h1>
        <div className="provinces-images">
          <div className="overlay-part">
            <img src="/img1.png" alt="Province 1" />
            <div className="overlay-content">
              <h3>Yankul</h3>
              <p>
                Until October 2006, two more former wilayat (Provinces) were
                part of this region: Al Buraymi and Mahdha. Al Buraimi
                Governorate was created from
              </p>
              <button>More About</button>
            </div>
          </div>
          <div className="overlay-part">
            <img src="/img2.png" alt="Province 2" />
            <div className="overlay-content">
              <h3>Ibri</h3>
              <p>
                Until October 2006, two more former wilayat (Provinces) were
                part of this region: Al Buraymi and Mahdha. Al Buraimi
                Governorate was created from
              </p>
              <button>More About</button>
            </div>
          </div>
          <div className="overlay-part">
            <img src="/img3.png" alt="Province 3" />
            <div className="overlay-content">
              <h3>Dhank</h3>
              <p>
                Until October 2006, two more former wilayat (Provinces) were
                part of this region: Al Buraymi and Mahdha. Al Buraimi
                Governorate was created from
              </p>
              <button>More About</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provinces;
