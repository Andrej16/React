import React from 'react';
import { HidenComponent } from './HidenComponent/HidenComponent';
import { FormToJson } from './Forms/FormToJson';
import { FormSyncControl } from './FormsSyncOutput/FormSyncControl';
import './App.css';
import { StyledButton } from './styled-components/StyledButton';
import {SupportForm} from './SupportForm/SupportForm';
import { NiceControl } from './Stilization controls/NiceControl';

function App() {
  return (
    <div className="App">
      {/*<HidenComponent></HidenComponent>
      <FormToJson></FormToJson>
      <StyledButton/>
      <FormSyncControl/>
      <SupportForm/>*/}
      <NiceControl></NiceControl>
    </div>
  );
}

export default App;
