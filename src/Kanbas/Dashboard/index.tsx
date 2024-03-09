import { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";

import { useSelector, useDispatch } from "react-redux";
import { addCourse,   deleteCourse,
  updateCourse,
  setCourse } from "./coursesReducer";
import { LabState } from "../store";

function Dashboard() {
    const courses = useSelector((state: LabState) => state.coursesReducer.courses);
    const course = useSelector((state: LabState) => state.coursesReducer.course);
    const dispatch = useDispatch();


  return (
    <div className="flex-fill m-4">
      <h1>Dashboard</h1>
      
      <br/><h3>Course</h3><br/>

      <div className="col-md-8 ms-4">

      <h5>Add and Update Course</h5>
      <input value={course.name} className="form-control m-2"
             onChange={(e) => dispatch(setCourse({ ...course, name: e.target.value })) } />
      <input value={course.number} className="form-control m-2"
             onChange={(e) => dispatch(setCourse({ ...course, number: e.target.value })) } />
      <input value={course.startDate} className="form-control m-2" type="date"
             onChange={(e) => dispatch(setCourse({ ...course, startDate: e.target.value })) }/>
      <input value={course.endDate} className="form-control m-2" type="date"
             onChange={(e) => dispatch(setCourse({ ...course, endDate: e.target.value })) } />
        <button className="btn btn-success float-end m-2"
             onClick={() => dispatch(addCourse({ ...course, course: course._id }))}> Add </button>

        <button className="btn btn-primary float-end m-2"
              onClick={() => dispatch(updateCourse(course))}> Update </button>

    </div>
      <br/>
      <br/>
      <br/>
      <div className="list-group col-md-8 m-4 mt-4 ms-4">
        <h5>Existing Courses</h5>
        {courses.map((course) => (
          <Link key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
                className="list-group-item">
            {course.name}
            {/* {course._id} */}
            <button className="btn btn-danger float-end m-2" 
                     onClick={(event) => { event.preventDefault(); dispatch(deleteCourse(course._id))}}>
                Delete
            </button>
            <button className="btn btn-warning float-end m-2"
                    onClick={(event) => { event.preventDefault(); dispatch(setCourse(course))}}> 
                Edit
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;