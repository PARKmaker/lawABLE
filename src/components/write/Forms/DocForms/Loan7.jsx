import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputField from "../InputField";

const Loan7 = (props) => {
    const {
        field: {
            loan_money,
            loan_content,
            loan_not_give_money,
            loan_moeny_give_day,
        },
    } = props;

    return (
        <React.Fragment>
            <Grid container spacing={3} rowSpacing={3} ml={1}>
                <Grid item xs={12} mt={3}>
                    <Typography variant="h5" gutterBottom>
                        채무 내용증명에 들어갈 내용을 입력해 주세요.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField
                        name={loan_money.name}
                        label={loan_money.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={11}>
                    <InputField
                        name={loan_content.name}
                        label={loan_content.label}
                        fullWidth
                        multiline
                        maxRows={4}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <InputField
                        name={loan_not_give_money.name}
                        label={loan_not_give_money.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <InputField
                        name={loan_moeny_give_day.name}
                        label={loan_moeny_give_day.label}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Loan7;
