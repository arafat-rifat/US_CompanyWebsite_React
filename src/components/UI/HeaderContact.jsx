import Container from "../CommonLayout/Container";
import Hero from "../CommonLayout/Hero";
import Navbar from "../CommonLayout/Navbar";

const HeaderContact = () => (
  <>
    <div className="bg-other-bg bg-top">
      <Navbar />
      <Hero>
        <Container>
          {/* Left Information */}
          <div className="pt-[128px] pb-[96px] px-8 desktop:px-0">
            <h1 className="text-[#FFFFFF] font-thin leading-[64px] laptop:leading-[88px] text-[56px] laptop:text-[80px] max-w-[860px]">
              Let&apos;s start a{" "}
              <span className="text-[#8F969D]">successful</span>
              <br />
              partnership
            </h1>
          </div>
        </Container>
      </Hero>
    </div>
  </>
);

export default HeaderContact;
