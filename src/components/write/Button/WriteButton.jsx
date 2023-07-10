import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";

const steps = ["보내는 이", "받는 이", "세부 내용", "추가 내용", "제출"];

const WriteButton = (props) => {
    const [activeStep, setActiveStep] = useState(0);

    const handleFront = () => {
        const curActiveStep = activeStep + 1;
        setActiveStep(curActiveStep);
        props.onActiveStep(curActiveStep);
    };

    const handleBack = () => {
        const curActiveStep = activeStep - 1;
        setActiveStep(curActiveStep);
        props.onActiveStep(curActiveStep);
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "flex-end",
            }}
        >
            {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                </Button>
            )}

            <Button
                disabled={props.isSubmitting}
                type="submit"
                variant="contained"
                onClick={handleFront}
                sx={{ mt: 3, ml: 1 }}
            >
                {activeStep === steps.length - 1 ? "Place order" : "Next"}
            </Button>
            {props.isSubmitting && <CircularProgress size={24} />}
        </Box>
    );
};

export default WriteButton;
