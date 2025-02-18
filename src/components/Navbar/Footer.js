import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./NavHome.css";
const Footer = () => {
  return (
    <>
      <footer>
        <p>&copy; 2025 Rai University Placement Cell. All Rights Reserved.</p>
        <div className="social-media">
          <a href="/">
            <FaLinkedin className="linkedin-icon" />
          </a>

          <a href="/">
            <SiLeetcode className="leetcode-icon" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
