import React from "react";
import "./leazy.scss";
import { Commet, OrbitProgress, Riple } from "react-loading-indicators";

const Leazy = () => {
    return (
        <div className="leazy">
            <div className="leazy__card">
                <Commet color="#fff" size="medium" text="" textColor="" />
            </div>
        </div>
    );
};

export default Leazy;
