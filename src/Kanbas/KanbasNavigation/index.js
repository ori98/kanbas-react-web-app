import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { BiBook } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiMiniInboxStack } from "react-icons/hi2";
import { AiOutlineHistory } from "react-icons/ai";
import { FaNetworkWired } from "react-icons/fa";
import { IoHelpCircleOutline } from 'react-icons/io5';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function KanbasNavigation() {

  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

  const linkToMap = {
    Account: <BiUserCircle className="wd-icon grey-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <BiBook className="wd-icon" />,
    Calendar: <FaRegCalendarAlt className="wd-icon" />,
    Inbox: <HiMiniInboxStack className="wd-icon" />,
    History: <AiOutlineHistory className="wd-icon" />,
    Studio: <FaNetworkWired className="wd-icon" />,
    Commons: <HiMiniInboxStack className="wd-icon" />,
    Help: <IoHelpCircleOutline className="wd-icon" />
  };

  const { pathname } = useLocation();
  return (
    <div>


    <div className="list-group wd-kanbas-navigation d-none d-md-block" style={{ width: 150 }}>

      <nav className="d-none d-md-block navbar scrollable-icons">
        <ul className="navbar-nav flex-column">
          <li className="nav-item mb-0 mt-0">
            <img className="logo" src="images/northeastern-logo-nobg.png" alt="northeastern-logo" />
          </li>

          {links.map((link, index) => {
            return (
              <Link
                key={index}
                to={`/Kanbas/${link}`}
                className={`nav-item nav-item ${pathname.includes(link) && "active"}`}>
                {linkToMap[link]}<br />
                {link}
              </Link>
            )
          })}
        </ul>
      </nav>
    </div>

    </div>
  );
}
export default KanbasNavigation;