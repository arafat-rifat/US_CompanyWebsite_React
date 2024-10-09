import { Modal } from "antd";
import JobApplicationForm from "./JobApplicationForm";
import CareerApplicationFrom from "./CareerApplicationFrom";

const CareerJobModal = ({ openModal, closeModal, jobDetails }) => {
  const {
    id = 0,
    title = "",
    subTitle = "",
    description = "",
    role = "",
    requirements = [],
    responsibilities = [],
  } = jobDetails || {}; // Ensure jobDetails is not null or undefined

  console.log(jobDetails);
  return (
    <>
      {/* Modal window */}
      <Modal open={openModal} onCancel={closeModal} footer={null} width={1500}>
        <div className="pt-12 laptop:pt-[107px] pl-11 px-0 laptop:px-[118px] items-start">
          <h4 className="text-2xl laptop:text-[56px] leading-8 laptop:leading-[64px] font-medium font-[Sequel Sans] text-[#191C23]">
            {title}
          </h4>
          {/* Subtitle Description */}
          <div className="pt-3 laptop:pt-[28px] pb-2 laptop:pb-[20px] flex flex-col justify-start">
            <h3 className="font-medium text-lg laptop:text-[32px] leading-4 laptop:leading-8 text-[#191C23]">
              {subTitle}
            </h3>
            <p className="text-sm laptop:text-lg  leading-6 laptop:leading-7 text-[#191C23] pt-5">
              {description}
            </p>
          </div>
          {/* Role */}
          <div className="pt-3 laptop:pt-[28px] pb-2 laptop:pb-[20px] flex flex-col justify-start">
            <h3 className="font-medium text-lg laptop:text-[32px] leading-4 laptop:leading-8 text-[#191C23]">
              The role
            </h3>
            <p className="text-sm laptop:text-lg  leading-6 laptop:leading-7 text-[#191C23] pt-5">
              {role}
            </p>
          </div>
          {/* Job Requirements */}
          <div className="pt-3 laptop:pt-[28px] pb-2 laptop:pb-[20px] flex flex-col justify-start">
            <h3 className="font-medium text-lg laptop:text-[32px] leading-4 laptop:leading-8 text-[#191C23]">
              Job requirements
            </h3>
            <ul className="text-sm laptop:text-lg  leading-6 laptop:leading-7 text-[#191C23] pt-5 flex flex-col gap-1">
              {requirements.map((requirement) => (
                <li key={requirement}>&#9679; {requirement}</li>
              ))}
            </ul>
          </div>
          {/* Job Responsibilities */}
          <div className="pt-3 laptop:pt-[28px] pb-2 laptop:pb-[20px] flex flex-col justify-start ">
            <h3 className=" font-medium text-lg laptop:text-[32px] leading-4 laptop:leading-8 text-[#191C23]">
              How We Support You
            </h3>
            <ul className="text-sm laptop:text-lg  leading-6 laptop:leading-7 text-[#191C23] pt-5 flex flex-col gap-1">
              {responsibilities.map((responsibilities) => (
                <li key={responsibilities}>&#9679; {responsibilities}</li>
              ))}
            </ul>
          </div>
          {/* Join BlueTelecast*/}
          <div className="pt-3 laptop:pt-[28px] pb-2 laptop:pb-[20px] flex flex-col justify-start border-b border-black">
            <h3 className=" font-medium text-lg laptop:text-[32px] leading-4 laptop:leading-8 text-[#191C23]">
              Join Bluetelecast!
            </h3>
            <p className="text-sm laptop:text-lg  leading-6 laptop:leading-7 text-[#191C23] pt-5 flex flex-col gap-1">
              Be part of a global team where your unique talents can thrive. If
              you’re ready to elevate your design career, apply today!
            </p>
          </div>

          {/* <JobApplicationForm jobId={id} position={title} /> */}
          <CareerApplicationFrom jobId={id} position={title} />
        </div>
      </Modal>
    </>
  );
};

export default CareerJobModal;
