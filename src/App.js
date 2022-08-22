import React from 'react';
import { HidenComponent } from './components/HidenComponent/HidenComponent';
import { FormToJson } from './components/Forms/FormToJson';
import { FormSyncControl } from './components/FormsSyncOutput/FormSyncControl';
import './App.css';
import { StyledButton } from './components/styled-components/StyledButton';
import { SupportForm } from './components/SupportForm/SupportForm';
import { NiceControl } from './components/Stilization controls/NiceControl';
import { Icon } from './components/Icon';
import { ToDoIcon } from './components/ToDoIcon';
import { IconTypes } from './constants/icons';
import { Button } from './components/Button';
import { ToDoButton } from './components/ToDoButton';
import { MarkList } from './components/MarkList';
import { ToDoControl } from './components/ToDoControl';
import ReactDOM from "react-dom/client";
import Expenses from './components/Routes/expenses';
import Invoices from './components/Routes/invoices';
import Invoice from './components/Routes/invoice';
import { Menu } from './components/Menu';
import {
   BrowserRouter,
   Routes,
   Route,
   Link,
   Outlet
} from "react-router-dom";
import { ModalProvider } from './context/modal';
import { Home } from './pages/Home';
import { ModalRoot } from './components/Modal';
import { themes } from './constants/themes';
import { ThemeContext } from './context/theme';

class App extends React.Component {
   constructor(props) {
      super(props);

      this.toggleTheme = () => {
         this.setState(state => ({
            theme:
               state.theme === themes.dark
                  ? themes.light
                  : themes.dark,
         }));
      };

      this.state = {
         theme: themes.light,
         toggleTheme: this.toggleTheme
      };
   }

   render() {
      return (
         <div className="App">
            <ModalProvider>
               <Menu />
               <header className="App-header">
                  {/*<HidenComponent></HidenComponent>
               <FormToJson></FormToJson>
               <StyledButton/>
               <FormSyncControl/>
               <SupportForm/>
               <NiceControl></NiceControl>
               <Icon type={IconTypes.cross} color="red" id="22" className="className"></Icon>
               <Icon type={IconTypes.plus} size="16px" id="23"></Icon>
               <Button className="customClass" size="large" id="id" iconType={IconTypes.cross}>First</Button>
               <Button className="customClass" size="small" color="secondary" id="id" iconType={IconTypes.plus}>Second</Button>
               <ToDoIcon type={IconTypes.cross} color="red" id="22" className="className"></ToDoIcon>
               <ToDoIcon type={IconTypes.plus} size="16px" id="23"></ToDoIcon>
               <ToDoIcon type={IconTypes.checkmark} size="42px" color="purple" id="24"></ToDoIcon>
               <MarkList />
               <ToDoButton size="large" iconType={IconTypes.cross} onClickCross={(name) => console.log(name)}>cross</ToDoButton>
               <ToDoButton size="large" iconType={IconTypes.checkmark} onClickCheckmark={(name) => console.log(name)}>checkmark</ToDoButton>
               <ToDoButton size="large" iconType={IconTypes.plus}>Plus</ToDoButton>*/}
                  <ThemeContext.Provider value={this.state}>
                     <Routes>
                        <Route path="home" element={<Home />} />
                        <Route path="expenses" element={<Expenses />} />
                        <Route path="invoices" element={<Invoices />}>
                           <Route
                              index
                              element={
                                 <main style={{ padding: "1rem" }}>
                                    <p>Select an invoice</p>
                                 </main>
                              }
                           />
                           <Route path=":invoiceId" element={<Invoice />} />
                        </Route>
                        <Route path="marklist" element={<MarkList />}></Route>
                        <Route
                           path="*"
                           element={
                              <main style={{ padding: "1rem" }}>
                                 <p>There's nothing here!</p>
                              </main>
                           }
                        />
                     </Routes>
                  </ThemeContext.Provider>
               </header>
               <ModalRoot />
            </ModalProvider>
         </div>
      );
   }
}

export default App;
