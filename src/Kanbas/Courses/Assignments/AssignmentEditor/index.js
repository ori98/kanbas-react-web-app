import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { BsCheckCircleFill } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
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
                    <div className=" btn button-light d-inline border border-dark" type="button">
                        <IoEllipsisVertical />
                    </div>
                </span>
            </div>
            <div className="my-2">
                <small className="text-muted">Assignment Name:</small>
                <input value={assignment.title}
                    className="form-control mb-2 my-3" />
                <hr />
                <div className="float-end">
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                        className="btn btn-light mx-2 border-1">
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

