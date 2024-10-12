import RevealOnScroll from "../CommonLayout/RevealOnScroll";
import Container from "../CommonLayout/Container";
import CareerJobModal from "./CareerJobModal";

const CareerModal = ({
  jobListings,
  openModal,
  closeModal,
  selectedJob,
  modalOpen,
}) => {
  return (
    <RevealOnScroll>
      <section className="bg-[#E8F0F9]">
        <Container>
          <div className="flex flex-col gap-[28px]  py-[50px] laptop:pt-[100px] laptop:pb-[80px] px-8 desktop:px-0">
            {jobListings.map((job) => (
              <div
                className="flex flex-col laptop:flex-row  justify-between border border-[#8F969D] rounded-[24px] py-[40px] px-[46px] transition-transform hover:scale-105 hover:shadow-2xl duration-500"
                key={job.id}
              >
                <div>
                  <h3 className="text-[#191C23] text-[28px] tab:text-[32px] laptop:text-[40px]">
                    {job.title}
                  </h3>
                </div>
                <div className="pt-5 laptop:pt-0">
                  <button
                    className="bg-[#FFFFFF] border px-[25px] py-[14px] rounded-[30px] text-[#00040D] hover:bg-[#00040D] hover:text-white duration-300 text-[24px] "
                    onClick={() => openModal(job)}
                  >
                    Job Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Modal window */}
          <CareerJobModal
            openModal={modalOpen}
            closeModal={closeModal}
            jobDetails={selectedJob}
          />
        </Container>
      </section>
    </RevealOnScroll>
  );
};

export default CareerModal;
