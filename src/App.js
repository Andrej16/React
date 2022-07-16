import React from 'react';
import { HidenComponent } from './HidenComponent/HidenComponent';
import { FormToJson } from './Forms/FormToJson';
import { FormSyncControl } from './FormsSyncOutput/FormSyncControl';
import './App.css';
import { StyledButton } from './styled-components/StyledButton';
import { SupportForm } from './SupportForm/SupportForm';
import { NiceControl } from './Stilization controls/NiceControl';
import { Icon } from './components/Icon';
import { ToDoIcon } from './components/ToDoIcon';
import { IconTypes } from './constants/icons';
import { Button } from './components/Button';
import { ToDoButton } from './components/ToDoButton';
import { MarkList } from './components/MarkList';
import { ToDoControl } from './components/ToDoControl';

function App() {
   return (
      <div className="App">
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

               <ToDoControl />
         </header>
      </div>
   );
}

export default App;
