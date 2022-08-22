import React, { Fragment } from 'react';
import { Header } from './Header';
import { List } from './List';
import styles from './MarkList.module.scss';
import { ThemeContext } from '../../context/theme';

export class MarkList extends React.Component {
  constructor (props) {
    super(props);
    this.state = { marks: [] };
  }

  static contextType = ThemeContext;

  addItem = mark => {
    const newList = [mark, ...this.state.marks];
    this.setState({marks: newList});
  }

  removeItem = id => {
    const newList = this.state.marks.filter(item => id !== item.uid);
    this.setState({marks: newList});
  }

  render() {
      let theme = this.context.theme;
      return (
         <Fragment>
            <h2 style={{backgroundColor: theme.background}}>Mark list context</h2>
            <div className={styles.container}>
               <Header addItem={this.addItem} />
               <List items={this.state.marks} removeItem={this.removeItem} />
            </div>
         </Fragment>
      );
   }
}