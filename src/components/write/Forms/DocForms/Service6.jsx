import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputField from "../InputField";

const Service6 = (props) => {
    const {
        field: {
            service_day,
            service_work_content,
            service_give_day,
            service_give_money,
            service_end_day,
            service_not_give_money,
        },
    } = props;

    return (
        <React.Fragment>
            <Grid container spacing={3} rowSpacing={3} ml={1}>
                <Grid item xs={12} mt={3}>
                    <Typography variant="h5" gutterBottom>
                        용역 내용증명에 들어갈 내용을 입력해 주세요.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField
                        name={service_day.name}
                        label={service_day.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={11}>
                    <InputField
                        name={service_work_content.name}
                        label={service_work_content.label}
                        fullWidth
                        multiline
                        maxRows={4}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <InputField
                        name={service_give_day.name}
                        label={service_give_day.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <InputField
                        name={service_end_day.name}
                        label={service_end_day.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <InputField
                        name={service_give_money.name}
                        label={service_give_money.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <InputField
                        name={service_not_give_money.name}
                        label={service_not_give_money.label}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Service6;
