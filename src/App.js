import React from 'react';
import { HidenComponent } from './HidenComponent/HidenComponent';
import { FormToJson } from './Forms/FormToJson';
import { FormSyncControl } from './FormsSyncOutput/FormSyncControl';
import './App.css';
import { StyledButton } from './styled-components/StyledButton';
import {SupportForm} from './SupportForm/SupportForm';
import { NiceControl } from './Stilization controls/NiceControl';
import { Icon } from './components/Icon';
import { IconTypes } from './constants/icons';
import { Button } from './components/Button';

function App() {
  return (
    <div className="App">
      {/*<HidenComponent></HidenComponent>
      <FormToJson></FormToJson>
      <StyledButton/>
      <FormSyncControl/>
      <SupportForm/>
      <NiceControl></NiceControl>
      <Icon type={IconTypes.cross} color="red" id="22" className="className"></Icon>
      <Icon type={IconTypes.plus} size="16px" id="23"></Icon>*/}
      <Button className="customClass" id="id" iconType={IconTypes.cross}>First</Button>
      <Button className="customClass" size="small" color="primary" id="id" iconType={IconTypes.plus}>Second</Button>
    </div>
  );
}

export default App;
