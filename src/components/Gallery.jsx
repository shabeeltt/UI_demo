import React from "react";
import "../App.css";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="container">
        <div className="gallery-heading">
          <h1>Gallery</h1>
        </div>
        <div className="gallery-images">
          <img src="/Frame 80.png" alt="" />
          <img src="/Frame 811.png" alt="" />
          <img src="/image 22.png" alt="" />
          <img src="/Frame 84.png" alt="" />
          <img src="/Frame 83.png" alt="" />
          <img src="/Frame 85.png" alt="" />
        </div>
        <img className="load-more-btn" src="Frame 10.png" alt="" />
      </div>
    </div>
  );
};

export default Gallery;
