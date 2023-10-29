import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
// import db from "../../Database";
import "./index.css";

// importing icons
import { FaCheckCircle } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { GiNotebook } from "react-icons/gi";
import { LiaEllipsisVSolid } from "react-icons/lia";
import { AiFillDelete } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";

import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
} from "./assignmentsReducer";


function Assignments() {
  const { courseId } = useParams();

  const dispatch = useDispatch();

  // storing assignments
  // const assignments = db.assignments;
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);

  const [isModalOpen, setModalOpen] = useState(false);

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  console.log(courseAssignments);
  return (
    <div>
      {/* <h2>Assignments for course {courseId}</h2> */}
      <form>
        <input
          type="text"
          placeholder="Search for Assignment"
          className="search-bar text-muted"
        />
        <span className="float-end">
          <div type="button" className="btn btn-light ms-2 me-2"><AiOutlinePlus className="big-icon" /> Group</div>
          <Link to={`/Kanbas/Courses/${courseId}/Assignments/Create`} className="btn btn-light ms-2 me-2"><AiOutlinePlus className="big-icon" /> Assignment</Link>
          <div type="button" className="btn btn-light ms-2 me-2"><IoEllipsisVerticalSharp className="big-icon" /></div>
        </span>
      </form>
      <hr />
      <div className="list-group rounded-0">
        <div className="list-group-item list-group-item-secondary">
          <strong><IoEllipsisVerticalSharp style={{ margin: "-10px" }} /><IoEllipsisVerticalSharp /><IoMdArrowDropdown />ASSIGNMENTS FOR COURSE: </strong>{courseId}
          <span className="float-end">
            <span class="badge badge-pill badge-secondary border border-dark text-dark rounded-pill text-muted">40% of Total</span>
            <AiOutlinePlus className="big-icon" /><LiaEllipsisVSolid className="big-icon" />
          </span>
        </div>
        {courseAssignments.map((assignment) => (
          <div className="left-green-border list-group-item list-group-item-action">
            <Link
              key={assignment._id}
              onClick={() => dispatch(selectAssignment(assignment))}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="text-dark text-decoration-none"
            >
              <IoEllipsisVerticalSharp style={{ margin: "-10px" }} /><IoEllipsisVerticalSharp />
              <GiNotebook style={{ color: "green" }} className="mx-2" />
              {assignment.title}

            </Link>
            <span className="float-end">
              <FaCheckCircle style={{ color: "green" }} className="mx-2" />
              <LiaEllipsisVSolid />

              {/* modal section referred from ChatGPT as bootstrap modal was not working */}
              <button className="btn btn-danger mx-2" onClick={() => setModalOpen(true)}>
                <AiFillDelete />
              </button>

              {isModalOpen && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="false">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="deleteModalLabel">Delete Assignment</h5>
                        <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close" onClick={() => setModalOpen(false)}></button>
                      </div>
                      <div className="modal-body">
                        Are you sure you want to delete this assignment?
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => setModalOpen(false)}>Cancel</button>
                        <button type="button" className="btn btn-danger" onClick={() => { dispatch(deleteAssignment(assignment._id)); setModalOpen(false); }}>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Assignments;