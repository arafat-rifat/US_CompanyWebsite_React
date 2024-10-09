import Container from "../components/CommonLayout/Container";
import Button from "../components/CommonLayout/Button";
import { useState } from "react";
import ArrowRightWhite from "../assets/Arrow - Right white.png";

const ContactUsForm = () => {
  const [selectedServices, setSelectedServices] = useState([]); // Track selected services
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    projectDetails: "",
  });

  const [errors, setErrors] = useState({}); // Track form errors

  // Services array
  const services = [
    "Software Development",
    "Web Development",
    "UI/UX Design",
    "Brand Identity",
    "Search Engine Optimization",
    "IT Consulting",
  ];

  // Handle button click to toggle selection of service
  const handleSelect = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(
        selectedServices.filter((selected) => selected !== service)
      );
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  // Handle input change for form fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear errors for this field on change
  };

  // Form validation function
  const validate = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.companyName)
      newErrors.companyName = "Company name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.projectDetails)
      newErrors.projectDetails = "Project details are required";
    if (selectedServices.length === 0)
      newErrors.services = "Please select at least one service";

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    const validationErrors = validate(); // Validate form
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // If validation fails, set errors
      return; // Prevent form submission
    }

    // If validation passes, log form data and clear the form
    console.log("Form Data Submitted: ", { ...formData, selectedServices });

    // Clear the form after submission
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phoneNumber: "",
      projectDetails: "",
    });
    setSelectedServices([]); // Clear selected services
  };

  return (
    <section className="bg-[#E8F0F9]">
      <Container>
        {/* Main div */}
        <div className="py-0 laptop:py-[87px] px-0 laptop:px-8 desktop:px-0">
          <div className="pt-[50px] laptop:pt-[121px] pb-[94px] bg-[#FFFFFF] rounded-3xl flex flex-col items-center">
            {/* Heading and Button */}
            <div className="max-w-[861px] border-b border-[#8F969D] pb-[40px] px-[20px] laptop:px-0">
              <p className="font-normal text-[14px] laptop:text-3xl text-[#191C23] max-w-[351px] tab:max-w-[860px] pt-8">
                We’d love to hear from you! Whether you have a question or need
                assistance, feel free to reach out. Contact us using the form
                below or give us a call, and we'll get back to you as soon as
                possible.
              </p>
              <p className="text-[#191C23] text-2xl pt-[57px] pb-[31px]">
                /Services you're looking for
              </p>
              {/* Service Selection Buttons */}
              <div className="flex flex-wrap items-start gap-2">
                {services.map((service) => (
                  <Button
                    key={service}
                    onClick={() => handleSelect(service)}
                    className={`px-[15px] laptop:px-[32px] py-[7px] laptop:py-[15px] text-lg laptop:text-2xl font-light rounded-[34px]
                      ${
                        selectedServices.includes(service)
                          ? "text-[#FFFFFF] bg-[#191C23]" // Selected state styles
                          : "text-[#191C23] bg-[#F3F7FC] hover:text-[#FFFFFF] hover:bg-[#191C23]" // Default styles
                      }`}
                  >
                    {service}
                  </Button>
                ))}
              </div>
              {errors.services && (
                <p className="text-red-500">*{errors.services}</p>
              )}
            </div>

            {/* form section */}
            <div className="pt-[40px] px-[20px] laptop:px-0">
              <form onSubmit={handleSubmit}>
                {/* Main Div */}
                <div className="flex flex-col gap-[14px]">
                  {/* Name and company name field */}
                  <div className="flex flex-wrap gap-[20px]">
                    <div>
                      {errors.fullName && (
                        <p className="text-red-500">{errors.fullName}</p>
                      )}
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Full name"
                        className="bg-[#E8F0F980] text-[#8F969D] text-lg rounded-[14px] px-10 laptop:px-[20px] py-[14px] outline-[#7DC5FA]"
                      />
                    </div>

                    <div>
                      {errors.companyName && (
                        <p className="text-red-500">{errors.companyName}</p>
                      )}
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="bg-[#E8F0F980] text-[#8F969D] text-lg rounded-[14px] px-10 laptop:px-[20px] py-[14px] outline-[#7DC5FA]"
                      />
                    </div>
                  </div>
                  {/* Others Field */}
                  <div className="flex flex-col gap-[14px]">
                    {errors.email && (
                      <p className="text-red-500">{errors.email}</p>
                    )}
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Company@gmail.com"
                      className="bg-[#E8F0F980] text-[#191C23] text-lg rounded-[14px] px-10 laptop:px-[20px] py-[14px] outline-[#7DC5FA]"
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500">{errors.phoneNumber}</p>
                    )}
                    <input
                      type="number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="bg-[#E8F0F980] text-[#8F969D] text-lg rounded-[14px]  px-10 laptop:px-[20px] py-[14px] outline-[#7DC5FA]"
                    />
                    {errors.projectDetails && (
                      <p className="text-red-500">{errors.projectDetails}</p>
                    )}
                    <textarea
                      type="text"
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Project details"
                      className="bg-[#E8F0F980] text-[#8F969D] text-lg rounded-[14px] px-10 laptop:px-[20px] py-[14px] outline-[#7DC5FA]"
                    />
                  </div>
                  {/* Submit Section */}
                  <div className=" flex justify-between flex-col laptop:flex-row pt-[30px]  items-center laptop:items-start gap-5">
                    {/* Hate Contact Forms? */}
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
                      <Button
                        type="submit"
                        className="text-[#191C23] rounded-[34px] text-2xl px-[32px] py-[15px] border border-[#191C23]"
                      >
                        Submit
                      </Button>
                      <Button
                        type="submit"
                        className="rounded-[30px] text-2xl px-[27px] py-[13px] bg-[#191C23]"
                      >
                        <img src={ArrowRightWhite} alt="arrow" />
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
