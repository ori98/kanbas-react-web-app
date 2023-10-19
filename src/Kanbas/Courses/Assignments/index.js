import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";

import { FaCheckCircle } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { GiNotebook } from "react-icons/gi";
import { LiaEllipsisVSolid } from "react-icons/lia";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
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
          <div type="button" className="btn btn-light ms-2 me-2"><AiOutlinePlus className="big-icon"/>Group</div>
          <div type="button" className="btn btn-danger ms-2 me-2"><AiOutlinePlus className="big-icon"/>Assignment</div>
          <div type="button" className="btn btn-light ms-2 me-2"><IoEllipsisVerticalSharp className="big-icon"/></div>
        </span>
      </form>
      <hr />
      <div className="list-group rounded-0">
        <div className="list-group-item list-group-item-secondary">
          <strong><IoEllipsisVerticalSharp style={{ margin: "-10px" }} /><IoEllipsisVerticalSharp /><IoMdArrowDropdown />ASSIGNMENTS FOR COURSE: </strong>{courseId}
          <span className="float-end">
          <span class="badge badge-pill badge-secondary border border-dark text-dark rounded-pill text-muted">40% of Total</span>
          <AiOutlinePlus className="big-icon"/><LiaEllipsisVSolid className="big-icon"/>
          </span>
        </div>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item left-green-border">
            <IoEllipsisVerticalSharp style={{ margin: "-10px" }} /><IoEllipsisVerticalSharp />
            <GiNotebook style={{ color: "green" }} className="mx-2" />
            {assignment.title}
            <span className="float-end">
              <FaCheckCircle style={{ color: "green" }} className="mx-3"/>
              <LiaEllipsisVSolid />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;