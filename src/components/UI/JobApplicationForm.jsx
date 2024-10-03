import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../CommonLayout/Button";

const JobApplicationForm = ({ jobId, position, jobTitle }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: jobTitle,
    message: "",
    cv: null,
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("position", formData.position);
    data.append("message", formData.message);
    if (formData.cv) {
      data.append("cv", formData.cv);
    }

    // Log FormData content for debugging
    //  data.forEach((value, key) => {
    //     Log FormData content for debugging
    //     console.log(`${key}: ${value}`);
    //  });

    try {
      const response = await fetch("http://localhost:5000/api/applications", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Reset form data
      setFormData({
        name: "",
        email: "",
        position: jobTitle,
        message: "",
        cv: null,
      });

      // Show success message
      setSuccessMessage("Your application has been submitted successfully!");
    } catch (error) {
      // handle the error here without using console.error
      setSuccessMessage(
        "There was an error submitting your application. Please try again later."
      );
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
        {successMessage && (
          <div className="bg-green-100 text-green-800 p-4 mb-4 rounded-md">
            {successMessage}
          </div>
        )}

        {/* name and email */}
        <div className="flex flex-col laptop:flex-row justify-center gap-4">
          <input
            id="name"
            name="name"
            placeholder="Name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="px-5 py-4 text-[#8F969D] text-lg rounded-2xl bg-[#E8F0F980] outline-none w-full"
          />
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            className="px-5 py-4 text-[#8F969D] text-lg rounded-2xl bg-[#E8F0F980] outline-none w-full"
          />
        </div>
        {/* Select Option */}
        <div className="flex justify-center">
          <select
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="py-[28px] px-[20px] bg-[#E8F0F980] w-full rounded-2xl outline-none"
          >
            <option value="Mid/Senior Designer">Mid/Senior Designer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Project Manager">Project Manager</option>
          </select>
        </div>

        {/* Message Box */}
        <div className="flex justify-center ">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            cols="30"
            rows="5"
            maxLength="100"
            placeholder="Message"
            className="w-full py-[14px] px-[20px] rounded-2xl bg-[#E8F0F980] outline-none"
          />
        </div>

        {/* upload CV */}
        <div>
          <input
            id="cv"
            type="file"
            name="cv"
            onChange={handleChange}
            className="py-4 px-[45px] bg-[#E8F0F980] outline-none w-full rounded-2xl"
            placeholder="CV, portfolio or other documents"
          />
        </div>

        {/* Submit Section */}
        <div className=" flex justify-between pt-[30px]">
          {/* hate Contact Forms? */}
          <div>
            <p className="text-lg text-[#8F969D]">Hate contact forms?</p>
            <p className="text-lg text-[#191C23]">info@blutelcast.com</p>
          </div>
          {/* Submit Button */}
          <div className="flex">
            <Button
              className="text-[#191C23] rounded-[34px] text-2xl px-[32px] py-[15px] border border-[#191C23]"
              type="submit"
            >
              Send message
            </Button>
            <Button
              className="rounded-[30px] text-2xl px-[27px] py-[13px] bg-[#191C23]"
              type="submit"
            >
              <img src="/src/assets/Arrow - Right white.png" />
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

JobApplicationForm.propTypes = {
  jobId: PropTypes.number.isRequired,
  position: PropTypes.string.isRequired,
};

export default JobApplicationForm;
