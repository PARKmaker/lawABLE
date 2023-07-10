import React from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function WriteSuccess() {
    const navigate = useNavigate();
    const navigateToMyDocs = () => {
        navigate("/mydocs");
    };

    return (
        <React.Fragment>
            <Typography variant="h4" gutterBottom mb={3} mt={3}>
                내용증명 작성이 완료 되었습니다.
            </Typography>
            <Typography variant="subtitle1">
                MY DOCS에서 작성한 내용증명 PDF저장 또는 수정, 삭제 가능합니다.
            </Typography>
            <Button size="large" onClick={navigateToMyDocs}>
                MY DOCS로 이동하기
            </Button>
        </React.Fragment>
    );
}

export default WriteSuccess;
