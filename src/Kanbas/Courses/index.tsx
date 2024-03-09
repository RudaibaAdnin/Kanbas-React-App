//import { courses} from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { Link, useLocation } from "react-router-dom";
import "./index.css";
import db from "../Database";

function Courses() {
  const links = ["Home", "Modules", "Piazza", "Grades", "Assignments"];
  const { pathname } = useLocation();
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  
  return (
    <div>
     {/* <h1 className="m-3" style={{ "color": "red", fontSize:20 }}><HiMiniBars3 /> Course {course?.name}  {links.map((link, index) =>(pathname.includes(link) ? " > "+link : ""))}</h1>  */}

     <div className="d-none d-md-block">
        <ol className="breadcrumb m-4">
              <li className="breadcrumb-item" style={{ "color": "red", fontSize:20 }}><HiMiniBars3 /> Course {course?.name}</li>
              <li className="breadcrumb-item active" style={{fontSize:20 }}>{links.map((link, index) =>(pathname.includes(link) ? link : ""))}</li>
          </ol>
         <CourseNavigation />
      </div>


        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "300px", top: "40px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>

  );
}

export default Courses

