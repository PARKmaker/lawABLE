import React from "react";
import styles from "./ChatMessage.module.css";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ChatMessage = ({ message }) => {
    let msg = (
        <div className={styles["chat-message-box"]}>
            <ContactSupportIcon />
            <div className={styles["message"]}>{message.message}</div>
        </div>
    );

    if (message.userType === "me") {
        msg = (
            <div className={styles["chat-message-box"]}>
                <div className={styles["message"]}>{message.message}</div>
                <AccountCircleIcon />
            </div>
        );
    }

    return (
        <div
            className={`${styles["chat-message"]} ${
                message.userType === "gpt" ? styles.gpt : styles.me
            }`}
        >
            <div
                className={`${styles["chat-message-center"]} ${
                    message.userType !== "gpt" && styles.me
                }`}
            >
                {msg}
            </div>
        </div>
    );
};

export default ChatMessage;
