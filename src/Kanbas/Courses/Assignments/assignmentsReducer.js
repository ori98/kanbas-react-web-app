import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database"

const initialState = {
    assignments: db.assignments,
    assignment: {
        title: "New Assignment",
        description: "New Description",
        course: "New ID",
        points: "0",
        due: new Date().getTime().toString(),
        availableFromDate: new Date().getTime().toString(),
        availableToDate: new Date().getTime().toString(),
    },
}

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        // adding assignment
        addAssignment: (state, action) => {
            state.assignments = [
                {...action.payload, _id: new Date().getTime().toString()},
                ...state.assignments
            ];
        },

        // deleting assignment
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },

        // updating assignment
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                return assignment._id === action.payload._id ? action.payload : assignment;
            })
        },

        // setting assignment
        selectAssignment: (state, action) => {
            state.assignment = action.payload;
        },

        // resetting assignment
        resetAssignment: (state) => {
            state.assignment = initialState.assignment;
        }
    }
});

export const { addAssignment, deleteAssignment, updateAssignment, selectAssignment, resetAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;