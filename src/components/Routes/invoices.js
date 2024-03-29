import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "./invoicesData";
import QueryNavLink from '../QueryNavLink';
import { ThemeContext } from '../../context/theme';

export default function Invoices() {
   let invoices = getInvoices();
   let [searchParams, setSearchParams] = useSearchParams();
   return (
      <ThemeContext.Consumer>
         {
            /*(context) => ( First approach
               <div style={{ display: "flex", backgroundColor: context.theme.background }}>*/
            ({theme}) => ( 
               <div style={{ display: "flex", backgroundColor: theme.background }}>
                  <nav
                     style={{
                        borderRight: "solid 1px",
                        padding: "1rem",
                     }}
                  >
                     <input
                        value={searchParams.get("filter") || ""}
                        onChange={(event) => {
                           let filter = event.target.value;
                           if (filter) {
                              setSearchParams({ filter });
                           } else {
                              setSearchParams({});
                           }
                        }}
                     />
                     {invoices
                        .filter((invoice) => {
                           let filter = searchParams.get("filter");

                           if (!filter)
                              return true;

                           let name = invoice.name.toLowerCase();

                           return name.startsWith(filter.toLowerCase());
                        })
                        .map((invoice) => (
                           <QueryNavLink
                              style={({ isActive }) => {
                                 return {
                                    display: "block",
                                    margin: "1rem 0",
                                    color: isActive ? "red" : "",
                                 };
                              }}
                              to={`/invoices/${invoice.number}`}
                              key={invoice.number}
                           >
                              {invoice.name}
                           </QueryNavLink>
                        ))}
                  </nav>
                  <Outlet />
               </div>
            )
         }
      </ThemeContext.Consumer>
   );
}
