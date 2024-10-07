import PropTypes from 'prop-types';

const DisplayCaseStudy = ({ project }) => (
  <div className="rounded-[41px]  pt-[40px] laptop:pt-[80px]  pb-[50px] laptop:pb-[100px] ">
    <img src={project.srcOne} alt="Enmarco" />
  </div>
);

DisplayCaseStudy.propTypes = {
  project: PropTypes.shape({
    srcOne: PropTypes.string.isRequired,
  }).isRequired,
};

export default DisplayCaseStudy;
