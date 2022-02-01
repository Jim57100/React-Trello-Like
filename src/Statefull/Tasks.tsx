import React, {Component} from 'react';
import Task from './Task';
import TodoListsContainer from './TodoListsContainer';
import FormUpdate from './FormUpdate';

interface Props {
  tasks :Array<Task>;
  title :string,
  description :string,
  assignedTo :string,
  priority :string,
  lastIdTask :number,
  idTaskToUpdate :number,
  closeForm :Function
}

class Tasks extends Component <Props>{



  state = {
    tasks : [
      {id:1 ,title:"todo1", description:'put the cat on the microwave oven', priority:'1', assignedTo:'Jim', complete:false },
    ],
    lastIdTask: 1,
    idTaskToUpdate: 0,
  }

  handleDelete = (id :string) => {
    const tasksIndexTab = this.state.tasks.findIndex(index => {
      return index.title === id;            //retourne l'index du tableau
    });
    //Principe d'immutabilité :
    const newTasks = [...this.state.tasks]; //copie du tableau
    newTasks.splice(tasksIndexTab, 1);      //découpe la ligne souhaité dans le tableau copié
    
    this.setState({tasks:newTasks});        //fusion du nouveau tableau avec l'ancien
    console.log('deleted'+id);
  }
 

  handleCreateTask = (title :string, description :string, priority :string, assignedTo :string, complete :boolean) => {
    const newTask = {
      id          : this.state.lastIdTask + 1,
      title       : title, 
      description : description, 
      priority    : priority, 
      assignedTo  : assignedTo, 
      complete    : complete,
    };

    //Principe d'immutabilité
    const newTasksList = [...this.state.tasks];
    newTasksList.push(newTask);

    this.setState(oldState => {               //fuuuusioon !!!
      return {
         tasks      : newTasksList,
         lastIdTask : oldState.lastIdTask + 1,
      }
    })

    this.props.closeForm();
  }


  handleUpdate = (id :number, title :string, description :string, assignedTo :string, priority :string, complete :boolean) => {

    const index = this.state.tasks.findIndex(
      t => {
      return t.id === id;
      }
    );

    const newUpdatedTask = {id, title, description, assignedTo, priority, complete}

    const newTasks  = [...this.state.tasks];
    newTasks[index] = newUpdatedTask;

    this.setState({
      tasks           : newTasks,
      idTaskToUpdate  : 0,
    })
  }

  render() {
    return (
      <>
        {/* Component Tasks */}
        {this.state.tasks.map(
          task => {
            if(task.id !== this.state.idTaskToUpdate) {
              return (
                <ul key = {task.title}>
                  <Task
                    title       = {task.title} 
                    complete    = {task.complete} 
                    description = {task.description}
                    assignedTo  = {task.assignedTo}
                    priority    = {task.priority}
                    delete      = {() => this.handleDelete(task.title)}
                    update      = {() => this.setState({idTaskToUpdate: task.id})}
                  />
                </ul>
              );
            } else {
              return (
              <ul key={task.title}>
                <FormUpdate 
                  id            = {task.id} 
                  title         = {task.title} 
                  description   = {task.description} 
                  assignedTo    = {task.assignedTo} 
                  priority      = {task.priority} 
                  confirmUpdate = {this.handleUpdate} />;
              </ul>
              );
            }
          }
        )}
      </>
    );
  }
}

export default Tasks;