import React, {ChangeEvent, Component, useState} from 'react';
import List from './List';

interface Props {
  title :string;
  // List  :Object;
}

class NewList extends Component <{title:string}, Props>{

  state = {
    title : '',
    // List  : new List(this.props.title, )
  }
  

  handleSubmit = () => {
    console.log('créer !');
  }

  //Pour l'instant cela ne change que le titre, voir comment ajouter une bloc "list" complet (instancier la class ? new List() ?)
  render() {
    return (
      <>
        <div className="row">
          <div className="col-4 p-1">
            <form>
              <label htmlFor="new_title">Nouvelle liste</label>
              <input type="text" id="new_title" value={this.state.title} onChange={(e) => this.setState({title: e.target.value})}/> 
              {/* <input type="hidden" id="new_list" value={this.state.List} onChange={(e) => this.setState({List: e.target.value})}/>  */}
              <button type="submit" className='btn btn-primary' onClick={this.handleSubmit}>Créer</button>
            </form>
          </div>
        </div>
      </>
    );
  };
}

export default NewList;