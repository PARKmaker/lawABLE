import React, { useRef, useState, useEffect } from "react";
import ChatMessage from "../../components/chat/chatMessage/ChatMessage";
import ChatRecommendationCards from "../../components/chat/chatRecommendationCards/ChatRecommendationCards";
import ChatInput from "../../components/chat/chatInput/ChatInput";
import "./Chat.css";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import axios from "axios";

const start_chatLog = [
    {
        id: Date.now(),
        qna_id: 0,
        userType: "gpt",
        message: "아래의 예시에 따라 법령 질문 해주세요",
    },
    {
        id: Date.now(),
        qna_id: 1,
        userType: "gpt",
        message: "작성하고자 하는 내용증명 상황에 대해 질문 해주세요.",
    },
    {
        id: Date.now(),
        qna_id: 2,
        userType: "gpt",
        message: "찾고자 하는 소송서류에 대한 질문 해주세요",
    },
];

const certification_messages = {
    1: {
        max_index: 1,
        message:
            "'계약이행'에 관련된 사항 같습니다. 관련 내용증명 작성 페이지로 안내 하겠습니다. 혹시라도 원하시던 답변이 아니면 재질문 해주세요.",
    },
    2: {
        max_index: 2,
        message:
            "매매'계약이행'에 관련된 사항 같습니다. 관련 내용증명 작성 페이지로 안내 하겠습니다. 혹시라도 원하시던 답변이 아니면 재질문 해주세요.",
    },
    3: {
        max_index: 3,
        message:
            "'명예훼손'에 관련된 사항 같습니다. 관련 내용증명 작성 페이지로 안내 하겠습니다. 혹시라도 원하시던 답변이 아니면 재질문 해주세요.",
    },
    4: {
        max_index: 4,
        message:
            "'부동산'에 관련된 사항 같습니다. 관련 내용증명 작성 페이지로 안내 하겠습니다. 혹시라도 원하시던 답변이 아니면 재질문 해주세요.",
    },
    5: {
        max_index: 5,
        message:
            "'손해배상'에 관련된 사항 같습니다. 관련 내용증명 작성 페이지로 안내 하겠습니다. 혹시라도 원하시던 답변이 아니면 재질문 해주세요.",
    },
    6: {
        max_index: 6,
        message:
            "'용역'에 관련된 사항 같습니다. 관련 내용증명 작성 페이지로 안내 하겠습니다. 혹시라도 원하시던 답변이 아니면 재질문 해주세요.",
    },
    7: {
        max_index: 7,
        message:
            "'채무'에 관련된 사항 같습니다. 관련 내용증명 작성 페이지로 안내 하겠습니다. 혹시라도 원하시던 답변이 아니면 재질문 해주세요.",
    },
    8: {
        max_index: 8,
        message:
            "'통지'에 관련된 사항 같습니다. 관련 내용증명 작성 페이지로 안내 하겠습니다. 혹시라도 원하시던 답변이 아니면 재질문 해주세요.",
    },
};

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const Chat = (props) => {
    const BLANK = "[thisisnotAnswer!!!!]";
    const [categoryId, setCategoryId] = useState(1); // 0, 1, 2 => 법령, 내용증명, 소송
    const [certificationId, setCertificationId] = useState(1); // 1 ~ 8, 내용증명 서류 카테고리
    // let certificationId = 1;
    const [isRecommendation, setIsRecommendation] = useState(false);
    const [chatLog_llm, setChatLog_llm] = useState([]);
    const [chatLog_certification, setChatLog_certification] = useState([]);
    // const [chatLog, setChatLog] = useState([]);

    const updateCertificationId = (id) => {
        setCertificationId(id);
    };

    useEffect(() => {
        // 첫 컴포넌트가 나타 낼때

        setIsRecommendation(false);

        setChatLog_llm([start_chatLog[0]]);
        setChatLog_certification([start_chatLog[1]]);

        if (categoryId === 1) {
            console.log("내용 증명");
            fetchChatList_certification(
                "http://127.0.0.1:8000/chat/classification/"
            );
        } else if (categoryId === 0) {
            console.log("법령 qna");
            fetchChatList_llm("http://127.0.0.1:8000/chat/lawgpt");
        }
    }, [categoryId]);

    const fetchChatList_llm = async (url) => {
        // 장고에 저장된 certification 챗 로그 가져오기
        try {
            const [accessToken] = await fetchUserId(
                "http://127.0.0.1:8000/accounts/authVerify/"
            );

            // console.log(user_id);
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.data.result.length !== 0) {
                let allNewChatLog = [];
                const keys = Object.keys(response.data.result);

                if (response.data.result) {
                    for (let i = 0; i < keys.length; i++) {
                        let { message, answer } = response.data.result[keys[i]];

                        let userType = "me";
                        if (message === BLANK) {
                            userType = "gpt";
                            message = answer;
                        }

                        const newChatLog = {
                            id:
                                Date.now() +
                                Math.floor(Math.random() * 10000000000),
                            userType: userType,
                            message: message,
                        };

                        allNewChatLog.push(newChatLog);
                    }

                    const chatLogNew = [
                        start_chatLog[categoryId],
                        ...allNewChatLog,
                    ];
                    setChatLog_llm([...chatLogNew]);
                }
            }
        } catch (error) {
            console.error("Failed to fetch user ID:", error);
        }
    };
    // const

    const fetchChatList_certification = async (url) => {
        // 장고에 저장된 certification 챗 로그 가져오기
        try {
            const [accessToken] = await fetchUserId(
                "http://127.0.0.1:8000/accounts/authVerify/"
            );

            // console.log(user_id);
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.data.result.length !== 0) {
                let allNewChatLog = [];
                let recommendation_id = 1;
                const keys = Object.keys(response.data.result);

                if (response.data.result) {
                    for (let i = 0; i < keys.length; i++) {
                        let { message, answer, category } =
                            response.data.result[keys[i]];

                        let userType = "me";
                        if (message === BLANK) {
                            userType = "gpt";
                            message = answer;
                        }

                        const newChatLog = {
                            id:
                                Date.now() +
                                Math.floor(Math.random() * 10000000000),
                            userType: userType,
                            message: message,
                        };

                        allNewChatLog.push(newChatLog);
                        recommendation_id = category;
                    }

                    const chatLogNew = [
                        start_chatLog[categoryId],
                        ...allNewChatLog,
                    ];

                    updateCertificationId(recommendation_id);
                    // certificationId = recommendation_id;
                    setChatLog_certification([...chatLogNew]);
                    setIsRecommendation(true);
                }
            }
        } catch (error) {
            console.error("Failed to fetch user ID:", error);
        }
    };
    // user-id
    // input accessToken
    // output user id
    const fetchUserId = async (url) => {
        // 장고에서 id값 가져오기
        try {
            const accessToken = localStorage.getItem("accessToken");
            const res = await axios.post(url, {
                token: accessToken,
            });
            return [accessToken, res.data.user_id];
        } catch (error) {
            console.error("Failed to fetch user ID:", error);
        }
    };

    const endOfMessagesRef = useRef(null);
    //clear chats
    // const clearChat = (qna_id) => {
    //     setChatLog_certification([start_chatLog[qna_id]]);
    // };

    const categoryIdChangeHandler = (event, newValue) => {
        // 내용증명qna, 소송qna, 법령 qna 카테고리 선택
        setCategoryId(newValue);
    };

    const endToScroll = () => {
        endOfMessagesRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    useEffect(() => {
        endToScroll();
    }, [chatLog_certification, chatLog_llm]);

    const postMessage = async (url, message) => {
        //내용증명 qna flask 서버로 post
        try {
            //응답 성공
            const response = await axios.post(url, {
                text: message,
            });
            return response;
        } catch (error) {
            //응답 실패
            console.error(error);
        }
    };

    const dbPostMessage = async (url, messageData, max_index = 0) => {
        //장고 db로 채팅 기록 저장

        try {
            const [accessToken, user_id] = await fetchUserId(
                "http://127.0.0.1:8000/accounts/authVerify/"
            );

            let { userType, message } = messageData;
            let answer = BLANK;

            if (userType === "gpt") {
                answer = message;
                message = BLANK;
            }

            let data;
            if (max_index === 0) {
                data = {
                    user: user_id,
                    message: message,
                    answer: answer,
                };
            } else {
                data = {
                    user: user_id,
                    category: max_index,
                    message: message,
                    answer: answer,
                };
            }

            await axios.post(url, data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            // fetchChatList("http://127.0.0.1:8000/doc/chat/user/");
        } catch (error) {
            console.error(error);
        }
    };

    const submitMessageHandler = async (enteredMessageData) => {
        // 메세지 submit 카테고리 별로 기능이 다름.
        await sleep(1500);
        if (categoryId === 0) {
            let chatLogNew = [...chatLog_llm, enteredMessageData];

            const { message } = enteredMessageData;
            console.log("법령 qna");

            const response = await postMessage(
                "http://116.41.155.139:5200/llmtest",
                message
            );
            const answer = response.data.answer;

            const resMessageData = {
                id: Date.now(),
                userType: "gpt",
                message: answer,
            };

            setChatLog_llm([...chatLogNew, resMessageData]);
            await dbPostMessage(
                "http://127.0.0.1:8000/chat/lawgpt/",
                enteredMessageData
            );

            await dbPostMessage(
                "http://127.0.0.1:8000/chat/lawgpt/",
                resMessageData
            );
        } else if (categoryId === 1) {
            let chatLogNew = [...chatLog_certification, enteredMessageData];
            const { message } = enteredMessageData;
            console.log("내용증명");
            const response = await postMessage(
                "http://116.41.155.139:5100/predict",
                message
            );

            const { max_index } = response.data;

            const resMessageData = {
                id: Date.now(), //-> 메시지 고유 id
                userType: "gpt", // 'me' or 'gpt'
                message: certification_messages[max_index].message,
            };

            setChatLog_certification([...chatLogNew, resMessageData]);
            updateCertificationId(max_index);
            setIsRecommendation(true);

            await dbPostMessage(
                "http://127.0.0.1:8000/chat/classification/",
                enteredMessageData,
                max_index
            );

            await dbPostMessage(
                "http://127.0.0.1:8000/chat/classification/",
                resMessageData,
                max_index
            );
        } else {
            console.log("소송 qna");
        }
    };

    return (
        <section className="get-started section-bg">
            <div className="container">
                <h2
                    className="display-5 fw-bolder"
                    style={{ marginBottom: "50px" }}
                >
                    <span className="text-gradient d-inline">CHAT</span>
                    <p className="notice-text">
                        궁금한 법령지식을 질문해보세요.
                    </p>
                </h2>
                <div className="chat">
                    <div className="chat-container">
                        <header className="chat-header">
                            <Box
                                sx={{ width: 500 }}
                                className="chat-header-box"
                            >
                                <BottomNavigation
                                    showLabels
                                    value={categoryId}
                                    onChange={categoryIdChangeHandler}
                                >
                                    <BottomNavigationAction
                                        sx={{ borderRight: "2px solid #ddd" }}
                                        label="법령 QnA"
                                        icon={<RestoreIcon />}
                                    />
                                    <BottomNavigationAction
                                        sx={{ borderRight: "2px solid #ddd" }}
                                        label="내용증명 QnA"
                                        icon={<FavoriteIcon />}
                                    />
                                    <BottomNavigationAction
                                        label="소송서류 QnA"
                                        icon={<LocationOnIcon />}
                                    />
                                </BottomNavigation>
                            </Box>
                        </header>

                        <section className="chat-box">
                            <div className="chat-log">
                                {categoryId === 0
                                    ? chatLog_llm.map((message) => (
                                          <ChatMessage
                                              key={message.id}
                                              message={message}
                                          />
                                      ))
                                    : chatLog_certification.map((message) => (
                                          <ChatMessage
                                              key={message.id}
                                              message={message}
                                          />
                                      ))}
                                <div
                                    id="end_scroll"
                                    ref={endOfMessagesRef}
                                ></div>
                                {isRecommendation && (
                                    <ChatRecommendationCards
                                        certificationid={certificationId}
                                    />
                                )}
                            </div>
                        </section>

                        <div className="chat-input">
                            <ChatInput
                                placeholderId={categoryId}
                                onSendMessage={submitMessageHandler}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Chat;
