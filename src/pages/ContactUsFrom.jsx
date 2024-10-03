import Container from "../components/CommonLayout/Container";
import Button from "../components/CommonLayout/Button";
import { useState } from "react";
import ArrowRightWhite from "../assets/Arrow - Right white.png";

const ContactUsForm = () => {
  const [selectedService, setSelectedService] = useState(null); // Track selected service

  // Services array
  const services = [
    "Software Development",
    "Web Development",
    "UI/UX Design",
    "Brand Identity",
    "Search Engine Optimization",
    "IT Consulting",
  ];

  // Handle button click and set selected service
  const handleSelect = (service) => {
    setSelectedService(service);
  };

  return (
    <section className="bg-[#E8F0F9]">
      <Container>
        {/* Main div */}
        <div className=" py-0 laptop:py-[87px] px-0 laptop:px-8 desktop:px-0">
          <div className="pt-[50px] laptop:pt-[121px] pb-[94px] bg-[#FFFFFF] rounded-3xl flex flex-col items-center">
            {/* Heading and Button */}
            <div className="max-w-[861px] border-b border-[#8F969D] pb-[40px] px-[20px] laptop:px-0">
              <p className="font-normal text-[14px] laptop:text-3xl text-[#191C23]  max-w-[351px] desktop:max-w-[860px] pt-8">
                We’d love to hear from you! Whether you have a question or need
                assistance, feel free to reach out. Contact us using the form
                below or give us a call, and we'll get back to you as soon as
                possible.
              </p>
              <p className="text-[#191C23] text-2xl pt-[57px] pb-[31px]">
                /Services your looking for
              </p>
              {/* Service Selection Buttons */}
              <div className="flex flex-wrap items-start gap-2">
                {services.map((service) => (
                  <Button
                    key={service}
                    onClick={() => handleSelect(service)}
                    className={`px-[15px] laptop:px-[32px] py-[7px] laptop:py-[15px] text-lg laptop:text-2xl font-light rounded-[34px]
                      ${
                        selectedService === service
                          ? "text-[#FFFFFF] bg-[#191C23]" // Selected state styles
                          : "text-[#191C23] bg-[#F3F7FC] hover:text-[#FFFFFF] hover:bg-[#191C23]" // Default styles
                      }`}
                  >
                    {service}
                  </Button>
                ))}
              </div>
            </div>

            {/* form section */}
            <div className="pt-[40px] px-[20px] laptop:px-0">
              <form>
                {/* Main Div */}
                <div className="flex flex-col gap-[14px]">
                  {/* Name and company name field */}
                  <div className="flex flex-wrap gap-[20px]">
                    <input
                      type="text"
                      placeholder="Full name"
                      className="bg-[#E8F0F980] text-[#8F969D] text-lg rounded-[14px] px-10 laptop:px-[20px] py-[14px] outline-[#7DC5FA] "
                    />
                    <input
                      type="text"
                      placeholder="Company name"
                      className="bg-[#E8F0F980] text-[#8F969D] text-lg rounded-[14px] px-10 laptop:px-[20px] py-[14px] outline-[#7DC5FA] "
                    />
                  </div>
                  {/* Others Field */}
                  <div className="flex flex-col gap-[14px]">
                    <input
                      type="email"
                      placeholder="Company@gmail.com"
                      className="bg-[#E8F0F980] text-[#191C23] text-lg rounded-[14px] px-10 laptop:px-[20px] py-[14px] outline-[#7DC5FA]"
                    />
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className="bg-[#E8F0F980] text-[#8F969D] text-lg rounded-[14px]  px-10 laptop:px-[20px] py-[14px] outline-[#7DC5FA]"
                    />
                    <textarea
                      type="text"
                      placeholder="Project details"
                      className="bg-[#E8F0F980] text-[#8F969D] text-lg rounded-[14px] px-10 laptop:px-[20px] py-[14px] outline-[#7DC5FA]"
                    />
                  </div>
                  {/* Submit Section */}
                  <div className=" flex justify-between flex-col laptop:flex-row pt-[30px]  items-center laptop:items-start gap-5">
                    {/* hate Contact Forms? */}
                    <div className="order-2 laptop:order-1">
                      <p className="text-lg text-[#8F969D]">
                        Hate contact forms?
                      </p>
                      <p className="text-lg text-[#191C23]">
                        info@blutelcast.com
                      </p>
                    </div>
                    {/* Submit Button */}
                    <div className="flex order-1 laptop:order-2">
                      <Button className="text-[#191C23] rounded-[34px] text-2xl px-[32px] py-[15px] border border-[#191C23]">
                        Submit
                      </Button>
                      <Button className="rounded-[30px] text-2xl px-[27px] py-[13px] bg-[#191C23]">
                        <img src={ArrowRightWhite} />
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default ContactUsForm;
