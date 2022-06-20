import React from 'react';
import { HidenComponent } from './HidenComponent/HidenComponent';
import { FormToJson } from './Forms/FormToJson';
import { FormSyncControl } from './FormsSyncOutput/FormSyncControl';
import './App.css';
import { StyledButton } from './styled-components/StyledButton';

function App() {
  return (
    <div>
      {/*<HidenComponent></HidenComponent>
      <FormToJson></FormToJson>
      <FormSyncControl/>*/}
      <StyledButton/>
    </div>
  );
}

export default App;
