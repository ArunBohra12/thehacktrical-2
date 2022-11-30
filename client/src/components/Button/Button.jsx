import './Button.css';

const Button = ({ children, variant = 'blue', className, ...buttonAttributes }) => {
  return (
    <button className={`py-1.5 px-4 ${className} ${variant === 'blue' ? 'btn-blue' : ''}`} {...buttonAttributes}>
      {children}
    </button>
  );
};

export default Button;
