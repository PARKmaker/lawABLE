import React, { useState } from "react";
import styles from "./ChatInput.module.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

const placehoderMsg = [
    "예시) 임차인이 무슨 뜻이야?",
    "예시) 집주인이 월세계약 만료되었는데도 보증금을 돌려주지 않아.",
    "예시) 친구가 돈 400만원을 빌려갔는데 돌려주지 않아.",
];
const ChatInput = (props) => {
    const [placehoderChange, setPlacehoderChange] = useState(false);
    const [input, setInput] = useState("");

    const [error, setError] = useState(null);
    const [status, setStatus] = useState("typing");

    const phMsg = placehoderMsg[props.placeholderId];
    const inputChangeHandler = (event) => {
        setInput(event.target.value);
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        setPlacehoderChange(true);

        setStatus("submitting");

        const data = {
            id: Date.now(),
            userType: "me",
            message: input,
        };

        try {
            await props.onSendMessage(data);
            setStatus("success");
        } catch (err) {
            setStatus("typing");
            setError(err);
        }

        setInput("");
    };

    return (
        <div className={styles["chat-input-holder"]}>
            <form onSubmit={submitHandler}>
                <input
                    rows="1"
                    value={input}
                    onChange={inputChangeHandler}
                    className={styles["chat-input-textarea"]}
                    placeholder={!placehoderChange ? phMsg : "질문 하세요."}
                    disabled={status === "submitting"}
                ></input>
                {status !== "submitting" ? (
                    <Button
                        size="small"
                        className={styles["chat-input-button"]}
                        variant="contained"
                        endIcon={<SendIcon />}
                        type="submit"
                        disabled={input.length === 0 || status === "submitting"}
                    >
                        Send
                    </Button>
                ) : (
                    <LoadingButton
                        className={styles["chat-input-button"]}
                        loading
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="outlined"
                    >
                        질문중
                    </LoadingButton>
                )}
            </form>
        </div>
    );
};

export default ChatInput;
