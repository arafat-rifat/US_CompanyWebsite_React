import Navbar from "../CommonLayout/Navbar";
import Hero from "../CommonLayout/Hero";
import Container from "../CommonLayout/Container";

const HeaderAbout = () => (
  <>
    <div className="bg-hero-bg bg-cover bg-bottom">
      <Navbar />
      <Hero>
        <Container>
          {/* Left Information */}
          <div className="flex flex-col gap-[25px] pt-[200px] laptop:pt-[300px] pb-[20px] laptop:pb-[100px] px-[20px] desktop:px-0">
            <p className="text-[#B2B2B2] font-thin text-[18px] tab:text-[24px]">
              /About us
            </p>
            <h5 className="text-[#FFFFFF] font-thin leading-[32px] laptop:leading-[56px] text-[32px]  laptop:text-[48px] max-w-[1000px]">
              We create custom software, design impactful websites, and offer
              expert IT consulting. Your success is our priority.
            </h5>
          </div>
        </Container>
      </Hero>
    </div>
  </>
);

export default HeaderAbout;
