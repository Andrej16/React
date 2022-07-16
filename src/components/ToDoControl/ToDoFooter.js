import React from 'react';
import { ToDoButton } from '../ToDoButton';
import { IconTypes } from '../../constants/icons';
import styles from './ToDoControl.module.scss';

export class ToDoFooter extends React.Component{
   constructor(props){
      super(props);

      this.state = {task: ''};

      this.inputRef = React.createRef();
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   componentDidMount(){
      this.inputRef.current.focus();
   }

   handleChange(event){
      const newTask = event.target.value;
      this.setState({ task: newTask });
   }

   handleSubmit(event){
      const newTask = this.state.task;

      if(!newTask || !newTask.length){
         return;
      }

      this.props.addTask({value: this.state.task, uid: Date.now()});
      this.setState({ task: '' });
      event.preventDefault();
   }

   render(){
      return(
         <form onSubmit={this.handleSubmit}>
            <div className={styles.formContent}>
               <input type="text" 
                  ref={this.inputRef}
                  className={styles.inputField} 
                  placeholder='Add new task' 
                  value={this.state.task} 
                  onChange={this.handleChange}>
               </input>
               <ToDoButton buttonType="submit" iconType={IconTypes.plus} className={styles.submitBtn}>
                  Add
               </ToDoButton>
            </div>
         </form>
      );
   }
}