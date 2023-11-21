import { Navigate, Route, Routes } from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Account from "./Account";
import Calendar from "./Calendar";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
// import db from "./Database";
import { useState, useEffect } from "react";

import store from "./store";
import { Provider } from "react-redux";
import SmallNavigation from "./SmallNavigation";

import axios from "axios";

function Kanbas() {

  // const [courses, setCourses] = useState(db.courses);
  const [courses, setCourses] = useState([]);

  const [course, setCourse] = useState({
    name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });

  // accessing courses from database
  const URL = "https://kanbas-node-server-app-87u1.onrender.com/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);


  // Refactoring addNewCourse
  // const addNewCourse = () => {
  //   setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  // };

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };

  // refactoring delete course 
  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

  const deleteCourse = async (course) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter(
      (c) => c._id !== course._id));
  };

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

  const updateCourse = async () => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };

  return (
    <Provider store={store}>
      <SmallNavigation />
      <div className="d-flex">
        <KanbasNavigation />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<Account />} />
            <Route path="Calendar" element={<Calendar />} />
            <Route path="Dashboard" element={<Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}
            />} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
            {/* <Route path="Courses/RS101/*" element = {<Courses />}/> */}
            {/* <Route path="Courses/:courseId/" */}
            <Route path="Courses" element={<Navigate to="RS101/Home" />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;