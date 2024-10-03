import Container from "../CommonLayout/Container";
import RevealOnScroll from "../CommonLayout/RevealOnScroll";

const BenifitsSection = () => (
  <RevealOnScroll>
    <section className="bg-[#E8F0F9]">
      <Container>
        <div className="grid grid-cols-1  laptop:grid-cols-2 gap-[20px] laptop:gap-[161px] px-[20px] desktop:px-0 py-[50px] laptop:py-[80px]">
          {/* Why do we choose bluetalecast */}
          <div className="flex flex-col max-w-[365px] laptop:max-w-[715px]">
            <p className=" text-[18px] laptop:text-2xl font-light text-[#8F969D] mb-[25px]">
              /Benefits
            </p>
            <h1 className="font-thin text-[56px] laptop:text-[80px] leading-[64px] laptop:leading-[122px] text-[#00040D]">
              <span className="text-[#8F969D]">Empower</span> Your Career
            </h1>
          </div>

          {/* details */}
          <div className="flex  laptop:pt-[125px]">
            <p className="text-[#191C23] leading-[24px] laptop:leading-[32px] text-[16px] laptop:text-[24px] font-thin max-w-[351px]">
              Our benefits programs are designed to support you and enhance your
              overall well-being. Discover the advantages of being part of our
              team
            </p>
          </div>
        </div>
      </Container>
    </section>
  </RevealOnScroll>
);

export default BenifitsSection;
