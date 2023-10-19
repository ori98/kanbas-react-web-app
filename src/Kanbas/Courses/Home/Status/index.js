import React from 'react';
import { FaFileImport } from "react-icons/fa6";
import { PiArrowFatLinesRightLight } from "react-icons/pi";
import { MdOutlineDataSaverOff } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { AiOutlineBell } from "react-icons/ai";

import ToDoItem from "./ToDoItem";

export default function Status() {
    return (
        <div className='mx-2'>
            <div className="row">
                <div className="btn btn-outline-secondary btn-block btn-light text-start float-start" role="button"><small className="ms-2 mx-2"><FaFileImport /> Import Existing Content</small></div>
            </div>
            <div className="row">
                <div className="btn btn-outline-secondary btn-block btn-light text-start float-start" role="button"><small className="ms-2 mx-2"><PiArrowFatLinesRightLight /> Import from Commons</small></div>
            </div>
            <div className="row">
                <div className="btn btn-outline-secondary btn-block btn-light text-start float-start" role="button"><small className="ms-2 mx-2"><MdOutlineDataSaverOff /> Choose Home Page</small></div>
            </div>
            <div className="row">
                <div className="btn btn-outline-secondary btn-block btn-light text-start float-start" role="button"><small className="ms-2 mx-2"><FaChartBar /> View Course Stream</small></div>
            </div>
            <div className="row">
                <div className="btn btn-outline-secondary btn-block btn-light text-start float-start" role="button"><small className="ms-2 mx-2"><HiOutlineSpeakerphone /> New Announcement</small></div>
            </div>
            <div className="row">
                <div className="btn btn-outline-secondary btn-block btn-light text-start float-start" role="button"><small className="ms-2 mx-2"><FaChartBar /> New Analytics</small></div>
            </div>
            <div className="row">
                <div className="btn btn-outline-secondary btn-block btn-light text-start float-start" role="button"><small className="ms-2 mx-2"><AiOutlineBell /> View Course Notifications</small></div>
            </div>

            <h4 className='mt-2'>To Do</h4>
            <hr />
            <div className='row'>
                <div className='col ms-3 '>
                    <div className='row ms-2'>
                        <ToDoItem heading={"Grade A1: ENV + HTML"} description={"100 points | Sep 18 at 11:59am"}/>
                        <div className='mb-3'></div>
                        <ToDoItem heading={"Grade A2: CSS + Bootstrap"} description={"100 points | Oct 2 at 11:59am"}/>
                    </div>
                </div>
            </div>

        </div>
    );
}
