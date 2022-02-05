import React, {Component, FormEvent, MouseEventHandler} from 'react';


interface Props {
id :number,
text :string,
description :string,
assignedTo :string,
priority :string,
confirmUpdate :Function;

}

export default class FormUpdate extends Component <Props> {

  state = {
    textUpdated : "",
    descriptionUpdated : "",
    assignedToUpdated : "",
    priorityUpdated : "",
  }

  componentDidMount = () => {
    this.setState({
    textUpdated : this.props.text,
    descriptionUpdated : this.props.description,
    assignedToUpdated : this.props.assignedTo,
    priorityUpdated : this.props.priority,
    })
  }

  handleConfirmUpdate = () => {
    this.props.confirmUpdate(
    this.props.id,
    this.state.textUpdated,
    this.state.descriptionUpdated,
    this.state.assignedToUpdated,
    this.state.priorityUpdated

    );
  }

  render() {
    return (
      <>
        <li>
          <form>
            <div className="card shadow-sm p-1 mb-5 bg-white rounded">
              <div className="card-body">
                <div className="card-title">
                  <input type="text" value={this.state.textUpdated} onChange={(e)=> this.setState({textUpdated:
                  e.target.value})}/>
                </div>
                <div className="card-text text-left">
                  <ul>
                    <li><input type="text" value={this.state.descriptionUpdated} onChange={(e)=>
                      this.setState({descriptionUpdated: e.target.value})} /></li>
                    <li><input type="text" value={this.state.assignedToUpdated} onChange={(e)=>
                      this.setState({assignedToUpdated: e.target.value})} /></li>
                    <li><input type="text" value={this.state.priorityUpdated} onChange={(e)=>
                      this.setState({priorityUpdated: e.target.value})} /></li>
                    <li>
                      <button className='btn btn-success' type="submit" onClick={this.handleConfirmUpdate}>Confirm</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </li>
      </>
    );
  }

}