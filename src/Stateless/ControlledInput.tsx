import React, {Component} from 'react';

const ControlledField = (props :ControlledInputProps) => {

  return (
    <div className="form-group m-1 p-1">
    <label htmlFor={props.name}>{props.children}</label>
    <input type="text" value={props.value} id={props.name} name={props.name} className="form-control" onChange={() => props.change}></input>
  </div>
  );
}