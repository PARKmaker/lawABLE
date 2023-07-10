import React from "react";
import "./ChatRecommendation.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const ChatRecommendation = ({ data }) => {
    // console.log("ChatRecommendation", data.category_id);
    const navigate = useNavigate();
    const navigateToWrite = () => {
        navigate("/write", {
            state: { certificationId: data.certificationId },
        });
    };

    return (
        <Card className="chat-recommendation" sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {data.title}
                </Typography>
                <Typography variant="body2">{data.explanation}</Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    onClick={navigateToWrite}
                    certificationid={data.certificationId}
                >
                    {" "}
                    작성 하러 가기
                </Button>
            </CardActions>
        </Card>
    );
};

export default ChatRecommendation;
