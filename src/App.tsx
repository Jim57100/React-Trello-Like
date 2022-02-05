import React, {Component, FormEvent, ReactElement} from 'react';
import './App.css';
import NewListForm from './Statefull/newListForm';
import List from './Stateless/List';



class App extends Component {

  state = {
    lists      : [],
    newTitle   : '',
    lastIdList : 1,
  }
  
  handleDeleteList = (id :number) => {
    const listsIndexTab = this.state.lists.findIndex(index => {
      return index.id === id;            //retourne l'index du tableau
    });
    //Principe d'immutabilité :
    const newLists = [...this.state.lists]; //copie du tableau
    newLists.splice(listsIndexTab, 1);      //découpe la ligne souhaité dans le tableau copié
    this.setState({ lists : newLists });    //fusion du nouveau tableau avec l'ancien
    console.log('deleted'+id);
  }

  handleSubmitList = (e :FormEvent) => {
    e.preventDefault();

    const newList = {
      key : this.state.lastIdList + 1,
      id  : this.state.lastIdList + 1,
      title : this.state.newTitle,
    };
    // const newList = <List key={this.state.lastIdList + 1} id={this.state.lastIdList + 1} title={this.state.newTitle} delete={this.handleDeleteList}/>
    const newArrayLists = [...this.state.lists];
    newArrayLists.push(newList);
    this.setState({ 
      lists: newList,
      idList: this.state.lastIdList + 1,
    });
    
    console.log('Liste créée !');
  }
  
  render() {
    

    return (
    
      <div className="container-fluid p-3 h-100">
        <NewListForm create={this.handleSubmitList}/>
        <div className="lists row p-3">
          {this.state.lists}
        </div>
      </div>

    )
  }
}

export default App;