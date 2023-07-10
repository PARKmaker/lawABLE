import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputField from "../InputField";

const Contract1 = (props) => {
    const {
        field: { contract_day, contract_content, contract_not_content },
    } = props;

    return (
        <React.Fragment>
            <Grid container spacing={3} rowSpacing={3} ml={1}>
                <Grid item xs={12} mt={3}>
                    <Typography variant="h5" gutterBottom>
                        계약이행 내용증명에 들어갈 내용을 입력해 주세요.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField
                        name={contract_day.name}
                        label={contract_day.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={11}>
                    <InputField
                        name={contract_content.name}
                        label={contract_content.label}
                        fullWidth
                        multiline
                        maxRows={4}
                    />
                </Grid>
                <Grid item xs={12} sm={11}>
                    <InputField
                        name={contract_not_content.name}
                        label={contract_not_content.label}
                        fullWidth
                        multiline
                        maxRows={4}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Contract1;
