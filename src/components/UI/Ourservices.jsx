import { Link } from "react-router-dom";
import Container from "../CommonLayout/Container";
import RevealOnScroll from "../CommonLayout/RevealOnScroll";
import ArrowRight from "../../assets/Arrow - Right 3.png";

const handleLinkClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Enables smooth scrolling
  });
};

const Ourservices = () => (
  <RevealOnScroll>
    <section className="bg-[#00040D]">
      <Container>
        {/* Main Div */}
        <div className="pt-[100px] pb-[43px] laptop:pb-[93px] flex flex-col laptop:flex-row justify-between">
          <div className="px-[35px] flex flex-col gap-[25px]">
            {/* heading */}
            <div>
              <p className="text-[18px] laptop:text-[24px] text-[#666666]">
                /Our Services
              </p>
            </div>
            {/* Details */}
            <div>
              <h3 className=" text-[32px] laptop:text-[52px] leading-[43px] laptop:leading-[64px] font-thin text-[#FFFFFF] max-w-[875px]">
                At Bluetelecast, we offer software, website development, IT
                consulting, and custom design. We provide clear, reliable
                support to meet your needs
              </h3>
            </div>
          </div>
          {/* Button For Learn More */}
          <div className="flex flex-col-reverse ml-[129px]">
            <div className="hidden laptop:block">
              <Link to="/contact" onClick={handleLinkClick}>
                <button className="flex items-center py-[14px] px-[25px] bg-[#FFFFFF] rounded-[30px] text-2xl">
                  Learn More
                  <span className="pl-3">
                    <img src={ArrowRight} alt="arrowright" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  </RevealOnScroll>
);

export default Ourservices;
