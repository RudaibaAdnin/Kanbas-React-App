import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import YouTubeSearch from "./YouTube";
import store from "./store";
import { Provider } from "react-redux";


function Kanbas() {
    return(
       <div>
         <Provider store={store}>
            <div className="d-flex" style={{ flexGrow: 1 }}>
               <KanbasNavigation />
               <div style={{ flexGrow: 1 }}>
               <Routes>
                  <Route path="/" element={<Navigate to="Dashboard" />} />
                  <Route path="Account" element={<h1>Account</h1>} />
                  <Route path="Dashboard" element={
                        <Dashboard/>} />
                   <Route path="Courses/:courseId/*" element= <Courses /> />
                   <Route path="YouTube" element={
                        <YouTubeSearch/>} />
               </Routes>
               </div>
         </div>
         </Provider>
       </div>
       
    );
 }
 export default Kanbas

