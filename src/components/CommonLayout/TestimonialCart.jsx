import PropTypes from "prop-types";
import RevealOnScroll from "./RevealOnScroll";

const TestimonialCart = ({ src, title, designation, details }) => (
  <div className="bg-[#191C23] rounded-[24px]">
    {/* main div */}
    <RevealOnScroll>
      <div className="flex flex-col gap-[30px] px-[38px] py-[36px]">
        {/* heading */}
        <div className="flex flex-col items-center laptop:items-start laptop:flex-row gap-[11px]">
          {/* img */}
          <div className="h-[60px] w-[60px] rounded-full overflow-hidden">
            <img src={src} alt="testimonial" />
          </div>
          {/* title */}
          <div className="flex flex-col justify-center laptop:justify-start items-center laptop:items-start">
            <p className="text-[#FFFFFF] text-[20px] font-light">{title}</p>
            <p className="text-[#A09F9F] text-[18px] font-light">
              {designation}
            </p>
          </div>
          <div />
          <div />
        </div>

        {/* details */}
        <div>
          <p className="text-[#FFFFFF] text-[18px] font-light">{details}</p>
        </div>
      </div>
    </RevealOnScroll>
  </div>
);

TestimonialCart.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default TestimonialCart;
