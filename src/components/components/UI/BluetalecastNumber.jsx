import Container from "../CommonLayout/Container";
import RevealOnScroll from "../CommonLayout/RevealOnScroll";

const BluetalecastNumber = () => (
  <RevealOnScroll>
    <section className="bg-[#E8F0F9]">
      <Container>
        {/* Bluetalecast By the Number Main Div */}
        <div className="grid grid-cols-1 tab:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 px-[52px] pb-[50px] laptop:pb-[100px]">
          {/* Title */}
          <div className="py-8  laptop:border-r border-[#A7A8AA80] pb-[36px] laptop:pb-0 ">
            <h3 className="font-thin text-[40px] laptop:text-[48px] leading-[68px] text-[#00040D]">
              Bluetelecast by the numbers
            </h3>
          </div>
          {/* Years Of Experience */}
          <div className="flex flex-col items-center justify-center gap-[12px] laptop:border-r border-[#A7A8AA80] pb-[36px] laptop:pb-0">
            <span className="text-[#00040D] text-[56px] laptop:text-[112px] font-thin">
              10+
            </span>
            <p className="font-thin text-[24px] leading-8 text-[#00040D]">
              Years Experience
            </p>
          </div>
          {/* World Wide Companies */}
          <div className="flex flex-col items-center justify-center gap-[12px] laptop:border-r border-[#A7A8AA80] pb-[36px] laptop:pb-0">
            <span className="text-[#00040D] text-[56px] laptop:text-[112px] font-thin">
              3
            </span>
            <p className="font-thin text-[24px] leading-8 text-[#00040D]">
              Companies Worldwide
            </p>
          </div>
          {/* Produts */}
          <div className="flex flex-col items-center justify-center gap-[12px]">
            <span className="text-[#00040D] text-[56px] laptop:text-[112px] font-thin">
              110
            </span>
            <p className="font-thin text-[24px] leading-8 text-[#00040D]">
              Products
            </p>
          </div>
        </div>
      </Container>
    </section>
  </RevealOnScroll>
);

export default BluetalecastNumber;
