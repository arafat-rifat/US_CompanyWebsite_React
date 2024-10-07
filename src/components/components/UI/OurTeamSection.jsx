import RevealOnScroll from "../CommonLayout/RevealOnScroll";

const OurTeamSection = () => (
  <RevealOnScroll>
    <div className="grid grid-cols-1  laptop:grid-cols-2 gap-[20px] laptop:gap-[161px] px-8 mt-10 laptop:mt-[80px]">
      {/* Why do we choose bluetalecast */}
      <div className="flex flex-col max-w-[676px]">
        <p className="text-[18px] laptop:text-2xl font-light text-[#8F969D] mb-[25px]">
          Our Team
        </p>
        <h1 className="font-thin text-[56px] laptop:text-[112px] leading-[56px] laptop:leading-[122px] text-[#00040D]">
          <span className="text-[#8F969D]">Amplified</span> by a global team
        </h1>
      </div>

      {/* details */}
      <div className="flex  laptop:pt-[104px]">
        <p className="text-[#191C23] leading-[24px] laptop:leading-[32px] text-[16px] laptop:text-[24px] font-thin max-w-[351px]">
          At Bluetelecast, we value different perspectives and remote work. Our
          friendly and respectful team works better together, helping us serve
          customers and communities well.
        </p>
      </div>
    </div>
  </RevealOnScroll>
);

export default OurTeamSection;
