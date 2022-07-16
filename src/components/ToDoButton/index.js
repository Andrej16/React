import React from 'react';
import clsx from 'clsx';
import { ToDoIcon } from '../ToDoIcon';
import styles from './ToDoButton.module.scss';
import { IconTypes } from '../../constants/icons';

export class ToDoButton extends React.Component{
   constructor(props){
      super(props);

      this.handleClick = this.handleClick.bind(this);
   }

   handleClick(event){
      switch(this.props.iconType){
         case IconTypes.cross:
            this.props.onClickCross(event.target.innerText);
            break;
         case IconTypes.checkmark:
            this.props.onClickCheckmark(event.target.innerText);
            break;
      }
   }

   render(){
      const { children, className, size, color, iconType, buttonType = 'button' } = this.props;
      const render = (
         <span className={styles.contentWrapper}>
            {<ToDoIcon type={iconType} className={clsx(styles.icon, !children && styles.resetMarginRight)}/>}
            {children}
         </span>
      );

      return(
         <button type={buttonType} 
            className={
               clsx(
                  styles.container, 
                  className,
                  {
                     [styles[size]]: size,
                     [styles[`container_${color}`]]: color
                  }
               )
            }
            onClick={this.handleClick}>
               {render}
            </button> 
      );
   }
   
}
