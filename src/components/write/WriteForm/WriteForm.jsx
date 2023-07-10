import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { createTheme } from "@mui/material/styles";
import { Formik, Form } from "formik";
import { CircularProgress } from "@mui/material";

import checkoutFormModel from "../FormModel/checkoutFormModel";
import validationSchema from "../FormModel/validationSchema";
import formInitialValues from "../FormModel/formInitialValues";

import SenderNameForm from "../Forms/SenderNameForm";
import RecipientNameForm from "../Forms/RecipientNameForm";
import DetailsForm from "../Forms/DetailsForm";
import axios from "axios";

const { formId, formField } = checkoutFormModel;

const steps = ["보내는 이", "받는 이", "세부 내용"];

function getStepContent(step, certificationId) {
    // 스텝마다 ui 변화

    switch (step) {
        case 0:
            return (
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Paper
                            sx={{
                                my: { xs: 3, md: 6 },
                                p: { xs: 2, md: 3 },

                                // border: "1px solid grey",
                            }}
                            elevation={3}
                            // variant="outlined"
                        >
                            <SenderNameForm formField={formField} />
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper
                            sx={{
                                my: { xs: 3, md: 6 },
                                p: { xs: 2, md: 3 },
                                textAlign: "left",
                            }}
                            elevation={3}
                        >
                            내용증명을 <strong>보내는 사람</strong>의 이름과
                            전화 주소를 입력하는 페이지 입니다.
                            <br />
                            <br />
                            해당 정보는 내용증명 작성시 자동으로 입력되니
                            <strong> 정확하게</strong> 입력해주시길 바랍니다.
                            <br />
                            <br />
                            주소는 <strong>"우편번호 찾기"</strong>통해 빠르고
                            정확하게 입력 가능합니다.
                            <br />
                            <br />
                            상세주소는 동/호수 등 자세히 입력 해주시길 바랍니다.
                            <br />
                            <br />
                            <strong>* 문구는 필수 입력입니다.</strong>
                        </Paper>
                    </Grid>
                </Grid>
            );
        case 1:
            return (
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Paper
                            sx={{
                                my: { xs: 3, md: 6 },
                                p: { xs: 2, md: 3 },
                                textAlign: "left",
                            }}
                            elevation={3}
                        >
                            내용증명을 <strong>받는 사람</strong>의 이름과 전화
                            주소를 입력하는 페이지 입니다.
                            <br />
                            <br />
                            해당 정보는 내용증명 작성시 자동으로 입력되니
                            <strong> 정확하게</strong> 입력해주시길 바랍니다.
                            <br />
                            <br />
                            주소는 <strong>"우편번호 찾기"</strong>통해 빠르고
                            정확하게 입력 가능합니다.
                            <br />
                            <br />
                            상세주소는 동/호수 등 자세히 입력 해주시길 바랍니다.
                            <br />
                            <br />
                            <strong>* 문구는 필수 입력입니다.</strong>
                        </Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper
                            sx={{
                                my: { xs: 3, md: 6 },
                                p: { xs: 2, md: 3 },
                                // border: "1px solid grey",
                            }}
                            elevation={3}
                            // variant="outlined"
                        >
                            <RecipientNameForm formField={formField} />;
                        </Paper>
                    </Grid>
                </Grid>
            );
        case 2:
            return (
                <DetailsForm
                    certification_id={certificationId}
                    formField={formField}
                />
            );
        // case 3:
        //     return <DetailsForm />;
        // case 3:
        //     return <Review />;
        default:
            throw new Error("Unknown step");
    }
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const cIdNameKor = {
    1: "계약이행 청구",
    2: "매매 대금 청구",
    3: "명예훼손 금지",
    4: "보증금 반환 청구",
    5: "신체 침해 손해배상",
    6: "용역 대금 청구",
    7: "대여금 청구",
    8: "법원 판결 불이행",
};
const cIdNameEng = {
    1: "contract",
    2: "salePrice",
    3: "defamation",
    4: "deposit",
    5: "damage",
    6: "service",
    7: "loan",
    8: "neglect",
};

export default function WriteForm(props) {
    const [activeStep, setActiveStep] = useState(0);
    const isLastStep = activeStep === steps.length - 1;
    const currentValidationSchema = validationSchema[activeStep];

    const sleep = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const fetchUserId = async (url) => {
        // 장고에서 id값 가져오기
        try {
            const accessToken = localStorage.getItem("accessToken");
            const res = await axios.post(url, {
                token: accessToken,
            });
            return res.data.user_id;
        } catch (error) {
            console.error("Failed to fetch user ID:", error);
        }
    };

    const postSend = async (obj) => {
        // 장고에서 id값 가져오기
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/doc/sender/",
                obj
            );
            return response.data.sender;
        } catch (error) {
            console.error(error);
        }
    };

    const postRecipient = async (obj) => {
        // 장고에서 id값 가져오기
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/doc/recipient/",
                obj
            );

            return response.data.recipient;
        } catch (error) {
            console.error(error);
        }
    };

    const getWriteData = async (values) => {
        // Write에서 작성한 데이터들에서 해당하는 certificationName의 데이터만 뽑아 반환하는 함수

        // input:
        //     -   values: Object, Write에서 작성한 데이터 모음
        //     -   certificationName: str, 손해배상, 부동산 등 내용증명 구분
        const certificationId = values.certificationId;
        const certificationNameKor = cIdNameKor[certificationId];
        const certificationNameEng = cIdNameEng[certificationId];
        const keys = Object.keys(values);
        let tempDocs = {};
        for (let i = 0; i < keys.length; i++) {
            // console.log(keys[i]);
            if (keys[i].includes(certificationNameEng)) {
                const key = keys[i].replace(certificationNameEng + "_", "");
                console.log(key);
                tempDocs[key] = `${values[keys[i]]}`;
            }
        }

        const senderObj = {
            sender_name: values.sender_name,
            sender_phone: values.sender_phoneNumber,
            sender_address:
                values.sender_address1 +
                " " +
                values.sender_address2 +
                ", " +
                values.sender_postcode,
        };

        const recipientObj = {
            recipient_name: values.recipient_name,
            recipient_phone: values.recipient_phoneNumber,
            recipient_address:
                values.recipient_address1 +
                " " +
                values.recipient_address2 +
                ", " +
                values.recipient_postcode,
        };

        const context = { ...tempDocs };
        const sender = await postSend(senderObj);
        const recipient = await postRecipient(recipientObj);
        const user_id = await fetchUserId(
            "http://127.0.0.1:8000/accounts/authVerify/"
        );

        const docs = {
            sender: sender,
            recipient: recipient,
            main: values.certificationId,
            subname: certificationNameKor,
            user_id: user_id,
            context: context,
        };

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/doc/create/",
                docs
            );
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const submitForm = async (values, actions) => {
        // 입력 form submit 함수,
        await sleep(1000);

        getWriteData(values);
        // alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);

        setActiveStep(activeStep + 1);
        props.onActiveStep(activeStep + 1);
    };

    const handleSubmit = (values, actions) => {
        // 마지막 step이면 submit 진행, 그렇지 않으면 다음 스텝으로
        if (isLastStep) {
            submitForm(values, actions);
        } else {
            const curActiveStep = activeStep + 1;
            setActiveStep(curActiveStep);
            props.onActiveStep(curActiveStep);
            // setActiveStep(activeStep + 1);
            actions.setTouched({});
            actions.setSubmitting(false);
        }
    };

    const handleBack = () => {
        const curActiveStep = activeStep - 1;
        setActiveStep(curActiveStep);
        props.onActiveStep(curActiveStep);
    };

    return (
        <Formik
            onSubmit={handleSubmit}
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
        >
            {({ isSubmitting }) => (
                <Form id={formId}>
                    {getStepContent(activeStep, props.certificationId)}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                        }}
                    >
                        {activeStep !== 0 && (
                            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                이전
                            </Button>
                        )}

                        <Button
                            disabled={isSubmitting}
                            type="submit"
                            variant="contained"
                            // onClick={handleFront}
                            sx={{ mt: 3, ml: 1 }}
                        >
                            {activeStep === steps.length - 1
                                ? "저장하기"
                                : "다음"}
                        </Button>
                        {isSubmitting && <CircularProgress size={24} />}
                    </Box>
                </Form>
            )}
        </Formik>
    );
}
