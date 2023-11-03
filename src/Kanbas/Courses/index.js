import db from "../../Kanbas/Database";
import { FaBars } from "react-icons/fa";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

import "./index.css";

function Courses({ courses }) {
    console.log("Inside Courses.js: ", courses);
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const { pathname } = useLocation();
    const pageName = pathname.substring(pathname.lastIndexOf("/") + 1);

    if (!course) {
        // Handle the case where courseId is not found in the courses data
        return <Navigate to="/" />;
    }

    return (
        <div className="course-navigation-div">
            <nav aria-label="breadcrumb custom-breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item text-danger"><FaBars /> {course._id}</li>
                    <li className="breadcrumb-item text-danger">{course.name}</li>
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
                            element={<AssignmentEditor/>    }
                        />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Courses;
