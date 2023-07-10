import * as React from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

import './Tab.css';
import pdffile from './example.pdf';

export default function Tabs() {
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
      <div id="#tabs" class="tabs">

        <div class="tab-2">
          <label for="tab2-1">내용증명</label>
          <input id="tab2-1" name="tabs-two" type="radio" checked="checked"/>
          <div className='tabtext'>
            <p class='tabtitle'>내용증명 서류 예시</p>
              <p class='tabcontent'>
                <ul>
                  <li>
                    <p></p>
                    <h1>내용증명</h1>
                    <p></p>
                    <p></p>
                    <p><strong>발신인</strong></p>
                    <p>이름 : 김순자</p>
                    <p>주소 : 대한민국 서울특별시 종로구 청와대로 1</p>
                    <p>전화번호 : 010-0000-0000</p>
                    <p></p>
                    <p><strong>수신인</strong></p>
                    <p>이름 : 최말호</p>
                    <p>주소 : 서울특별시 영등포구 의사당로 1</p>
                    <p>전화번호 :  010-0000-0000</p>
                    <p></p>
                    <p>제목 : 계약이행 청구</p>
                    <hr></hr>
                    <p >1. 귀하(수신인, 이하 '귀하'이라 한다)의 무궁한 발전을 기원합니다.</p>
                    <p >2. 발신인은 2023.00.00 귀하와 사이에서 부동산을 매매 하는 계약을 체결하였습니다.</p>
                    <p >3. 하지만, 잔금 어쩌구를 이행하지 않았습니다.</p>
                    <p >4. 따라서, 본 발신인은 위와 같은 귀하의 본 계약상의 의무 불이행을 이유로 본 내용증명을 귀하에게 발송하는 바, 민법 등 관련 법규와 본 계약에 따라 본 발신인은 귀하에 대한 의무를 이행할 필요가 없음을 고지합니다.</p>
                    <p></p>
                    <p><strong>2023.xx.xx</strong></p>
                    <p></p>
                    <p><strong>위 발신인</strong></p>
                    <p>김순자 (인)</p>
                    
                  </li>
                </ul>
              </p>
          </div>
        </div>

        <div class="tab-2">
          <label for="tab2-2">소송</label>
          <input id="tab2-2" name="tabs-two" type="radio"/>
          <div className='tabtext'>
            <p class='tabtitle'>소송 서류 예시</p>
            <p class='tabcontent'>
              <ul>
                <li><iframe src ={pdffile} width="100%" height="700px"/></li>
              </ul>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}