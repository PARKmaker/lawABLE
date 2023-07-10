import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MuiLink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { ClassNames } from '@emotion/react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./Register.css";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        LawABLE
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  // 검정색 테마
  const theme = createTheme({
    palette: {
      black: {
        main: "#000000",
        contrastText: "#fff"
      }
    }
  });

  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password1, setPassword1] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [checkBoxActive, setCheckBoxActive] = React.useState(false);
  const [checkBoxActive2, setCheckBoxActive2] = React.useState(false);


  // 유효성 검사
  const isValidEmail = email.includes('@') && email.includes('.');
  const specialLetter = password1.search(/[!+/`~=@#$%^&*()]/gi);
  const isValidPassword = password1.length >= 8 && specialLetter >= 1;
  const isCheckBoxClicked = () => {
    setCheckBoxActive(!checkBoxActive);
  };
  const isCheckBoxClicked2 = () => {
    setCheckBoxActive2(!checkBoxActive2);
  };
  const PasswordCheck = password1 === password2;
  
  
  const isValidInput = email.length >= 1 && name.length >= 1 &&  phone.length >= 1 &&
                       password1.length >= 1 && password2.length >= 1 ; // 한글자 이상 입력해야함

  const getIsActive = isValidInput &&  checkBoxActive && checkBoxActive2  === true;

  const handleButtonValid = () => {
    if ( !isValidEmail ) { alert('이메일 주소 형식이 틀립니다.'); }
    else if ( !isValidPassword ) { alert('비밀번호는 8자리 이상이며 영문, 숫자, 특수문자를 포함해야 합니다.'); }
    else if ( !PasswordCheck ) { alert('비밀번호와 재확인 비밀번호가 다릅니다.'); }
    else { alert('회원가입 되었습니다.'); } 
    };
  
  const handleCheck = () => {
    if (isValidPassword && PasswordCheck) {
      register();
    }
    else{ alert('비밀번호를 다시 설정해주세요.'); } 
  }
  // axios 통신
  const register = () => {

   axios.post("http://127.0.0.1:8000/accounts/dj-rest-auth/registration/", 
   {
    email: email,
    password1: password1,
    password2: password2,
    name: name,
    phone: phone,
   })
   .then((response) => {
        console.log('Well done!');
        console.log('User profile', response.data.user);

        axios
            .post("http://127.0.0.1:8000/accounts/dj-rest-auth/login/", {
                email: email,
                password: password2,
            })
            .then((response) => {
                console.log("login success");
                console.log("User profile", response.data.user);

                // 로그인 성공
                localStorage.setItem('refreshToken',  response.data.refresh); 
                localStorage.setItem('accessToken',  response.data.access);

                localStorage.setItem('userEmail', response.data.user.email);

                navigate("/");
                window.location.reload();
            })
            .catch((error) => {
                console.log("An error occurred(login)", error.response);
            });
    })
   .catch((error) => {
    console.log('An error occurred(register)', error.response);
});


}
  return (
    <div className="bg-light rounded-4 py-5 px-4 px-md-5">
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <AccountCircleIcon className="icon" fontSize='large'/>
          

          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="이메일"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(event)=>{
                    setEmail(event.target.value);
                  }}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password1"
                  label="비밀번호(8자 이상의 영문, 숫자, 특수기호)"
                  type="password"
                  id="password1"
                  autoComplete="new-password"
                  value={password1}
                  onChange={(event)=>{
                    setPassword1(event.target.value);}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password2"
                  label="비밀번호 재확인"
                  type="password"
                  id="password2"
                  autoComplete="new-password"
                  value={password2}
                  onChange={
                    (event)=>{
                    setPassword2(event.target.value);}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="name"
                  label="이름"
                  type="text"
                  id="name"
                  autoComplete="name"
                  value={name}
                  onChange={(event)=>{
                    setName(event.target.value);}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="전화번호(- 없이 입력)"
                  type="phone"
                  id="phone"
                  autoComplete="phone"
                  value={phone}
                  onChange={(event)=>{
                    setPhone(event.target.value);}}
                />
              </Grid>
              <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" onClick={isCheckBoxClicked}/>}
                    label="(필수) 서비스 이용 약관 동의"
                  />
                  <Link to='/use'>
                    <ArrowForwardIosIcon />
                  </Link>

                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" onClick={isCheckBoxClicked2}/>}
                    label="(필수) 개인 정보 수집 동의"
                  />
                  <Link to='/personal'>
                    <ArrowForwardIosIcon />
                  </Link>
              </Grid>
            </Grid>
            <ThemeProvider theme={theme}>
            
            <Button
              type="submit"
              fullWidth
              color="black" 
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!getIsActive}
              onClick={()=>{ handleButtonValid(); handleCheck(); }}
            >
              회원가입
            </Button>
            </ThemeProvider>

            <Link to="/login">이미 계정이 있으신가요?</Link>
            
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}