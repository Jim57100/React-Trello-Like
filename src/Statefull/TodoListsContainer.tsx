import React, {Component} from 'react';
import List from './List';

interface Props {
  // title :string,
  // isAdded :boolean,
  // List :Object,
}

export default class TodoListsContainer extends Component <Props>{

  state = {
    isAdded: false,
    todoListsContainer: [],
    lastIdList: 3,
    // List: new List(this.props),
  }

  render () {

    return(
      <>
        <ul>
          <List isAdded={this.state.isAdded} closeForm={() => this.setState({isAdded:false})}/>
        </ul>
      </>

      /* {Component List
      {this.state.Lists.map(
          () => {
            return (
              <ul key={this.state.Lists[1].title}>
              </ul>
            );
          }
        )} }*/
    );
  }


}