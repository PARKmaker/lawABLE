import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputField from "./InputField";
import FostInputField from "./FostInputField";
import PostCode from "../../PostCode/PostCode";
import { Button } from "@mui/material";

export default function RecipientNameForm(props) {
    const [enroll_company, setEnroll_company] = React.useState({
        postcode: "",
        address: "",
    });

    const [popup, setPopup] = React.useState(false);

    const completeHandler = () => {
        setPopup(!popup);
    };

    const {
        formField: {
            recipient_name,
            recipient_postcode,
            recipient_address1,
            recipient_address2,
            recipient_phoneNumber,
            // recipient_cellPhoneNumber,
        },
    } = props;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom pb={3}>
                받는 곳의 정보를 입력해주세요.
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <InputField
                        name={recipient_name.name}
                        label={recipient_name.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={7}>
                    <InputField
                        name={recipient_phoneNumber.name}
                        label={recipient_phoneNumber.label}
                        fullWidth
                    />
                </Grid>
                {/* <Grid item xs={12} sm={7}>
                    <InputField
                        name={recipient_cellPhoneNumber.name}
                        label={recipient_cellPhoneNumber.label}
                        postcode={enroll_company.postcode}
                        fullWidth
                    />
                </Grid> */}

                <Grid item xs={12} sm={8}>
                    <FostInputField
                        name={recipient_postcode.name}
                        label={recipient_postcode.label}
                        postcode={enroll_company.postcode}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Button onClick={completeHandler} variant="contained">
                        우편번호 찾기
                    </Button>
                    {popup && (
                        <PostCode
                            company={enroll_company}
                            setCompany={setEnroll_company}
                        />
                    )}
                </Grid>
                <Grid item xs={12}>
                    <FostInputField
                        name={recipient_address1.name}
                        label={recipient_address1.label}
                        postcode={enroll_company.address}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <FostInputField
                        name={recipient_address2.name}
                        label={recipient_address2.label}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
