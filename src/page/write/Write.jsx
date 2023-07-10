import React, { useEffect, useState } from "react";
import axios from "axios";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import WriteForm from "../../components/write/WriteForm/WriteForm";
import WriteSuccess from "../../components/write/WriteSuccess";

// const steps = ["보내는 이", "받는 이", "세부 내용", "추가 내용", "제출"];
const steps = ["보내는 이", "받는 이", "세부 내용"];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Checkout() {
    const location = useLocation();
    const key = { ...location.state };
    let certificationId = key.certificationId;
    if (!certificationId) {
        certificationId = 1;
    }

    const [activeStep, setActiveStep] = useState(0);
    // user-id
    // const [userId, setUserId] = useState(null);
    // // new-sender
    // const [newSender, setNewSender] = useState({
    //     sender_name: "",
    //     sender_address: "",
    //     sender_phone: "",
    // });
    // // new-recipient
    // const [newRecipient, setNewRecipient] = useState({
    //     recipient_name: "",
    //     recipient_address: "",
    //     recipient_phone: "",
    // });
    // // new-document
    // const [newDocument, setNewDocument] = useState({
    //     user: null,
    //     category: 1,
    //     sender: 1,
    //     recipient: 1,
    //     context: "", // json
    //     file_path: "",
    // });

    const activeStepHandler = (step) => {
        setActiveStep(step);
    };

    // user-id
    // const fetchUserId = async (url) => {
    //     try {
    //         const response = await axios.post(url, {
    //             token: localStorage.getItem("accessToken"),
    //         });
    //         setUserId(response.data.user_id);
    //     } catch (error) {
    //         console.error("Failed to fetch user ID:", error);
    //     }
    // };

    // // new-sender
    // const handleSenderChange = (event) => {
    //     setNewSender({
    //         ...newSender,
    //         [event.target.name]: event.target.value,
    //     });
    // };

    // const handleCreateSender = async () => {
    //     try {
    //         const response = await axios.post(
    //             "http://127.0.0.1:8000/doc/sender/",
    //             newSender
    //         );
    //         console.log(response.data);
    //         setNewSender({
    //             sender_name: "",
    //             sender_address: "",
    //             sender_phone: "",
    //         });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // // new-recipient
    // const handleRecipientChange = (event) => {
    //     setNewRecipient({
    //         ...newRecipient,
    //         [event.target.name]: event.target.value,
    //     });
    // };
    // const handleCreateRecipient = async () => {
    //     try {
    //         const response = await axios.post(
    //             "http://127.0.0.1:8000/doc/recipient/",
    //             newRecipient
    //         );
    //         console.log(response.data);
    //         setNewRecipient({
    //             recipient_name: "",
    //             recipient_address: "",
    //             recipient_phone: "",
    //         });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // // new-document
    // const handleDocumentChange = (event) => {
    //     setNewDocument({
    //         ...newDocument,
    //         [event.target.name]: event.target.value,
    //     });
    // };
    // const handleCreateDocument = async () => {
    //     try {
    //         const response = await axios.post(
    //             "http://127.0.0.1:8000/doc/",
    //             newDocument
    //         );
    //         console.log(response.data);
    //         setNewDocument({
    //             user: userId,
    //             category: 1,
    //             sender: 1,
    //             recipient: 1,
    //             content: "", // json
    //             file_path: "",
    //         });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // useEffect(() => {
    //     fetchUserId("http://127.0.0.1:8000/accounts/authVerify/");
    //     setNewDocument({
    //         user: userId,
    //         category: 1,
    //         sender: 1,
    //         recipient: 1,
    //         content: "", // json
    //         file_path: "",
    //     });
    // }, []);

    return (
        // <div style={{ "background-color": "#f5f6f7" }}>
        <section className="get-started section-bg">
            <div className="container">
                <h2
                    className="display-5 fw-bolder"
                    style={{ marginBottom: "50px" }}
                >
                    <span className="text-gradient d-inline">Write</span>
                    <p className="notice-text">내용증명 작성 해드립니다.</p>
                </h2>
                <ThemeProvider theme={defaultTheme}>
                    <CssBaseline />
                    <Container component="main" maxWidth="lg">
                        <Paper
                            sx={{
                                my: { xs: 3, md: 6 },
                                p: { xs: 2, md: 3 },
                            }}
                            elevation={3}
                        >
                            <Box sx={{ width: "100%" }} mt={2}>
                                <Stepper
                                    activeStep={activeStep}
                                    alternativeLabel
                                >
                                    {steps.map((label) => (
                                        <Step key={label}>
                                            <StepLabel>{label}</StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                            </Box>
                            {activeStep === steps.length ? (
                                <WriteSuccess />
                            ) : (
                                <WriteForm
                                    onActiveStep={activeStepHandler}
                                    certificationId={certificationId}
                                />
                            )}
                        </Paper>
                    </Container>
                </ThemeProvider>
            </div>
        </section>
    );
}
