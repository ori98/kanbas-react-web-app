import db from "../../Database";
import { useParams } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegKeyboard } from "react-icons/fa";
import { RiSettings5Fill } from "react-icons/ri";
import { FaFileImport, FaFileExport } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsChevronDown } from "react-icons/bs";
import SearchBar from "./Searchbar";
import { LuFilter } from "react-icons/lu";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <div className="my-2">
        <span className="text-danger">
          Gradebook
          <IoMdArrowDropdown />
        </span>
        <span className="float-end">
          <FaRegKeyboard className="text-danger me-5" />
          <div type="button" className="btn btn-light border-dark mx-2"><FaFileImport className="big-icon" /> Import</div>
          <div type="button" className="btn btn-light border-dark mx-2"><FaFileExport className="big-icon" /> Export <IoMdArrowDropdown className="big-icon" /></div>
          <div type="button" className="btn btn-light border-dark mx-2"><RiSettings5Fill className="big-icon" /></div>
        </span>
      </div>

      <div className="fluid-container">
        <div className="row my-2">
          <div className="col-6">
            <b>Student Names</b>
            <br />
            <SearchBar placeholder="Search Students" />
            <br />
            <div type="button" className="btn btn-light border-dark ms-2"><LuFilter className="big-icon"/> Apply Filters</div>
          </div>
          <div className="col-6">
            <b>Assignment Names</b>
            <SearchBar placeholder="Search Assignments" />
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered-gray">
          <thead>
            <tr className="table-secondary"> {/* Apply class to the header */}
              <th>Student Name</th>
              {assignments.map((assignment) => (<th>{assignment.title}</th>))}
            </tr>
          </thead>

          <tbody>
            {enrollments.map((enrollment, index) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr className={index % 2 != 0 ? "table-secondary" : ""}> {/* Apply class to every alternate row */}
                  <td className="text-danger">{user.firstName} {user.lastName}</td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                    return (<td>{grade?.grade || ""}</td>);
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;