import PropTypes from 'prop-types';

const Flex = ({ children, className = '' }) => <div className={className}>{children}</div>;

Flex.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Flex;
