import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import MobileMenu from "./MobileMenu";
import logo from "../../assets/logo.png";

function Navbar() {
  const [isShow, setIsShow] = useState(false);

  const handleOpen = () => {
    setIsShow((prevIsShow) => !prevIsShow);
  };

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
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/caseStudy">Cases</Link>
                  </li>
                  <li>
                    <Link to="/Career">Career</Link>
                  </li>
                  <li>
                    <Link to="/project">Project</Link>
                  </li>
                </ul>

                <Link to="/contact">
                  <button className="py-3 px-6 border border-[#FFFFFF] rounded-[22px] text-[#FFFFFF]">
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
