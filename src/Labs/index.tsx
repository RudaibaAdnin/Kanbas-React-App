import Assignment3 from "./a3";
import Nav from "../nav";
import Assignment4 from "./a4";
import {Routes, Route, Navigate}
  from "react-router";

import store from "./store";
import { Provider } from "react-redux";

function Labs() {
 return (
   <div>
     <Nav/>
     <Provider store={store}>
     <Routes>
       <Route path="/"
        element={<Navigate
                  to="a3"/>}/>
       <Route path="a3"
        element={<Assignment3/>}/>
       <Route path="a4"
        element={<Assignment4/>}/>
     </Routes>
     </Provider>
   </div>
 );
}
export default Labs;


 