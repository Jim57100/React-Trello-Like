import React, {Component} from 'react';
import Form from './Form';
import ListTitle from './ListTitle';
import Tasks from './Tasks';


interface Props {
  title :string,
  isAdded :boolean,
  handleCreateTask: Function,
}

class List extends Component <Props>{

  state = {
    isAdded : false,
  }

  handleShowForm = () => this.setState((oldState) => {
    return { isAdded: !oldState.isAdded };
  });
  

  render() {
    return (
      <li>
        <div className="list col-3 m-3 p-3 border shadow p-3 mb-5 bg-white rounded">
          {/* Component title */}
          <ListTitle title={this.props.title} />
          <div className="row d-flex flex-column">
            {/* Component Form */}
            {this.props.isAdded ? <Form send={this.handleCreateTask} /> : null}
            <button className='btn btn-primary w-100' type="submit" onClick={this.handleShowForm}>{ this.state.isAdded ? "Ajouter" : "Fermer l'ajout"}</button>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
          {/* Component Tasks */}
          <Tasks />                
            </div>
          </div>

        </div>
    </li>
    );

  }
}

export default List;