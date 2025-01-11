import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <div className="footer-background">
      <div className="footer">
        <div className="top-part">
          <div className="footer-infos">
            <p className="info">Terms & Conditions</p>
            <p className="info">Copyright</p>
            <p className="info">Polices</p>
            <p className="info">Disclaimer</p>
            <p className="info">Awards</p>
            <p className="info">Contact Us</p>
            <p className="info">Sitemap</p>
          </div>
          <div className="footer-icons">
            <img src="facebook.png" alt="" />
            <img src="instagram.png" alt="" />
            <img src="mail.png" alt="" />
            <img src="twitter.png" alt="" />
            <img src="youtube.png" alt="" />
          </div>
        </div>
      </div>
      <div className="bottom-part">
        <p className="copyright">
          All rights reserved to Muscat Governorate © 2016.
        </p>
      </div>
    </div>
  );
};

export default Footer;
