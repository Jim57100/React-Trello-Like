import React, {Component} from 'react';
import Button from '../Stateless/Button';


  const Task = (props :TaskPropsType) => (
    
    <>
      <li>
        <div className="card shadow-sm p-1 mb-5 bg-white rounded">
          <div className="card-body">
            <div className="card-title">
              <label className={props.task.completed ? "todo-row completed": "todo-row"}>
                <input type="checkbox" onChange={() => props.toggleComplete(props.task.id)} checked={props.task.completed}/>
                {props.task.text}
                </label>
            </div>
            <div className="card-text text-left">
              <ul>
                <li>description: {props.task.description}</li>
                <li>assigned to: {props.task.assignedTo}</li>
                <li>priority lvl: {props.task.priority}</li>
                <li>
                  <Button type="" color="warning" clic={() => props.update(props.task.id, props.task.text, props.task.description, props.task.assignedTo, props.task.priority)}>M</Button>
                  <Button type="" color="danger" clic={() => props.delete(props.task.id)}>X</Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </>
  );

export default Task;

