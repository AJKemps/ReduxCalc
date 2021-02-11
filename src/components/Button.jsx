import React from 'react';
import './Button.css';

const Button = (props) => {
  const isOperator = (val) => {
    return !isNaN(val) || val === '.' || val === '=';
  };
  return (
    <div
      className={`button-wrapper ${
        isOperator(props.children) ? null : 'operator'
      }`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Button;
