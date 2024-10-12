import PropTypes from "prop-types";

const FaqCart = ({ title, ans, isOpen, onToggle }) => {
  return (
    <div className="flex justify-between items-center rounded-3xl bg-[#00040D] border border-[#495061] px-[30px] py-[36px] transition-transform hover:scale-105 hover:shadow-2xl duration-500">
      {/* question */}
      <div>
        {!isOpen && (
          <p className="text-[#FFFFFF] text-[18px] font-light">{title}</p>
        )}
        {isOpen && (
          <p className="text-[#FFFFFF] text-[18px] font-light max-w-[500px]">
            {ans}
          </p>
        )}
      </div>

      {/* Button */}
      <div>
        <button
          className="text-[#FFFFFF] text-[20px] font-light"
          onClick={onToggle} // Call onToggle when the button is clicked
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
    </div>
  );
};

FaqCart.propTypes = {
  title: PropTypes.string.isRequired,
  ans: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired, // Accept isOpen prop
  onToggle: PropTypes.func.isRequired, // Accept onToggle prop
};

export default FaqCart;
