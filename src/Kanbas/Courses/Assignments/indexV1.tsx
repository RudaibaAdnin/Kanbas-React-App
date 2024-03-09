import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import "./index.css";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentsReducer";
import { LabState, assignmentType} from "../../store";

function Assignments() {

  const { courseId } = useParams();
  const assignments = useSelector((state: LabState) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state: LabState) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();


  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleDelete = (id: string) =>{
    console.log(id)
    dispatch(setAssignment(id));
    setShowModal(false);

  };

  
  return (

    <>
    <div className="flex-fill m-2">
        <hr/>
        <h2>Assignments</h2>

        <br/>  <br/>  
        <hr/>
        <div className="col-md-10">
          <label>Assignment Name</label>
            <input value={assignment.name} 
                    className="form-control m-2"
                    onChange={(e) => dispatch(setAssignment({ ...assignment, name: e.target.value }))}/>
          <label>Assignment Description</label>
            <textarea value={assignment.description} 
                      className="form-control m-2"
                      onChange={(e) => dispatch(setAssignment({ ...assignment, description: e.target.value }))}/>
            
            <button className="btn btn-success float-end m-2"
                    onClick={() => dispatch(addAssignment({ ...assignment, course: courseId }))}> 
                    Add 
            </button>
            <button className="btn btn-primary float-end m-2"
                    onClick={() => dispatch(updateAssignment(assignment))}> 
                    Update 
            </button>
        </div>

      <br/>
      <br/>




    <ul className="list-group">
      <li className="list-group-item">
      <div className="m-3">
            <FaEllipsisV />ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
      </div>
      {assignments
        .filter((assignment) => assignment.course === courseId)
        .map((assignment, index) => (
        <ul className="list-group">
          <li key={index} className="list-group-item wd-item">
            <div>
             <FaEllipsisV className="me-2" />
              
               <Link className="wd-item"
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}  onClick={(event) => {dispatch(setAssignment(assignment))}}>{assignment.name}</Link>
                <br/>
                <small className="text-muted p-2">{assignment._id}{assignment.description}</small>
            {/* <p>{assignment._id}</p> */}
          
            <span className="float-end">

            <Link className="wd-item"
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}  onClick={(event) => {dispatch(setAssignment(assignment))}}>
                <button className="btn btn-warning wd-button m-2"> 
                  Edit
                </button>
            </Link>

                <button className="btn btn-danger wd-button m-2" value={index}
                  onClick={()=>setShowModal(true)}> 
                  Delete
                </button>
                          
                {showModal && (
                  <div className="modal show" style={{ display: 'block' }} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          {/* <h5 className="modal-title" id="exampleModalLabel">Modal heading</h5> */}
                          <button type="button" className="close" aria-label="Close" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                        Are you sure you want to remove the assignment?
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" onClick={()=>setShowModal(false)}>
                            No
                          </button>
                          <button type="button" className="btn btn-primary"   onClick={()=>handleDelete(assignment._id)}>
                            Yes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}


                {/* <button className="btn btn-danger wd-button m-2"
                  onClick={() => {dispatch(deleteAssignment(assignment._id))}}> 
                  Delete
                </button> */}
          
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
              
            </div>
          </li>
          </ul>
       ))}

        </li>
      </ul>
      <br/>
      <br/>
      
      </div>
    </>
  );
}
export default Assignments;