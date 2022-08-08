import React from 'react';
import {
  Link,
  Outlet
} from "react-router-dom";
  
export const Menu = () => {
   return (
      <div>
         <h1>Bookkeeper!</h1>
         <nav
            style={{
               borderBottom: "solid 1px",
               paddingBottom: "1rem",
            }}
            >
            <Link to="/invoices">Invoices</Link> |{" "}
            <Link to="/expenses">Expenses</Link> |{" "}
            <Link to="/marklist">Mark List</Link>
         </nav>
         <Outlet />
      </div>
   );
}
