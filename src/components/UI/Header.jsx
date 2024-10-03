import Button from "../CommonLayout/Button";
import Container from "../CommonLayout/Container";
import Hero from "../CommonLayout/Hero";
import Navbar from "../CommonLayout/Navbar";
import submitArrow from "../../assets/submitArrow.png";
import { Link } from "react-router-dom";

const Header = () => (
  <>
    <div className="bg-hero-bg bg-cover bg-center">
      <Navbar />
      <Hero>
        <Container>
          <div className="pt-[13px] laptop:pt-6 flex flex-col justify-between gap-[100px] tab:gap-[200px] laptop:gap-[370px] desktop:gap-[470px] pb-[50px] laptop:pb-[65px] px-[20px] desktop:px-0">
            {/* This is For mini hero heading */}
            <div className="flex justify-start pl-[20px] laptop:px-0">
              <p className="font-normal text-[16px] laptop:text-[20px] text-[#FFFFFF]">
                Digital Evolution Starts Here
              </p>
            </div>

            {/* This is for Button and Information */}

            <div className="flex flex-col laptop:flex-row justify-between items-end flex-wrap px-[20px] laptop:px-0">
              {/* Left Information */}
              <div className="flex flex-col  gap-[25px]">
                <p className="text-[#B2B2B2] font-thin text-[18px] tab:text-[24px]">
                  /Bringing Your Ideas to Life
                </p>
                <h5 className="text-[#FFFFFF] font-thin leading-[56px] text-[32px] laptop:text-[48px] max-w-[864px]">
                  We specialize in creating custom software, designing stunning
                  websites, and providing reliable IT support. Our mission is to
                  help businesses thrive in the digital world.
                </h5>
              </div>
              {/* Right Button */}
              <Link to="/contact">
                <div className="flex  items-center mt-[25px] laptop:mt-[125px]">
                  <div>
                    <Button className="border border-[#FFFFFF] rounded-[34px] text-[#FFFFFF] py-[15px] px-[32px]">
                      Let&apos;s Talk
                    </Button>
                  </div>
                  <div>
                    <Button className="py-[13px] px-[27px] bg-[#FFFFFF] rounded-[30px]">
                      <img src={submitArrow} alt="right arrow" />
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </Hero>
    </div>
  </>
);

export default Header;
