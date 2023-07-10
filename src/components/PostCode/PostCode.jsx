import ReactDOM from "react-dom";
import React from "react";
import DaumPostcode from "react-daum-postcode";
import classes from "./PostCode.module.css";

const PostCode = (props) => {
    const handleComplete = (data) => {
        let postcode = data.zonecode;
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress +=
                    extraAddress !== ""
                        ? `, ${data.buildingName}`
                        : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }

        console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
        props.setCompany({
            ...props.company,
            address: fullAddress,
            postcode: postcode,
        });
    };

    return (
        <DaumPostcode
            style={{ width: "420px", top: "30vh", left: "60vh" }}
            className={classes.modal}
            onComplete={handleComplete}
            autoClose
            {...props}
        />
    );
};

export default PostCode;
