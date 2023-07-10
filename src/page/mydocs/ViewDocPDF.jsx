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

export default function ViewDocPDF() {
    const url = window.location.href;
    const segments = url.split('/');
    const docId = segments[segments.length - 2];
    // const docTitle = decodeURIComponent(segments[segments.length - 1]);

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


    // doc-list
    const [doclist, setDocList] = useState([]);
    const [doc, setDoc] = useState([]);

    const fetchDocsList = async (url) => {
    try {
        const fetchDocID = docId;
        const accessToken = localStorage.getItem('accessToken');
        const response = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        });
        const docs = response.data.results;
        console.log(docs);
        console.log(fetchDocID);

        // Find the document with matching fetchDocID
        const matchingDoc = docs.find((doc) => doc.id === fetchDocID);
        if (matchingDoc) {
        console.log(matchingDoc);
        setDoc(matchingDoc); // If you want to update the 'doc' state with the matching document
        } else {
        console.log(`No document found with ID: ${fetchDocID}`);
        }

        // setDocsList(docs);
    } catch (error) {
        console.error('Failed to fetch Doc-list: ', error);
    }
    };


    
    //get-doc
    // const [doc, setDoc] = useState([]);

    // const fetchDoc = async () => {
    //     try {
    //         const fetchdocId = docId;
    //         const accessToken = localStorage.getItem('accessToken');
    //         const response = await axios.patch(`http://127.0.0.1:8000/doc/id/${fetchdocId}/`,
    //             {
    //             headers: {
    //             Authorization: `Bearer ${accessToken}`,
    //             },
    //         });
    //     } 
    //         catch (error) {
    //         console.error('pdf 불러오기에 실패했습니다.:', error);
    //     }
    // };

    // get pdf
    const [filepath, setFilePath] = useState([]);
    const [doctitle, setDocTitle]= useState([]);

    // const fetchPDFDoc = () => {
    //     const docID = docId;
    //     const doc = docsList[docID];

    //     const accessToken = localStorage.getItem('accessToken');

    //     // console.log(doc);
    //     const filePath = `http://127.0.0.1:8000/${doc.file_path}/`;

    //     axios.get(filePath, {
    //         headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //         },
    //         responseType: 'blob',
    //     })
    //     .then((res) => {
    //     fileDownload(res.data, 'filename.pdf');
    //     })
    //     .catch((err) => {
    //     console.log(err);
    //     });

        
    //     setFilePath(filePath);
    //     setDocTitle(doc.title);

    //     axios.get(filePath, {
    //         headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //         },
    //         responseType: 'blob',
    //     })
    //     .then((res) => {
    //     fileDownload(res.data, 'filename.pdf');
    //     })
    //     .catch((err) => {
    //     console.log(err);
    //     });
    // };

    useEffect(() => {
        fetchUserId('http://127.0.0.1:8000/accounts/authVerify/');
        fetchDocsList('http://127.0.0.1:8000/doc/user/');
        // fetchPDFDoc();
      }, []);


  return (
    <body className="d-flex flex-column h-100">
      <main className="flex-shrink-0">
        <section className="get-started section-bg">
          <div className="container">
            <div className="row justify-content-between gy-4">
              <h2 className="display-5 fw-bolder" style={{ marginBottom: '50px' }}>
                <span className="text-gradient d-inline">{doctitle}</span>
                <p className='notice-text'>LawABLE에서 자신이 만든 법률 서류를 확인할 수 있습니다.</p></h2>
            </div>
            <iframe src ={filepath} width="100%" height="700px"/>
          </div>
        </section>
      </main>
    </body>
  );
}