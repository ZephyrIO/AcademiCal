import React from 'react';
import './Button.css';
const Button = (props) => {
  let visible;
  if (props.disabled == null)
  {
    visible = true;
  } else {
    visible = props.disabled;
  }
  return (
    <button disabled={!visible}
      className="button"
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;