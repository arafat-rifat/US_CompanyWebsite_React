import PropTypes from "prop-types";
import ArrowRight from "../../assets/Arrow - Right 3.png";
import { Link } from "react-router-dom";

const handleLinkClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Enables smooth scrolling
  });
};

const CrmCart = ({ bg }) => (
  <div
    className={`relative ${bg} bg-cover bg-center rounded-[30px] w-[102px] h-[163px] tab:w-[263px] laptop:w-[350px] laptop:h-[602px] overflow-hidden transition-all duration-1000 hover:w-1/4 laptop:hover:w-1/2`}
  >
    {/* Details With Button */}
    <div className="absolute inset-0 flex flex-wrap desktop:flex-nowrap justify-center gap-[5px]  tab:gap-[10px] laptop:gap-[100px] desktop:gap-[270px] place-items-end pb-[20px] transition-opacity duration-1000 opacity-0 hover:opacity-100 px-[15px]">
      {/* details */}
      <div className="flex gap-[5px] tab:gap-[10px] laptop:gap-[20px]">
        <p className="text-[#FFFFFF] text-[5px] laptop:text-[21px]">UI/UX</p>
        <p className="text-[#FFFFFF] text-[5px] laptop:text-[21px]">
          Development
        </p>
        <p className="text-[#FFFFFF] text-[5px] laptop:text-[21px]">Web</p>
      </div>

      {/* This is For Button */}
      <Link to="/services">
        <div onClick={handleLinkClick}>
          <button className="px-[6px] laptop:px-[25px] py-[3px] laptop:py-[14px] rounded-[30px] flex gap-[16px] bg-[#FFFFFF] items-center text-[6px] laptop:text-[24px]">
            View{" "}
            <img src={ArrowRight} alt="arrow" className="hidden laptop:block" />
          </button>
        </div>
      </Link>
    </div>
  </div>
);

CrmCart.propTypes = {
  bg: PropTypes.string.isRequired,
};

export default CrmCart;
