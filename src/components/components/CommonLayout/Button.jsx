import PropTypes from 'prop-types';

const Button = ({
  children, className = '', type = 'button', onClick,
}) => (
  <button type={type} className={className} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
};

export default Button;
