import axios from "axios";

const ASSIGNMENT_URL = "http://localhost:4000/api/assignments";

// retrieving assignments
export const findAssignmentForCourse = async (courseId) => {
  const response = await axios
    .get(`${ASSIGNMENT_URL}/${courseId}`);
  return response.data;
}

// creating assignment
export const createAssignment = async (courseId, assignment) => {
  const response = await axios.post(
    `${ASSIGNMENT_URL}/${courseId}`,
    assignment
  );

  return response.data;
}

// deleting assignment
export const deleteAssignment = async (assignmentId) => {
  const response = await axios
    .delete(`${ASSIGNMENT_URL}/${assignmentId}`);
  return response.data;
}

// updating assignment
export const updateAssignment = async (assignment) => {
  const response = await axios.
    put(`${ASSIGNMENT_URL}/${assignment._id}`, assignment);
  return response.data;
}