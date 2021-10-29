import React from "react";
import DatePicker from "react-datepicker";
import { useField } from "formik";
import "react-datepicker/dist/react-datepicker.css";
export const DatePickerField = ({ name }) => {
  const [field, meta, helpers] = useField(name);
  const { value } = meta;
  const { setValue } = helpers;
  return (
    <DatePicker
      selected={(value && new Date(value)) || null}
      onChange={(val) => {
        setValue(val);
      }}
    />
  );
};
