import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Formik, Field } from "formik";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { DatePickerField } from "../datepickerField/DatePickerField";

export const AddTransactionForm = ({ closeModal }) => {
  let schema = yup.object().shape({
    title: yup
      .string()
      .required("title is required")
      .min(2, "title must have at least 2 characters")
      .max(30, "titles can't be longer than 30 characters"),
    type: yup.string().required("type is required"),
    tag: yup.string().required("tag is required"),
    amount: yup
      .number()
      .required()
      .moreThan(0, "number must be greater than 0"),
    createdOn: yup.date().required(),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
        console.log("onSubmit is running");
        closeModal();
      }}
      initialValues={{
        title: "",
        type: "",
        tag: "grocery",
        amount: "",
        createdOn: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit} className={styles.form}>
          <Row className="mb-3">
            <Form.Group
              md="4"
              controlId="title"
              className="d-flex justify-content-start align-items-center"
            >
              <Form.Label className={styles.formLabel}>Title</Form.Label>
              <div className="w-100">
                <Form.Control
                  className={styles.formControl}
                  type="text"
                  name="title"
                  value={values.title}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.title && !errors.title}
                  isInvalid={touched.title && errors.title}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.title}
                </Form.Control.Feedback>
              </div>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              md="4"
              controlId="type"
              className="d-flex justify-content-start align-items-center"
            >
              <Form.Label className={styles.formLabel}>Type</Form.Label>
              <div className="w-100">
                <div
                  role="group"
                  aria-labelledby="my-radio-group"
                  className={styles.formControl}
                >
                  <label>
                    <Field type="radio" name="type" value="income" />
                    income
                  </label>
                  <label className={styles.expenseRadioLabel}>
                    <Field type="radio" name="type" value="expense" />
                    expense
                  </label>
                </div>
                {touched.type && (
                  <div className={styles.errorText}>
                    {errors.type ? errors.type : ""}
                  </div>
                )}
              </div>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              md="4"
              controlId="amount"
              className="d-flex justify-content-start align-items-center"
            >
              <Form.Label className={styles.formLabel}>Amount</Form.Label>
              <div className="w-100">
                <Form.Control
                  className={styles.formControl}
                  type="number"
                  name="amount"
                  value={values.amount}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.amount && !errors.amount}
                  isInvalid={touched.amount && errors.amount}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.amount}
                </Form.Control.Feedback>
              </div>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              md="4"
              controlId="tag"
              className="d-flex justify-content-start align-items-center"
            >
              <Form.Label className={styles.formLabel}>Tag</Form.Label>
              <div className="w-100">
                <Form.Select
                  size="sm"
                  className={styles.formControl}
                  name="tag"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.tag && !errors.tag}
                  isInvalid={touched.tag && errors.tag}
                >
                  <option value="grocery">grocery</option>
                  <option value="entertainment">entertainment</option>
                  <option value="transportation">transportation</option>
                  <option value="others">others</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.tag}
                </Form.Control.Feedback>
              </div>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              md="4"
              controlId="createdOn"
              className="d-flex justify-content-start align-items-center"
            >
              <Form.Label className={styles.formLabel}>When</Form.Label>
              <div className="w-100">
                <DatePickerField name="createdOn" />
              </div>
            </Form.Group>
          </Row>
          <Row>
            <Button type="submit" className={styles.addButton}>
              Add
            </Button>
          </Row>
          {JSON.stringify(errors)}
        </Form>
      )}
    </Formik>
  );
};
