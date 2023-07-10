import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputField from "../InputField";

const Deposit4 = (props) => {
    const {
        field: {
            deposit_day,
            deposit_location,
            deposit_house_start,
            deposit_house_end,
            deposit_house_money,
            deposit_money_give_day,
        },
    } = props;

    return (
        <React.Fragment>
            <Grid container spacing={3} rowSpacing={3} ml={1}>
                <Grid item xs={12} mt={3}>
                    <Typography variant="h5" gutterBottom>
                        부동산 내용증명에 들어갈 내용을 입력해 주세요.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField
                        name={deposit_day.name}
                        label={deposit_day.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={11}>
                    <InputField
                        name={deposit_location.name}
                        label={deposit_location.label}
                        fullWidth
                        multiline
                        maxRows={4}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField
                        name={deposit_house_start.name}
                        label={deposit_house_start.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField
                        name={deposit_house_end.name}
                        label={deposit_house_end.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={11}>
                    <InputField
                        name={deposit_house_money.name}
                        label={deposit_house_money.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={11}>
                    <InputField
                        name={deposit_money_give_day.name}
                        label={deposit_money_give_day.label}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Deposit4;
