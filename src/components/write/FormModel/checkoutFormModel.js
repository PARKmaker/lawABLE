const checkoutFormModel = {
    formId: "checkoutForm",
    formField: {
        sender_name: {
            name: "sender_name",
            label: "보내는 이(이름 또는 업체)*",
            requiredErrorMsg: "필수 입력입니다.",
        },
        sender_postcode: {
            name: "sender_postcode",
            label: "우편번호*",
            requiredErrorMsg: "우편번호는 필수 입력입니다.",
        },
        sender_address1: {
            name: "sender_address1",
            label: "보내는 주소*",
            requiredErrorMsg: "주소는 필수 입력입니다.",
        },
        sender_address2: {
            name: "sender_address2",
            label: "상세 주소*",
            requiredErrorMsg: "상세주소는 필수 입력입니다.",
        },
        sender_phoneNumber: {
            name: "sender_phoneNumber",
            label: "전화 번호",
            // requiredErrorMsg: "예시) 01012345678, 숫자만 입력해주세요",
            invalidErrorMsg:
                "예시) 01012345555, 핸드폰 또는 사업체 번호를 입력해주세요. 숫자만 입력해주세요",
        },
        recipient_name: {
            name: "recipient_name",
            label: "받는 이(이름 또는 업체)*",
            requiredErrorMsg: "필수 입력입니다.",
        },
        recipient_postcode: {
            name: "recipient_postcode",
            label: "우편번호*",
            requiredErrorMsg: "우편번호는 필수 입력입니다.",
        },
        recipient_address1: {
            name: "recipient_address1",
            label: "받는 주소*",
            requiredErrorMsg: "주소는 필수 입력입니다.",
        },
        recipient_address2: {
            name: "recipient_address2",
            label: "상세 주소*",
            requiredErrorMsg: "상세주소는 필수 입력입니다.",
        },
        recipient_phoneNumber: {
            name: "recipient_phoneNumber",
            label: "전화 번호",
            // requiredErrorMsg: "예시) 01012345678, 숫자만 입력해주세요",
            invalidErrorMsg:
                "예시) 0215881234, 핸드폰 또는 사업체 번호를 입력해주세요. 숫자만 입력해주세요",
        },

        certificationId: {
            name: "certificationId",
            label: "내용증명 종류*",
            requiredErrorMsg: "작성할 내용증명 종류를 선택해주세요.",
        },

        contract: {
            contract_day: {
                name: "contract_day",
                label: "계약 날짜(ex 2022월 1월 1일)",
                // requiredErrorMsg: "계약 또는 사건이 일어난 날짜를 선택해주세요",
                // invalidErrorMsg: "날짜가 선택되지 않았습니다.",
            },
            contract_content: {
                name: "contract_content",
                label: "계약한 내용",
                // requiredErrorMsg: "계약 또는 사건내용을 자세히 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
            contract_not_content: {
                name: "contract_not_content",
                label: "이행하지 않은 내용",
                // requiredErrorMsg: "예시) 01012345678, 숫자만 입력해주세요",업체 번호를 입력해주세요. 숫자만 입력해주세요",
            },
        },

        salePrice: {
            salePrice_day: {
                name: "salePrice_day",
                label: "계약/사건 발생 날짜(ex 2022월 1월 1일)",
                // requiredErrorMsg: "계약 또는 사건이 일어난 날짜를 선택해주세요",
                // invalidErrorMsg: "날짜가 선택되지 않았습니다.",
            },
            salePrice_thing: {
                name: "salePrice_thing",
                label: "매매 대금 요청할 물건 이름",
                // requiredErrorMsg: "물건 이름을 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
            salePrice_thing_money: {
                name: "salePrice_thing_money",
                label: "물건 금액(원)",
                // requiredErrorMsg: "물건  가격을 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
            salePrice_thing_give_day: {
                name: "salePrice_thing_give_day",
                label: "물건을 준 날짜(ex 2022월 2월 13일)",
                // requiredErrorMsg: "물건을 준 날짜를 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
            salePrice_not_give_money: {
                name: "salePrice_not_give_money",
                label: "미지급 금액 ",
                // requiredErrorMsg: "미지급 금액 를 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
            salePrice_give_day: {
                name: "salePrice_give_day",
                label: "지급 기한 날짜(ex 2022월 3월 31일)",
                // requiredErrorMsg: "지급 기한 날짜를 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
        },

        defamation: {
            defamation_day: {
                name: "defamation_day",
                label: "사건 발생 날짜(ex 2022월 1월 1일)",
                // requiredErrorMsg: "계약 또는 사건이 일어난 날짜를 선택해주세요",
                // invalidErrorMsg: "날짜가 선택되지 않았습니다.",
            },
            defamation_thing: {
                name: "defamation_thing",
                label: "명예훼손을을 당한 위치(주소 또는 특정 장소(00게임))",
                // requiredErrorMsg: "명예훼손을을 당한 위치를 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
            defamation_content: {
                name: "defamation_content",
                label: "명예훼손 내용",
                // requiredErrorMsg: "명예훼손을을 당한 내용을 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
        },

        deposit: {
            deposit_day: {
                name: "deposit_day",
                label: "계약/사건 날짜(ex 2022년 1월 1일)",
                // requiredErrorMsg: "계약 또는 사건이 일어난 날짜를 선택해주세요",
                // invalidErrorMsg: "날짜가 선택되지 않았습니다.",
            },
            deposit_location: {
                name: "deposit_location",
                label: "내용증명 해당 건물 위치",
                // requiredErrorMsg: "내용증명 해당 건물 위치를 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
            deposit_house_start: {
                name: "deposit_house_start",
                label: "계약 시작일(ex 2022년 1월 15일)",
                // requiredErrorMsg: "계약 시작일을 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
            deposit_house_end: {
                name: "deposit_house_end",
                label: "계약 만료일(ex 2022년 1월 31일)",
                // requiredErrorMsg: "계약 만료일을 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
            deposit_house_money: {
                name: "deposit_house_money",
                label: "반환할 금액(ex 100,000,000원)",
                // requiredErrorMsg: "계약 만료일을 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
            deposit_money_give_day: {
                name: "deposit_money_give_day",
                label: "계약금/보증금 반환 요청 날짜(ex 2022월 3월 31일)",
                // requiredErrorMsg: "계약 만료일을 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
        },

        damage: {
            damage_day: {
                name: "damage_day",
                label: "계약/사건 날짜(ex 2022년 1월 1일)",
                // requiredErrorMsg: "계약 또는 사건이 일어난 날짜를 선택해주세요",
                // invalidErrorMsg: "날짜가 선택되지 않았습니다.",
            },
            damage_content: {
                name: "damage_content",
                label: "침해 행위(이하 '불법행위'로 칭함) 내용",
                // requiredErrorMsg: "내용증명 해당 건물 위치를 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
            damage_trepass: {
                name: "damage_trepass",
                label: "불법행위로 인한 신체침해 내용",
                // requiredErrorMsg: "계약 시작일을 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
            damage_loss_content: {
                name: "damage_loss_content",
                label: "손해 내용",
                // requiredErrorMsg: "계약 만료일을 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
            damage_loss_money: {
                name: "damage_loss_money",
                label: "손해 비용(ex 100,000,000원)",
                // requiredErrorMsg: "계약 만료일을 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
            damage_loss_day: {
                name: "damage_loss_day",
                label: "지급 요청 기한(ex 2022년 3월 31일)",
                // requiredErrorMsg: "계약 만료일을 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
        },

        service: {
            service_day: {
                name: "service_day",
                label: "계약/사건 날짜(ex 2022년 1월 1일)",
                // requiredErrorMsg: "계약 또는 사건이 일어난 날짜를 선택해주세요",
                // invalidErrorMsg: "날짜가 선택되지 않았습니다.",
            },
            service_work_content: {
                name: "service_work_content",
                label: "용역 이행 내용",
                // requiredErrorMsg: "내용증명 해당 건물 위치를 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
            service_give_day: {
                name: "service_give_day",
                label: "용역 이행 날짜(ex 2022년 1월 15일)",
                // requiredErrorMsg: "계약 시작일을 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
            service_give_money: {
                name: "service_give_money",
                label: "용역 계약 금액(ex 200,000원)",
                // requiredErrorMsg: "계약 만료일을 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
            service_end_day: {
                name: "service_end_day",
                label: "용역 완료 날짜(ex 2022월 1월 30일)",
                // requiredErrorMsg: "계약 만료일을 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
            service_not_give_money: {
                name: "service_not_give_money",
                label: "지급하지 않은 금액",
                // requiredErrorMsg: "계약 만료일을 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
        },

        loan: {
            loan_money: {
                name: "loan_money",
                label: "빌려준 비용(ex 5,000,000원)",
                // requiredErrorMsg: "계약 또는 사건이 일어난 날짜를 선택해주세요",
                // invalidErrorMsg: "날짜가 선택되지 않았습니다.",
            },
            loan_content: {
                name: "loan_content",
                label: "빌려준 내용",
                // requiredErrorMsg: "내용증명 해당 건물 위치를 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
            loan_not_give_money: {
                name: "loan_not_give_money",
                label: "돌려주지 않는 비용",
                // requiredErrorMsg: "계약 시작일을 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
            loan_moeny_give_day: {
                name: "loan_moeny_give_day",
                label: "반납 요청 날짜(ex 2022년 3월 31일)",
                // requiredErrorMsg: "계약 만료일을 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
        },

        neglect: {
            neglect_event_day: {
                name: "neglect_event_day",
                label: "판결 받은 날짜(ex) 2022년 1월 1일)",
                // requiredErrorMsg: "계약 또는 사건이 일어난 날짜를 선택해주세요",
                // invalidErrorMsg: "날짜가 선택되지 않았습니다.",
            },
            neglect_event_name: {
                name: "neglect_event_name",
                label: "판결 선고 이름",
                // requiredErrorMsg: "판결 내용를 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
            neglect_event_content: {
                name: "neglect_event_content",
                label: "판결 내용",
                // requiredErrorMsg: "계약 시작일을 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
            neglect_event_detail_content: {
                name: "neglect_event_detail_content",
                label: "구체적인 판결 내용",
                // requiredErrorMsg: "계약 시작일을 입력해주세요.",
                // invalidErrorMsg: "내용이 입력되지 않았습니다.",
            },
        },
    },
};

export default checkoutFormModel;
