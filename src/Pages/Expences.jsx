import React from "react";
import LeftSide from "../Components/LeftSide";
import RightSide from "../Components/RightSide";

const Expences = () => {
    return (
        <div className="flex w-full max-auto justify-between">
            <div className="w-9/12">
                <LeftSide />
            </div>
            <div className="w-3/12">
                <RightSide />
            </div>
        </div>
    );
};

export default Expences;