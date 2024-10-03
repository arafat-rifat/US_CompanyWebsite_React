import Navbar from "../CommonLayout/Navbar";
import Hero from "../CommonLayout/Hero";
import Container from "../CommonLayout/Container";

const HeaderProject = () => (
  <>
    <div className="bg-other-bg bg-cover bg-top">
      <Navbar />
      <Hero>
        <Container>
          {/* Left Information */}
          <div className="pt-[128px] pb-[96px] px-[20px] desktop:px-0">
            <h1 className="text-[#FFFFFF] font-thin leading-[44px] laptop:leading-[56px] text-[32px] laptop:text-[48px] max-w-[961px]">
              Explore our projects to see how we deliver exceptional &nbsp;
              <span className="text-[#8F969D]">
                software, designed stunning websites
              </span>
              , and effective IT solutions for our clients.
            </h1>
          </div>
        </Container>
      </Hero>
    </div>
  </>
);

export default HeaderProject;
