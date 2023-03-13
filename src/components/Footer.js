import React from "react";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <p>Let's Connect!</p>
      <div className="footer-icons">
        <FaFacebook
          size={25}
          className="footer-icon"
          onClick={() =>
            window.open("https://www.facebook.com/YusmenKadirr/", "_blank")
          }
        />
        <FaLinkedin
          size={25}
          className="footer-icon"
          onClick={() =>
            window.open("https://www.linkedin.com/in/yusmenkadir/", "_blank")
          }
        />
        <FaInstagram
          size={25}
          className="footer-icon"
          onClick={() =>
            window.open("https://www.instagram.com/yusmenkadirr/", "_blank")
          }
        />
        <FaYoutube
          size={25}
          className="footer-icon"
          onClick={() =>
            window.open(
              "https://www.youtube.com/channel/UCD1qMIAtysUMrqRWDiGLt9A",
              "_blank"
            )
          }
        />
        <FaTwitter
          size={25}
          className="footer-icon"
          onClick={() =>
            window.open("https://twitter.com/YusmenKadir", "_blank")
          }
        />
      </div>
    </div>
  );
};

export default Footer;
