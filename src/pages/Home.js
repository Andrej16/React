import React, { Fragment } from 'react';
import { ModalContext } from '../context/modal';
import { Button } from '../components/Button';
import { Modal1, Modal2 } from '../components/Modal/index';
import { ThemeContext } from '../context/theme';

export class Home extends React.Component {
   render() {
      return (
         <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
               <div style={{ width: '100%', height: '500px', backgroundColor: theme.background }}>
                  <div>
                     <ModalContext.Consumer>
                        {({ showModal }) => (
                           <Fragment>
                              <Button onClick={() => showModal(Modal1)}>
                                 First Modal
                              </Button>
                              <Button onClick={() => showModal(Modal2, { additionalValue: 'some additional text' })}>
                                 Second Modal
                              </Button>
                              <br/>
                              <Button onClick={toggleTheme}>
                                 Toggle Theme
                              </Button>
                           </Fragment>
                        )}
                     </ModalContext.Consumer>
                  </div>
               </div>
            )}
         </ThemeContext.Consumer>
      )
   }
}