import PropTypes from "prop-types";

const OurTeamCart = ({ Name, Designation, src }) => (
  <div className="grid grid-cols-1 gap-7 bg-[#E8F0F9] p-5 rounded-lg">
    {/* This is For Image */}
    <div className="rounded-[32px] overflow-hidden">
      <img src={src} alt={Name} className="w-full h-auto" />
      {/* Updated alt text */}
    </div>

    {/* Name And Designation */}
    <div className="flex flex-col gap-2">
      <h6 className="text-[#00040D] text-[40px] font-thin">{Name}</h6>
      <p className="text-[#00040D] text-[24px] font-thin">{Designation}</p>
    </div>
  </div>
);

OurTeamCart.propTypes = {
  Name: PropTypes.string.isRequired,
  Designation: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default OurTeamCart;
