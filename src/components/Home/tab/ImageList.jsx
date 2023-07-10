import * as React from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

import './ImageList.css';



function ImageWithCaption({ src, alt, caption, id, clickHandler, closeHandler }) {
    return (
      <div className='docex-img-container'>
        <img
          className='docex-img2'
          src={src}
          alt={alt}
          id={id}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
          }}
          onClick={clickHandler}
          style={{height:'80%', width:'90%'}}
        />
        <div className='docex-img-caption'>{caption}</div>
      </div>
    );
}
  
export default function ImageList() {
  // "enlarge"라는 state를 만들어 누른 이미지의 id를 저장
  const [enlarge, setEnlarge] = useState("");

  // 이미지를 클릭했을 때 enlarge state 업데이트
  const clickHandler = (e) => {
    setEnlarge(e.target.id);
  }

  // x 버튼을 클릭했을 때 enlarge state 초기화
  const closeHandler = () => {
    setEnlarge("");
  }
  
  return (
    <div>
      <div className='wholeimg'>
        {/* 내용증명 */}
        <ul>
            <li>
                <h2 className="display-5 fw-bolder">
                    <span className="text-gradient" style={{fontSize:'1.7rem', marginTop:'2rem'}}>
                        내용증명
                    </span>
                </h2>
                <div 
                    className='docex-img-list2'
                    data-aos="fade-up"
                >
                    <ImageWithCaption
                    src="/img/doc_ex1.png"
                    alt="image1"
                    id="image1"
                    caption="계약이행 청구"
                    enlarge={enlarge}
                    clickHandler={clickHandler}
                    closeHandler={closeHandler}
                    />
                    <ImageWithCaption
                    src="/img/doc_ex2.png"
                    alt="image2"
                    id="image2"
                    caption="매매대금 지급 청구"
                    enlarge={enlarge}
                    clickHandler={clickHandler}
                    closeHandler={closeHandler}
                    />
                    <ImageWithCaption
                    src="/img/doc_ex5.png"
                    alt="image3"
                    id="image3"
                    caption="손해배상 통보"
                    enlarge={enlarge}
                    clickHandler={clickHandler}
                    closeHandler={closeHandler}
                    />
                    <ImageWithCaption
                    src="/img/doc_ex6.png"
                    alt="image4"
                    id="image4"
                    caption="용역대금 지급 청구"
                    enlarge={enlarge}
                    clickHandler={clickHandler}
                    closeHandler={closeHandler}
                    />
                </div>
                {enlarge === 'image1' && (
                    <div id='overlay'>
                    <span className='close' onClick={closeHandler}>
                        &times;
                    </span>
                    <img
                        src="/img/doc_ex1.png"
                        alt='image1'
                        className='enlarge'
                    />
                    </div>
                )}
                {enlarge === 'image2' && (
                    <div id='overlay'>
                    <span className='close' onClick={closeHandler}>
                        &times;
                    </span>
                    <img
                        src="/img/doc_ex2.png"
                        alt='image2'
                        className='enlarge'
                    />
                    </div>
                )}
                {enlarge === 'image3' && (
                    <div id='overlay'>
                    <span className='close' onClick={closeHandler}>
                        &times;
                    </span>
                    <img
                        src="/img/doc_ex5.png"
                        alt='image3'
                        className='enlarge'
                    />
                    </div>
                )}
                {enlarge === 'image4' && (
                    <div id='overlay'>
                    <span className='close' onClick={closeHandler}>
                        &times;
                    </span>
                    <img
                        src="/img/doc_ex6.png"
                        alt='image4'
                        className='enlarge'
                    />
                    </div>
                )}

            </li>
        </ul>
        <hr style={{width:'95%', textAlign:'center', margin:'auto'}}/>
       {/* 소송 */}
       <ul>
            <li>
                <h2 className="display-5 fw-bolder" style={{ marginTop:'2rem'}}>
                    <span className="text-gradient" style={{fontSize:'1.7rem'}}>
                        소송
                    </span>
                </h2>
                <div 
                    className='docex-img-list2'
                    data-aos="fade-up"
                >
                    <ImageWithCaption
                    src="/img/doe_ex22_1.png"
                    alt="image5"
                    id="image5"
                    caption="고소장-모욕죄"
                    enlarge={enlarge}
                    clickHandler={clickHandler}
                    closeHandler={closeHandler}
                    />
                    <ImageWithCaption
                    src="/img/doe_ex22_2.png"
                    alt="image6"
                    id="image6"
                    caption="고소장-모욕죄"
                    enlarge={enlarge}
                    clickHandler={clickHandler}
                    closeHandler={closeHandler}
                    />
                    <ImageWithCaption
                    src="/img/doe_ex23_1.png"
                    alt="image7"
                    id="image7"
                    caption="고소장-명예훼손"
                    enlarge={enlarge}
                    clickHandler={clickHandler}
                    closeHandler={closeHandler}
                    />
                    <ImageWithCaption
                    src="/img/doe_ex23_2.png"
                    alt="image8"
                    id="image8"
                    caption="고소장-명예훼손"
                    enlarge={enlarge}
                    clickHandler={clickHandler}
                    closeHandler={closeHandler}
                    />
                </div>
                {enlarge === 'image5' && (
                    <div id='overlay'>
                    <span className='close' onClick={closeHandler}>
                        &times;
                    </span>
                    <img
                        src="/img/doe_ex22_1.png"
                        alt='image5'
                        className='enlarge'
                    />
                    </div>
                )}
                {enlarge === 'image6' && (
                    <div id='overlay'>
                    <span className='close' onClick={closeHandler}>
                        &times;
                    </span>
                    <img
                        src="/img/doe_ex22_2.png"
                        alt='image6'
                        className='enlarge'
                    />
                    </div>
                )}
                {enlarge === 'image7' && (
                    <div id='overlay'>
                    <span className='close' onClick={closeHandler}>
                        &times;
                    </span>
                    <img
                        src="/img/doe_ex23_1.png"
                        alt='image7'
                        className='enlarge'
                    />
                    </div>
                )}
                {enlarge === 'image8' && (
                    <div id='overlay'>
                    <span className='close' onClick={closeHandler}>
                        &times;
                    </span>
                    <img
                        src="/img/doe_ex23_2.png"
                        alt='image8'
                        className='enlarge'
                    />
                    </div>
                )}

            </li>
        </ul>
      </div>
    </div>
  );
}