import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <div className="max-w-[1600px] mx-auto">
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
