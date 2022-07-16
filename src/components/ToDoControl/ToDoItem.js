import React from 'react';
import { IconTypes } from '../../constants/icons';
import styles from './ToDoControl.module.scss';
import { ToDoButton } from '../ToDoButton';
import clsx from 'clsx';

export class ToDoItem extends React.Component{
   constructor(props){
      super(props);

      this.state = { isCompleted: false };

      this.handleClickCross = this.handleClickCross.bind(this);
      this.handleClickCheckmark = this.handleClickCheckmark.bind(this);
   }

   handleClickCross(){
      this.props.removeTask(this.props.id);
   }

   handleClickCheckmark(){
      this.props.markAsDone(this.props.id); //for deep logic, currently not uses

      this.setState({ isCompleted: !this.state.isCompleted });
   }

   render(){
      const isDone = this.state.isCompleted;

      return(
         <li className={styles.listItem}>
            <div className={clsx(
                  {
                     [styles.listItemValueWrapper]: !isDone,
                     [styles.listItemDoneWrapper]: isDone 
                  })}>
               {this.props.item.value}
            </div>
            <ToDoButton size="small" onClickCross={this.handleClickCross} iconType={IconTypes.cross} />
            <ToDoButton size="small" onClickCheckmark={this.handleClickCheckmark} iconType={IconTypes.checkmark} />
         </li>
      );
   }
}