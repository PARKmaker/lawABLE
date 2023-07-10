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
        // 다음 주소 api 컨포넌트에서만 한번만 실행. 만약 useEffect가 없다면 주소값이 value에 저장이 안되어 유효성 검사에 실패
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
