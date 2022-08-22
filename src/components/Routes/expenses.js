import React from 'react';
import { ThemeContext } from '../../context/theme';

export default class Expenses extends React.Component {
   static contextType = ThemeContext;

   render(){
      let theme = this.context.theme;
      return (
         <main style={{ padding: "1rem 0" }}>
            <h2 style={{backgroundColor: theme.background}}>Expenses</h2>
         </main>
      );
   }
 }