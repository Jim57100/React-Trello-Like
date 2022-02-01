import React, {Component, FormEvent, MouseEventHandler} from 'react';


interface Props {
  id :number,
  title :string,
  description :string,
  assignedTo :string,
  priority :string,
  confirmUpdate :Function;
  onClick : React.MouseEventHandler<HTMLButtonElement>,
}

export default class FormUpdate extends Component <Props> {

  state = {
    titleUpdated       : "",
    descriptionUpdated : "",
    assignedToUpdated  : "",
    priorityUpdated    : "",
  }

  componentDidMount = () => {
    this.setState({
      titleUpdated       : this.props.title,
      descriptionUpdated : this.props.description,
      assignedToUpdated  : this.props.assignedTo,
      priorityUpdated    : this.props.priority,
    })
  }

  handleConfirmUpdate = (e : React.MouseEventHandler<HTMLButtonElement>) => {
    this.props.confirmUpdate(
      this.props.id, 
      this.state.titleUpdated, 
      this.state.descriptionUpdated, 
      this.state.assignedToUpdated, 
      this.state.priorityUpdated
      
    );
  } 

  render() {
    return (
      <>
        <li>
        <div className="card shadow-sm p-1 mb-5 bg-white rounded">
          <div className="card-body">
            <div className="card-title">
              <input type="text" value={this.state.titleUpdated} onChange={(e) => this.setState({titleUpdated: e.target.value})}/>
            </div>
            <div className="card-text text-left">
              <ul>
                <li><input type="text" value={this.state.descriptionUpdated} onChange={(e) => this.setState({descriptionUpdated: e.target.value})} /></li>
                <li><input type="text" value={this.state.assignedToUpdated} onChange={(e) => this.setState({assignedToUpdated: e.target.value})} /></li>
                <li><input type="text" value={this.state.priorityUpdated} onChange={(e) => this.setState({priorityUpdated: e.target.value})} /></li>
                <li>
                  <button className='btn btn-success' type="submit" onClick={this.handleConfirmUpdate}>Confirm</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      </>
    );
  }

}