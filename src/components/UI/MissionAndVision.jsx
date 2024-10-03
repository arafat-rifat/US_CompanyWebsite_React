import PropTypes from "prop-types";
import Container from "../CommonLayout/Container";
import OurTeamSection from "./OurTeamSection";
import RevealOnScroll from "../CommonLayout/RevealOnScroll";
import missionAndVision from "../../assets/missionAndVision.png";

const MissionAndVision = ({ src }) => (
  <RevealOnScroll>
    <section className="bg-[#E8F0F9]">
      <Container>
        <div className="pt-[36px] pb-[40px] px-[20px] laptop:px-0  laptop:pt-24 laptop:pb-16 ">
          {/* Details */}
          <div className="flex flex-col laptop:flex-row gap-[80px]  items-start laptop:items-center px-8">
            {/* This is For Image */}
            <div>
              <img src={missionAndVision} alt="" className=" max-w-[200px]" />
            </div>
            {/* This is For Details */}
            <div className="pt-5 flex flex-col laptop:pt-20 ">
              <p className=" text-[18px] laptop:text-2xl font-light text-[#8F969D] mb-[25px]">
                /Mission & Vision
              </p>
              <h5 className="text-[32px] laptop:text-5xl font-thin  leading-[32px] laptop:leading-[56px] text-[#191C23] max-w-[852px]">
                Bluetelecast integrates technology to boost business
                productivity and success through innovative solutions. We
                prioritize quality and client satisfaction, driving digital
                transformation for lasting impact.
              </h5>
            </div>
          </div>

          <OurTeamSection />
        </div>
      </Container>
    </section>
  </RevealOnScroll>
);

// Prop types validation
MissionAndVision.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MissionAndVision;
