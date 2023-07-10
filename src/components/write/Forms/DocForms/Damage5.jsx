import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputField from "../InputField";

const Damage5 = (props) => {
    const {
        field: {
            damage_day,
            damage_content,
            damage_trepass,
            damage_loss_content,
            damage_loss_money,
            damage_loss_day,
        },
    } = props;

    return (
        <React.Fragment>
            <Grid container spacing={3} rowSpacing={3} ml={1}>
                <Grid item xs={12} mt={3}>
                    <Typography variant="h5" gutterBottom>
                        손해배상 내용증명에 들어갈 내용을 입력해 주세요.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField
                        name={damage_day.name}
                        label={damage_day.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={11}>
                    <InputField
                        name={damage_content.name}
                        label={damage_content.label}
                        fullWidth
                        multiline
                        maxRows={4}
                    />
                </Grid>
                <Grid item xs={12} sm={11}>
                    <InputField
                        name={damage_trepass.name}
                        label={damage_trepass.label}
                        fullWidth
                        multiline
                        maxRows={4}
                    />
                </Grid>
                <Grid item xs={12} sm={11}>
                    <InputField
                        name={damage_loss_content.name}
                        label={damage_loss_content.label}
                        fullWidth
                        multiline
                        maxRows={4}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField
                        name={damage_loss_money.name}
                        label={damage_loss_money.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField
                        name={damage_loss_day.name}
                        label={damage_loss_day.label}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Damage5;
