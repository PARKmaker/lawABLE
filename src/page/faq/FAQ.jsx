import React, { Component } from 'react';

import MuiAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import '../../components/template/styles.css';
import '../../components/template/main.css';

export default function FAQ(){
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <body className="d-flex flex-column h-100">
            <main className="flex-shrink-0"> 
                <section className="get-started section-bg">
                    <div className="container">
                        <div className="row justify-content-between gy-4">
                            <h2 className="display-5 fw-bolder" style={{marginBottom:'50px'}}><span className="text-gradient d-inline">FAQ</span>
                            <p className='notice-text'>LawABLE에서 자주 물어보는 질문과 답변입니다.</p></h2>
                            {/* <Accordion
                                title="Q1. 내용증명이란 무엇인가요?"
                                content="A. 내용증명이란 발송인이 수취인에게 '어떤 내용의 문서'를 '언제 발송하였다'는 사실을 우체국이 공적으로 증명해주는 문서입니다. 내용증명을 통해 문서를 증거로 남기거나, 채무자에게 채무의 이행 등을 통지하기 위해 주로 이용되는 제도입니다."
                            />
                            <Accordion
                                title="Q2. 법률문서 작성을 어떻게 시작하나요?"
                                content="A. 홈페이지 상단의 'CHAT' 버튼을 눌러 AI와 채팅을 시작합니다. 답변으로 어떤 종류의 법률 문서를 작성할 지를 추천받고 작성 페이지로 넘어 갈 수 있습니다. 상세한 내용을 입력해 적절한 문서를 작성합니다."
                            />
                            <Accordion
                                title="Q3. 법률 지식이 없는데 혼자 문서를 작성할 수 있을까요?"
                                content="A. AI를 통해 간단한 상황과 최소한의 정보 입력만으로도 높은 수준의 법률 문서를 작성 할 수 있습니다. 작성 페이지에 예시와 작성 가이드를 제공해 쉽게 문서를 작성 할 수 있도록 해 실제 사례에 적용할 수 있도록 설계했습니다."
                            /> */}

                            {/* mui accordion */}
                            <div>
                            <MuiAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    >
                                    <Typography sx={{ width: '15%', flexShrink: 0 }}>
                                        Q1.
                                    </Typography>
                                    <Typography >내용증명이란 무엇인가요?</Typography>
                                </AccordionSummary>
                                <AccordionSummary
                                    sx={{
                                        borderTop: '1px solid gray',
                                    }}>
                                    <Typography sx={{ width: '15%'}}>
                                        A1.
                                    </Typography>
                                    <Typography sx={{ width: '85%', textAlign:'left', flexShrink: 0 }}>내용증명이란 발송인이 수취인에게 '어떤 내용의 문서'를 '언제 발송하였다'는 사실을 우체국이 공적으로 증명해주는 문서입니다. 내용증명을 통해 문서를 증거로 남기거나, 채무자에게 채무의 이행 등을 통지하기 위해 주로 이용되는 제도입니다.</Typography>
                                </AccordionSummary>
                            </MuiAccordion>

                            <MuiAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    >
                                    <Typography sx={{ width: '15%', flexShrink: 0 }}>
                                        Q2.
                                    </Typography>
                                    <Typography >법률문서 작성을 어떻게 시작하나요?</Typography>
                                </AccordionSummary>
                                <AccordionSummary
                                    sx={{
                                        borderTop: '1px solid gray',
                                    }}>
                                    <Typography sx={{ width: '15%'}}>
                                        A2.
                                    </Typography>
                                    <Typography sx={{ width: '85%', textAlign:'left', flexShrink: 0 }}>홈페이지 상단의 'CHAT' 버튼을 눌러 AI와 채팅을 시작합니다. AI의 답변으로 어떤 종류의 법률 문서를 작성할 지를 추천받아 작성을 시작할 수 있습니다. 상세한 내용을 입력해 적절한 문서를 작성합니다.</Typography>
                                </AccordionSummary>
                            </MuiAccordion>

                            <MuiAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    >
                                    <Typography sx={{ width: '15%', flexShrink: 0 }}>
                                        Q3.
                                    </Typography>
                                    <Typography >법률 지식이 없는데 혼자 문서를 작성할 수 있을까요?</Typography>
                                </AccordionSummary>
                                <AccordionSummary
                                    sx={{
                                        borderTop: '1px solid gray',
                                    }}>
                                    <Typography sx={{ width: '15%'}}>
                                        A3.
                                    </Typography>
                                    <Typography sx={{ width: '85%', textAlign:'left', flexShrink: 0 }}>AI를 통해 간단한 상황과 최소한의 정보 입력만으로도 법률 문서를 작성 할 수 있습니다. 작성 페이지에 예시와 작성 가이드를 제공해 쉽게 문서를 작성 할 수 있도록 해 실제 사례에 적용할 수 있도록 합니다.</Typography>
                                </AccordionSummary>
                            </MuiAccordion>

                            <MuiAccordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    >
                                    <Typography sx={{ width: '15%', flexShrink: 0 }}>
                                        Q4.
                                    </Typography>
                                    <Typography >회원가입은 어디서하나요?</Typography>
                                </AccordionSummary>
                        
                                <AccordionSummary
                                    sx={{
                                        borderTop: '1px solid gray',
                                    }}>
                                    <Typography sx={{ width: '15%'}}>
                                        A4.
                                    </Typography>
                                    <Typography sx={{ width: '85%', textAlign:'left', flexShrink: 0 }}>LawABLE 홈페이지 우측 상단에 [JOIN] 버튼을 눌러 회원가입 할 수 있습니다. 가입과 동시에 문서를 작성할 수 있으며, 작성한 모든 법률문서를 보관할 수 있습니다.</Typography>
                                </AccordionSummary>
                            </MuiAccordion>

                            <MuiAccordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    >
                                    <Typography sx={{ width: '15%', flexShrink: 0 }}>
                                        Q5.
                                    </Typography>
                                    <Typography >저장된 문서는 어디서 확인할 수 있나요?</Typography>
                                </AccordionSummary>
                        
                                <AccordionSummary
                                    sx={{
                                        borderTop: '1px solid gray',
                                    }}>
                                    <Typography sx={{ width: '15%'}}>
                                        A5.
                                    </Typography>
                                    <Typography sx={{ width: '85%', textAlign:'left', flexShrink: 0 }}>LawABLE 홈페이지 로그인 후, 오른쪽 상단의 아이콘을 클릭하시면 [MyDocs]에서 문서를 확인할 수 있습니다.</Typography>
                                </AccordionSummary>
                            </MuiAccordion>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </body>
    );
}
