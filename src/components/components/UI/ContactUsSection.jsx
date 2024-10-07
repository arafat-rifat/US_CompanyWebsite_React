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

const ContactUsSection = () => (
  <RevealOnScroll>
    <section className="bg-[#00040D] py-[25px] laptop:py-[100px]">
      <Container>
        <div className="px-[20px] desktop:px-0">
          {/* Main Div */}
          <div className="flex  justify-between rounded-[40px] py-[13px] laptop:py-[50px] px-[16px] laptop:px-[60px] bg-[#E8F0F9]">
            {/* heading */}
            <div className="flex flex-col  gap-3 laptop:gap-[20px]">
              <p className="text-[#666666] font-light text-[16px] laptop:text-[24px]">
                /Contact us
              </p>
              <h1 className="text-[#00040D] text-[32px] laptop:text-[112px] font-thin ">
                Hey! we are&#160;
                <span className="text-[#96989E]">
                  ready
                  <br /> to consult
                </span>
                &#160;you
              </h1>
            </div>

            {/* Button */}
            <div className="flex justify-center items-center">
              <Link to="/contact">
                <button
                  className=" bg-[#FFFFFF] px-[23px] py-[23px] laptop:px-[46px] laptop:py-[45px] rounded-full "
                  onClick={handleLinkClick}
                >
                  <img src={ArrowRight} alt="pic" className="w-full h-full" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  </RevealOnScroll>
);

export default ContactUsSection;
