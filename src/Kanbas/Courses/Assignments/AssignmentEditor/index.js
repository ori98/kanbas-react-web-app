import React from "react";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
// import db from "../../../Database";
import { BsCheckCircleFill } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

import { useSelector, useDispatch } from "react-redux";

import {
    addAssignment,
    updateAssignment,
    selectAssignment,
    resetAssignment
} from "../assignmentsReducer";

function AssignmentEditor() {
    const dispatch = useDispatch();

    // const { assignmentId } = useParams();
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);

    const { courseId } = useParams();
    const navigate = useNavigate();

    const pathname = useLocation().pathname;

    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");

        pathname.includes("Create")?
            dispatch(addAssignment({ ...assignment, course: courseId })) :
            dispatch(updateAssignment(assignment));
            dispatch(resetAssignment());
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div>
            <div className="my-2">
                <span className="float-end">
                    <span className="text-success font-weight-bold me-2">
                        <BsCheckCircleFill style={{ color: "green" }} className="mx-2" />
                        Published
                    </span>
                    <div className="btn button-light d-inline border border-dark" type="button">
                        <IoEllipsisVertical />
                    </div>
                </span>
            </div>
            <div className="container-fluid my-2">
                <div className="row">
                    <label htmlFor="assignmentName" className="text-muted">Assignment Name:</label>
                    <input id="assignmentName" value={assignment.title}
                        onChange={(e) => dispatch(selectAssignment({ ...assignment, title: e.target.value }))}
                        className="form-control mb-2 my-3" />
                    
                    <label htmlFor="assignmentDescription" className="text-muted">Assignment Description:</label>
                    <input id="assignmentDescription" value={assignment.description}
                        onChange={(e) => dispatch(selectAssignment({ ...assignment, description: e.target.value }))}
                        className="form-control mb-2 my-3" />
                    
                    <div className="col-12">
                        <div className="row">
                            <div className="col-3"> 
                                <label htmlFor="assignmentPoints" className="float-end text-muted"><small>Points </small></label>
                            </div>
                            <div className="col-9"> 
                                <input id="assignmentPoints" className="form-control" type="number" value={assignment.points} /> 
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-3"> 
                                <small className="float-end text-muted">Assign</small>
                            </div>
                            <div className="col-9">
                                
                                <form className= "border my-2 rounded-3 p-2">
                                    <div className="row ms-2">
                                        <div className="col-12">
                                            <label htmlFor="dueDate" className="bold">Due</label>
                                            <input id="dueDate" type="date" className="form-control" value={assignment.due} />
                                        </div>
                                    </div>
                                    <div className="row ms-2">
                                        <div className="col-6">
                                            <label htmlFor="availableFromDate" className="bold">Available From</label>
                                            <input id="availableFromDate" type="date" className="form-control" value={assignment.availableFromDate} />
                                        </div>

                                        <div className="col-6">
                                            <label htmlFor="availableToDate" className="bold">Available To</label>
                                            <input id="availableToDate" type="date" className="form-control" value={assignment.availableToDate} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="float-end">
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-light mx-2 border-1">
                        Cancel
                    </Link>
                    <button onClick={handleSave} className="btn btn-danger me-2">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AssignmentEditor;
