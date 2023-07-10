import React, { useEffect, useState } from "react";
import { at } from "lodash";
import { useField } from "formik";
import TextField from "@mui/material/TextField";

export default function FostInputField(props) {
    const { errorText, postcode, ...rest } = props;
    const [field, meta, helpers] = useField(props);
    const { setValue } = helpers;
    const [pc, setPc] = useState(""); // 초기값은 빈 문자열로 설정

    function _renderHelperText() {
        const [touched, error] = at(meta, "touched", "error");
        if (touched && error) {
            return error;
        }
    }

    useEffect(() => {
        if (postcode) {
            setValue(postcode); // 초기값으로 postcode 값을 설정
            setPc(postcode); // pc 값을 초기값으로 설정
        }
    }, [postcode, setValue]);

    return (
        <TextField
            fullWidth
            variant="outlined"
            type="text"
            error={meta.touched && meta.error && true}
            helperText={_renderHelperText()}
            value={pc}
            {...field}
            {...rest}
        />
    );
}
