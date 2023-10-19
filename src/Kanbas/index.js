import { Navigate, Route, Routes} from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Account from "./Account";
import Calendar from "./Calendar";
import Dashboard from "./Dashboard";
import Courses from "./Courses";


function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard"/>} />
          <Route path="Account" element={<Account />} />
          <Route path="Calendar" element={<Calendar />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="Courses" element={<Navigate to="RS101/Home" />} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;