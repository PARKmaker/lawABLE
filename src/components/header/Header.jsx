import * as React from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';


import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';

import './Header.css';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Nav({ isLoggedIn, userEmail }) {
  const navigate = useNavigate();
  const logout = () => {
    axios
        .post("http://127.0.0.1:8000/accounts/dj-rest-auth/logout/", {
        })
        .then((response) => {
            console.log("logout success");
            // console.log('userEmail', userEmail)

            localStorage.removeItem('refreshToken');
            localStorage.removeItem('accessToken');
            localStorage.removeItem('userEmail');

            navigate("/");
            window.location.reload();
        })
        .catch((error) => {
            console.log("An error occurred", error.response);
        });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const shortEmail = (email) => {
    const name = email.split('@')[0];
    return email.replace(email, name);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        // sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap', backgroundColor:'white' }}>
          <Typography 
            component={Link}
            to='/'
            className='Logo' 
            variant="h6" 
            color="text.primary" 
            fontWeight='bold'
            noWrap 
            sx={{ flexGrow: 1, textDecoration:'none', fontWeight:'900'}}
          >
            LawABLE<span>.</span>
          </Typography>
          <nav>
            <MuiLink
              component={Link}
              variant="button"
              color="text.primary"
              to='/chat'
              sx={{ my: 1, mx: 1.5, textDecoration:'none', fontWeight:'600' }} 
            >
              Chat
            </MuiLink>
            <MuiLink
              component={Link}
              variant="button"
              color="text.primary"
              to='/write'
              sx={{ my: 1, mx: 1.5, textDecoration:'none', fontWeight:'600' }}
            >
              Write
            </MuiLink>
            <MuiLink
              component={Link}
              variant="button"
              color="text.primary"
              to='/notice'
              sx={{ my: 1, mx: 1.5, textDecoration:'none', fontWeight:'600' }}
            >
              Board
            </MuiLink>
            <MuiLink
              component={Link}
              variant="button"
              color="text.primary"
              to='/faq'
              sx={{ my: 1, mx: 1.5, textDecoration:'none', fontWeight:'600', marginRight:'20px' }}
            >
              FAQ
            </MuiLink>
            
            {isLoggedIn ? (
          <>
            <MuiLink style={{color:'#A0C49D', fontSize:'13px', textDecoration:'none'}}>
              {shortEmail(userEmail)}
            </MuiLink>
            <Tooltip title="Account">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 0.5 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>U</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem 
                onClick={handleClose}
                component={Link}
                variant="button"
                color="text.primary"
                to='/mydocs'>
                <ListItemIcon>
                  <ContentPasteIcon fontSize="small" />
                </ListItemIcon>
                MY DOCS
              </MenuItem>
              <Divider />
              <MenuItem 
                component={Link}
                variant="button"
                color="text.primary"
                to='/'
                onClick={() => {
                  handleClose();
                  logout();
                }}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                LOGOUT
              </MenuItem>
            </Menu>
            </>
        ) : (
            <>
            <MuiLink
            component={Link}
            variant="button"
            color="text.primary"
            to='/login'
            sx={{ my: 1, mx: 1.5, textDecoration:'none', fontWeight:'600', marginRight:'5px'}}
          >
            LOGIN 
          </MuiLink>
        |
            <MuiLink
              component={Link}
              variant="button"
              color="text.primary"
              to='/register'
              sx={{ my: 1, mx: 1.5, textDecoration:'none', fontWeight:'600', marginLeft:'5px'}}
            >
              JOIN
            </MuiLink>
            </>
        )}
          </nav>
          {/* <Button href='/login' variant="outlined" sx={{ my: 1, mx: 1.5, color:'black', borderColor:'black' }}>
            Login
          </Button>
          <Button href='/mypage' variant="outlined" sx={{ my: 1, mx: 1.5, color:'black', borderColor:'black' }}>
            MyPage
          </Button> */}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}