import React from 'react';

interface InputProps {
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  style?: React.CSSProperties;
}

const Input: React.FC<InputProps> = ({ type = 'text', value, onChange, placeholder, required = false, style }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      style={style}
    />
  );
};

export default Input;
