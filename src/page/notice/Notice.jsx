import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useHistory  } from 'react-router-dom';

import Button from '@mui/material/Button';
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

const Notice = () => {
  const [boardList, setBoardList] = useState([]); 

  // page
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [page, setPage] = useState(1);

  // user-id
  const [userId, setUserId] = useState(null); 

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

  const fetchBoardList = async (url) => {
    try {
      const response = await axios.get(url);
      console.log("내용",response.data);
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
  }, []);

  const filteredEmail = (email) => {
    const name = email.split('@')[0];
    const hiddenName = name.slice(0, 2).padEnd(name.length, '*');
    return email.replace(email, hiddenName);
  };

  const filteredContent = (n, content) => {
    let contentPart = content;
    if (content.length > n) contentPart = content.slice(0, n) + "...";
    return content.replace(content, contentPart);
  };

  const handleNextPage = () => {
    fetchBoardList(nextPage);
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    fetchBoardList(previousPage);
    setPage(page -1);
  };

  const handleBoardClick = (boardId) => {
    window.location.href = `/noticeContent/${boardId}`;
  };

    return (
    <body className="d-flex flex-column h-100">
      <main className="flex-shrink-0">
        <section className="get-started section-bg">
          <div className="container">
            <h2 className="display-5 fw-bolder" style={{ marginBottom: '50px' }}>
              <span className="text-gradient d-inline">Board</span>
              <p className='notice-text'>LawABLE의 게시글을 확인해보세요.</p>
            </h2>

            <div style={{backgroundColor:'white', borderRadius:'10px'}}>
              <div className='btn_tonewnotice'>
                <ThemeProvider theme={theme}> 
                  <Button className='create-btn' size='medium' href='/NewNotice'
                          color='black' variant='contained'>게시글 작성</Button>
                </ThemeProvider>
              </div>

              <div style={{padding:'40px'}}>
                <table className='table'>
                  <thead className='table-head'>
                    <tr>
                      <th className='th-num'>번호</th>
                      <th className='th-writer'>작성자</th>
                      <th className='th-title'>제목</th>
                      <th className='th-content'>내용</th>
                      <th className='th-date'>작성일</th>
                    </tr>
                  </thead>
                
                  <tbody className='table-body'>
                  {boardList.map((board) => (
                    <tr 
                      key={board.id} 
                      className='board-list'
                      onClick={() => handleBoardClick(board.id)}
                    > 
                      <td className='board-id'>{board.id}</td>
                      <td className='board-userEmail'>{filteredEmail(board.user.email)}</td>
                      <td className='board-title'>
                        {/* <Link to={`/noticeContent/${board.id}`}> */}
                          {filteredContent(15, board.title)}
                        {/* </Link> */}
                      </td>
                      <td className='board-content'>{filteredContent(18, board.content)}</td>
                      <td className='board-date'>{board.created_at.substr(0, 10)}</td>
                      {/* <TableCell>{new Date().toLocaleString()}</TableCell> */}
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
          </div>

          <div className='page-num'>
            <button className='btn-page' onClick={handlePreviousPage} disabled={!previousPage}>
            <ChevronLeftIcon/>
            </button>
            {page}
            <button className='btn-page' onClick={handleNextPage} disabled={!nextPage} >
              <ChevronRightIcon/>
            </button>
          </div>
        <div>
         

      </div>
      
      </div>
      </section>
      </main>
      </body>
    );
}

export default Notice;