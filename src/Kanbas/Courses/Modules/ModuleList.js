import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisV, FaPlus, FaCheckCircle } from "react-icons/fa";

import { BiCheckCircle } from "react-icons/bi"; 
import { HiOutlineDocumentText, HiEllipsisVertical } from "react-icons/hi2"; 
import { AiFillCaretRight, AiFillCaretDown, AiOutlinePlus } from "react-icons/ai";
import "./index.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  const [expandedModules, setExpandedModules] = useState(
    modules
      .filter((module) => module.course === courseId)
      .map((_, index) => index)
  );

  const toggleDescription = (index) => {
    if (expandedModules.includes(index)) {
      setExpandedModules(expandedModules.filter((item) => item !== index));
    } else {
      setExpandedModules([...expandedModules, index]);
    }
  };

  return (
    <div>
      <div className="btn-group d-flex justify-content-end">
        {/* ... */}
        <div className="btn-group d-flex justify-content-end">
        <span className="float-end">
          <div type="button" className="btn btn-light mx-2"> Collapse All</div>
          <div type="button" className="btn btn-light mx-2">View Progress</div>
          <div className="dropdown" style={{ display: "inline" }}>
            <div className="btn btn-light dropdown-toggle mx-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
               <BiCheckCircle style={{color: "green"}} className="big-icon"/> Publish All
            </div>
            <ul className="dropdown-menu mx-2">
              <li> Publish All</li>
              <li>Delete All</li>
            </ul>
          </div>
          <div type="button" className="btn btn-danger mx-2"><AiOutlinePlus className="big-icon"/> Module</div>
          <div type="button" className="btn btn-light mx-2"><HiEllipsisVertical className="big-icon"/> </div>
        </span>
      </div>
      </div>
      <hr />
      <ul className="list-group">
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item list-group-item-action list-group-item-secondary mb-4 p-0" style={{ borderRadius: "0" }}>
              <div onClick={() => toggleDescription(index)}>
                <FaEllipsisV /><FaEllipsisV className="joined-ellipsis"/> 
                <span>
                  <AiFillCaretRight className="me-1"/><span className="fw-bold">{module.name}</span>
                  <span className="float-end">
                    <FaCheckCircle style={{color: "green"}}/>
                    <AiFillCaretDown/>
                    <FaPlus className="m-2"/>
                    <FaEllipsisV/>
                  </span>
                </span>
              </div>

              {expandedModules.includes(index) && <p className="list-group-item list-group-item-action bg-white m-0"><HiOutlineDocumentText className="mx-2 big-icon"/>{module.description}</p>}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ModuleList;
