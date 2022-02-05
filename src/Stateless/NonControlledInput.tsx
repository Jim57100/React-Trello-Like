import React, {Component} from 'react';

const NonControlledInput = (name :string, children :string) => {

  return (
    <div className="form-group m-1 p-1">
      <label htmlFor={name}>{children}</label>
      <input type="text"></input>
    </div>
  )

}

export default NonControlledInput;