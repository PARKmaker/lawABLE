# 법률 언어 생성현 모델을 활용한 생활 법률 지원 서비스

-   챗봇과 대화를 통해 법률 용어 및 사례에 대해 질문.
-   법률 문서의 작성을 간단하게 도와주는 AI 서비스

<hr/>

### 역할 분담

-   프론트엔드 3명 (<strong>CHAT, WRITE 페이지 담당</strong>)
-   백엔드 2명
-   AI모델 2명

### 개발 기간

-   계획 수립 및 시나리오 설계, 데이터 수집: 23.05.30 ~ 23.06.13
-   시스템 개발 및 통합, 테스트: ~ 23.07.06(약 3주)

<strong>해당 github repository는 프론트엔드 부분만 배포했기에 서버와 연결되는 질의응답, 문서 작성 기능이 정상 작동되지 않습니다. 해당 작동은 맨 아래 시연 동영상으로 첨부 하겠습니다.</strong>

<hr/>

## 소개

<img src='./public/img/[25조] 3기 25조 소개이미지.jpg' width="640" height="460">

<hr/>

### 개발환경(프론트엔드):

-   node 18.16.0
-   React 18.2.0
-   mui/material 5.13.5
-   axios 1.4.0
-   formik 2.4.2
-   yup 1.2.0
<hr/>

## Getting Started

### packages Install and Start

Node.js 설치

```
git clone https://github.com/PARKmaker/lawABLE.git
npm install
npm start
```

<hr/>

## 개발담당 부분

-   src/components/chat
-   src/components/PostCode
-   src/components/write
-   src/components/scrollToTop.jsx
-   src/page/chat
-   src/page/write

<hr/>

## 기능

-   API를 통해 model flask 서버와 django 서버 통신
-   formik을 통해 서류 작성 입력 양식 유효성 체크 src/components/write/FormModel/
-   react-daum-postcode을 이용 modal창을 띄어 주소 자동 입력.
-   mui Stepper를 통해 내용증명 작성 진행도 파악.

#### 화면 이미지와 기능 정리

<img src='./public/processImg/1.jpg' width="500" height="350">
<img src='./public/processImg/2.jpg' width="500" height="350">
<img src='./public/processImg/3.jpg' width="500" height="350">
<img src='./public/processImg/4.jpg' width="500" height="350">
<img src='./public/processImg/5.jpg' width="500" height="350">
<img src='./public/processImg/6.jpg' width="500" height="350">
<img src='./public/processImg/7.jpg' width="500" height="350">
<img src='./public/processImg/8.jpg' width="500" height="350">

<hr/>

## 배운점

-   서버와 통신할때(POST, GET) Promise 객체로 반환되고, 빈값으로 받아지는 문제점 -> asnyc await를 통해 해결
-   "다음 주소 api"를 통해 값을 입력할 때 ui에는 적용 되지만 formik의 유효성 검사를 통과 하지 못하는 문제점
    -> "다음 주소 api" 컨포넌트가 실행될때만 작동하게 useEffect 함수를 이용하고, formik의 helper 객체의 setValue 함수를 이용하여 해결
    -> 이때 useEffect deps에 값이 입력될때만 작동시킬 수 있도록 주소값 변수를 넣기(그렇지 않으면 무한 실행 되어 서버 다운)

<hr/>

## 시연 영상

<img src='./public/processImg/깃허브 업로드용 시연영상.gif' width="1280" height="560">
