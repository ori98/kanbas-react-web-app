import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEllipsisV } from "react-icons/fa";

function Dashboard() {
    const courses = db.courses;

    return (
        <div className="ms-5">
            <div className="row">
                <div className="col-12">
                    <span className="fs-1 fw-light">
                        Dashboard
                    </span>
                    <hr />
                </div>
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
