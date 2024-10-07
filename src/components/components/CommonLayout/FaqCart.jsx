import PropTypes from 'prop-types';
import { useState } from 'react';

const FaqCart = ({ title, ans }) => {
  const [Isopen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center rounded-3xl bg-[#00040D] border border-[#495061] px-[30px] py-[36px]">
      {/* question */}
      <div>
        {!Isopen && (
          <p className="text-[#FFFFFF] text-[18px] font-light">{title}</p>
        )}
        {Isopen && (
          <p className="text-[#FFFFFF] text-[18px] font-light max-w-[500px]">
            {ans}
          </p>
        )}
      </div>

      {/* Button */}
      <div>
        <button
          className="text-[#FFFFFF] text-[20px] font-light"
          onClick={() => setIsOpen(!Isopen)}
        >
          {Isopen ? '-' : '+'}
          {' '}
        </button>
      </div>
    </div>
  );
};

FaqCart.propTypes = {
  title: PropTypes.string.isRequired,
  ans: PropTypes.string.isRequired,
};

export default FaqCart;
