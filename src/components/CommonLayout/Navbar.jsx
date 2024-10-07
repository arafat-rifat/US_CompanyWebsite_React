import PropTypes from "prop-types";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const MobileMenu = ({ isShow, handleOpen }) => (
  <nav
    className={`min-h-screen bg-[#00040D] fixed inset-0 ${
      isShow ? "translate-x-0" : "-translate-x-full"
    } transition-all duration-700`}
  >
    <div className="flex items-center justify-between px-[20px]">
      <h3 className="pt-4 text-[24px] font-semibold text-[#E8F0F9]">MENU</h3>
      <button
        className="absolute right-5 top-5 z-20 text-[24px] font-semibold text-[#E8F0F9]"
        onClick={handleOpen}
        aria-label="Close menu"
      >
        <RxCross1 />
      </button>
    </div>
    <div className="pt-16 pb-16">
      <ul className="flex flex-col items-center justify-center gap-5 text-[24px] font-semibold text-[#E8F0F9]">
        <li className="hover:border hover:border-[#A7A8AA4D] hover:px-[100px] hover:py-[14px] rounded-3xl">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:border hover:border-[#A7A8AA4D] hover:px-[100px] hover:py-[14px] rounded-3xl">
          <Link to="/About">About</Link>
        </li>
        <li className="hover:border hover:border-[#A7A8AA4D] hover:px-[100px] hover:py-[14px] rounded-3xl">
          <Link to="/Career">Career</Link>
        </li>
        <li className="hover:border hover:border-[#A7A8AA4D] hover:px-[100px] hover:py-[14px] rounded-3xl">
          <Link to="/Project">Project</Link>
        </li>
        <li className="hover:border hover:border-[#A7A8AA4D] hover:px-[100px] hover:py-[14px] rounded-3xl">
          <Link to="/caseStudy">Cases</Link>
        </li>
        <li className="hover:border hover:border-[#A7A8AA4D] hover:px-[100px] hover:py-[14px] rounded-3xl">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  </nav>
);

MobileMenu.propTypes = {
  isShow: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default MobileMenu;
