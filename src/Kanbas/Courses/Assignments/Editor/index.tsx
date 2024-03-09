import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import db from "../../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "../assignmentsReducer";
import { LabState} from "../../../store";


function AssignmentEditor() {
    
    const { assignmentId } = useParams();
    const assignment = useSelector((state: LabState) => state.assignmentsReducer.assignment);
    const { courseId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState(assignment?.name);
    const [description, setDescription] = useState(assignment?.description);
    const [dueDate, setdueDate] = useState(assignment?.dueDate);
    const [availableDate, setavailableDate] = useState(assignment?.availableDate);
    const [untilDate, setuntilDate] = useState(assignment?.untilDate);
   

    const handleSave = (e) => {
        // console.log("Actually saving assignment TBD in later assignments");
        //alert("Saved"+name+description+courseId);
        //dispatch(setAssignment({ ...assignment, name: name, description: description }));
        dispatch(updateAssignment({...assignment, name: name, description: description, 
          dueDate: dueDate, availableDate: availableDate, untilDate: untilDate, course: courseId}))
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
  return (
    <div>

    <br/> <br/>
    <div className="col-md-10">
        <label>Assignment Name</label>
          <input name="name"
                  value={name} 
                  className="form-control m-2"
                  onChange={(e) => setName(e.target.value)}/>
        <label>Assignment Description</label>
          <textarea name="description"
                    value={description} 
                    className="form-control m-2"
                    onChange={(e)=>setDescription(e.target.value)}/>


    <div className="card bg-light m-2">
          <div className="card-header">
            Assign
          </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label offset-sm-2">Due</label>
        </div>
        <div className="row mb-3">
           <div className="col-sm-8 offset-sm-2">
           <input value={dueDate} className="form-control" type="date"
             onChange={(e) =>setdueDate(e.target.value)}/>
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-4 col-form-label offset-sm-2">Available From</label>
          <label className="col-sm-4 col-form-label">Until</label>
        </div>
        <div className="row mb-3">
          <div className="col-sm-4 offset-sm-2">
          <input value={availableDate} className="form-control" type="date"
             onChange={(e) =>setavailableDate(e.target.value)}/>
          </div>
          <div className="col-sm-4">
          <input value={untilDate} className="form-control" type="date"
             onChange={(e) =>setuntilDate(e.target.value)}/>
          </div>
        </div>
        </div>




        <button onClick={handleSave} className="btn btn-danger m-2 float-end">
             Save
        </button>
          <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-success m-2 float-end">
            Cancel
        </Link>

        
      </div>
    </div>
  );
}
export default AssignmentEditor;