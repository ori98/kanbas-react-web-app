import React from "react";

import { RxCross1 } from "react-icons/rx";
import { PiNumberCircleFiveFill } from "react-icons/pi";

export default function ToDoItem({heading, description}) {
    return( 
        <div className="row">
            <div className="col-2">
                <PiNumberCircleFiveFill className="big-icon text-danger"/>
            </div>
            <div className="col-9">
                <div className="text-danger">{heading}</div>
                <div className="text-muted fs-6">{description}</div>
            </div>
            <div className="col-1">
                <RxCross1 />
            </div>
        </div>
    );
}