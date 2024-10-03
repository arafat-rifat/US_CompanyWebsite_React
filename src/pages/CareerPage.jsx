import { useState } from 'react';
import JobListeningSection from '../components/UI/JobListeningSection';
import BenifitsSection from '../components/UI/BenifitsSection';
import WelcomePackSection from '../components/UI/WelcomePackSection';
import jobListings from '../data/jobData';

const CareerPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const openModal = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <>
      <JobListeningSection
        jobListings={jobListings}
        openModal={openModal}
        closeModal={closeModal}
        selectedJob={selectedJob}
        modalOpen={modalOpen}
      />
      <BenifitsSection />
      <WelcomePackSection />
    </>
  );
};

export default CareerPage;
