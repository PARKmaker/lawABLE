import * as Yup from "yup";
// import moment from "moment";
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
    },
} = checkoutFormModel;

const phoneNumberRegEx = /^\d{2,3}-?\d{3,4}-?\d{4}$/;
// const cellPhoneNumberRegEx = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

const validationSchema = [
    Yup.object().shape({
        [sender_name.name]: Yup.string().required(
            `${sender_name.requiredErrorMsg}`
        ),
        [sender_postcode.name]: Yup.string().required(
            `${sender_postcode.requiredErrorMsg}`
        ),
        [sender_address1.name]: Yup.string().required(
            `${sender_address1.requiredErrorMsg}`
        ),
        [sender_address2.name]: Yup.string().required(
            `${sender_address2.requiredErrorMsg}`
        ),
        [sender_phoneNumber.name]: Yup.string()
            // .required(`${sender_phoneNumber.requiredErrorMsg}`)
            .matches(phoneNumberRegEx, sender_phoneNumber.invalidErrorMsg),
        // [sender_cellPhoneNumber.name]: Yup.string()
        //     // .required(`${sender_cellPhoneNumber.requiredErrorMsg}`)
        //     .matches(
        //         cellPhoneNumberRegEx,
        //         sender_cellPhoneNumber.invalidErrorMsg
        //     ),
    }),

    Yup.object().shape({
        [recipient_name.name]: Yup.string().required(
            `${recipient_name.requiredErrorMsg}`
        ),
        [recipient_postcode.name]: Yup.string().required(
            `${recipient_postcode.requiredErrorMsg}`
        ),
        [recipient_address1.name]: Yup.string().required(
            `${recipient_address1.requiredErrorMsg}`
        ),
        [recipient_address2.name]: Yup.string().required(
            `${recipient_address2.requiredErrorMsg}`
        ),
        [recipient_phoneNumber.name]: Yup.string()
            // .required(`${recipient_phoneNumber.requiredErrorMsg}`)
            .matches(phoneNumberRegEx, recipient_phoneNumber.invalidErrorMsg),
        // [recipient_cellPhoneNumber.name]: Yup.string()
        //     // .required(`${recipient_cellPhoneNumber.requiredErrorMsg}`)
        //     .matches(
        //         cellPhoneNumberRegEx,
        //         recipient_cellPhoneNumber.invalidErrorMsg
        //     ),
    }),
    Yup.object().shape({
        [certificationId.name]: Yup.string()
            .nullable()
            .required(`${certificationId.requiredErrorMsg}`),
    }),
];

export default validationSchema;
