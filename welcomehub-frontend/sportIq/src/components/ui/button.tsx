/*import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  variant?: string;
  size?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'default', size = 'medium', className = '' }) => {
  return (
    <button onClick={onClick} className={`${className} btn-${variant} btn-${size}`}>
      {children}
    </button>
  );
};
export default Button;*/


import React from 'react';

// Define custom props, and extend HTML button props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'ghost' | 'primary' | 'secondary' |'link'; // Customize variant types
  size?: 'small' | 'medium' | 'large' | 'icon'; // Customize size types
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', size = 'medium', className = '', ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} btn-${variant} btn-${size}`} // Example styling
      {...props} // This spreads standard button props like `onClick`, `disabled`, etc.
    >
      {children}
    </button>
  );
};

export default Button;

