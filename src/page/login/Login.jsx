import Kakao from "./kakao.jsx";
import Naver from "./naver.jsx";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MuiLink from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Login.css";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
            LawABLE
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const theme = createTheme({
    palette: {
      black: {
        main: "#000000",
        contrastText: "#fff"
      }
    }
  });

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    const isValidInput = email.length >= 1 && password.length >= 1 ; // 한글자 이상 입력해야함
    const getIsActive = isValidInput === true;

    const login = () => {
        axios
            .post("http://127.0.0.1:8000/accounts/dj-rest-auth/login/", {
                email: email,
                password: password,
            })
            .then((response) => {
                // console.log("User profile", response.data.user);
                // console.log("User token", response.data.jwt);

                // 로그인 성공
                localStorage.setItem('refreshToken',  response.data.refresh); 
                localStorage.setItem('accessToken',  response.data.access);

                localStorage.setItem('userEmail', response.data.user.email);

                navigate("/");
                window.location.reload();

            })
            .catch((error) => {
                console.log("An error occurred", error.response);
                alert('아이디 또는 비밀번호를 다시 한번 확인해주세요.');
            });
    };

    return (
            <div className="bg-light rounded-4 py-5 px-4 px-md-5">
            <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
            <Box className="loginbox">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "black" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        LawABLE
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="이메일"
                            name="email"
                            autoComplete="email" // 사용자가 이전에 입력했던 값 자동완성
                            autoFocus
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="비밀번호"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                        />
                        <ThemeProvider theme={theme}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="black" 
                            disabled={!getIsActive}
                            sx={{ mt: 2, mb:3 }}
                            onClick={() => { login(); }}
                        >
                            로그인
                        </Button>
                       
                        
                        {/* <div className="social">소셜 로그인</div>
                        <div><hr className='line'></hr></div>

                        <div className="socialbutton">
                            <Naver></Naver>
                            <Kakao></Kakao>
                        </div> */}

                        <Link to="/register">
                         계정이 없으신가요?
                        </Link>
                        </ThemeProvider>
                        </Box>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
        </div>
    );
}
