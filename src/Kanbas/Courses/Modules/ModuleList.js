import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaEllipsisV, FaPlus, FaCheckCircle } from "react-icons/fa";

import { BiCheckCircle } from "react-icons/bi";
import { HiOutlineDocumentText, HiEllipsisVertical } from "react-icons/hi2";
import { AiFillCaretRight, AiFillCaretDown, AiOutlinePlus } from "react-icons/ai";
import "./index.css";

import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  // const modules = db.modules;
  // const [modules, setModules] = useState(db.modules);

  const modules = useSelector((state) => state.modulesReducer.modules);

  // creating a module

  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // });

  const module = useSelector((state) => state.modulesReducer.module);

  // Module description
  const [expandedModules, setExpandedModules] = useState(
    modules
      .filter((module) => module.course === courseId)
      .map((_, index) => index)
  );

  // toggling description
  const toggleDescription = (index) => {
    if (expandedModules.includes(index)) {
      setExpandedModules(expandedModules.filter((item) => item !== index));
    } else {
      setExpandedModules([...expandedModules, index]);
    }
  };

  // adding module
  // const addModule = (module) => {
  //   setModules([
  //     { ...module, _id: new Date().getTime().toString() },
  //     ...modules,
  //   ]);
  // };

  // deleting a module
  // const deleteModule = (moduleId) => {
  //   setModules(modules.filter(
  //     (module) => module._id !== moduleId));
  // };

  // updating modules
  // const updateModule = () => {
  //   setModules(
  //     modules.map((m) => {
  //       if (m._id === module._id) {
  //         return module;
  //       } else {
  //         return m;
  //       }
  //     })
  //   );
  // }

  const dispatch = useDispatch();

  return (
    <div >
      <div className="btn-group d-flex justify-content-end top-space">
        <div className="btn-group d-flex justify-content-end">
          <span className="float-end">
            <div type="button" className="btn btn-light mx-2"> Collapse All</div>
            <div type="button" className="btn btn-light mx-2">View Progress</div>
            <div className="dropdown" style={{ display: "inline" }}>
              <div className="btn btn-light dropdown-toggle mx-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <BiCheckCircle style={{ color: "green" }} className="big-icon" /> Publish All
              </div>
              <ul className="dropdown-menu mx-2">
                <li> Publish All</li>
                <li>Delete All</li>
              </ul>
            </div>
            <div type="button" className="btn btn-danger mx-2"><AiOutlinePlus className="big-icon" /> Module</div>
            <div type="button" className="btn btn-light mx-2"><HiEllipsisVertical className="big-icon" /> </div>
          </span>
        </div>
      </div>
      <hr />
      <ul className="list-group">
        <li className="list-group-item">
          <div className="container mt-5">
            <form>
              <div className="form-group">
                <label htmlFor="moduleInput">New Module</label>
                <input
                  type="text"
                  className="form-control"
                  id="moduleInput"
                  placeholder="Enter module name"
                  value={module.name}
                  onChange={(e) =>
                    dispatch(setModule({ ...module, name: e.target.value }))
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="descriptionInput">New Description</label>
                <textarea
                  className="form-control"
                  id="descriptionInput"
                  rows="3"
                  placeholder="Enter description"
                  value={module.description}
                  onChange={(e) =>
                    dispatch(setModule({ ...module, description: e.target.value }))
                  }
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success my-2 mx-2" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
              <button onClick={() => dispatch(updateModule(module))}
              className="btn btn-primary my-2">
                Update
              </button>

            </form>
          </div>
        </li>
        {modules && modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item list-group-item-action list-group-item-secondary mb-4 p-0" style={{ borderRadius: "0" }}>
              <div onClick={() => toggleDescription(index)}>
                <FaEllipsisV /><FaEllipsisV className="joined-ellipsis" />
                <span>
                  <AiFillCaretRight className="me-1" /><span className="fw-bold">{module.name}</span>
                  <span className="float-end">
                    <FaCheckCircle style={{ color: "green" }} />
                    <AiFillCaretDown />
                    <FaPlus className="m-2" />
                    <FaEllipsisV />
                  </span>
                </span>
              </div>

              {expandedModules.includes(index) && (
                <div className="list-group-item list-group-item-action bg-white m-0 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <HiOutlineDocumentText className="mx-2 big-icon" />
                    <p className="mb-0">{module.description}</p>
                  </div>
                  <div className="my-2 float-end">
                    <button
                      onClick={(e) =>
                        // dispatch(setModule({ ...module, description: e.target.value }))
                        dispatch(deleteModule(module._id))
                      }
                      className="btn btn-danger my-2 float-end"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => dispatch(setModule(module))}
                      className="btn btn-success my-2 float-end mx-2"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              )}

            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ModuleList;
