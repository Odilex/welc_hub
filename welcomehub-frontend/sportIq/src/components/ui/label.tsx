import React from 'react';

interface LabelProps {
  htmlFor: string;
  labelText: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, labelText }) => {
  return <label htmlFor={htmlFor}>{labelText}</label>;
};

export default 'Label' ,
