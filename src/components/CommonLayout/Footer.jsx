import { Link } from "react-router-dom";
import Container from "./Container";
import RevealOnScroll from "./RevealOnScroll";
import logo from "../../assets/logo.png";
import footerImage from "/src/assets/footerImage.png";

const handleLinkClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Enables smooth scrolling
  });
};

const Footer = () => (
  <RevealOnScroll>
    <section className="bg-[#00040D]">
      <Container>
        <div className="pt-6 border-t border-[#A7A8AA4D] px-[20px] desktop:px-0">
          {/* footer heading */}
          <div className="flex flex-col  laptop:flex-row laptop:justify-between flex-wrap">
            {/* logo */}
            <div>
              <img src={logo} alt="Logo" />
            </div>
            {/* For navigation menu */}
            <div>
              <ul className="flex flex-col tab:flex-row flex-wrap gap-4 tab:gap-[35px] laptop:gap-[51px] text-[#FFFFFF] font-light text-[16px] laptop:text-[24px] py-6">
                <li onClick={handleLinkClick}>
                  <Link to="/about">About</Link>
                </li>
                <li onClick={handleLinkClick}>
                  <Link to="/services">Services</Link>
                </li>
                <li onClick={handleLinkClick}>
                  <Link to="/caseStudy">Cases</Link>
                </li>
                <li onClick={handleLinkClick}>
                  <Link to="/Career">Career</Link>
                </li>
                <li onClick={handleLinkClick}>
                  <Link to="/project">Project</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* footer logo */}
          <div className="laptop:mt-[45px] desktop:mt-[96px] pb-[56px] flex items-center justify-center">
            <img src={footerImage} alt="logo" className="w-full" />
          </div>
          {/* copy right and privacy policy */}
          <div className="flex flex-col laptop:flex-row flex-wrap justify-center laptop:justify-between items-center pb-[32px]">
            <div>
              <p className="text-[16px] tab:text-[24px] text-[#666666] font-light">
                All rights reserved Bluetelecast 2024
              </p>
            </div>
            <div className="flex gap-[32px]">
              <Link
                to="/terms-and-conditions"
                className="text-[16px] tab:text-[20px] text-[#666666] font-light"
                onClick={handleLinkClick}
              >
                Terms of Service
              </Link>
              <Link to="/privacy-and-policy" onClick={handleLinkClick}>
                <p className="text-[16px] tab:text-[20px] text-[#666666] font-light">
                  Privacy Policy
                </p>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  </RevealOnScroll>
);

export default Footer;
