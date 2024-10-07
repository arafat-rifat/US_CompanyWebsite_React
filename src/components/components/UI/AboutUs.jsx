import PropTypes from "prop-types";
import Container from "../CommonLayout/Container";
import RevealOnScroll from "../CommonLayout/RevealOnScroll";
import AboutUsPic from "../../assets/AboutUs.png";
import AboutUsResponsive from "../../assets/AboutUsResponsive.png";

const AboutUs = () => (
  <RevealOnScroll>
    <section className="bg-[#E8F0F9]">
      <Container>
        {/* Main div */}
        <div className="pt-[50px] pb-[50px] laptop:pt-24 laptop:pb-16 px-[56px]">
          {/* Details */}
          <div className="flex flex-col laptop:flex-row justify-start gap-[55px]  px-[20px] laptop:px-8">
            {/* This is For Image */}
            <div className="flex justify-center mob:hidden tab:hidden laptop:block">
              <img src={AboutUsPic} alt="About Us" className="max-w-[252px]" />
              {/* Add alt attribute */}
            </div>

            {/* This is For Responsive Image */}
            <div className="flex justify-start items-start  mob:block tab:block laptop:hidden max-w-[183px]">
              <img src={AboutUsResponsive} alt="aboutus" />
            </div>

            {/* This is For Details */}
            <div className="pt-5 flex flex-col  laptop:pt-20  max-w-[353px] laptop:max-w-[852px]">
              <p className="text-[18px] laptop:text-[24px] font-light text-[#8F969D] mb-[25px]">
                /About us
              </p>
              <h5 className="text-[24px] laptop:text-5xl font-thin leading-8 laptop:leading-[56px] text-[#191C23]">
                Bluetecast. specializes in custom software solutions, delivering
                excellence in mobile, web, cloud, and AI applications since
                2010. We focus on innovation, integrity, and customer
                satisfaction
              </h5>
            </div>
          </div>

          {/* Why Choose Bluetalecast */}
          <div className="grid grid-cols-1  laptop:grid-cols-2  px-8 mt-10 laptop:mt-[80px]">
            {/* details */}
            <div className="flex  laptop:pt-[104px] order-2 laptop:order-1">
              <p className="text-[#191C23] leading-[24px] laptop:leading-[32px] text-[16px] laptop:text-[24px] font-thin max-w-[351px] laptop:max-w-[400px]">
                Bluetelecast is great at understanding what each client needs,
                consistently going beyond expectations with our customer-focused
                approach. Our team views challenges as chances to grow and loves
                turning ideas into reality.
              </p>
            </div>
            {/* Why do we choose bluetalecast */}
            <div className="flex flex-col order-1 laptop:order-2">
              <p className="text-2xl font-light text-[#8F969D] mb-[25px]">
                /About Us
              </p>
              <h1 className="font-thin text-[56px] laptop:text-[70px] desktop:text-[112px] leading-[64px] laptop:leading-[122px] text-[#00040D] max-w-[324px] laptop:max-w-[648px]">
                Why <span className="text-[#8F969D]">Choose</span>
                <br />
                Bluetelecast?
              </h1>
            </div>
          </div>
        </div>
      </Container>
    </section>
  </RevealOnScroll>
);

export default AboutUs;
