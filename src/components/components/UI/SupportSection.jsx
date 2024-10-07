import Container from "../CommonLayout/Container";
import RevealOnScroll from "../CommonLayout/RevealOnScroll";
import supportpic1 from "../../assets/support1.png";
import supportpic2 from "../../assets/support2.png";
import supportpic3 from "../../assets/support3.png";

const SupportSection = () => (
  <RevealOnScroll>
    <section className="bg-[#E8F0F9]">
      <Container>
        <div className="grid grid-cols-1 px-[20px] desktop:px-0 laptop:grid-cols-3 gap-4 pt-0 laptop:pt-[70px] pb-16">
          {/* 1st */}
          <div className="rounded-[32px] bg-[#FFFFFF]">
            <div className="px-[40px] py-[38px]">
              {/* number */}
              <div className="flex justify-center items-center px-2 py-2 rounded-full border w-[78px] h-[78px]">
                <span className="text-[26px]">01</span>
              </div>
              {/* img */}
              <div className="flex justify-center items-center mt-[34px] mb-[97px]">
                <img src={supportpic1} alt="High internal quality control" />
              </div>
              {/* Details */}
              <div>
                <h3 className="leading-[35px] laptop:leading-[50px] font-thin text-[25px] laptop:text-[42px] text-[#00040D]">
                  High internal
                  <br /> quality control
                </h3>
              </div>
            </div>
          </div>

          {/* 2nd */}
          <div className="rounded-[32px] bg-[#FFFFFF]">
            <div className="px-[40px] py-[38px]">
              {/* Details */}
              <div>
                <h3 className="leading-[35px] laptop:leading-[50px] font-thin text-[25px] laptop:text-[42px] text-[#00040D]">
                  Support 24/7 for
                  <br /> uninterrupted
                  <br /> operation
                </h3>
              </div>

              {/* img */}
              <div className="flex justify-center items-center mb-[34px] mt-[97px]">
                <img src={supportpic2} alt="24/7 Support" />
              </div>

              {/* number */}
              <div className="flex justify-center items-center px-2 py-2 rounded-full border w-[78px] h-[78px]">
                <span className="text-[26px]">02</span>
              </div>
            </div>
          </div>

          {/* 3rd */}
          <div className="rounded-[32px] bg-[#FFFFFF]">
            <div className="px-[40px] py-[38px]">
              {/* number */}
              <div className="flex justify-end">
                <div className="flex justify-center items-center px-2 py-2 rounded-full border w-[78px] h-[78px]">
                  <span className="text-[26px]">03</span>
                </div>
              </div>
              {/* img */}
              <div className="flex justify-center items-center mt-[34px] mb-[97px]">
                <img
                  src={supportpic3}
                  alt="Certified experience in technologies"
                />
              </div>
              {/* Details */}
              <div>
                <h3 className="leading-[35px] laptop:leading-[50px] font-thin text-[25px] laptop:text-[42px] text-[#00040D]">
                  Experience <br />
                  certified in many
                  <br /> technologies and
                  <br /> methodologies
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  </RevealOnScroll>
);

export default SupportSection;
