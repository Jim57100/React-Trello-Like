import React, {Component} from 'react';
import List from './List';

interface Props {
  isAdded :boolean,
  newTask :string,
  assignedTo :string,
  priority :string,
  description :string,
  handleSubmit(e: React.ChangeEvent<any>): void;
}

class Form extends Component <Props> {       //<{}, FormProps> => WTF ???

  state = {
    isAdded : false,
    newTask : '',
    assignedTo: '',
    priority: '0',
    description: '',
  }

  // MouseEventHandler<HTMLButtonElement>

  
  onSubmit = (e) => {
    e.prevent.default;
    this.props.send(this.state.newTask, this.state.description, this.state.assignedTo, this.state.priority);
    this.setState({
      isAdded : false,
      newTask : '',
      assignedTo: '',
      priority: '0',
      description: '',
    })
  }

  render() {
  
    return (

      <>
        <form>
          <div className="col-5 m-1">
            <label htmlFor="task">new task</label>
            <input type="text" id="task" className="form-control" value={this.state.newTask} onChange={(e) => this.setState({newTask: e.target.value})} />
          </div>
          <div className="col-4 m-1">
            <label htmlFor="task">description</label>
            <input type="text" id="assignTo" className="form-control" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})} />
          </div>
          <div className="col-4 m-1">
            <label htmlFor="task">assigned to</label>
            <input type="text" id="assignTo" className="form-control" value={this.state.assignedTo} onChange={(e) => this.setState({assignedTo: e.target.value})} />
          </div>
          <div className="col-3 m-1">
            <label htmlFor="task">priority</label>
            <select className="mb-3" name="task" id="task" value={this.state.priority} onChange={(e) => this.setState({priority: e.target.value})}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </form>
        <button className='btn btn-success' type="submit" onClick={this.handleSubmit}>Envoyer</button>
      </>

      );

  }
}

export default Form;