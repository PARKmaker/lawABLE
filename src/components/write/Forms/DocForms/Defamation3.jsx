import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputField from "../InputField";

const Defamation3 = (props) => {
    const {
        field: { defamation_day, defamation_thing, defamation_content },
    } = props;

    return (
        <React.Fragment>
            <Grid container spacing={3} rowSpacing={3} ml={1}>
                <Grid item xs={12} mt={3}>
                    <Typography variant="h5" gutterBottom>
                        명예훼손 내용증명에 들어갈 내용을 입력해 주세요.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField
                        name={defamation_day.name}
                        label={defamation_day.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={11}>
                    <InputField
                        name={defamation_thing.name}
                        label={defamation_thing.label}
                        fullWidth
                        multiline
                        maxRows={4}
                    />
                </Grid>
                <Grid item xs={12} sm={11}>
                    <InputField
                        name={defamation_content.name}
                        label={defamation_content.label}
                        fullWidth
                        multiline
                        maxRows={4}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Defamation3;
