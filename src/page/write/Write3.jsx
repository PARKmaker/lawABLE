import React, { useState } from "react";
import classes from "./Write.module.css";
import WriteProgress from "../../components/writes/WriteProgress";
import WriteBox from "../../components/writes/WriteBox";
import WritePooter from "../../components/writes/WritePooter";

// function getStepContent(step) {
//     switch (step) {
//         case 0:
//             return <NameForm userType={"sender"} />;
//         case 1:
//             return <NameForm userType={"recipient"} />;
//         case 2:
//             return <Review />;
//         case 3:
//             return <PaymentForm />;
//         case 4:
//             return <Review />;
//         default:
//             throw new Error("Unknown step");
//     }
// }

export default function Write() {
    const [formType, setFormType] = useState(0);
    const changeFormHandler = () => {};

    return (
        <div className={classes["write-container"]}>
            <WriteProgress />
            <WriteBox formType={formType} />
            <WritePooter onSelectStep={changeFormHandler} />
        </div>
    );
}
