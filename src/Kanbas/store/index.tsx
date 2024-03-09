import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import coursesReducer from "../Dashboard/coursesReducer";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";
import db from "../Database";


export type assignmentType = {
  _id: string;
  name: string;
  description: string;
  course: string
  dueDate: string;
  availableDate: string;
  untilDate: string;
};

export type moduleType = {
    _id: string;
    name: string;
    description: string;
    course: string
  };


  export type courseType = {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
  };

export interface LabState {
    assignmentsReducer: {
    assignments: assignmentType[],
    assignment: assignmentType,
  },

modulesReducer: {
        modules: moduleType[],
        module: moduleType,
    },
    coursesReducer: {
        courses: courseType[],
        course: courseType,
    }
  
  }
  
const store = configureStore({
  reducer: {
    assignmentsReducer,
    modulesReducer,
    coursesReducer,
  }
});


export default store;