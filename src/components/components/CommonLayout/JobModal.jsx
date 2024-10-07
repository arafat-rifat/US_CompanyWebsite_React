import PropTypes from "prop-types";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import JobApplicationForm from "../UI/JobApplicationForm";

const JobModal = ({ isOpen, onClose, jobDetails }) => {
  const {
    id = 0,
    title = "",
    subTitle = "",
    description = "",
    role = "",
    requirements = [],
    responsibilities = [],
  } = jobDetails || {}; // Ensure jobDetails is not null or undefined

  const modalStyles = {
    content: {
      padding: "40px",
      position: "relative",
      maxWidth: "900px",
      margin: "auto",
      border: "none",
      borderRadius: "10px",
      overflow: "auto",
      maxHeight: "90vh",
      background: "#FFFFFF",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      zIndex: 1000,
    },
  };

  const closeButtonStyles = {
    position: "absolute",
    top: "20px",
    right: "20px",
    background: "none",
    border: "none",
    cursor: "pointer",
  };

  const titleStyles = {
    fontSize: "56px",
    fontWeight: "108",
    lineHeight: "64px",
    letterSpacing: "-0.02em",
    textAlign: "left",
    marginBottom: "20px",
  };

  const subTitleStyles = {
    fontSize: "32px",
    fontWeight: "108",
    lineHeight: "32px",
    letterSpacing: "-0.02em",
    textAlign: "left",
    marginBottom: "10px",
  };

  const listStyles = {
    listStyleType: "disc",
    marginLeft: "20px",
    marginBottom: "20px",
  };

  const dividerStyles = {
    width: "100%",
    height: "0px",
    border: "1px solid #E8F0F9",
    margin: "20px 0",
    opacity: "1",
    transform: "rotate(-180deg)",
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Job Details"
      style={modalStyles}
    >
      <div>
        <button
          onClick={onClose}
          style={closeButtonStyles}
          aria-label="Close modal"
        >
          <AiOutlineClose size={24} />
        </button>
        <h2 style={titleStyles}>{title}</h2>
        <h3 style={subTitleStyles}>{subTitle}</h3>
        <p>{description}</p>
        <h4 style={subTitleStyles}>Role</h4>
        <p>{role}</p>
        <h4 style={subTitleStyles}>Requirements</h4>
        <ul style={listStyles}>
          {requirements.map((requirement) => (
            <li key={requirement}>{requirement}</li>
          ))}
        </ul>
        <h4 style={subTitleStyles}>Responsibilities</h4>
        <ul style={listStyles}>
          {responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>

        <div style={dividerStyles} />

        <JobApplicationForm jobId={id} position={title} />
      </div>
    </Modal>
  );
};

JobModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  jobDetails: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    description: PropTypes.string,
    role: PropTypes.string,
    requirements: PropTypes.arrayOf(PropTypes.string),
    responsibilities: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default JobModal;
