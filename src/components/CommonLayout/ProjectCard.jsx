import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import RevealOnScroll from "./RevealOnScroll";
import ArrowRightWhite from "../../assets/Arrow - Right white.png";

const handleLinkClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Enables smooth scrolling
  });
};

const ProjectCard = ({ project }) => (
  <RevealOnScroll>
    <div className="grid grid-cols-1 laptop:grid-cols-2 gap-[40px] laptop:gap-[158px]  border-b border-[#8F969D] pb-6 laptop:pb-[50px] px-[20px] laptop:px-0">
      {/* Description and button */}
      <div className="flex flex-col gap-[40px] laptop:gap-[226px] order-2 laptop:order-1">
        {/* Information */}
        <div className="text-[#191C23] text-2xl leading-8 laptop:leading-[64px] laptop:text-[56px]">
          {project.title}
        </div>

        {/* Button */}
        <Link to={`/caseStudy/${project.id}`}>
          <div className="flex " onClick={handleLinkClick}>
            <button className="rounded-[34px] px-[21px] laptop:px-[32px] py-3 laptop:py-[15px] border border-[#191C23] hover:bg-[#191C23] hover:text-white duration-300 text-base laptop:text-[24px]">
              View Project
            </button>
            <div className="bg-[#191C23] rounded-[30px] px-[27px] py-[13px] hidden laptop:block">
              <img src={ArrowRightWhite} alt="Arrow pointing right" />
            </div>
          </div>
        </Link>
      </div>

      {/* Image Side */}
      <div className="order-1 laptop:order-2 ">
        <img
          src={project.imageSrc}
          alt={project.title}
          className="transition-transform hover:scale-105 shadow-2xl duration-500"
        />
      </div>
    </div>
  </RevealOnScroll>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
