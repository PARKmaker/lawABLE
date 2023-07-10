import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputField from "./InputField";
import FostInputField from "./FostInputField";
import PostCode from "../../PostCode/PostCode";
import { Button } from "@mui/material";

export default function SenderNameForm(props) {
    const [enroll_company, setEnroll_company] = React.useState({
        postcode: "",
        address: "",
    });

    const [popup, setPopup] = React.useState(false);

    // const postcodeInputHandler = (e) => {
    //     setEnroll_company({
    //         ...enroll_company,
    //         [e.target.name]: e.target.value,
    //     });
    // };

    const completeHandler = () => {
        setPopup(!popup);
    };

    // const userType = props.userType;
    const {
        formField: {
            sender_name,
            sender_postcode,
            sender_address1,
            sender_address2,
            sender_phoneNumber,
        },
    } = props;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom pb={3}>
                보내는 사람의 정보를 입력해주세요.
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <InputField
                        name={sender_name.name}
                        label={sender_name.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={7}>
                    <InputField
                        name={sender_phoneNumber.name}
                        label={sender_phoneNumber.label}
                        fullWidth
                    />
                </Grid>

                {/* <Grid item xs={12} sm={7}>
                    <InputField
                        name={sender_cellPhoneNumber.name}
                        label={sender_cellPhoneNumber.label}
                        fullWidth
                    />
                </Grid> */}
                <Grid item xs={12} sm={8}>
                    <FostInputField
                        name={sender_postcode.name}
                        label={sender_postcode.label}
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
                        name={sender_address1.name}
                        label={sender_address1.label}
                        postcode={enroll_company.address}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        name={sender_address2.name}
                        label={sender_address2.label}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
