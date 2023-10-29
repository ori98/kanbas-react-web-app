import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEllipsisV } from "react-icons/fa";

import { React, useState } from "react";

function Dashboard(

    {
        courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse
    }

) {

    // const [courses, setCourses] = useState(db.courses);

    // const [course, setCourse] = useState({
    //     name: "New Course", number: "New Number",
    //     startDate: "2023-09-10", endDate: "2023-12-15",
    // });

    // const addNewCourse = () => {
    //     setCourses([...courses,
    //     {
    //         ...course,
    //         _id: new Date().getTime().toString()
    //     }]);
    // };

    // const deleteCourse = (courseId) => {
    //     setCourses(courses.filter((course) => course._id !== courseId));
    // };

    // const updateCourse = () => {
    //     setCourses(
    //         courses.map((c) => {
    //             if (c._id === course._id) {
    //                 return course;
    //             } else {
    //                 return c;
    //             }
    //         })
    //     );
    // };

    return (
        <div className="ms-5">
            <div className="row">
                <div className="col-12">
                    <span className="fs-1 fw-light">
                        Dashboard
                    </span>
                    <div>
                        <h5>Course</h5>
                        <input value={course.name} className="form-control"
                            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                        <input value={course.number} className="form-control"
                            onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                        <input value={course.startDate} className="form-control" type="date"
                            onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                        <input value={course.endDate} className="form-control" type="date"
                            onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
                        <button className="btn btn-danger float-end my-4" onClick={addNewCourse} >
                            Add
                        </button>
                        <button
                            className="btn btn-primary float-end my-4 mx-2"
                            onClick={updateCourse} >
                            Update
                        </button>

                    </div>
                </div>
                <hr className="mt-2" />
            </div>
            <div className="row ms-1">
                <div className="row">
                    <div className="fs-3">
                        Published Courses ({courses.length})


                        <hr />
                    </div>
                </div>

                <div className="row">
                    <div className="d-flex flex-wrap">
                        {courses.map((course) => (
                            <div key={course._id} className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <Link to={`/Kanbas/Courses/${course._id}`} className="card text-decoration-none mb-4">
                                    {console.log(course._id)}
                                    <div className="blue-background">
                                        <FaEllipsisV className="float-end m-2 text-light" />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-title text-primary">{course.name}</p>
                                        <p className="card-text">
                                            {course.number} <br />
                                            <span className="text-muted">Fall 2023 Full Term</span>
                                        </p>
                                        <i className="fa-solid fa-file-lines"></i>

                                        <button
                                            className="btn btn-danger float-end"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }}>
                                            Delete
                                        </button>
                                        <button
                                            className="btn btn-primary float-end mx-2"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                            }}>
                                            Edit
                                        </button>

                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
