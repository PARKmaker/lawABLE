import checkoutFormModel from "./checkoutFormModel";
const {
    formField: {
        sender_name,
        sender_postcode,
        sender_address1,
        sender_address2,
        sender_phoneNumber,
        // sender_cellPhoneNumber,
        recipient_name,
        recipient_postcode,
        recipient_address1,
        recipient_address2,
        recipient_phoneNumber,
        // recipient_cellPhoneNumber,
        certificationId,

        contract: { contract_day, contract_content, contract_not_content },

        salePrice: {
            salePrice_day,
            salePrice_thing,
            salePrice_thing_money,
            salePrice_thing_give_day,
            salePrice_not_give_money,
        },

        defamation: { defamation_day, defamation_thing, defamation_content },

        deposit: {
            deposit_day,
            deposit_location,
            deposit_house_start,
            deposit_house_end,
            deposit_house_money,
            deposit_money_give_day,
        },

        damage: {
            damage_day,
            damage_content,
            damage_trepass,
            damage_loss_content,
            damage_loss_money,
            damage_loss_day,
        },

        service: {
            service_day,
            service_work_content,
            service_give_day,
            service_give_money,
            service_end_day,
            service_not_give_money,
        },

        loan: {
            loan_money,
            loan_content,
            loan_not_give_money,
            loan_moeny_give_day,
        },

        neglect: {
            neglect_event_day,
            neglect_event_name,
            neglect_event_content,
            neglect_event_detail_content,
        },
    },
} = checkoutFormModel;

const formInitialValues = {
    [sender_name.name]: "",
    [sender_postcode.name]: "",
    [sender_address1.name]: "",
    [sender_address2.name]: "",
    [sender_phoneNumber.name]: "",
    // [sender_cellPhoneNumber.name]: "",
    [recipient_name.name]: "",
    [recipient_postcode.name]: "",
    [recipient_address1.name]: "",
    [recipient_address2.name]: "",
    [recipient_phoneNumber.name]: "",
    // [recipient_cellPhoneNumber.name]: "",

    [certificationId.name]: "",

    [contract_day.name]: "",
    [contract_content.name]: "",
    [contract_not_content.name]: "",

    [salePrice_day.name]: "",
    [salePrice_thing.name]: "",
    [salePrice_thing_money.name]: "",
    [salePrice_thing_give_day.name]: "",
    [salePrice_not_give_money.name]: "",

    [defamation_day.name]: "",
    [defamation_thing.name]: "",
    [defamation_content.name]: "",

    [deposit_day.name]: "",
    [deposit_location.name]: "",
    [deposit_house_start.name]: "",
    [deposit_house_end.name]: "",
    [deposit_house_money.name]: "",
    [deposit_money_give_day.name]: "",

    [damage_day.name]: "",
    [damage_content.name]: "",
    [damage_trepass.name]: "",
    [damage_loss_content.name]: "",
    [damage_loss_money.name]: "",
    [damage_loss_day.name]: "",

    [service_day.name]: "",
    [service_work_content.name]: "",
    [service_give_day.name]: "",
    [service_give_money.name]: "",
    [service_end_day.name]: "",
    [service_not_give_money.name]: "",

    [loan_money.name]: "",
    [loan_content.name]: "",
    [loan_not_give_money.name]: "",
    [loan_moeny_give_day.name]: "",

    [neglect_event_day.name]: "",
    [neglect_event_name.name]: "",
    [neglect_event_content.name]: "",
    [neglect_event_detail_content.name]: "",
    // contract: {
    //     [contract_day.name]: "",
    //     [contract_content.name]: "",
    //     [contract_not_content.name]: "",
    // },

    // salePrice: {
    //     [salePrice_day.name]: "",
    //     [salePrice_thing.name]: "",
    //     [salePrice_thing_money.name]: "",
    //     [salePrice_thing_give_day.name]: "",
    //     [salePrice_not_give_money.name]: "",
    // },

    // defamation: {
    //     [defamation_day.name]: "",
    //     [defamation_thing.name]: "",
    //     [defamation_content.name]: "",
    // },

    // deposit: {
    //     [deposit_day.name]: "",
    //     [deposit_location.name]: "",
    //     [deposit_house_start.name]: "",
    //     [deposit_house_end.name]: "",
    //     [deposit_house_money.name]: "",
    //     [deposit_money_give_day.name]: "",
    // },

    // damage: {
    //     [damage_day.name]: "",
    //     [damage_content.name]: "",
    //     [damage_trepass.name]: "",
    //     [damage_loss_content.name]: "",
    //     [damage_loss_money.name]: "",
    //     [damage_loss_day.name]: "",
    // },

    // service: {
    //     [service_day.name]: "",
    //     [service_work_content.name]: "",
    //     [service_give_day.name]: "",
    //     [service_give_money.name]: "",
    //     [service_end_day.name]: "",
    //     [service_not_give_money.name]: "",
    // },
    // loan: {
    //     [loan_money.name]: "",
    //     [loan_content.name]: "",
    //     [loan_not_give_money.name]: "",
    //     [loan_moeny_give_day.name]: "",
    // },
    // neglect: {
    //     [neglect_event_day.name]: "",
    //     [neglect_event_name.name]: "",
    //     [neglect_event_content.name]: "",
    //     [neglect_event_detail_content.name]: "",
    // },
};

export default formInitialValues;
