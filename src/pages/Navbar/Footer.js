import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-hero">
          <h2>RU Placement Cell</h2>

          <div className="social-media">
            <a href="/">
              <FaLinkedin className="linkedin-icon" />
            </a>

            <a href="/">
              <SiLeetcode className="leetcode-icon" />
            </a>
          </div>

          <div className="input-container">
            <input
              className="footer-input"
              placeholder="ENTER YOUR EMAIL*"
            ></input>
            <button className="news-btn">Subscribe</button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
