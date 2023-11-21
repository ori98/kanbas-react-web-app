// import db from "../../Kanbas/Database";
import { FaBars } from "react-icons/fa";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

import { useState, useEffect } from "react";
import axios from "axios";

import "./index.css";

// function Courses({ courses }) {
function Courses() {
    const URL = "https://kanbas-node-server-app-87u1.onrender.com/api/courses";

    const { courseId } = useParams();
    // const course = courses.find((course) => course._id === courseId);
    const { pathname } = useLocation();
    const pageName = pathname.substring(pathname.lastIndexOf("/") + 1);

    const [course, setCourse] = useState({});

    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };
    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);

    if (!course) {
        // Handle the case where courseId is not found in the courses data
        return <Navigate to="/" />;
    }

    return (
        <div className="course-navigation-div">
            <nav aria-label="breadcrumb custom-breadcrumb">
                <ol className="breadcrumb">
                    {course && (
                        <li className="breadcrumb-item text-danger">
                            <FaBars /> {course.number}
                        </li>
                    )}
                    <li className="breadcrumb-item text-danger">{course ? course.name : ""}</li>
                    <li className="breadcrumb-item active" aria-current="page">{pageName}</li>
                </ol>
            </nav>

            <hr />
            <div className="d-none d-md-block">
                <CourseNavigation />
            </div>
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0 route-width"
                >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor />}
                        />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Courses;
