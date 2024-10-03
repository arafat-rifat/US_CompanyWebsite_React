import PropTypes from "prop-types";
import Container from "../CommonLayout/Container";
import JobModal from "../CommonLayout/JobModal";
import RevealOnScroll from "../CommonLayout/RevealOnScroll";

const JobListeningSection = ({
  jobListings,
  openModal,
  closeModal,
  modalOpen,
  selectedJob,
}) => (
  <RevealOnScroll>
    <section className="bg-[#E8F0F9]">
      <Container>
        <div className="flex flex-col gap-[28px]  py-[50px] laptop:pt-[100px] laptop:pb-[80px] px-8 desktop:px-0">
          {jobListings.map((job) => (
            <div
              className="flex flex-col laptop:flex-row  justify-between border border-[#8F969D] rounded-[24px] py-[40px] px-[46px]"
              key={job.id}
            >
              <div>
                <h3 className="text-[#191C23] text-[28px] tab:text-[32px] laptop:text-[40px]">
                  {job.title}
                </h3>
              </div>
              <div className="pt-5 laptop:pt-0">
                <button
                  className="bg-[#FFFFFF] border px-[25px] py-[14px] rounded-[30px] text-[#00040D] text-[24px] "
                  onClick={() => openModal(job)}
                >
                  Job Details
                </button>
              </div>
            </div>
          ))}
        </div>
        <JobModal
          isOpen={modalOpen}
          onClose={closeModal}
          jobDetails={selectedJob}
        />
      </Container>
    </section>
  </RevealOnScroll>
);

JobListeningSection.propTypes = {
  jobListings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  selectedJob: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default JobListeningSection;
