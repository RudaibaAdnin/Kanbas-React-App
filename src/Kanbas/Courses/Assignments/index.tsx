import React from "react";
import "./index.css";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter((assignment) => assignment.course === courseId);
  return (
    <>
      {/*<!-- Add buttons and other fields here -->*/}

      <div className="row mt-5 ms-1">
        <div className="col-6">
            <input type="text" className="form-control w-20 p-2" placeholder="Search for Assignments"/>
        </div>
      <div className="col float-end">
        <span className="float-end">
          <button type="button" className="btn btn-light border border-dark me-1"><FaPlus/>Group</button>
          <button type="button" className="btn btn-danger me-1"><FaPlus />Assignment</button>
          <button type="button" className="btn btn-light border border-dark me-3 p-2"><FaEllipsisV/></button>
        </span>
      </div>
    </div>
    <br/>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV />
                <Link className="wd-item"
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;