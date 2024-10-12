import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import RevealOnScroll from "./RevealOnScroll";
import logo from "../../assets/logo.png";
import footerImage from "/src/assets/footerImage.png";

// Function to check if the current route is active
const isActive = (path) => location.pathname === path;

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
          <div className="flex flex-col items-start laptop:items-center  laptop:flex-row laptop:justify-between flex-wrap">
            {/* logo */}
            <div>
              <img src={logo} alt="Logo" />
            </div>
            {/* For navigation menu */}
            <div>
              <ul className="flex flex-col tab:flex-row flex-wrap gap-4 tab:gap-[35px] laptop:gap-[51px] text-[#FFFFFF] font-light text-[16px] laptop:text-[24px] py-6">
                <li onClick={handleLinkClick}>
                  <Link
                    to="/about"
                    className={`${
                      isActive("/about") ? "text-[#8F969D]" : "text-white"
                    } hover:text-[#8F969D]  duration-500`}
                  >
                    About
                  </Link>
                </li>
                <li onClick={handleLinkClick}>
                  <Link
                    to="/services"
                    className={`${
                      isActive("/services") ? "text-[#8F969D]" : "text-white"
                    } hover:text-[#8F969D]  duration-500`}
                  >
                    Services
                  </Link>
                </li>

                <li onClick={handleLinkClick}>
                  <Link
                    to="/project"
                    className={`${
                      isActive("/project") ? "text-[#8F969D]" : "text-white"
                    } hover:text-[#8F969D]  duration-500`}
                  >
                    Project
                  </Link>
                </li>
                <li onClick={handleLinkClick}>
                  <Link
                    to="/Career"
                    className={`${
                      isActive("/Career") ? "text-[#8F969D]" : "text-white"
                    } hover:text-[#8F969D]  duration-500`}
                  >
                    Career
                  </Link>
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
              <p className="text-[16px] tab:text-[24px] text-[#666666] hover:text-white duration-300 font-light">
                All rights reserved Bluetelecast 2024
              </p>
            </div>
            <div className="flex gap-[32px]">
              <Link
                to="/terms-and-conditions"
                className={`${
                  isActive("/terms-and-conditions")
                    ? "text-white"
                    : "text-[#666666]"
                } hover:text-white duration-300 text-[16px] tab:text-[20px] font-light`}
                onClick={handleLinkClick}
              >
                Terms and Condition
              </Link>
              <Link to="/privacy-and-policy" onClick={handleLinkClick}>
                <p
                  className={`${
                    isActive("/privacy-and-policy")
                      ? "text-white"
                      : "text-[#666666]"
                  } hover:text-white duration-300 text-[16px] tab:text-[20px] font-light`}
                  onClick={handleLinkClick}
                >
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
