import PropTypes from "prop-types"; // Import PropTypes

const WelcomePackCart = ({ num, title, subtitle }) => (
  <div className="rounded-[32px] flex flex-col items-center laptop:items-start gap-11 laptop:gap-[118px]  justify-between bg-[#FFFFFF] px-[35px] py-[50px] hover:shadow-2xl duration-500 ">
    {/* number */}
    <div className="flex justify-center items-center px-1 py-1 rounded-full border w-[78px] h-[78px] border-[#E8F0F9]">
      <span className="text-[26px]">{num}</span>
    </div>
    {/* Description */}
    <div className="flex flex-col gap-[16px] items-center laptop:items-start">
      <h5 className="text-[#00040D] text-[42px] leading-[50px]">{title}</h5>
      <p className="text-[#191C23] text-[24px] leading-8">{subtitle}</p>
    </div>
  </div>
);

WelcomePackCart.propTypes = {
  num: PropTypes.number.isRequired, // Define prop types
};

export default WelcomePackCart;
