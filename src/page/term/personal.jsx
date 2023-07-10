
import { useNavigate, Link } from "react-router-dom";
import * as React from "react";

import './term.css';


export default function PersonalTerm() {
    return (
        <body className="d-flex flex-column h-100">
            <main className="flex-shrink-0">
                <section className="get-started section-bg">
                    <div className="container">
                        <h2 className="display-5 fw-bolder" style={{ marginBottom: '50px' }}>
                        <span className="text-gradient d-inline">개인정보 처리방침</span>
                        <p className='notice-text'>LawABLE의 개인정보 처리방침 확인해보세요.</p>

                        <div style={{textAlign:'left', margin:'auto'}}>
                            <br/>
                            <br/>

                            <p className="content-subtitle">제 1 조 (목적)</p>
                            <p className='term-content'>LawABLE은 회사가 제공하고자 하는 서비스(이하 ‘회사 서비스’)를 이용하는 개인(이하 ‘이용자’ 또는 ‘개인’)의 정보(이하 ‘개인정보’)를 보호하기 위해, 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관련 법령을 준수하고, 서비스 이용자의 개인정보 보호 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침(이하 ‘본 방침’)을 수립합니다.</p>

                            <p className="content-subtitle">제 2 조 (개인정보 처리의 원칙)</p>
                            <p className='term-content'>개인정보 관련 법령 및 본 방침에 따라 회사는 이용자의 개인정보를 수집할 수 있으며 수집된 개인정보는 개인의 동의가 있는 경우에 한해 제3자에게 제공될 수 있습니다. 단, 법령의 규정 등에 의해 적법하게 강제되는 경우 회사는 수집한 이용자의 개인정보를 사전에 개인의 동의 없이 제3자에게 제공할 수도 있습니다.</p>


                            <p className="content-subtitle">제 3 조 (본 방침의 공개)</p>
                            <p className='term-content'>회사는 이용자가 언제든지 쉽게 본 방침을 확인할 수 있도록 회사 홈페이지 첫화면 또는 첫 화면과의 연결화면을 통해 본 방침을 공개하고 있습니다.</p>

                            <p className="content-subtitle">제 4 조 (본 방침의 변경)</p>
                            <p className='term-content'>본 방침은 개인정보 관련 법령, 지침, 고시 또는 정부나 회사 서비스의 정책이나 내용의 변경에 따라 개정될 수 있습니다.
                            <br/>회사는 제1항에 따라 본 방침을 개정하는 경우 다음 각 호 하나 이상의 방법으로 공지합니다.
                            <br/>회사가 운영하는 인터넷 홈페이지의 첫 화면의 공지사항란 또는 별도의 창을 통하여 공지하는 방법</p>

                            <p className="content-subtitle">제 5 조 (목적)</p>
                            <p className='term-content'>이용자는 회원 가입을 하지 않아도 콘텐츠 보기, 검색 기능 등 유료 서비스를 제외한 대부분의 회사의 서비스를 회원과 동일하게 이용할 수 있습니다. 이용자가 Legal solution program(서식 자동작성프로그램), legal DB 등과 같이 개인화 혹은 회원제 서비스를 이용하기 위해 회원가입을 할 경우, 회사는 서비스 이용을 위해 필요한 최소한의 개인정보를 수집합니다.</p>
                            
                            <p className="content-subtitle">제 6 조 (본인인증을 위한 정보)</p>
                            <p className='term-content'>필수 수집 정보
                            <br/>: 이름, 생년월일, 휴대폰 번호</p>
                            
                            <p className="content-subtitle">제 8 조 (개인정보 수집 방법)</p>
                            <p className='term-content'>회사는 다음과 같은 방법으로 이용자의 개인정보를 수집합니다.
                            <br/> - 이용자가 회사의 홈페이지에 자신의 개인정보를 입력하는 방식
                            <br/> - 어플리케이션 등 회사가 제공하는 홈페이지 외의 서비스를 통해 이용자가 자신의 개인정보를 입력하는 방식
                            <br/> - 이용자가 고객센터의 상담, 게시판에서의 활동 등 회사의 서비스를 이용하는 과정에서 이용자가 입력하는 방식</p>
                        </div>
                        </h2>
                    </div>
                </section>
            </main>
        </body>
    );
}
