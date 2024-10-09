import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import MobileMenu from "./MobileMenu";
import logo from "../../assets/logo.png";

function Navbar() {
  const [isShow, setIsShow] = useState(false);
  const location = useLocation();

  const handleOpen = () => {
    setIsShow((prevIsShow) => !prevIsShow);
  };

  // Function to check if the current route is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <section>
        <Container>
          <Flex className="flex laptop:flex-wrap justify-between items-center py-[30px] border-b-[1px] border-b-[#FFFFFF] px-[20px] desktop:px-0">
            {/* Logo */}
            <div>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>

            {/* For Navigation Menu */}
            <div>
              <Flex className="hidden laptop:flex desktop:flex justify-between gap-[40px] laptop:gap-[25px]">
                <ul className="flex items-center gap-[24px] text-[16px] text-[#FFFFFF] font-normal">
                  <li
                    className={`${
                      isActive("/about") ? "text-[#8F969D] pb-2" : "text-white"
                    } hover:text-[#8F969D]  duration-300`}
                  >
                    <Link to="/about">About</Link>
                  </li>
                  <li
                    className={`${
                      isActive("/services")
                        ? "text-[#8F969D] pb-2"
                        : "text-white"
                    } hover:text-[#8F969D] duration-300`}
                  >
                    <Link to="/services">Services</Link>
                  </li>
                  <li
                    className={`${
                      isActive("/caseStudy/1")
                        ? "text-[#8F969D] pb-2"
                        : "text-white"
                    } hover:text-[#8F969D] duration-300`}
                  >
                    <Link to="/caseStudy/1">Cases</Link>
                  </li>
                  <li
                    className={`${
                      isActive("/Career") ? "text-[#8F969D] pb-2" : "text-white"
                    } hover:text-[#8F969D] duration-300`}
                  >
                    <Link to="/Career">Career</Link>
                  </li>
                  <li
                    className={`${
                      isActive("/project")
                        ? "text-[#8F969D] pb-2"
                        : "text-white"
                    } hover:text-[#8F969D]  duration-200`}
                  >
                    <Link to="/project">Project</Link>
                  </li>
                </ul>

                <Link to="/contact">
                  <button
                    className={`${
                      isActive("/contact")
                        ? "bg-[#8F969D] py-3 px-6 border border-[#FFFFFF] rounded-[22px] text-[#FFFFFF]"
                        : "py-3 px-6 border border-[#FFFFFF] rounded-[22px] text-[#FFFFFF]"
                    } hover:bg-gray-700 py-3 px-6 border border-[#FFFFFF] rounded-[22px] text-[#FFFFFF]  duration-300`}
                  >
                    Contact us
                    <span className="ml-[14px]">&rarr;</span>
                  </button>
                </Link>
              </Flex>
              <GiHamburgerMenu
                onClick={handleOpen}
                className="text-4xl text-[#FFFFFF] desktop:hidden laptop:hidden"
              />
            </div>
          </Flex>
        </Container>
      </section>
      <MobileMenu
        isShow={isShow}
        setIsShow={setIsShow}
        handleOpen={handleOpen}
      />
    </>
  );
}

export default Navbar;
