import React, { Component, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import EditIcon from '@mui/icons-material/Edit';
import DownloadingIcon from '@mui/icons-material/Downloading';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DeleteIcon from '@mui/icons-material/Delete';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';



import './MyDocs.css';

var fileDownload = require('js-file-download');

export default function MyDocs() {
  const [docsList, setDocsList] = useState([]);

  // page
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [page, setPage] = useState(1);

  
  // user-id
  const [userId, setUserId] = useState(null);

  const fetchUserId = async (url) => {
    axios.post(url, {
      'token': localStorage.getItem('accessToken'),})
      .then((response) => 
      {
        setUserId(response.data.user_id);
    }) .catch((error) => {
      console.log("An error occurred", error);
  });
  };

  // docs-list
  const fetchDocsList = async (url) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const docs = response.data.results;
      setDocsList(docs);
      setNextPage(response.data.next);
      setPreviousPage(response.data.previous);
  
      const recipientNames = await Promise.all(
        docs.map(async (doc) => {
          try {
            const docId = doc.id;
            const userId = localStorage.getItem('userID');
            const recipientResponse = await axios.get(`http://127.0.0.1:8000/doc/id/${docId}/?user_id=${userId}`, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
            return recipientResponse.data.recipient.recipient_name;
          } catch (error) {
            console.error('Failed to fetch recipient:', error);
            return '';
          }
        })
      );
  
      const updatedDocs = docs.map((doc, index) => ({
        ...doc,
        recipientName: recipientNames[index],
      }));
  
      setDocsList(updatedDocs);
    } catch (error) {
      console.error('Failed to fetch Doc-list: ', error);
    }
  };
  

  useEffect(() => {
    fetchUserId('http://127.0.0.1:8000/accounts/authVerify/');
    fetchDocsList('http://127.0.0.1:8000/doc/user/');
  }, []);


  const handleNextPage = () => {
    fetchDocsList(nextPage);
    setPage(page + 1);
  };
  
  const handlePreviousPage = () => {
    fetchDocsList(previousPage);
    setPage(page -1);
  };
  

  const handleDeleteDoc = async (index) => {
    const confirmDelete = window.confirm(
      '삭제하시겠습니까? 삭제된 내용은 다시 볼 수 없습니다.'
    );

    // const docId = docsList[index].id;
    // const accessToken = localStorage.getItem('accessToken');

    if (confirmDelete) {
      const docId = docsList[index].id;
      const accessToken = localStorage.getItem('accessToken');
      try {
        const response = await axios.delete(
          `http://127.0.0.1:8000/doc/id/${docId}/`,{
            headers: {
                    Authorization: `Bearer ${accessToken}`,
                  },
        })
        // .then((response) => {
        //   console.log(response);
        //   setDocsList((prevList) => {
        //     return prevList.map((doc) => {
        //       if(doc.id === docId) {
        //         return {
        //           ...doc,
        //           deleted_at: response.data.deleted_at,
        //         };
        //       }
        //       return doc;
        //     });
        //   });
        // });
      alert('삭제되었습니다.');
      window.location.reload();
      } catch (error) {
        console.error('Failed to delete document:', error);
      }
    }
  };

  const handleOpenPDFDoc = (id, title) => {
    window.location.href = `/viewpdf/${id}/${title}`;
  };

  const handlePDFDownLoadDoc = (index) => {
    const doc = docsList[index];
    const accessToken = localStorage.getItem('accessToken');
    // const userPK = localStorage.getItem('userID');
    const filePath = `http://127.0.0.1:8000/doc/pdf/${doc.id}/`;

    axios.get(filePath, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, 'filename.pdf');
    })
    .catch((err) => {
      console.log(err);
    });
  };


  return (
    <body className="d-flex flex-column h-100">
      <main className="flex-shrink-0">
        <section className="get-started section-bg">
          <div className="container">
            <div className="row justify-content-between gy-4">
              <h2 className="display-5 fw-bolder" style={{ marginBottom: '50px' }}>
                <span className="text-gradient d-inline">My Docs</span>
                <p className='notice-text'>LawABLE에서 자신이 만든 법률 서류를 확인할 수 있습니다.</p></h2>
            </div>
            {/* 리스트가 들어갈 자리 */}
            {docsList.map((doc, index) => (
                  <div key={index} className="doclist-item">
                    <p className='doclist-date'>{doc.updated_at.slice(0, 10)}</p>
                    <p className='doclist-title'>{doc.title}</p>
                    <p className='doclist-recipient'>수신 : {doc.recipientName}</p>
                    {/* <p>{index + 1}</p> */}
                    <div className='button-container'>
                      <Tooltip title="Edit">
                        <IconButton component={Link} to={`/update_docs/${docsList[index].id}`}>
                      <EditIcon  />
                      </IconButton>
                      </Tooltip>
                      <Tooltip title="Download">
                        <IconButton>
                          <DownloadingIcon onClick={() => handlePDFDownLoadDoc(index)} />
                        </IconButton>
                      </Tooltip>
                      {/* <Tooltip title="PDF">
                        <IconButton>
                          <PictureAsPdfIcon onClick={() => handleOpenPDFDoc(doc.id, doc.title)} />
                        </IconButton>
                      </Tooltip> */}
                      <Tooltip title="Delete">
                        <IconButton>
                          <DeleteIcon onClick={() => handleDeleteDoc(index)} />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </div>
                ))}

                <div className='page-num'>
                <button className='btn-page' onClick={handlePreviousPage} disabled={!previousPage}>
                <ChevronLeftIcon/>
                </button>
                {page}
                <button className='btn-page' onClick={handleNextPage} disabled={!nextPage} >
                  <ChevronRightIcon/>
                </button>
                </div>        
          </div>
        </section>
      </main>
    </body>
  );
}