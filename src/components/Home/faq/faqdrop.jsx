import React, { Component } from 'react';

import './faqdrop.css';
import '../../template/styles.css';

function FAQMenu(){
    return (
        <main class="faqMenu">
            <section>
                <div class="card shadow border-0 rounded-4 mb-5">
                    <div class="card-body p-5">
                        <div class="row align-items-center gx-5">
                            <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                <div class="bg-light p-4 rounded-4">
                                    <div class="text-primary fw-bolder mb-2">Q1. 법률 문서 작성을 어떻게 시작하나요? </div>
                                    <div> 홈페이지 상단의 <strong>CHAT</strong>을 눌러 AI와 채팅을 시작합니다. AI의 답변으로 어떤 종류의 법률 문서를 작성할 지를 <strong>추천</strong>받아 작성을 시작 할 수 ... </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card shadow border-0 rounded-4 mb-5">
                    <div class="card-body p-5">
                        <div class="row align-items-center gx-5">
                            <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                <div class="bg-light p-4 rounded-4">
                                    <div class="text-primary fw-bolder mb-2">Q2. 법률 지식이 없는데 혼자 문서를 작성할 수 있을까요? </div>
                                    <div> <strong>AI</strong>를 통해 간단한 상황과 최소한의 정보 입력만으로도 법률 문서를 작성 할 수 있습니다. 작성 페이지에 <strong>예시</strong>와 <strong>작성 가이드</strong>를 제공해 쉽게...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    
    )
}

export default FAQMenu;