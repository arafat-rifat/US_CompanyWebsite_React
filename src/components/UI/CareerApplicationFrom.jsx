import Button from "../CommonLayout/Button";
import ArrowRight from "../../assets/Arrow - Right white.png";
import { useState } from "react";

const CareerApplicationFrom = ({ jobId, position, jobTitle }) => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: jobTitle,
    message: "",
    cv: null,
  });

  // Validation function
  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    if (!formData.cv) {
      errors.cv = "CV is required";
    } else if (formData.cv.type !== "application/pdf") {
      errors.cv = "Only PDF files are allowed";
    }
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data:", formData);
    } else {
      console.log("Validation Errors:", validationErrors);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle file change (CV upload)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setFormData((prevData) => ({ ...prevData, cv: file }));
    } else {
      setFormData((prevData) => ({ ...prevData, cv: null }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        cv: "Only PDF files are allowed",
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-[#191C23] text-[32px] leading-8 py-[48px] ">
        Sounds good?
        <br />{" "}
        <span className="text-[#8F969D]">Submit your application here</span>
      </h3>

      <div className="flex flex-col gap-4">
        {/* Name and email */}
        <div className="flex flex-col laptop:flex-row justify-center gap-4">
          <div className="w-full">
            {errors.name && <p className="text-red-500">*{errors.name}</p>}
            <input
              id="name"
              name="name"
              placeholder="Name"
              type="text"
              className="px-5 py-4 text-[#8F969D] text-lg rounded-2xl bg-[#E8F0F980] outline-none w-full"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="w-full">
            {errors.email && <p className="text-red-500">*{errors.email}</p>}
            <input
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              className="px-5 py-4 text-[#8F969D] text-lg rounded-2xl bg-[#E8F0F980] outline-none w-full"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Select Option */}
        <div className="flex justify-center">
          <select
            id="position"
            name="position"
            className="py-[28px] px-[20px] bg-[#E8F0F980] w-full rounded-2xl outline-none"
            value={formData.position}
            onChange={handleChange}
          >
            <option value="Mid/Senior Designer">Mid/Senior Designer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Project Manager">Project Manager</option>
          </select>
        </div>

        {/* Message Box */}
        {errors.message && <p className="text-red-500">*{errors.message}</p>}
        <div className="flex justify-center ">
          <textarea
            id="message"
            name="message"
            cols="30"
            rows="5"
            maxLength="100"
            placeholder="Message"
            className="w-full py-[14px] px-[20px] rounded-2xl bg-[#E8F0F980] outline-none"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        {/* Upload CV */}
        {errors.cv && <p className="text-red-500">*{errors.cv}</p>}
        <div>
          <input
            id="cv"
            type="file"
            name="cv"
            className="py-4 px-[45px] bg-[#E8F0F980] outline-none w-full rounded-2xl"
            placeholder="CV, portfolio or other documents"
            onChange={handleFileChange}
            accept=".pdf"
          />
        </div>

        {/* Submit Section */}
        <div className="flex justify-between flex-col tab:flex-row gap-2 pt-[30px]">
          {/* Hate Contact Forms? */}
          <div>
            <p className="text-lg text-[#8F969D]">Hate contact forms?</p>
            <p className="text-lg text-[#191C23]">info@blutelcast.com</p>
          </div>

          {/* Submit Button */}
          <div className="flex ">
            <Button
              className="text-[#191C23]  rounded-[34px] text-base laptop:text-2xl px-4 laptop:px-[32px] py-4 laptop:py-[15px] border border-[#191C23]"
              type="submit"
            >
              Send message
            </Button>
            <Button
              className="rounded-[30px] text-2xl px-[27px] py-[13px] bg-[#191C23] hidden laptop:block"
              type="submit"
            >
              <img src={ArrowRight} alt="img" />
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CareerApplicationFrom;
