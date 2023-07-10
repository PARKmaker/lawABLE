import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import "./UpdateDocs.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";

const theme = createTheme({
    palette: {
        black: {
            main: "#000000",
            contrastText: "#fff",
        },
    },
});

export default function UpdateDocs() {
    const navigate = useNavigate();

    // 오늘 날짜 출력을 위해
    const options = { year: "numeric", month: "long", day: "numeric" };
    const today = new Date();
    const dateString = today.toLocaleDateString("ko-KR", options);

    const [cat, setCat] = useState(null); // 카테고리 저장
    const { idx } = useParams();

    // docs1 ~ docs8
    const [docs1, setDocs1] = useState({
        category: "",
        title: "",
        sender: { sender_name: "", sender_address: "", sender_phone: "" },
        recipient: {
            recipient_name: "",
            recipient_address: "",
            recipient_phone: "",
        },
        contents: { day: "", content: "", not_content: "" },
    });

    const [docs2, setDocs2] = useState({
        category: "",
        title: "",
        sender: { sender_name: "", sender_address: "", sender_phone: "" },
        recipient: {
            recipient_name: "",
            recipient_address: "",
            recipient_phone: "",
        },
        contents: {
            day: "",
            thing: "",
            thing_money: "",
            thing_give_day: "",
            how: "",
            thing_give_day: "",
            not_give_money: "",
            give_day: "",
        },
    });

    const [docs3, setDocs3] = useState({
        category: "",
        title: "",
        sender: { sender_name: "", sender_address: "", sender_phone: "" },
        recipient: {
            recipient_name: "",
            recipient_address: "",
            recipient_phone: "",
        },
        contents: { day: "", location: "", content: "" },
    });

    const [docs4, setDocs4] = useState({
        category: "",
        title: "",
        sender: { sender_name: "", sender_address: "", sender_phone: "" },
        recipient: {
            recipient_name: "",
            recipient_address: "",
            recipient_phone: "",
        },
        contents: {
            day: "",
            location: "",
            house_end: "",
            house_money: "",
            money_give_day: "",
        },
    });

    const [docs5, setDocs5] = useState({
        category: "",
        title: "",
        sender: { sender_name: "", sender_address: "", sender_phone: "" },
        recipient: {
            recipient_name: "",
            recipient_address: "",
            recipient_phone: "",
        },
        contents: {
            day: "",
            content: "",
            trepass: "",
            loss_content: "",
            loss_money: "",
            loss_day: "",
        },
    });

    const [docs6, setDocs6] = useState({
        category: "",
        title: "",
        sender: { sender_name: "", sender_address: "", sender_phone: "" },
        recipient: {
            recipient_name: "",
            recipient_address: "",
            recipient_phone: "",
        },
        contents: {
            day: "",
            work_content: "",
            end_day: "",
            give_day: "",
            give_money: "",
            money_give_day: "",
        },
    });

    const [docs7, setDocs7] = useState({
        category: "",
        title: "",
        sender: { sender_name: "", sender_address: "", sender_phone: "" },
        recipient: {
            recipient_name: "",
            recipient_address: "",
            recipient_phone: "",
        },
        contents: {
            money: "",
            content: "",
            not_give_money: "",
            money_give_day: "",
        },
    });

    const [docs8, setDocs8] = useState({
        category: "",
        title: "",
        sender: { sender_name: "", sender_address: "", sender_phone: "" },
        recipient: {
            recipient_name: "",
            recipient_address: "",
            recipient_phone: "",
        },
        contents: { event_day: "", event_name: "", event_content: "" },
    });

    // user-id
    const [userId, setUserId] = useState();

    const fetchUserId = async (url) => {
        axios
            .post(url, {
                token: localStorage.getItem("accessToken"),
            })
            .then((response) => {
                setUserId(response.data.user_id);
            })
            .catch((error) => {
                console.log("An error occurred", error);
            });
    };

    // getDocs 문서 불러오는 부분
    const getDocs = async () => {
        const accessToken = localStorage.getItem("accessToken");

        axios
            .get(`http://127.0.0.1:8000/doc/id/${idx}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((response) => {
                const { category, ...dataWithoutCategory } = response.data;

                setCat(JSON.parse(category));
                switch (JSON.parse(category)) {
                    case 1:
                        const formattedData1 = {
                            user_id: userId,
                            title: dataWithoutCategory.title,
                            sender: {
                                sender_name:
                                    dataWithoutCategory.sender.sender_name,
                                sender_address:
                                    dataWithoutCategory.sender.sender_address,
                                sender_phone:
                                    dataWithoutCategory.sender.sender_phone,
                            },
                            recipient: {
                                recipient_name:
                                    dataWithoutCategory.recipient
                                        .recipient_name,
                                recipient_address:
                                    dataWithoutCategory.recipient
                                        .recipient_address,
                                recipient_phone:
                                    dataWithoutCategory.recipient
                                        .recipient_phone,
                            },
                            contents: {
                                day: dataWithoutCategory.contents.day,
                                content: dataWithoutCategory.contents.content,
                                not_content:
                                    dataWithoutCategory.contents.not_content,
                            },
                        };
                        setDocs1(formattedData1);
                        break;
                    case 2:
                        const formattedData2 = {
                            user_id: userId,
                            title: dataWithoutCategory.title,
                            sender: {
                                sender_name:
                                    dataWithoutCategory.sender.sender_name,
                                sender_address:
                                    dataWithoutCategory.sender.sender_address,
                                sender_phone:
                                    dataWithoutCategory.sender.sender_phone,
                            },
                            recipient: {
                                recipient_name:
                                    dataWithoutCategory.recipient
                                        .recipient_name,
                                recipient_address:
                                    dataWithoutCategory.recipient
                                        .recipient_address,
                                recipient_phone:
                                    dataWithoutCategory.recipient
                                        .recipient_phone,
                            },
                            contents: {
                                day: dataWithoutCategory.contents.day,
                                thing: dataWithoutCategory.contents.thing,
                                thing_money:
                                    dataWithoutCategory.contents.thing_money,
                                thing_give_day:
                                    dataWithoutCategory.contents.thing_give_day,
                                thing_money_day:
                                    dataWithoutCategory.contents
                                        .thing_money_day,
                                how: dataWithoutCategory.contents.how,
                                not_give_money:
                                    dataWithoutCategory.contents.not_give_money,
                                give_day: dataWithoutCategory.contents.give_day,
                            },
                        };
                        setDocs2(formattedData2);
                        break;
                    case 3:
                        const formattedData3 = {
                            user_id: userId,
                            title: dataWithoutCategory.title,
                            sender: {
                                sender_name:
                                    dataWithoutCategory.sender.sender_name,
                                sender_address:
                                    dataWithoutCategory.sender.sender_address,
                                sender_phone:
                                    dataWithoutCategory.sender.sender_phone,
                            },
                            recipient: {
                                recipient_name:
                                    dataWithoutCategory.recipient
                                        .recipient_name,
                                recipient_address:
                                    dataWithoutCategory.recipient
                                        .recipient_address,
                                recipient_phone:
                                    dataWithoutCategory.recipient
                                        .recipient_phone,
                            },
                            contents: {
                                day: dataWithoutCategory.contents.day,
                                location: dataWithoutCategory.contents.location,
                                content: dataWithoutCategory.contents.content,
                            },
                        };
                        setDocs3(formattedData3);
                        break;
                    case 4:
                        const formattedData4 = {
                            user_id: userId,
                            title: dataWithoutCategory.title,
                            sender: {
                                sender_name:
                                    dataWithoutCategory.sender.sender_name,
                                sender_address:
                                    dataWithoutCategory.sender.sender_address,
                                sender_phone:
                                    dataWithoutCategory.sender.sender_phone,
                            },
                            recipient: {
                                recipient_name:
                                    dataWithoutCategory.recipient
                                        .recipient_name,
                                recipient_address:
                                    dataWithoutCategory.recipient
                                        .recipient_address,
                                recipient_phone:
                                    dataWithoutCategory.recipient
                                        .recipient_phone,
                            },
                            contents: {
                                day: dataWithoutCategory.contents.day,
                                location: dataWithoutCategory.contents.location,
                                house_start:
                                    dataWithoutCategory.contents.house_start,
                                house_end:
                                    dataWithoutCategory.contents.house_end,
                                house_money:
                                    dataWithoutCategory.contents.house_money,
                                money_give_day:
                                    dataWithoutCategory.contents.money_give_day,
                            },
                        };
                        setDocs4(formattedData4);
                        break;
                    case 5:
                        const formattedData5 = {
                            user_id: userId,
                            title: dataWithoutCategory.title,
                            sender: {
                                sender_name:
                                    dataWithoutCategory.sender.sender_name,
                                sender_address:
                                    dataWithoutCategory.sender.sender_address,
                                sender_phone:
                                    dataWithoutCategory.sender.sender_phone,
                            },
                            recipient: {
                                recipient_name:
                                    dataWithoutCategory.recipient
                                        .recipient_name,
                                recipient_address:
                                    dataWithoutCategory.recipient
                                        .recipient_address,
                                recipient_phone:
                                    dataWithoutCategory.recipient
                                        .recipient_phone,
                            },
                            contents: {
                                day: dataWithoutCategory.contents.day,
                                content: dataWithoutCategory.contents.content,
                                trepass: dataWithoutCategory.contents.trepass,
                                loss_content:
                                    dataWithoutCategory.contents.loss_content,
                                loss_money:
                                    dataWithoutCategory.contents.loss_money,
                                loss_day: dataWithoutCategory.contents.loss_day,
                            },
                        };
                        setDocs5(formattedData5);
                        break;
                    case 6:
                        const formattedData6 = {
                            user_id: userId,
                            title: dataWithoutCategory.title,
                            sender: {
                                sender_name:
                                    dataWithoutCategory.sender.sender_name,
                                sender_address:
                                    dataWithoutCategory.sender.sender_address,
                                sender_phone:
                                    dataWithoutCategory.sender.sender_phone,
                            },
                            recipient: {
                                recipient_name:
                                    dataWithoutCategory.recipient
                                        .recipient_name,
                                recipient_address:
                                    dataWithoutCategory.recipient
                                        .recipient_address,
                                recipient_phone:
                                    dataWithoutCategory.recipient
                                        .recipient_phone,
                            },
                            contents: {
                                day: dataWithoutCategory.contents.day,
                                work_content:
                                    dataWithoutCategory.contents.work_content,
                                not_give_money:
                                    dataWithoutCategory.contents.not_give_money,
                                end_day: dataWithoutCategory.contents.end_day,
                                give_day: dataWithoutCategory.contents.give_day,
                                give_money:
                                    dataWithoutCategory.contents.give_money,
                                money_give_day:
                                    dataWithoutCategory.contents.money_give_day,
                            },
                        };
                        setDocs6(formattedData6);
                        break;
                    case 7:
                        const formattedData7 = {
                            user_id: userId,
                            title: dataWithoutCategory.title,
                            sender: {
                                sender_name:
                                    dataWithoutCategory.sender.sender_name,
                                sender_address:
                                    dataWithoutCategory.sender.sender_address,
                                sender_phone:
                                    dataWithoutCategory.sender.sender_phone,
                            },
                            recipient: {
                                recipient_name:
                                    dataWithoutCategory.recipient
                                        .recipient_name,
                                recipient_address:
                                    dataWithoutCategory.recipient
                                        .recipient_address,
                                recipient_phone:
                                    dataWithoutCategory.recipient
                                        .recipient_phone,
                            },
                            contents: {
                                money: dataWithoutCategory.contents.money,
                                content: dataWithoutCategory.contents.content,
                                not_give_money:
                                    dataWithoutCategory.contents.not_give_money,
                                money_give_day:
                                    dataWithoutCategory.contents.money_give_day,
                            },
                        };
                        setDocs7(formattedData7);
                        break;
                    case 8:
                        const formattedData8 = {
                            user_id: userId,
                            title: dataWithoutCategory.title,
                            sender: {
                                sender_name:
                                    dataWithoutCategory.sender.sender_name,
                                sender_address:
                                    dataWithoutCategory.sender.sender_address,
                                sender_phone:
                                    dataWithoutCategory.sender.sender_phone,
                            },
                            recipient: {
                                recipient_name:
                                    dataWithoutCategory.recipient
                                        .recipient_name,
                                recipient_address:
                                    dataWithoutCategory.recipient
                                        .recipient_address,
                                recipient_phone:
                                    dataWithoutCategory.recipient
                                        .recipient_phone,
                            },
                            contents: {
                                event_day:
                                    dataWithoutCategory.contents.event_day,
                                event_name:
                                    dataWithoutCategory.contents.event_name,
                                event_content:
                                    dataWithoutCategory.contents.event_content,
                            },
                        };
                        setDocs8(formattedData8);
                        break;
                }
            });
    };

    // 카테고리에 따라서 docs변수에 넣기
    const docsMap = {
        1: docs1,
        2: docs2,
        3: docs3,
        4: docs4,
        5: docs5,
        6: docs6,
        7: docs7,
        8: docs8,
    };
    const docs = docsMap[cat];

    const confirmUpdate = () => {
        const confirmed = window.confirm("수정하시겠습니까?");
        if (confirmed) {
            updateDocs(docs);
        }
    };

    //updateDocs 문서 수정 통신
    const updateDocs = async (docs) => {
        if (confirmUpdate) {
            const accessToken = localStorage.getItem("accessToken");

            try {
                const response = await axios.patch(
                    `http://127.0.0.1:8000/doc/id/${idx}/`,
                    docs,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );
                alert("수정되었습니다.");
                navigate("/mydocs");
            } catch (error) {
                console.error("수정 요청 중 오류가 발생했습니다:", error);
            }
        }
    };

    // 문서 목록으로 이동
    const backToMydocs = () => {
        navigate("/mydocs");
    };

    // useEffect
    useEffect(() => {
        fetchUserId("http://127.0.0.1:8000/accounts/authVerify/");
        getDocs();
    }, [userId]);

    // window.location.reload();
    // 조건부 렌더링

    if (cat === 1) {
        const { user_id, title, sender, recipient, contents } = docs1;
        const { sender_name, sender_address, sender_phone } = sender;
        const { recipient_name, recipient_address, recipient_phone } =
            recipient;
        const { day, content, not_content } = contents;

        const onchange1 = (event) => {
            const { value, name } = event.target; //event.target에서 name과 value만 가져오기
            setDocs1({
                ...docs1,
                [name]: value,
            });
        };
        const sender_change1 = (event) => {
            const { value, name } = event.target;
            setDocs1({
                ...docs1,
                sender: { ...sender, [name]: value },
            });
        };
        const recipient_change1 = (event) => {
            const { value, name } = event.target;
            setDocs1({
                ...docs1,
                recipient: { ...recipient, [name]: value },
            });
        };
        const contents_change1 = (event) => {
            const { value, name } = event.target;
            setDocs1({
                ...docs1,
                contents: { ...contents, [name]: value },
            });
        };
        return (
            <body className="d-flex flex-column h-100">
                <main className="flex-shrink-0">
                    <section className="get-started section-bg">
                        <div className="container">
                            <div className="row justify-content-between gy-4">
                                <h2
                                    className="display-5 fw-bolder"
                                    style={{ marginBottom: "50px" }}
                                >
                                    <span className="text-gradient d-inline">
                                        My Docs
                                    </span>
                                    <p className="mydocs-text">
                                        문서 내용을 수정할 수 있습니다.
                                    </p>
                                </h2>
                            </div>

                            <div className="docs-box">
                                <p className="explanation">
                                    박스 안의 내용을 수정한 후 수정 버튼을
                                    누르세요.
                                </p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <h1 className="headline">내용증명</h1>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <p className="sender">
                                    <strong>발신인</strong>
                                </p>
                                <p className="sender">
                                    이름 :{" "}
                                    <Input
                                        className="d_name"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_name"
                                        value={sender.sender_name}
                                        onChange={sender_change1}
                                    />
                                </p>
                                <p className="sender">
                                    주소 :{" "}
                                    <Input
                                        className="address"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_address"
                                        value={sender.sender_address}
                                        onChange={sender_change1}
                                    />
                                </p>
                                <p className="sender">
                                    전화번호 :{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_phone"
                                        value={sender.sender_phone}
                                        onChange={sender_change1}
                                    />
                                </p>
                                <p>&nbsp;</p>
                                <p className="recipient">
                                    <strong>수신인</strong>
                                </p>
                                <p className="recipient">
                                    이름 :{" "}
                                    <Input
                                        className="d_name"
                                        color="success"
                                        size="small"
                                        type="text"
                                        name="recipient_name"
                                        value={recipient.recipient_name}
                                        onChange={recipient_change1}
                                    />
                                </p>
                                <p className="recipient">
                                    주소 :{" "}
                                    <Input
                                        className="address"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="recipient_address"
                                        value={recipient.recipient_address}
                                        onChange={recipient_change1}
                                    />
                                </p>
                                <p className="recipient">
                                    전화번호 :{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="recipient_phone"
                                        value={recipient.recipient_phone}
                                        onChange={recipient_change1}
                                    />
                                </p>
                                <p>&nbsp;</p>
                                <p className="title">제목 : 계약이행 청구</p>

                                <hr></hr>
                                <p className="content">
                                    1. 귀하(수신인, 이하 '귀하'이라 한다)의
                                    무궁한 발전을 기원합니다.
                                </p>
                                <p className="content">
                                    2. 발신인은{" "}
                                    <Input
                                        className="d_day"
                                        size="small"
                                        color="success"
                                        name="day"
                                        value={contents.day}
                                        onChange={contents_change1}
                                    />{" "}
                                    귀하와 사이에서{" "}
                                    <Input
                                        className="textarea"
                                        size="small"
                                        color="success"
                                        name="content"
                                        value={contents.content}
                                        onChange={contents_change1}
                                    />{" "}
                                    하는 계약을 체결하였습니다.
                                </p>
                                <p className="content">
                                    3. 하지만,{" "}
                                    <Input
                                        className="textarea"
                                        size="small"
                                        color="success"
                                        name="not_content"
                                        value={contents.not_content}
                                        onChange={contents_change1}
                                    />
                                    을 이행하지 않았습니다.
                                </p>
                                <p className="content">
                                    4. 따라서, 본 발신인은 위와 같은 귀하의 본
                                    계약상의 의무 불이행을 이유로 본 내용증명을
                                    귀하에게 발송하는 바, 민법 등 관련 법규와 본
                                    계약에 따라 본 발신인은 귀하에 대한 의무를
                                    이행할 필요가 없음을 고지합니다.
                                </p>
                                <p>&nbsp;</p>
                                <p className="today">
                                    <strong>{dateString}</strong>
                                </p>
                                <p className="bottom1">&nbsp;</p>
                                <p className="bottom2">
                                    <strong>위 발신인</strong>
                                </p>
                                <p className="sign">
                                    <Input
                                        size="small"
                                        color="success"
                                        className="s_name"
                                        type="text"
                                        name="sender_name"
                                        value={sender.sender_name}
                                        onChange={sender_change1}
                                    />{" "}
                                    (인)
                                </p>
                            </div>

                            <ThemeProvider theme={theme}>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    justifyContent="center"
                                >
                                    <Button
                                        onClick={confirmUpdate}
                                        size="large"
                                        color="black"
                                        variant="contained"
                                    >
                                        수정
                                    </Button>
                                    <Button
                                        onClick={backToMydocs}
                                        size="large"
                                        color="black"
                                        variant="contained"
                                    >
                                        취소
                                    </Button>
                                </Stack>
                            </ThemeProvider>
                        </div>
                    </section>
                </main>
            </body>
        );
    } else if (cat === 2) {
        const { user_id, title, sender, recipient, contents } = docs2;
        const { sender_name, sender_address, sender_phone } = sender;
        const { recipient_name, recipient_address, recipient_phone } =
            recipient;
        const {
            day,
            thing,
            thing_money,
            thing_money_day,
            how,
            thing_give_day,
            not_give_money,
            give_day,
        } = contents;

        const onchange2 = (event) => {
            const { value, name } = event.target; //event.target에서 name과 value만 가져오기
            setDocs2({
                ...docs2,
                [name]: value,
            });
        };
        const sender_change2 = (event) => {
            const { value, name } = event.target; //event.target에서 name과 value만 가져오기
            setDocs2({
                ...docs2,
                sender: { ...sender, [name]: value },
            });
        };
        const recipient_change2 = (event) => {
            const { value, name } = event.target; //event.target에서 name과 value만 가져오기
            setDocs2({
                ...docs2,
                recipient: { ...recipient, [name]: value },
            });
        };
        const contents_change2 = (event) => {
            const { value, name } = event.target; //event.target에서 name과 value만 가져오기
            setDocs2({
                ...docs2,
                contents: { ...contents, [name]: value },
            });
        };
        return (
            <body className="d-flex flex-column h-100">
                <main className="flex-shrink-0">
                    <section className="get-started section-bg">
                        <div className="container">
                            <div className="row justify-content-between gy-4">
                                <h2
                                    className="display-5 fw-bolder"
                                    style={{ marginBottom: "50px" }}
                                >
                                    <span className="text-gradient d-inline">
                                        My Docs
                                    </span>
                                    <p className="mydocs-text">
                                        문서 내용을 수정할 수 있습니다.
                                    </p>
                                </h2>
                            </div>

                            <div className="docs-box">
                                <p className="explanation">
                                    박스 안의 내용을 수정한 후 수정 버튼을
                                    누르세요.
                                </p>

                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <h1 className="headline">내용증명</h1>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <p className="sender">
                                    <strong>발신인</strong>
                                </p>
                                <p className="sender">
                                    이름 :{" "}
                                    <Input
                                        className="d_name"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_name"
                                        value={sender.sender_name}
                                        onChange={sender_change2}
                                    />
                                </p>
                                <p className="sender">
                                    주소 :{" "}
                                    <Input
                                        className="address"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_address"
                                        value={sender.sender_address}
                                        onChange={sender_change2}
                                    />
                                </p>
                                <p className="sender">
                                    전화번호 :{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_phone"
                                        value={sender.sender_phone}
                                        onChange={sender_change2}
                                    />
                                </p>
                                <p>&nbsp;</p>
                                <p className="recipient">
                                    <strong>수신인</strong>
                                </p>
                                <p className="recipient">
                                    이름 :{" "}
                                    <Input
                                        className="d_name"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="recipient_name"
                                        value={recipient.recipient_name}
                                        onChange={recipient_change2}
                                    />
                                </p>
                                <p className="recipient">
                                    주소 :{" "}
                                    <Input
                                        className="address"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="recipient_address"
                                        value={recipient.recipient_address}
                                        onChange={recipient_change2}
                                    />
                                </p>
                                <p className="recipient">
                                    전화번호 :{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="recipient_phone"
                                        value={recipient.recipient_phone}
                                        onChange={recipient_change2}
                                    />
                                </p>
                                <p>&nbsp;</p>
                                <p className="title">
                                    제목 : 매매대금 지급 청구
                                </p>
                                <hr />
                                <p className="content">
                                    1. 귀하(수신인, 이하 '귀하'이라 한다)의
                                    무궁한 발전을 기원합니다.
                                </p>
                                <p className="content">
                                    2. 발신인은{" "}
                                    <Input
                                        className="d_day"
                                        size="small"
                                        color="success"
                                        name="day"
                                        value={contents.day}
                                        onChange={contents_change2}
                                    />{" "}
                                    귀하와 사이에서{" "}
                                    <Input
                                        className="d_things"
                                        size="small"
                                        color="success"
                                        name="thing"
                                        value={contents.thing}
                                        onChange={contents_change2}
                                    />
                                    (이하 '본 매매 목적물'이라 한다)를 매매대금{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        name="thing_money"
                                        value={contents.thing_money}
                                        onChange={contents_change2}
                                    />
                                    원으로 정하여 매도하기로 하는 매매계약(이하
                                    '본 매매계약'이라 한다)을
                                    체결하였습니다.그리고 귀하는 본 발신인에게
                                    본 매매계약에 따라
                                    <Input
                                        className="d_day"
                                        size="small"
                                        color="success"
                                        name="thing_money_day"
                                        value={contents.thing_money_day}
                                        onChange={contents_change2}
                                    />{" "}
                                    금{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        name="thing_money"
                                        value={contents.thing_money}
                                        onChange={contents_change2}
                                    />
                                    원을{" "}
                                    <Input
                                        className="textarea"
                                        size="small"
                                        color="success"
                                        name="how"
                                        value={contents.how}
                                        onChange={contents_change2}
                                    />
                                    로 지급하기로 하였습니다.
                                </p>
                                <p className="content">
                                    3. 이에, 본인은 본 매매계약에 따라{" "}
                                    <Input
                                        className="d_day"
                                        size="small"
                                        color="success"
                                        name="thing_give_day"
                                        value={contents.thing_give_day}
                                        onChange={contents_change2}
                                    />{" "}
                                    본 매매 목적물을 귀하에게 인도한 사실이
                                    있습니다.
                                </p>
                                <p className="content">
                                    4. 그러나 귀하는 약속한 매매대금의 지급
                                    기한이 지난 현재까지 위{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        name="not_give_money"
                                        value={contents.not_give_money}
                                        onChange={contents_change2}
                                    />
                                    원을 본 발신인의 수차례에 걸친 변제의
                                    도촉에도 불구하고 갚지 않고 있습니다.
                                </p>
                                <p className="content">
                                    5. 따라서, 본 발신인은 위와 같은 귀하의 본
                                    매매계약 불이행을 이유로 본 내용증명을
                                    귀하에게 발송하는 바, 귀하는{" "}
                                    <Input
                                        className="d_day"
                                        size="small"
                                        color="success"
                                        name="give_day"
                                        value={contents.give_day}
                                        onChange={contents_change2}
                                    />{" "}
                                    까지 본 발신인에게 위 미지급 대금을
                                    지급변제할 것을 촉구합니다.
                                </p>
                                <p className="content">
                                    6. 본 발신인이 귀하에게 법적 조치를 취하기
                                    전에 귀하는 기한 내에 귀하의 명백한 미지급
                                    매매대금의 변제의무를 이행하여 본 건을
                                    원만하게 해결하시기를 마지막으로
                                    말씀드립니다.
                                </p>
                                <p>&nbsp;</p>
                                <p className="today">
                                    <strong>{dateString}</strong>
                                </p>
                                <p className="bottom1">&nbsp;</p>
                                <p className="bottom2">
                                    <strong>위 발신인</strong>
                                </p>
                                <p className="sign">
                                    <Input
                                        className="s_name"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_name"
                                        value={sender.sender_name}
                                        onChange={sender_change2}
                                    />{" "}
                                    (인)
                                </p>
                            </div>

                            <ThemeProvider theme={theme}>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    justifyContent="center"
                                >
                                    <Button
                                        onClick={confirmUpdate}
                                        size="large"
                                        color="black"
                                        variant="contained"
                                    >
                                        수정
                                    </Button>
                                    <Button
                                        onClick={backToMydocs}
                                        size="large"
                                        color="black"
                                        variant="contained"
                                    >
                                        취소
                                    </Button>
                                </Stack>
                            </ThemeProvider>
                        </div>
                    </section>
                </main>
            </body>
        );
    } else if (cat === 3) {
        const { user_id, title, sender, recipient, contents } = docs3;
        const { sender_name, sender_address, sender_phone } = sender;
        const { recipient_name, recipient_address, recipient_phone } =
            recipient;
        const { day, location, content } = contents;

        const onchange3 = (event) => {
            const { value, name } = event.target; //event.target에서 name과 value만 가져오기
            setDocs3({
                ...docs3,
                [name]: value,
            });
        };
        const sender_change3 = (event) => {
            const { value, name } = event.target; //event.target에서 name과 value만 가져오기
            setDocs3({
                ...docs3,
                sender: { ...sender, [name]: value },
            });
        };
        const recipient_change3 = (event) => {
            const { value, name } = event.target; //event.target에서 name과 value만 가져오기
            setDocs3({
                ...docs3,
                recipient: { ...recipient, [name]: value },
            });
        };
        const contents_change3 = (event) => {
            const { value, name } = event.target; //event.target에서 name과 value만 가져오기
            setDocs3({
                ...docs3,
                contents: { ...contents, [name]: value },
            });
        };

        return (
            <body className="d-flex flex-column h-100">
                <main className="flex-shrink-0">
                    <section className="get-started section-bg">
                        <div className="container">
                            <div className="row justify-content-between gy-4">
                                <h2
                                    className="display-5 fw-bolder"
                                    style={{ marginBottom: "50px" }}
                                >
                                    <span className="text-gradient d-inline">
                                        My Docs
                                    </span>
                                    <p className="mydocs-text">
                                        문서 내용을 수정할 수 있습니다.
                                    </p>
                                </h2>
                            </div>

                            <div className="docs-box">
                                <p className="explanation">
                                    박스 안의 내용을 수정한 후 수정 버튼을
                                    누르세요.
                                </p>

                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <h1 className="headline">내용증명</h1>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <p className="sender">
                                    <strong>발신인</strong>
                                </p>
                                <p className="sender">
                                    이름 :{" "}
                                    <Input
                                        className="d_name"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_name"
                                        value={sender.sender_name}
                                        onChange={sender_change3}
                                    />
                                </p>
                                <p className="sender">
                                    주소 :{" "}
                                    <Input
                                        className="address"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_address"
                                        value={sender.sender_address}
                                        onChange={sender_change3}
                                    />
                                </p>
                                <p className="sender">
                                    전화번호 :{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_phone"
                                        value={sender.sender_phone}
                                        onChange={sender_change3}
                                    />
                                </p>
                                <p>&nbsp;</p>
                                <p className="recipient">
                                    <strong>수신인</strong>
                                </p>
                                <p className="recipient">
                                    이름 :{" "}
                                    <Input
                                        className="d_name"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="recipient_name"
                                        value={recipient.recipient_name}
                                        onChange={recipient_change3}
                                    />
                                </p>
                                <p className="recipient">
                                    주소 :{" "}
                                    <Input
                                        className="address"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="recipient_address"
                                        value={recipient.recipient_address}
                                        onChange={recipient_change3}
                                    />
                                </p>
                                <p className="recipient">
                                    전화번호 :{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="recipient_phone"
                                        value={recipient.recipient_phone}
                                        onChange={recipient_change3}
                                    />
                                </p>
                                <p>&nbsp;</p>
                                <p className="title">
                                    제목 : 명예훼손 행위 중단 청구
                                </p>
                                <hr />
                                <p className="content">
                                    1. 귀하(수신인, 이하 '귀하'이라 한다)의
                                    무궁한 발전을 기원합니다.
                                </p>
                                <p className="content">
                                    2. 귀하의 아래와 같은 행위가 발신인의 명예를
                                    훼손하고 있어, 이에 대한 중단 및 향후에도
                                    명예훼손을 하지 말 것을 엄중히 요청합니다.
                                </p>
                                <p className="content2">
                                    가. 즉, 귀하는{" "}
                                    <Input
                                        className="d_day"
                                        size="small"
                                        color="success"
                                        name="day"
                                        value={contents.day}
                                        onChange={contents_change3}
                                    />{" "}
                                    경{" "}
                                    <Input
                                        className="textarea"
                                        size="small"
                                        color="success"
                                        name="location"
                                        value={contents.location}
                                        onChange={contents_change3}
                                    />
                                    에서 불특정된 1인 또는 다수의 사람이 듣거나
                                    볼 수 있는데도 '
                                    <Input
                                        className="textarea"
                                        size="small"
                                        color="success"
                                        name="content"
                                        value={contents.content}
                                        onChange={contents_change3}
                                    />
                                    '라는 취지의 내용을 얘기하거나 게시한 사실이
                                    있습니다.
                                </p>
                                <p className="content">
                                    3. 귀하가 얘기하거나 게시한 위 내용은 본
                                    발신인의 명예를 훼손하는 내용입니다. 뿐만
                                    아니라 귀하가 불특정된 1인 또는 다수의
                                    사람이 있거나 들을 수 있는 상황이나 인터넷
                                    상에서 명예를 훼손하는 내용을 얘기하였기
                                    때문에 그 공연성이 인정됩니다.
                                </p>
                                <p>&nbsp;</p>
                                <p className="today">
                                    <strong>{dateString}</strong>
                                </p>
                                <p className="bottom1">&nbsp;</p>
                                <p className="bottom2">
                                    <strong>위 발신인</strong>
                                </p>
                                <p className="sign">
                                    <Input
                                        className="s_name"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_name"
                                        value={sender.sender_name}
                                        onChange={sender_change3}
                                    />{" "}
                                    (인)
                                </p>
                            </div>

                            <ThemeProvider theme={theme}>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    justifyContent="center"
                                >
                                    <Button
                                        onClick={confirmUpdate}
                                        size="large"
                                        color="black"
                                        variant="contained"
                                    >
                                        수정
                                    </Button>
                                    <Button
                                        onClick={backToMydocs}
                                        size="large"
                                        color="black"
                                        variant="contained"
                                    >
                                        취소
                                    </Button>
                                </Stack>
                            </ThemeProvider>
                        </div>
                    </section>
                </main>
            </body>
        );
    } else if (cat === 4) {
        const { user_id, title, sender, recipient, contents } = docs4;
        const { sender_name, sender_address, sender_phone } = sender;
        const { recipient_name, recipient_address, recipient_phone } =
            recipient;
        const {
            day,
            location,
            house_start,
            house_end,
            house_money,
            money_give_day,
        } = contents;

        const onchange4 = (event) => {
            const { value, name } = event.target; //event.target에서 name과 value만 가져오기
            setDocs4({
                ...docs4,
                [name]: value,
            });
        };
        const sender_change4 = (event) => {
            const { value, name } = event.target; //event.target에서 name과 value만 가져오기
            setDocs4({
                ...docs4,
                sender: { ...sender, [name]: value },
            });
        };
        const recipient_change4 = (event) => {
            const { value, name } = event.target; //event.target에서 name과 value만 가져오기
            setDocs4({
                ...docs4,
                recipient: { ...recipient, [name]: value },
            });
        };
        const contents_change4 = (event) => {
            const { value, name } = event.target; //event.target에서 name과 value만 가져오기
            setDocs4({
                ...docs4,
                contents: { ...contents, [name]: value },
            });
        };

        return (
            <body className="d-flex flex-column h-100">
                <main className="flex-shrink-0">
                    <section className="get-started section-bg">
                        <div className="container">
                            <div className="row justify-content-between gy-4">
                                <h2
                                    className="display-5 fw-bolder"
                                    style={{ marginBottom: "50px" }}
                                >
                                    <span className="text-gradient d-inline">
                                        My Docs
                                    </span>
                                    <p className="mydocs-text">
                                        문서 내용을 수정할 수 있습니다.
                                    </p>
                                </h2>
                            </div>

                            <div className="docs-box">
                                <p className="explanation">
                                    박스 안의 내용을 수정한 후 수정 버튼을
                                    누르세요.
                                </p>

                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <h1 className="headline">내용증명</h1>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <p className="sender">
                                    <strong>발신인</strong>
                                </p>
                                <p className="sender">
                                    이름 :{" "}
                                    <Input
                                        className="d_name"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_name"
                                        value={sender.sender_name}
                                        onChange={sender_change4}
                                    />
                                </p>
                                <p className="sender">
                                    주소 :{" "}
                                    <Input
                                        className="address"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_address"
                                        value={sender.sender_address}
                                        onChange={sender_change4}
                                    />
                                </p>
                                <p className="sender">
                                    전화번호 :{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        name="sender_phone"
                                        value={sender.sender_phone}
                                        onChange={sender_change4}
                                    />
                                </p>
                                <p>&nbsp;</p>
                                <p className="recipient">
                                    <strong>수신인</strong>
                                </p>
                                <p className="recipient">
                                    이름 :{" "}
                                    <Input
                                        className="d_name"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="recipient_name"
                                        value={recipient.recipient_name}
                                        onChange={recipient_change4}
                                    />
                                </p>
                                <p className="recipient">
                                    주소 :{" "}
                                    <Input
                                        className="address"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="recipient_address"
                                        value={recipient.recipient_address}
                                        onChange={recipient_change4}
                                    />
                                </p>
                                <p className="recipient">
                                    전화번호 :{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        name="recipient_phone"
                                        value={recipient.recipient_phone}
                                        onChange={recipient_change4}
                                    />
                                </p>
                                <p>&nbsp;</p>
                                <p className="title">
                                    제목 : 임대차 보증금 반환청구의 내용증명
                                </p>
                                <hr />
                                <p className="content">
                                    1. 귀하(수신인, 이하 '귀하'이라 한다)의
                                    무궁한 발전을 기원합니다.
                                </p>
                                <p className="content">
                                    2. 아래와 같이 본 발신인은 귀하와
                                    임대차계약을 체결하였으며, 이에 귀하는 본
                                    대차보증금 반환의무가 있는 바, 이에 대한
                                    이행을 촉구합니다.
                                </p>
                                <p className="content2">
                                    가. 본 발신인은 귀하와{" "}
                                    <Input
                                        className="d_day"
                                        size="small"
                                        color="success"
                                        name="day"
                                        value={contents.day}
                                        onChange={contents_change4}
                                    />{" "}
                                    경{" "}
                                    <Input
                                        className="textarea"
                                        size="small"
                                        color="success"
                                        name="location"
                                        value={contents.location}
                                        onChange={contents_change4}
                                    />
                                    에 관하여 임대기간{" "}
                                    <Input
                                        className="d_day"
                                        size="small"
                                        color="success"
                                        name="house_start"
                                        value={contents.house_start}
                                        onChange={contents_change4}
                                    />{" "}
                                    부터{" "}
                                    <Input
                                        className="d_day"
                                        size="small"
                                        color="success"
                                        name="house_end"
                                        value={contents.house_end}
                                        onChange={contents_change4}
                                    />{" "}
                                    까지 임대차보증금{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        name="house_money"
                                        value={contents.house_money}
                                        onChange={contents_change4}
                                    />
                                    원으로 하는 임대차계약을 체결하였습니다.
                                </p>
                                <p className="content2">
                                    나. 본 임대차계약은 기간이 만료되어
                                    종료하였는 바, 귀하는 본 발신인에게 임대차
                                    보증금{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        name="house_money"
                                        value={contents.house_money}
                                        onChange={contents_change4}
                                    />
                                    원을 반환할 의무가 있습니다.
                                </p>
                                <p className="content">
                                    3. 본 발신인은 귀하가{" "}
                                    <Input
                                        className="d_day"
                                        size="small"
                                        color="success"
                                        name="money_give_day"
                                        value={contents.money_give_day}
                                        onChange={contents_change4}
                                    />
                                    까지 본 발신인에게 임대차보증금을 반환할
                                    것을 촉구합니다.
                                </p>
                                <p className="content">
                                    4. 본 발신인이 귀하에게 법적 조치를 취하기
                                    전에 귀하는 기한 내에 귀하의 명백한
                                    임대차보증금 반환 의무를 이행하여 본 건을
                                    원만하게 해결하시기를 마지막으로
                                    말씀드립니다.
                                </p>
                                <p>&nbsp;</p>
                                <p className="today">
                                    <strong>{dateString}</strong>
                                </p>
                                <p className="bottom1">&nbsp;</p>
                                <p className="bottom2">
                                    <strong>위 발신인</strong>
                                </p>
                                <p className="sign">
                                    <Input
                                        className="s_name"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_name"
                                        value={sender.sender_name}
                                        onChange={sender_change4}
                                    />{" "}
                                    (인)
                                </p>
                            </div>

                            <ThemeProvider theme={theme}>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    justifyContent="center"
                                >
                                    <Button
                                        onClick={confirmUpdate}
                                        size="large"
                                        color="black"
                                        variant="contained"
                                    >
                                        수정
                                    </Button>
                                    <Button
                                        onClick={backToMydocs}
                                        size="large"
                                        color="black"
                                        variant="contained"
                                    >
                                        취소
                                    </Button>
                                </Stack>
                            </ThemeProvider>
                        </div>
                    </section>
                </main>
            </body>
        );
    } else if (cat === 5) {
        const { user_id, title, sender, recipient, contents } = docs5;
        const { sender_name, sender_address, sender_phone } = sender;
        const { recipient_name, recipient_address, recipient_phone } =
            recipient;
        const { day, content, trepass, loss_content, loss_money, loss_day } =
            contents;

        const onchange5 = (event) => {
            const { value, name } = event.target; //event.target에서 name과 value만 가져오기
            setDocs5({
                ...docs5,
                [name]: value,
            });
        };
        const sender_change5 = (event) => {
            const { value, name } = event.target; //event.target에서 name과 value만 가져오기
            setDocs5({
                ...docs5,
                sender: { ...sender, [name]: value },
            });
        };
        const recipient_change5 = (event) => {
            const { value, name } = event.target; //event.target에서 name과 value만 가져오기
            setDocs5({
                ...docs5,
                recipient: { ...recipient, [name]: value },
            });
        };
        const contents_change5 = (event) => {
            const { value, name } = event.target; //event.target에서 name과 value만 가져오기
            setDocs5({
                ...docs5,
                contents: { ...contents, [name]: value },
            });
        };

        return (
            <body className="d-flex flex-column h-100">
                <main className="flex-shrink-0">
                    <section className="get-started section-bg">
                        <div className="container">
                            <div className="row justify-content-between gy-4">
                                <h2
                                    className="display-5 fw-bolder"
                                    style={{ marginBottom: "50px" }}
                                >
                                    <span className="text-gradient d-inline">
                                        My Docs
                                    </span>
                                    <p className="mydocs-text">
                                        문서 내용을 수정할 수 있습니다.
                                    </p>
                                </h2>
                            </div>

                            <div className="docs-box">
                                <p className="explanation">
                                    박스 안의 내용을 수정한 후 수정 버튼을
                                    누르세요.
                                </p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <h1 className="headline">내용증명</h1>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <p className="sender">
                                    <strong>발신인</strong>
                                </p>
                                <p className="sender">
                                    이름 :{" "}
                                    <Input
                                        className="d_name"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_name"
                                        value={sender.sender_name}
                                        onChange={sender_change5}
                                    />
                                </p>
                                <p className="sender">
                                    주소 :{" "}
                                    <Input
                                        className="address"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_address"
                                        value={sender.sender_address}
                                        onChange={sender_change5}
                                    />
                                </p>
                                <p className="sender">
                                    전화번호 :{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_phone"
                                        value={sender.sender_phone}
                                        onChange={sender_change5}
                                    />
                                </p>
                                <p>&nbsp;</p>
                                <p className="recipient">
                                    <strong>수신인</strong>
                                </p>
                                <p className="recipient">
                                    이름 :{" "}
                                    <Input
                                        className="d_name"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="recipient_name"
                                        value={recipient.recipient_name}
                                        onChange={recipient_change5}
                                    />
                                </p>
                                <p className="recipient">
                                    주소 :{" "}
                                    <Input
                                        className="address"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="recipient_address"
                                        value={recipient.recipient_address}
                                        onChange={recipient_change5}
                                    />
                                </p>
                                <p className="recipient">
                                    전화번호 :{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="recipient_phone"
                                        value={recipient.recipient_phone}
                                        onChange={recipient_change5}
                                    />
                                </p>
                                <p>&nbsp;</p>
                                <p className="title">제목 : 손해배상 통보</p>

                                <hr></hr>
                                <p className="content">
                                    1. 귀하(수신인, 이하 '귀하'이라 한다)의
                                    무궁한 발전을 기원합니다.
                                </p>
                                <p className="content">
                                    2. 발신인은{" "}
                                    <Input
                                        className="d_day"
                                        size="small"
                                        color="success"
                                        name="day"
                                        value={contents.day}
                                        onChange={contents_change5}
                                    />{" "}
                                    귀하의 아래와 같은 불법행위(이하 '본 건
                                    불법행위'라고 합니다)로 인하여 발신인의
                                    신체침해를 당했습니다.
                                </p>
                                <p className="content2">
                                    가. 본 건 불법행위의 내용
                                </p>
                                <p className="content3">
                                    -{" "}
                                    <Input
                                        className="textarea"
                                        size="small"
                                        color="success"
                                        name="content"
                                        value={contents.content}
                                        onChange={contents_change5}
                                    />
                                </p>
                                <p className="content2">
                                    나. 본 건 불법행위로 발생한 신체침해의 내용
                                </p>
                                <p className="content3">
                                    -{" "}
                                    <Input
                                        className="textarea"
                                        size="small"
                                        color="success"
                                        name="trepass"
                                        value={contents.trepass}
                                        onChange={contents_change5}
                                    />
                                </p>
                                <p className="content">
                                    3. 본 발신인은&nbsp;귀하의 불법행위로 인한
                                    손해가 발생하였는 바,&nbsp;귀하에게 본
                                    발신인에 대한 손해를 회복하기 위한 조치를 할
                                    것을 엄중히 경고합니다.
                                </p>
                                <p className="content2">
                                    가. 손해배상 조치 통보 내용
                                </p>
                                <p className="content4">
                                    손해의 내용 및 비용 :{" "}
                                    <Input
                                        className="textarea"
                                        size="small"
                                        color="success"
                                        name="loss_content"
                                        value={contents.loss_content}
                                        onChange={contents_change5}
                                    />
                                    , 합계{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        name="loss_money"
                                        value={contents.loss_money}
                                        onChange={contents_change5}
                                    />
                                    원
                                </p>
                                <p className="content4">
                                    지급기한:{" "}
                                    <Input
                                        className="d_day"
                                        size="small"
                                        color="success"
                                        name="loss_day"
                                        value={contents.loss_day}
                                        onChange={contents_change5}
                                    />
                                </p>
                                <p className="content">
                                    4. 본 발신인은 귀하의 불법행위로 인한 손해가
                                    발생하였는 바, 귀하에게 본 발신 위와 같은
                                    손해배상 등의 조치를 할 것을 통보합니다.
                                </p>
                                <p className="content">
                                    5. 본 발신인이 귀하에게 법적 조치를 취하기
                                    전에 귀하는 손해 배상 책임 등을 이행하여 본
                                    건을 원만하게 해결하시기를 마지막으로
                                    말씀드립니다.
                                </p>
                                <p>&nbsp;</p>
                                <p className="today">
                                    <strong>{dateString}</strong>
                                </p>
                                <p className="bottom1">&nbsp;</p>
                                <p className="bottom2">
                                    <strong>위 발신인</strong>
                                </p>
                                <p className="sign">
                                    <Input
                                        className="s_name"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_name"
                                        value={sender.sender_name}
                                        onChange={sender_change5}
                                    />{" "}
                                    (인)
                                </p>
                            </div>

                            <ThemeProvider theme={theme}>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    justifyContent="center"
                                >
                                    <Button
                                        onClick={confirmUpdate}
                                        size="large"
                                        color="black"
                                        variant="contained"
                                    >
                                        수정
                                    </Button>
                                    <Button
                                        onClick={backToMydocs}
                                        size="large"
                                        color="black"
                                        variant="contained"
                                    >
                                        취소
                                    </Button>
                                </Stack>
                            </ThemeProvider>
                        </div>
                    </section>
                </main>
            </body>
        );
    } else if (cat === 6) {
        const { user_id, title, sender, recipient, contents } = docs6;
        const { sender_name, sender_address, sender_phone } = sender;
        const { recipient_name, recipient_address, recipient_phone } =
            recipient;
        const {
            day,
            work_content,
            not_give_money,
            end_day,
            give_day,
            give_money,
            money_give_day,
        } = contents;

        const onchange6 = (event) => {
            const { value, name } = event.target;
            setDocs6({
                ...docs6,
                [name]: value,
            });
        };
        const sender_change6 = (event) => {
            const { value, name } = event.target;
            setDocs6({
                ...docs6,
                sender: { ...sender, [name]: value },
            });
        };
        const recipient_change6 = (event) => {
            const { value, name } = event.target;
            setDocs6({
                ...docs6,
                recipient: { ...recipient, [name]: value },
            });
        };
        const contents_change6 = (event) => {
            const { value, name } = event.target;
            setDocs6({
                ...docs6,
                contents: { ...contents, [name]: value },
            });
        };

        return (
            <body className="d-flex flex-column h-100">
                <main className="flex-shrink-0">
                    <section className="get-started section-bg">
                        <div className="container">
                            <div className="row justify-content-between gy-4">
                                <h2
                                    className="display-5 fw-bolder"
                                    style={{ marginBottom: "50px" }}
                                >
                                    <span className="text-gradient d-inline">
                                        My Docs
                                    </span>
                                    <p className="mydocs-text">
                                        문서 내용을 수정할 수 있습니다.
                                    </p>
                                </h2>
                            </div>

                            <div className="docs-box">
                                <p className="explanation">
                                    박스 안의 내용을 수정한 후 수정 버튼을
                                    누르세요.
                                </p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <h1 className="headline">내용증명</h1>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <p className="sender">
                                    <strong>발신인</strong>
                                </p>
                                <p className="sender">
                                    이름 :{" "}
                                    <Input
                                        className="d_name"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_name"
                                        value={sender.sender_name}
                                        onChange={sender_change6}
                                    />
                                </p>
                                <p className="sender">
                                    주소 :{" "}
                                    <Input
                                        className="address"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_address"
                                        value={sender.sender_address}
                                        onChange={sender_change6}
                                    />
                                </p>
                                <p className="sender">
                                    전화번호 :{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_phone"
                                        value={sender.sender_phone}
                                        onChange={sender_change6}
                                    />
                                </p>
                                <p>&nbsp;</p>
                                <p className="recipient">
                                    <strong>수신인</strong>
                                </p>
                                <p className="recipient">
                                    이름 :{" "}
                                    <Input
                                        className="d_name"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="recipient_name"
                                        value={recipient.recipient_name}
                                        onChange={recipient_change6}
                                    />
                                </p>
                                <p className="recipient">
                                    주소 :{" "}
                                    <Input
                                        className="address"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="recipient_address"
                                        value={recipient.recipient_address}
                                        onChange={recipient_change6}
                                    />
                                </p>
                                <p className="recipient">
                                    전화번호 :{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="recipient_phone"
                                        value={recipient.recipient_phone}
                                        onChange={recipient_change6}
                                    />
                                </p>
                                <p>&nbsp;</p>
                                <p className="title">
                                    제목 : 용역대금 지급 청구
                                </p>

                                <hr></hr>
                                <p className="content">
                                    1. 귀하(수신인, 이하 '귀하'이라 한다)의
                                    무궁한 발전을 기원합니다.
                                </p>
                                <p className="content">
                                    2. 본 발신인은{" "}
                                    <Input
                                        className="d_day"
                                        size="small"
                                        color="success"
                                        name="day"
                                        value={contents.day}
                                        onChange={contents_change6}
                                    />{" "}
                                    경 귀하에게{" "}
                                    <Input
                                        className="textarea"
                                        size="small"
                                        color="success"
                                        name="work_content"
                                        value={contents.work_content}
                                        onChange={contents_change6}
                                    />
                                    (이하 '본 건 용역 이행 내용'라고 합니다)을
                                    해주고, 귀하는 본 발신인에게{" "}
                                    <Input
                                        className="d_day"
                                        size="small"
                                        color="success"
                                        name="give_day"
                                        value={contents.give_day}
                                        onChange={contents_change6}
                                    />
                                    에 용역대금{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        name="give_money"
                                        value={contents.give_money}
                                        onChange={contents_change6}
                                    />
                                    원을 지급하기로 하는 용역계약(이하 '본 건
                                    용역 계약')을 체결 하였습니다.
                                </p>
                                <p className="content">
                                    3. 이에 본 발신인은 본 건 용역 이행 내용을{" "}
                                    <Input
                                        className="d_day"
                                        size="small"
                                        color="success"
                                        name="end_day"
                                        value={contents.end_day}
                                        onChange={contents_change6}
                                    />
                                    에 완료하였습니다.
                                </p>
                                <p className="content">
                                    4. 그런데 귀하는 본 건 용역 계약에서 정한
                                    용역대금 중{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        name="not_give_money"
                                        value={contents.not_give_money}
                                        onChange={contents_change6}
                                    />
                                    원을 지급하지 않고 있습니다. 그리고
                                    지급기한은{" "}
                                    <Input
                                        className="d_day"
                                        size="small"
                                        color="success"
                                        name="give_day"
                                        value={contents.give_day}
                                        onChange={contents_change6}
                                    />{" "}
                                    이었습니다.
                                </p>
                                <p className="content">
                                    5. 따라서 본 발신인은 귀하에게{" "}
                                    <Input
                                        className="d_day"
                                        size="small"
                                        color="success"
                                        name="money_give_day"
                                        value={contents.money_give_day}
                                        onChange={contents_change6}
                                    />
                                    까지 본 발신인에게 위 미지급 대금을 지급
                                    변제할 것을 촉구합니다.
                                </p>
                                <p className="content">
                                    6. 본 발신인이 귀하에게 법적 조치를 취하기
                                    전에 귀하는 기한 내에 귀하의 명백한 미지급
                                    용역대금의 변제의무를 이행하여 본 건을
                                    원만하게 해결하시기를 마지막으로
                                    말씀드립니다.
                                </p>
                                <p>&nbsp;</p>
                                <p className="today">
                                    <strong>{dateString}</strong>
                                </p>
                                <p className="bottom1">&nbsp;</p>
                                <p className="bottom2">
                                    <strong>위 발신인</strong>
                                </p>
                                <p className="sign">
                                    <Input
                                        className="s_name"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_name"
                                        value={sender.sender_name}
                                        onChange={sender_change6}
                                    />{" "}
                                    (인)
                                </p>
                            </div>

                            <ThemeProvider theme={theme}>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    justifyContent="center"
                                >
                                    <Button
                                        onClick={confirmUpdate}
                                        size="large"
                                        color="black"
                                        variant="contained"
                                    >
                                        수정
                                    </Button>
                                    <Button
                                        onClick={backToMydocs}
                                        size="large"
                                        color="black"
                                        variant="contained"
                                    >
                                        취소
                                    </Button>
                                </Stack>
                            </ThemeProvider>
                        </div>
                    </section>
                </main>
            </body>
        );
    } else if (cat === 7) {
        const { user_id, title, sender, recipient, contents } = docs7;
        const { sender_name, sender_address, sender_phone } = sender;
        const { recipient_name, recipient_address, recipient_phone } =
            recipient;
        const { money, content, not_give_money, money_give_day } = contents;

        const onchange7 = (event) => {
            const { value, name } = event.target;
            setDocs7({
                ...docs7,
                [name]: value,
            });
        };
        const sender_change7 = (event) => {
            const { value, name } = event.target;
            setDocs7({
                ...docs7,
                sender: { ...sender, [name]: value },
            });
        };
        const recipient_change7 = (event) => {
            const { value, name } = event.target;
            setDocs7({
                ...docs7,
                recipient: { ...recipient, [name]: value },
            });
        };
        const contents_change7 = (event) => {
            const { value, name } = event.target;
            setDocs7({
                ...docs7,
                contents: { ...contents, [name]: value },
            });
        };

        return (
            <body className="d-flex flex-column h-100">
                <main className="flex-shrink-0">
                    <section className="get-started section-bg">
                        <div className="container">
                            <div className="row justify-content-between gy-4">
                                <h2
                                    className="display-5 fw-bolder"
                                    style={{ marginBottom: "50px" }}
                                >
                                    <span className="text-gradient d-inline">
                                        My Docs
                                    </span>
                                    <p className="mydocs-text">
                                        문서 내용을 수정할 수 있습니다.
                                    </p>
                                </h2>
                            </div>

                            <div className="docs-box">
                                <p className="explanation">
                                    박스 안의 내용을 수정한 후 수정 버튼을
                                    누르세요.
                                </p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <h1 className="headline">내용증명</h1>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <p className="sender">
                                    <strong>발신인</strong>
                                </p>
                                <p className="sender">
                                    이름 :{" "}
                                    <Input
                                        className="d_name"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_name"
                                        value={sender.sender_name}
                                        onChange={sender_change7}
                                    />
                                </p>
                                <p className="sender">
                                    주소 :{" "}
                                    <Input
                                        className="address"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_address"
                                        value={sender.sender_address}
                                        onChange={sender_change7}
                                    />
                                </p>
                                <p className="sender">
                                    전화번호 :{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_phone"
                                        value={sender.sender_phone}
                                        onChange={sender_change7}
                                    />
                                </p>
                                <p>&nbsp;</p>
                                <p className="recipient">
                                    <strong>수신인</strong>
                                </p>
                                <p className="recipient">
                                    이름 :{" "}
                                    <Input
                                        className="d_name"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="recipient_name"
                                        value={recipient.recipient_name}
                                        onChange={recipient_change7}
                                    />
                                </p>
                                <p className="recipient">
                                    주소 :{" "}
                                    <Input
                                        className="address"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="recipient_address"
                                        value={recipient.recipient_address}
                                        onChange={recipient_change7}
                                    />
                                </p>
                                <p className="recipient">
                                    전화번호 :{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="recipient_phone"
                                        value={recipient.recipient_phone}
                                        onChange={recipient_change7}
                                    />
                                </p>
                                <p>&nbsp;</p>
                                <p className="title">제목 : 대여금 변제 청구</p>

                                <hr></hr>
                                <p className="content">
                                    1. 귀하(수신인, 이하 '귀하'이라 한다)의
                                    무궁한 발전을 기원합니다.
                                </p>
                                <p className="content">
                                    2. 본 발신인은 귀하에게 아래와 같이{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        name="money"
                                        value={contents.money}
                                        onChange={contents_change7}
                                    />
                                    원을 빌려주었습니다.
                                </p>
                                <p className="content2">
                                    &lt;본 발신인의 대여 내역&gt;
                                </p>
                                <p className="content2">
                                    가. 대여 내역:{" "}
                                    <Input
                                        className="textarea"
                                        size="small"
                                        color="success"
                                        name="content"
                                        value={contents.content}
                                        onChange={contents_change7}
                                    />
                                </p>
                                <p className="content">
                                    3. 그러나 귀하는 변제 기일이 지난 현재까지도{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        name="not_give_money"
                                        value={contents.not_give_money}
                                        onChange={contents_change7}
                                    />
                                    원을 본 발신인의 수차례 걸친 변제의 독촉에도
                                    불구하고 갚지 않고 있습니다.
                                </p>
                                <p className="content">
                                    4. 따라서 본 발신인은 귀하에게{" "}
                                    <Input
                                        className="d_day"
                                        size="small"
                                        color="success"
                                        name="money_give_day"
                                        value={contents.money_give_day}
                                        onChange={contents_change7}
                                    />
                                    까지 본 발신인에게 위 미지급 대여금을 지급
                                    변제할 것을 촉구합니다.
                                </p>
                                <p className="content">
                                    5. 본 발신인이 귀하에게 법적 조치를 취하기
                                    전에 귀하는 기한 내에 귀하의 명백한 미지급
                                    대여금의 변제의무를 이행하여 본 건을
                                    원만하게 해결하시기를 마지막으로
                                    말씀드립니다.
                                </p>
                                <p>&nbsp;</p>
                                <p className="today">
                                    <strong>{dateString}</strong>
                                </p>
                                <p className="bottom1">&nbsp;</p>
                                <p className="bottom2">
                                    <strong>위 발신인</strong>
                                </p>
                                <p className="sign">
                                    <Input
                                        className="s_name"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_name"
                                        value={sender.sender_name}
                                        onChange={sender_change7}
                                    />{" "}
                                    (인)
                                </p>
                            </div>

                            <ThemeProvider theme={theme}>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    justifyContent="center"
                                >
                                    <Button
                                        onClick={confirmUpdate}
                                        size="large"
                                        color="black"
                                        variant="contained"
                                    >
                                        수정
                                    </Button>
                                    <Button
                                        onClick={backToMydocs}
                                        size="large"
                                        color="black"
                                        variant="contained"
                                    >
                                        취소
                                    </Button>
                                </Stack>
                            </ThemeProvider>
                        </div>
                    </section>
                </main>
            </body>
        );
    } else if (cat === 8) {
        const { user_id, title, sender, recipient, contents } = docs8;
        const { sender_name, sender_address, sender_phone } = sender;
        const { recipient_name, recipient_address, recipient_phone } =
            recipient;
        const { event_day, event_name, event_content } = contents;

        const onchange8 = (event) => {
            const { value, name } = event.target;
            setDocs8({
                ...docs8,
                [name]: value,
            });
        };
        const sender_change8 = (event) => {
            const { value, name } = event.target;
            setDocs8({
                ...docs8,
                sender: { ...sender, [name]: value },
            });
        };
        const recipient_change8 = (event) => {
            const { value, name } = event.target;
            setDocs8({
                ...docs8,
                recipient: { ...recipient, [name]: value },
            });
        };
        const contents_change8 = (event) => {
            const { value, name } = event.target;
            setDocs8({
                ...docs8,
                contents: { ...contents, [name]: value },
            });
        };
        return (
            <body className="d-flex flex-column h-100">
                <main className="flex-shrink-0">
                    <section className="get-started section-bg">
                        <div className="container">
                            <div className="row justify-content-between gy-4">
                                <h2
                                    className="display-5 fw-bolder"
                                    style={{ marginBottom: "50px" }}
                                >
                                    <span className="text-gradient d-inline">
                                        My Docs
                                    </span>
                                    <p className="mydocs-text">
                                        문서 내용을 수정할 수 있습니다.
                                    </p>
                                </h2>
                            </div>

                            <div className="docs-box">
                                <p className="explanation">
                                    박스 안의 내용을 수정한 후 수정 버튼을
                                    누르세요.
                                </p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <h1 className="headline">내용증명</h1>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <p className="sender">
                                    <strong>발신인</strong>
                                </p>
                                <p className="sender">
                                    이름 :{" "}
                                    <Input
                                        className="d_name"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_name"
                                        value={sender.sender_name}
                                        onChange={sender_change8}
                                    />
                                </p>
                                <p className="sender">
                                    주소 :{" "}
                                    <Input
                                        className="address"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_address"
                                        value={sender.sender_address}
                                        onChange={sender_change8}
                                    />
                                </p>
                                <p className="sender">
                                    전화번호 :{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_phone"
                                        value={sender.sender_phone}
                                        onChange={sender_change8}
                                    />
                                </p>
                                <p>&nbsp;</p>
                                <p className="recipient">
                                    <strong>수신인</strong>
                                </p>
                                <p className="recipient">
                                    이름 :{" "}
                                    <Input
                                        className="d_name"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="recipient_name"
                                        value={recipient.recipient_name}
                                        onChange={recipient_change8}
                                    />
                                </p>
                                <p className="recipient">
                                    주소 :{" "}
                                    <Input
                                        className="address"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="recipient_address"
                                        value={recipient.recipient_address}
                                        onChange={recipient_change8}
                                    />
                                </p>
                                <p className="recipient">
                                    전화번호 :{" "}
                                    <Input
                                        className="d_phone"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="recipient_phone"
                                        value={recipient.recipient_phone}
                                        onChange={recipient_change8}
                                    />
                                </p>
                                <p>&nbsp;</p>
                                <p className="title">
                                    제목 : 법원의 판결 내용 대한 발신인의
                                    불이행에 관한 조치 통보
                                </p>

                                <hr></hr>
                                <p className="content">
                                    1. 귀하(수신인, 이하 '귀하'이라 한다)의
                                    무궁한 발전을 기원합니다.
                                </p>
                                <p className="content">
                                    2. 귀하는{" "}
                                    <Input
                                        className="d_day"
                                        size="small"
                                        color="success"
                                        name="event_day"
                                        value={contents.event_day}
                                        onChange={contents_change8}
                                    />
                                    자로{" "}
                                    <Input
                                        className="textarea"
                                        size="small"
                                        color="success"
                                        name="event_name"
                                        value={contents.event_name}
                                        onChange={contents_change8}
                                    />{" "}
                                    판결을 선고 받았는바, 이에 따라 본
                                    발신인에게 아래와 같은 판결문 내용과 같이
                                    의무 사항을 지켜야 합니다.
                                </p>
                                <p className="content2">(판결문 내용)</p>
                                <p className="content2">
                                    -{" "}
                                    <Input
                                        className="textarea"
                                        size="small"
                                        color="success"
                                        name="event_content"
                                        value={contents.event_content}
                                        onChange={contents_change8}
                                    />
                                </p>
                                <p className="content">
                                    3. 그러나 귀하는 위와 같은 법원의 판결에도
                                    불구하고 아래와 같이 위 판결에서 정한 의무를
                                    위반하고 있습니다.
                                </p>
                                <p className="content2">
                                    (법원 판결 중 구체적 위반 내용)
                                </p>
                                <p className="content2">
                                    -{" "}
                                    <Input
                                        className="textarea"
                                        size="small"
                                        color="success"
                                        name="event_content"
                                        value={contents.event_content}
                                        onChange={contents_change8}
                                    />
                                </p>
                                <p className="content">
                                    4. 또한 본 발신인은 귀하에게 법원이 귀하에게
                                    위 '2' 기재와 같이 부여한 의무사항을 철저히
                                    이행하여 더이상 추가로 귀하가 본 발신인에게
                                    위 '3'기재와 같은 의무 불이행의 사태가
                                    발생하지 않도록 해 주시길 강력히 요청합니다.
                                </p>
                                <p className="content">
                                    5. 본 발신인이 귀하에게 법적 조치를 취하기
                                    전에 귀하는 본 내용증명을 고려하여 귀하가 본
                                    건을 원만하게 해결하시기를 마지막으로
                                    말씀드립니다.
                                </p>
                                <p>&nbsp;</p>
                                <p className="today">
                                    <strong>{dateString}</strong>
                                </p>
                                <p className="bottom1">&nbsp;</p>
                                <p className="bottom2">
                                    <strong>위 발신인</strong>
                                </p>
                                <p className="sign">
                                    <Input
                                        className="s_name"
                                        size="small"
                                        color="success"
                                        type="text"
                                        name="sender_name"
                                        value={sender.sender_name}
                                        onChange={sender_change8}
                                    />{" "}
                                    (인)
                                </p>
                            </div>

                            <ThemeProvider theme={theme}>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    justifyContent="center"
                                >
                                    <Button
                                        onClick={confirmUpdate}
                                        size="large"
                                        color="black"
                                        variant="contained"
                                    >
                                        수정
                                    </Button>
                                    <Button
                                        onClick={backToMydocs}
                                        size="large"
                                        color="black"
                                        variant="contained"
                                    >
                                        취소
                                    </Button>
                                </Stack>
                            </ThemeProvider>
                        </div>
                    </section>
                </main>
            </body>
        );
    }
}
