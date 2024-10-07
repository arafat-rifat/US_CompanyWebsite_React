import Navbar from "../CommonLayout/Navbar";
import Hero from "../CommonLayout/Hero";
import Container from "../CommonLayout/Container";

const HeaderForCareer = () => (
  <>
    <div className="bg-other-bg bg-cover bg-top ">
      <Navbar />
      <Hero>
        <Container>
          {/* Left Information */}
          <div className="py-[40px] pb-[40px] laptop:pt-[128px] laptop:pb-[96px] px-[20px] desktop:px-0">
            <h1 className="text-[#FFFFFF] font-thin leading-9 tab:leading-[64px] laptop:leading-[88px] text-4xl tab:text-[56px] laptop:text-[80px] max-w-[1017px]">
              Find out about job openings and join our team to{" "}
              <span className="text-[#8F969D]">grow and succeed</span> together.
            </h1>
          </div>
        </Container>
      </Hero>
    </div>
  </>
);

export default HeaderForCareer;
