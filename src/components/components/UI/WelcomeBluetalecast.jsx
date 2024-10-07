import Container from "../CommonLayout/Container";
import RevealOnScroll from "../CommonLayout/RevealOnScroll";

const WelcomeBluetalecast = ({ title1, title2 }) => (
  <RevealOnScroll>
    <section className="bg-[#00040D]">
      <Container>
        <div className=" pt-[50px] pb-[50px] laptop:pt-[100px] laptop:pb-[100px] px-[20px] laptop:px-[43px]">
          <div className="flex flex-col laptop:flex-row justify-between  items-start desktop:items-center">
            {/* heading */}
            <div className="flex flex-col  gap-[20px]">
              <p className="text-[#666666] font-light text-[18px] laptop:text-[24px]">
                /Bluetelecast
              </p>
              <h3 className="text-[#FFFFFF] text-[24px] laptop:text-[52px] font-thin  max-w-[353px] laptop:max-w-[680px] desktop:max-w-[760px]">
                <span className="text-[#8F969D]">{title1} &nbsp;</span>
                {title2}
              </h3>
            </div>

            {/* Links */}

            <div className="flex flex-col gap-[16px] pt-[30px] laptop:pt-[0px]">
              <h3 className="text-[#FFFFFF]  text-[24px] laptop:text-[52px] font-thin">
                <a
                  href="https://www.linkedin.com/company/bluetelecast-software-company/?viewAsMember=true"
                  target="_blank"
                >
                  {" "}
                  LinkedIn
                </a>
              </h3>
              <h3 className="text-[#FFFFFF] text-[24px] laptop:text-[52px] font-thin">
                <a
                  href="https://www.facebook.com/profile.php?id=61563483914394"
                  target="_blank"
                >
                  {" "}
                  Facebook
                </a>
              </h3>
              <h3 className="text-[#FFFFFF] text-[24px] laptop:text-[52px] font-thin">
                <a href="https://dribbble.com/Bluetelecast" target="_blank">
                  {" "}
                  Dribbble
                </a>
              </h3>
              <h3 className="text-[#FFFFFF] text-[24px] laptop:text-[52px] font-thin">
                <a
                  href="https://www.instagram.com/bluetelecast/"
                  target="_blank"
                >
                  {" "}
                  Instagram
                </a>
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  </RevealOnScroll>
);

export default WelcomeBluetalecast;
