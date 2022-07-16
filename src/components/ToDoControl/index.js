import React from 'react';
import styles from './ToDoControl.module.scss';
import { ToDoList } from './ToDoList';
import { ToDoHeader } from './ToDoHeader';
import { ToDoFooter } from './ToDoFooter';

export class ToDoControl extends React.Component{
   constructor(props){
      super(props);

      this.state = { tasks: [] };

      this.addTask = this.addTask.bind(this);
      this.removeTask = this.removeTask.bind(this);
      this.markAsDone = this.markAsDone.bind(this);
   }

   addTask(item){
      let newList = [item, ...this.state.tasks];
      this.setState({ tasks: newList });
   }

   removeTask(id){
      const newList = this.state.tasks.filter(t => t.uid != id);
      this.setState({ tasks: newList });
   }

   markAsDone(id){
      let completed = this.state.tasks.find(t => t.uid == id);
      completed.isDone = true;
   }

   render(){
      return(
         <div className={styles.container}>
            <ToDoHeader />
            <ToDoList tasks={this.state.tasks} removeTask={this.removeTask} markAsDone={this.markAsDone} />
            <ToDoFooter addTask={this.addTask} />
         </div>
      );
   }
}