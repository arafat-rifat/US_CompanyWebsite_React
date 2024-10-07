import PropTypes from "prop-types";
import RevealOnScroll from "./RevealOnScroll";

const ServiceCart = ({ title, src, className }) => (
  <div className={className}>
    {/* for image */}
    <RevealOnScroll>
      <div>
        <img src={src} alt="cartImg" />
      </div>
    </RevealOnScroll>
    {/* This is for Description */}
    <RevealOnScroll>
      <div>
        <h6 className="font-semibold text-[32px] laptop:text-[40px] leading-[53px] text-[#05070E]  max-w-[347px]">
          {title}
        </h6>
      </div>
    </RevealOnScroll>
  </div>
);

ServiceCart.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default ServiceCart;
