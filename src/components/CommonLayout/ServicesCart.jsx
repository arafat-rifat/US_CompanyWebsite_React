const ServicesCart = ({ title, description, src }) => (
  // Main Div
  <div className="flex flex-col gap-[40px]">
    {/* Image */}
    <div className="max-w-[859px] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <img src={src} alt={title} className="w-full h-auto" />
    </div>

    {/* Description */}
    <div className="flex justify-between flex-col laptop:flex-row">
      <div className="max-w-[284px]">
        {/* Heading part */}
        <h6 className="text-[#05070E] text-[32px] leading-[43px] font-semibold">
          {title}
        </h6>
      </div>
      {/* 2nd part */}
      <div className="text-center">
        <p className="text-[#00040D] text-2xl leading-8 max-w-[600px] text-start">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export default ServicesCart;
