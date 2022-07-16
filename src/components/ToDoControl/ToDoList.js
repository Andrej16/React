import React from 'react';
import styles from './ToDoControl.module.scss';
import { ToDoItem } from './ToDoItem';

export function ToDoList(props){
   const tasks = props.tasks.map(task => 
      <ToDoItem key={task.uid} id={task.uid} item={task} removeTask={props.removeTask} markAsDone={props.markAsDone}/>);

   return <ul className={styles.listContainer}>{tasks}</ul>;
}