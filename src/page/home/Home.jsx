import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

import "../../components/Home/btn/ToChatBtn.css";
import "../../components/Home/btn/FAQBtn.css";
import "../../components/template/styles.css";
import "../../components/template/main.css";

import Tabs from "../../components/Home/tab/Tab";
import ImageList from "../../components/Home/tab/ImageList";
import FAQMenu from "../../components/Home/faq/faqdrop";

// animate.css
import "animate.css";

function Home() {
    
    // 메인 배너
    useEffect(() => {
        AOS.init();
    });

    return (
        <body className="d-flex flex-column h-100">
            <main className="flex-shrink-0">
                <header className="py-5">
                    <div className="container px-5 pb-5">
                        <div className="row gx-5 align-items-center">
                            <div className="col-xxl-5">
                                <div className="text-center text-xxl-start">
                                    {/* <div class="badge text-gradient text-white mb-4">
                                        <div class="text-uppercase">
                                            AI &middot; LAW &middot;
                                            DOCUMENTATION
                                        </div>
                                    </div> */}
                                    {/* text-muted */}
                                    <div
                                        data-aos="fade-down"
                                        className="text-kt fw-light"
                                    >
                                        KT AIVLE SCHOOL
                                    </div>
                                    <h1
                                        data-aos="fade-down"
                                        className="text-lawable display-3 fw-bolder"
                                    >
                                        <span className="text-gradient d-inline">
                                            LawABLE.
                                        </span>
                                    </h1>
                                    <div
                                        data-aos="fade-down"
                                        className="text-lawable-explain"
                                    >
                                        <div
                                        data-aos="fade-down"
                                        className="text-lawable-explain"
                                        >
                                        <p>
                                            {/* style={{ fontWeight: '550' }} */}
                                           법률 언어 <span style={{fontWeight:'750'}}>생성형 모델</span>을 <br/> 활용한 <span>생활 <span style={{fontWeight:'750'}}>법률 지원</span> 서비스</span>
                                        </p>
                                        </div>

                                    </div>
                                    <div
                                        data-aos="fade-up"
                                        className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3"
                                    >
                                        <a
                                            data-aos="fade-up"
                                            data-aos-delay="200"
                                            className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                                            href="#get-started"
                                        >
                                            Learn more{" "}
                                            <ArrowDropDownIcon
                                                id="hvr-icon"
                                                color="white"
                                            />{" "}
                                        </a>
                                        {/* <a data-aos="fade-up" data-aos-delay="200" class="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" href="projects.html">Projects</a> */}
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="col-xxl-7">
                                <Link to="/chat">
                                    <motion.div
                                        className="box"
                                        /**
                                         * Setting the initial keyframe to "null" will use
                                         * the current value to allow for interruptable keyframes.
                                         */
                                        whileHover={{
                                            scale: [null, 1.05, 1.05],
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div
                                            data-bs-ride="carousel"
                                            data-bs-interval="5000"
                                            className="d-flex justify-content-center mt-5 mt-xxl-0"
                                        >
                                            <div className="profile bg-gradient-primary-to-secondary">
                                                <div>
                                                    <img
                                                        className="animate__animated animate__delay-1s animate__bounceOut"
                                                        data-aos="fade-up"
                                                        src="/img/chat3.png"
                                                        style={{
                                                            width: "100%",
                                                        }}
                                                        alt=""
                                                    />
                                                </div>
                                                {/* data-aos-delay="2500"  */}
                                                <img
                                                    className="animate__animated animate__delay-2s animate__flipInY"
                                                    src="/img/file1.png"
                                                    style={{
                                                        width: "100%",
                                                        position: "absolute",
                                                        top: "0",
                                                        left: "0",
                                                        // width: "%",
                                                        height: "100%",
                                                    }}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>

                <section id="get-started" className="get-started section-bg">
                    <div className="container">
                        <div class="row justify-content-between gy-4">
                            {/* start Service */}
                            <section id="services" className="services section-bg">
                                <div className="container" data-aos="fade-up">
                                    <h2 className="display-5 fw-bolder">
                                        <span className="text-gradient d-inline">
                                            Service
                                        </span>
                                    </h2>
                                    <p className="lead fw-light mb-4">
                                        로블과 함께 아래의 법률 서류를 작성할 수 있습니다. 
                                    </p>

                                    <section>
                                        <div className="row gy-4">
                                            <div
                                                className="col-lg-4 col-md-6"
                                                data-aos="fade-up"
                                                data-aos-delay="100"
                                            >
                                                <div className="service-item  position-relative">
                                                    <h3>내용증명</h3>
                                                    <p style={{fontWeight:'600', fontSize:'1.05rem'}}>내용증명이 필요하신가요?</p>
                                                    <p>
                                                        로블이 상황에 맞는<br/>내용증명을 추천할게요.
                                                    </p>
                                                    <a
                                                        href="#tabs"
                                                        className="readmore stretched-link"
                                                    >
                                                        Learn more{" "}
                                                        <i class="bi bi-arrow-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Service Item --> */}

                                            <div
                                                className="col-lg-4 col-md-6"
                                                data-aos="fade-up"
                                                data-aos-delay="200"
                                            >
                                                <div className="service-item position-relative">
                                                    <h3>소송제기</h3>
                                                    <p style={{fontWeight:'600', fontSize:'1.05rem'}}>소송을 준비하고 계신가요?</p>
                                                    <p>
                                                        로블이 상황에 맞는<br/>
                                                        소송서류를 추천할게요.
                                                    </p>
                                                    <a
                                                        href="#tabs"
                                                        className="readmore stretched-link"
                                                    >
                                                        Learn more{" "}
                                                        <i className="bi bi-arrow-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Service Item --> */}

                                            <div
                                                className="col-lg-4 col-md-6"
                                                data-aos="fade-up"
                                                data-aos-delay="300"
                                            >
                                                <div className="service-item position-relative">
                                                    {/* <div class="icon">
                                    <i class="fa-solid fa-compass-drafting"></i>
                                    </div> */}
                                                    <h3>법령질문</h3>
                                                    <p style={{fontWeight:'600', fontSize:'1.05rem'}}>궁금한게 있으신가요?</p>
                                                    <p>
                                                        로블이 법령 용어부터 간단한 사례까지.<br/>
                                                        법적인 질문에 대해 상담해 드릴게요.
                                                    </p>
                                                    <Link
                                                        to="/chat"
                                                        class="readmore stretched-link"
                                                    >
                                                        Learn more{" "}
                                                        <i className="bi bi-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                            {/* End Service Item --> */}
                                        </div>
                                    </section>
                                </div>
                            </section>
                            {/* End Service --> */}
                        </div>
                    </div>
                </section>

                <section id="set-tabs" className="set-tabs">
                    <div className="container">
                        <div class="row justify-content-between gy-4">
                            <section id="tabs" className="tabs">
                                <div className="container" data-aos="fade-up" style={{backgroundColor:'#f5f6f7', borderRadius:'10px', marginBottom:'30px', padding:'0'}}>
                                    <div className="text-center my-5 setImgList">
                                        <div>
                                            <ImageList/>
                                        </div>
                                    </div>
                                </div>
                                

                                <div className="container tabtochat">
                                    {/* <Button className="btn-hover color-8" href='/write' color='primary' size='large' endIcon={<ArrowForwardIcon color='white'/>}> 문서작성 시작하기 </Button> */}
                                    <a
                                        className="btn btn-main btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder"
                                        href="/write"
                                    >
                                        문서작성 시작하기
                                    </a>
                                </div>
                            </section>
                        </div>
                    </div>   
                </section>

                <section className="bg-light py-5">
                    <div data-aos="fade-up" className="container px-5">
                        <div className="row gx-5 justify-content-center">
                            <div className="col-xxl-8">
                                <div className="text-center my-5">
                                    <h2 className="display-5 fw-bolder">
                                        <span className="text-gradient d-inline">
                                            FAQ
                                        </span>
                                    </h2>
                                    <p className="lead fw-light mb-4">
                                        FAQ를 통해 궁금한 점을 미리
                                        확인해보세요.
                                    </p>
                                    <motion.div
                                        className="box"
                                        /**
                                         * Setting the initial keyframe to "null" will use
                                         * the current value to allow for interruptable keyframes.
                                         */
                                        whileHover={{ scale: [null, 1.1, 1.1] }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Link to="/faq">
                                            <ArrowCircleRightIcon fontSize="large" />
                                        </Link>
                                    </motion.div>
                                    <FAQMenu />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </body>
    );
}

export default Home;
