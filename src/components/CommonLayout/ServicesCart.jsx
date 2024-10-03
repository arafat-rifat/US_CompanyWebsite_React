const ServicesCart = ({ title, description, src }) => (
  // Main Div
  <div className="flex  flex-col gap-[40px]">
    {/* Image */}
    <div className="max-w-[859px]">
      <img src={src} />
    </div>

    {/* Description */}
    <div className="flex justify-between">
      <div className="max-w-[284px]">
        {/* Heading part */}
        <h6 className="text-[#05070E] text-[32px] leading-[43px] font-semibold">
          {title}
        </h6>
      </div>
      {/* 2nd part */}
      <div className="text-center hidden tab:block">
        <p className="text-[#00040D] text-2xl leading-8 max-w-[600px] text-start">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export default ServicesCart;
