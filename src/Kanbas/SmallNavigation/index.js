import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

import { Link, useLocation, useParams } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { BiBook } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiMiniInboxStack } from "react-icons/hi2";
import { AiOutlineHistory } from "react-icons/ai";
import { FaNetworkWired } from "react-icons/fa";
import { IoHelpCircleOutline } from 'react-icons/io5';
import { BsChevronDown } from 'react-icons/bs';


const Modal = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    // Inline styles for the modal overlay and content
    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1040,
    };

    const modalStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1050,
        backgroundColor: '#fff',
        width: '50%', 
        padding: '1rem',
        borderRadius: '5px',
        display: 'block',
    };

    return (
        <div style={overlayStyle} onClick={onClose}>
            <div style={modalStyle} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};


const SmallNavigation = () => {
    const [showNavbarModal, setShowNavbarModal] = useState(false);
    const [showCollapseMenuModal, setShowCollapseMenuModal] = useState(false);
    const { pathname } = useLocation(); // Moved to the top level of the component
    const { courseId } = useParams(); // Moved to the top level of the component

    const courseLinks = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Progress Reports (EAB Navigate)", "Settings"];

    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const linkToMap = {
        Account: <BiUserCircle className="icon-small grey-icon" />,
        Dashboard: <RiDashboard3Fill className="icon-small" />,
        Courses: <BiBook className="icon-small" />,
        Calendar: <FaRegCalendarAlt className="icon-small" />,
        Inbox: <HiMiniInboxStack className="icon-small" />,
        History: <AiOutlineHistory className="icon-small" />,
        Studio: <FaNetworkWired className="icon-small" />,
        Commons: <HiMiniInboxStack className="icon-small" />,
        Help: <IoHelpCircleOutline className="icon-small" />
    };

    return (
        <div className='d-md-none'>
            <div className='container-fluid black-navbar d-flex justify-content-between align-items-center'>
                {/* Trigger for Navbar Content Modal */}
                <button
                    className='navbar-toggler'
                    type='button'
                    onClick={() => setShowNavbarModal(true)}
                >
                    {/* Replace with hamburger icon */}
                    ☰
                </button>
                <div className='d-flex align-items-center mx-auto'>
                    <div className="modules-text">CS4550.12631.202410</div>
                </div>
                {/* Trigger for Collapse Menu Modal */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setShowCollapseMenuModal(true)}
                >
                    {/* Replace with down arrow icon */}
                    <BsChevronDown />
                </button>
            </div>

            {/* Navbar content modal */}
            <Modal show={showNavbarModal} onClose={() => setShowNavbarModal(false)}>
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" onClick={() => setShowNavbarModal(false)}></button>
                    </div>
                    <div className="modal-body">
                        <div className="list-group wd-kanbas-navigation">
                            {links.map((link, index) => (
                                <Link
                                    key={index}
                                    to={`/Kanbas/${link}`}
                                    className={`nav-item nav-link ${pathname.includes(link) ? "active" : ""}`}
                                    onClick={() => setShowNavbarModal(false)} // Close modal on navigation
                                >
                                    <span className="icon-small">{linkToMap[link]}</span>
                                    <span className="link-text">{link}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </Modal>

            {/* Collapse menu modal */}
            <Modal show={showCollapseMenuModal} onClose={() => setShowCollapseMenuModal(false)}>
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="btn-close" onClick={() => setShowCollapseMenuModal(false)}></button>
            </div>
            <div className="modal-body">
                <div className="list-group wd-kanbas-navigation">
                    {courseLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={`/Kanbas/Courses/${courseId}/${link}`}
                            className={`list-group-item custom-list-group-item ${pathname.includes(link) ? "active-item" : ""} text-danger`}
                            onClick={() => setShowCollapseMenuModal(false)} // Close modal on navigation
                        >
                            {link}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </Modal>
        </div>
    );
};

export default SmallNavigation;
