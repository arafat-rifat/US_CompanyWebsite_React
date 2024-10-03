import PropTypes from 'prop-types';

const Hero = ({ children }) => <section>{children}</section>;

Hero.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Hero;
