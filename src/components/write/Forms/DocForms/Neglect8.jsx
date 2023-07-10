import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputField from "../InputField";

const Neglect8 = (props) => {
    const {
        field: {
            neglect_event_day,
            neglect_event_name,
            neglect_event_content,
            neglect_event_detail_content,
        },
    } = props;

    return (
        <React.Fragment>
            <Grid container spacing={3} rowSpacing={3} ml={1}>
                <Grid item xs={12} mt={3}>
                    <Typography variant="h5" gutterBottom>
                        통지 내용증명에 들어갈 내용을 입력해 주세요.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <InputField
                        name={neglect_event_day.name}
                        label={neglect_event_day.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={7}>
                    <InputField
                        name={neglect_event_name.name}
                        label={neglect_event_name.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={11}>
                    <InputField
                        name={neglect_event_content.name}
                        label={neglect_event_content.label}
                        fullWidth
                        multiline
                        maxRows={4}
                    />
                </Grid>
                <Grid item xs={12} sm={11}>
                    <InputField
                        name={neglect_event_detail_content.name}
                        label={neglect_event_detail_content.label}
                        fullWidth
                        multiline
                        maxRows={4}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Neglect8;
