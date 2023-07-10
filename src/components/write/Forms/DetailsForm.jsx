import * as React from "react";
import Grid from "@mui/material/Grid";
import SelectField from "./SelectField";
import { useState } from "react";
import Contract1 from "./DocForms/Contract1";
import SalePrice2 from "./DocForms/SalePrice2";
import Defamation3 from "./DocForms/Defamation3";
import Deposit4 from "./DocForms/Deposit4";
import Damage5 from "./DocForms/Damage5";
import Service6 from "./DocForms/Service6";
import Loan7 from "./DocForms/Loan7";
import Neglect8 from "./DocForms/Neglect8";

const certification_category = [
    {
        value: null,
        label: "None",
    },
    {
        value: "1",
        label: "계약이행",
    },
    {
        value: "2",
        label: "매매",
    },
    {
        value: "3",
        label: "명예훼손",
    },
    {
        value: "4",
        label: "부동산",
    },
    {
        value: "5",
        label: "손해배상",
    },
    {
        value: "6",
        label: "용역",
    },
    {
        value: "7",
        label: "채무",
    },
    {
        value: "8",
        label: "통지",
    },
];

function getCertificationContent(id, fields) {
    const nid = Number(id);
    switch (nid) {
        case 1:
            return <Contract1 key={nid} field={fields[nid - 1]}></Contract1>;
        case 2:
            return <SalePrice2 key={nid} field={fields[nid - 1]}></SalePrice2>;
        case 3:
            return (
                <Defamation3 key={nid} field={fields[nid - 1]}></Defamation3>
            );
        case 4:
            return <Deposit4 key={nid} field={fields[nid - 1]}></Deposit4>;
        case 5:
            return <Damage5 key={nid} field={fields[nid - 1]}></Damage5>;
        case 6:
            return <Service6 key={nid} field={fields[nid - 1]}></Service6>;
        case 7:
            return <Loan7 key={nid} field={fields[nid - 1]}></Loan7>;
        case 8:
            return <Neglect8 key={nid} field={fields[nid - 1]}></Neglect8>;
        default:
            throw new Error("Unknown step");
    }
}

const DetailsForm = (props) => {
    const {
        formField: {
            certificationId,
            contract,
            salePrice,
            defamation,
            deposit,
            damage,
            service,
            loan,
            neglect,
        },
    } = props;

    const certificationFields = [
        contract,
        salePrice,
        defamation,
        deposit,
        damage,
        service,
        loan,
        neglect,
    ];

    const [certificationFormId, setCertificationFormId] = useState(
        props.certification_id
    );

    const selectFormHandler = (id) => {
        setCertificationFormId(id);
    };

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} sx={{ mt: 4 }}>
                    <SelectField
                        name={certificationId.name}
                        label={certificationId.label}
                        data={certification_category}
                        certification_id={props.certification_id}
                        onSelectForm={selectFormHandler}
                        fullWidth
                    />
                </Grid>
                {getCertificationContent(
                    certificationFormId,
                    certificationFields
                )}
            </Grid>
        </React.Fragment>
    );
};

export default DetailsForm;
