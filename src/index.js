import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';
import {
   BrowserRouter,
   Routes,
   Route,
 } from "react-router-dom";
import Expenses from './components/Routes/expenses';
import Invoices from './components/Routes/invoices';
import Invoice from './components/Routes/invoice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<App />}>
               <Route path="expenses" element={<Expenses />} />
               <Route path="invoices" element={<Invoices />}>
                  <Route path=":invoiceId" element={<Invoice />} />
               </Route>
               <Route
                  path="*"
                  element={
                  <main style={{ padding: "1rem" }}>
                     <p>There's nothing here!</p>
                  </main>
                  }
               />
            </Route>
         </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
