import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputField from "../InputField";

const SalePrice2 = (props) => {
    const {
        field: {
            salePrice_day,
            salePrice_thing,
            salePrice_thing_money,
            salePrice_thing_give_day,
            salePrice_not_give_money,
        },
    } = props;

    return (
        <React.Fragment>
            <Grid container spacing={3} rowSpacing={3} ml={3}>
                <Grid item xs={12} mt={3}>
                    <Typography variant="h5" gutterBottom>
                        매매 내용증명에 들어갈 내용을 입력해 주세요.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <InputField
                        name={salePrice_day.name}
                        label={salePrice_day.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <InputField
                        name={salePrice_thing.name}
                        label={salePrice_thing.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <InputField
                        name={salePrice_thing_money.name}
                        label={salePrice_thing_money.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <InputField
                        name={salePrice_thing_give_day.name}
                        label={salePrice_thing_give_day.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <InputField
                        name={salePrice_not_give_money.name}
                        label={salePrice_not_give_money.label}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default SalePrice2;
