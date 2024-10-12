/* eslint-disable no-console */
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ArrowRightWhite from "../../assets/Arrow - Right white.png";

const handleLinkClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Enables smooth scrolling
  });
};

const MoreProjectCart = ({ project }) => {
  console.log(project);

  return (
    <div className="flex flex-col gap-[55px]">
      {/* Image Side */}
      <div>
        <img src={project.imageSrc} alt="ProjectPic" />
      </div>

      {/* Description and button */}
      <div className="flex flex-col gap-5 laptop:gap-[40px] ">
        {/* Information */}
        <div className="text-[#191C23]  text-[24px] laptop:text-[56px]">
          {project.title}
        </div>

        {/* Button */}
        <Link to={`/caseStudy/${project.id}`}>
          <div className="flex pb-[50px]" onClick={handleLinkClick}>
            <button className="rounded-[34px] px-[21px] laptop:px-[32px] py-3 laptop:py-[15px] border border-[#191C23] hover:bg-[#191C23]  hover:shadow-xl hover:text-white duration-300 text-base laptop:text-[24px]">
              View Project
            </button>
            <div className="bg-[#191C23] rounded-[30px] px-[27px] py-[13px] hidden laptop:block">
              <img src={ArrowRightWhite} alt="Arrow pointing right" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

MoreProjectCart.propTypes = {
  project: PropTypes.shape({
    imageSrc: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired, // Add the title property
  }).isRequired,
};

export default MoreProjectCart;
