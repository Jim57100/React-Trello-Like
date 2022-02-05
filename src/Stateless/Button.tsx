import React, {Component} from 'react';


function Button (props: ButtonTypeProps) {
  const className :string = "btn btn-" + props.color;
  return <button type={props.type} className={className} onClick={props.clic}>{props.children}</button>
}

export default Button;