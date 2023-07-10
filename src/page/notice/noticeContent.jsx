import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// 검정색 테마
const theme = createTheme({
    palette: {
        black: {
        main: "#000000",
        contrastText: "#fff"
        }
    }
});

export default function NoticeContent () {
    const { idx } = useParams();

    // noticeContent
    const [noticeContent, setNoticeContent] = useState(null);

    // user-id
    const [userId, setUserId] = useState(null); 

    // board-list
    const [writer, setWriter] = useState([]); 


    const fetchUserId = async (url) => {
        try {
          const response = await axios.post(url, {
            'token': localStorage.getItem('accessToken'),
          });
          setUserId(response.data.user_id);
        } catch (error) {
          console.error('Failed to fetch user ID:', error);
        }
    };
    

    const fetchNoticeContent = async (index) => {
        const accessToken = localStorage.getItem('accessToken');

        try {
        const response = await axios.get(
            `http://127.0.0.1:8000/board/id/${idx}/`,{
            headers: {
                    Authorization: `Bearer ${accessToken}`,
                    },
        });
        console.log(response.data);
        setNoticeContent(response.data);
        } catch (error) {
            console.error('Failed to get notice Content:', error);
            alert('로그인이 필요한 서비스입니다.');
            window.location.href = '/notice';
          }
    };

    const fetchBoardList = async (url) => {
      try {
        const response = await axios.get(url);
        console.log("내용",response.data.results);
        setWriter(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
        fetchUserId('http://127.0.0.1:8000/accounts/authVerify/');
        fetchBoardList('http://127.0.0.1:8000/board/');
        fetchNoticeContent();
    }, []);
  
  
    return (
        <body className="d-flex flex-column h-100">
          <main className="flex-shrink-0">
            <section className="get-started section-bg">
              <div className="container">
                <h2 className="display-5 fw-bolder" style={{ marginBottom: '50px' }}>
                  <span className="text-gradient d-inline">Board</span>
                  <p className='notice-text'>LawABLE의 게시글을 확인해보세요.</p>
                </h2>
    
                <Table className='noticeContent'>
                    <TableBody>
                        {noticeContent && (
                        <TableRow key={noticeContent.id} className='contentColumn'>
                            <TableCell className='th-num'>번호</TableCell>
                            <TableCell>{noticeContent.id}</TableCell>
                        </TableRow>
                        )}
                        {noticeContent && (
                        <TableRow key={noticeContent.id} className='contentColumn'>
                            <TableCell className='th-title'>제목</TableCell>
                            <TableCell>{noticeContent.title}</TableCell>
                        </TableRow>
                        )}
                        {noticeContent && (
                        <TableRow key={noticeContent.id} className='contentColumn'>
                            <TableCell className='th-writer'>작성자</TableCell>
                            <TableCell>{noticeContent.user.email}</TableCell>
                        </TableRow>
                        )}
                        {noticeContent && (
                        <TableRow key={noticeContent.id} className='contentColumn'>
                            <TableCell className='th-date'>작성일</TableCell>
                            <TableCell>{noticeContent.created_at.substr(0, 10)}</TableCell>
                        </TableRow>
                        )}
                        {noticeContent && (
                        <TableRow key={noticeContent.id} className='contentColumn'>
                            <TableCell className='th-content'>내용</TableCell>
                            <TableCell>{noticeContent.content}</TableCell>
                        </TableRow>
                        )}
                    </TableBody>
                </Table>
                
                <div className='btn_tonotice'>
                  <ThemeProvider theme={theme}> 
                    <Button size='medium' href='/notice'
                            color='black' variant='contained'>목록</Button>
                  </ThemeProvider>
                </div>
                <div>
                </div>
              </div>
            </section>
          </main>
        </body>
    );
}