import React, {Component} from 'react';

  const toggleComplete = (title :string) => {
    console.log(title + 'completed !');
  }

  const Task = (props :any) => (
    
    <>
      <li>
        <div className="card shadow-sm p-1 mb-5 bg-white rounded">
          <div className="card-body">
            <div className="card-title">
              <label className={props.complete ? "todo-row completed": "todo-row"}>
                <input type="checkbox" onChange={() => toggleComplete(props.title)} checked={props.complete}/>
                {props.title}
                </label>
            </div>
            <div className="card-text text-left">
              <ul>
                <li>description: {props.description}</li>
                <li>assigned to: {props.assignedTo}</li>
                <li>priority lvl: {props.priority}</li>
                <li>
                    <button className='btn btn-warning' onClick={props.update}>M</button>
                    <button className='btn btn-danger' onClick={props.delete}>X</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </>
  );

export default Task;