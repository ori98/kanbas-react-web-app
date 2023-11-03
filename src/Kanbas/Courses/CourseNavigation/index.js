import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {

  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Progress Reports (EAB Navigate)", "Settings"];

  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="d-none d-md-block list-group" style={{ width: 150 }}>
      <small className="muted-text"> 
      202310_1 Fall2024 
      </small>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item custom-list-group-item ${pathname.includes(link) && "active-item"} text-danger`}>
          {link}
        </Link>
      ))}
    </div>
  );
}


export default CourseNavigation;