import React, { useState } from "react";
import PropTypes from "prop-types";
import { at } from "lodash";
import { useField } from "formik";
import {
    InputLabel,
    FormControl,
    Select,
    MenuItem,
    FormHelperText,
} from "@mui/material";
import { useEffect } from "react";

function SelectField(props) {
    const { label, data, certification_id, onSelectForm, ...rest } = props;
    const [field, meta, helpers] = useField(props);
    const { setValue } = helpers;
    const { value: selectedValue } = field;
    const [touched, error] = at(meta, "touched", "error");
    const isError = touched && error && true;
    const [id, setId] = useState(""); // 초기값은 빈 문자열로 설정

    function _renderHelperText() {
        if (isError) {
            return <FormHelperText>{error}</FormHelperText>;
        }
    }

    useEffect(() => {
        if (certification_id) {
            setValue(certification_id);
            setId(certification_id);
        }
    }, [certification_id, setValue]);

    const changeIdHandler = (e) => {
        setValue(e.target.value);
        setId(e.target.value);
        onSelectForm(e.target.value);
    };

    return (
        <FormControl {...rest} error={isError}>
            <InputLabel>{label}</InputLabel>
            <Select {...field} value={id ? id : ""} onChange={changeIdHandler}>
                {data.map((item, index) => (
                    <MenuItem key={index} value={item.value}>
                        {item.label}
                    </MenuItem>
                ))}
            </Select>
            {_renderHelperText()}
        </FormControl>
    );
}

SelectField.defaultProps = {
    data: [],
};

SelectField.propTypes = {
    data: PropTypes.array.isRequired,
};

export default SelectField;
