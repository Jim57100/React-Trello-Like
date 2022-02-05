import React, {ChangeEvent, Component, FormEvent, useState} from 'react';
import List from '../Stateless/List';


class NewListForm extends Component <NewListFormType> {


  //Pour l'instant cela ne change que le titre, voir comment ajouter une bloc "list" complet (instancier la class ? new List() ?)
  render() {
    return (
      <>
        <div className="row">
          <div className="col-4 p-1">
            <form>
              <label htmlFor="new_title">Nouvelle liste</label>
              <input type="text" id="new_title"/> 
              {/* <input type="hidden" id="new_list" />  */}
              <button type="submit" className='btn btn-primary' onClick={() => {this.props.create()}}>Créer</button>
            </form>
          </div>
        </div>
      </>
    );
  };
}

export default NewListForm;