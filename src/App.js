import React from 'react';
import { HidenComponent } from './HidenComponent/HidenComponent';
import { FormToJson } from './Forms/FormToJson';
import { FormSyncControl } from './FormsSyncOutput/FormSyncControl';
import './App.css';

function App() {
  return (
    <div>
      {/*<HidenComponent></HidenComponent>
      <FormToJson></FormToJson>*/}
      <FormSyncControl/>
    </div>
  );
}

export default App;
