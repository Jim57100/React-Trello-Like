import React, {Component} from 'react';
import './App.css';
import NewList from './Statefull/newList';
import List from './Statefull/List';
import TodoListsContainer from './Statefull/TodoListsContainer';


class App extends Component{


  render() {

    return (

      <div className="container-fluid p-3 h-100">
        {/* Component NewList */}   
        <NewList />
        <div className="lists row">
          {/* Component TodoListContainer */}
          <TodoListsContainer />
        </div>
      </div>


    )
  }
}

export default App;