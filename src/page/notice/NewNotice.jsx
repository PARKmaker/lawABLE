import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { TextField, TextareaAutosize  } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import "./Notice.css";

// 검정색 테마
const theme = createTheme({
  palette: {
    black: {
      main: "#000000",
      contrastText: "#fff"
    }
  }
});

const NewNotice = () => {
  const [boardList, setBoardList] = useState([]); 
  // page
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [page, setPage] = useState(1);
  // new notice
  const [newBoard, setNewBoard] = useState({
    user: null,
    title: '',
    content: ''
  });
  // user-id
  const [userId, setUserId] = useState(null); 

  const fetchUserId = async (url) => {
    try {
      const response = await axios.post(url, {
        'token': localStorage.getItem('accessToken'),
      });
      setUserId(response.data.user_id);
      setNewBoard({
        user: response.data.user_id,
        title: '',
        content: ''
      });
    } catch (error) {
      console.error('Failed to fetch user ID:', error);
    }
  };

  const fetchBoardList = async (url) => {
    try {
      const response = await axios.get(url);
      setBoardList(response.data.results);
      setNextPage(response.data.next);
      setPreviousPage(response.data.previous);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserId('http://127.0.0.1:8000/accounts/authVerify/');
    fetchBoardList('http://127.0.0.1:8000/board/');
    setNewBoard({
      user: userId,
      title: '',
      content: ''
    })
  }, []);

  const filteredEmail = (email) => {
    const domain = email.split('@')[0];
    const hiddenPart = domain.slice(0, 2).padEnd(domain.length, '*');
    return email.replace(domain, hiddenPart);
  };

  const handleNextPage = () => {
    fetchBoardList(nextPage);
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    fetchBoardList(previousPage);
    setPage(page -1);
  };

  // new notice
  const handleInputChange = (event) => {
    setNewBoard({
      ...newBoard,
      [event.target.name]: event.target.value
    });
  };
  const handleCreateBoard = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/board/create/', newBoard);
      console.log(response.data);
      setNewBoard({
        user: userId,
        title: '',
        content: ''
      });
      fetchBoardList('http://127.0.0.1:8000/board/');
    } catch (error) {
      console.error(error);
    }
  };

    return (
    <body className="d-flex flex-column h-100">
      <main className="flex-shrink-0">
        <section className="get-started section-bg">
            <div className="container">
                <h2 className="display-5 fw-bolder" style={{ marginBottom: '50px' }}>
                    <p className="text-gradient d-inline">게시글 등록하기</p>
                    <p className='notice-text'>게시글을 작성해보세요.</p>
                </h2>
                {/* <input
                type="text"
                name="user"
                value={userId}
                onChange={handleInputChange}
                /> */}
                <div className='board-write'>
                <div className='bw-title'>
                <TextField id="standard-basic" 
                    label="제목 입력" 
                    variant="filled"
                    className='create-title'
                    color='success'
                    type="text"
                    name="title"
                    value={newBoard.title}
                    onChange={handleInputChange}
                    />
                </div>
                <div className='bw-content'>
                <TextField id="standard-basic" 
                    label="내용 입력" 
                    variant="filled" 
                    color="success" 
                    className='create-content' 
                    multiline 
                    rows={9}
                    type="text"
                    name="content"
                    value={newBoard.content}
                    onChange={handleInputChange}
                    />
                </div>
                <div className='bw-btn'>
                  <ThemeProvider theme={theme}> 
                    <Stack direction="row" spacing={2} justifyContent="center">
                      <Button className='create-btn' onClick={handleCreateBoard} size='medium' href='/Notice'
                            color='black' variant='contained'>등록</Button>
                      <Button className='create-btn' size='medium' href='/Notice'
                            color='black' variant='contained'>취소</Button>
                    </Stack>
                  </ThemeProvider>
                </div>
            </div>
            </div>
            </section>
        </main>
    </body>
    );
}

export default NewNotice;