import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import fetch from "isomorphic-unfetch";

const saveForm = data => {
  console.log(JSON.stringify(data));
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  };
  return fetch(`/api`, options);
};

const requestSaveForm = async data => {
  const response = await saveForm(data);
  if (response.status === 200) {
    const { firstName, lastName, email } = await response.json();
    setTimeout(() => {
      alert(email);
    }, 400);
    return "success";
  }
  //     throw new Error("error");
};

const formSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "*invalid")
    .max(50, "*invalid")
    .required("*required"),
  lastName: Yup.string()
    .min(2, "*invalid")
    .max(50, "*invalid")
    .required("*required"),
  email: Yup.string()
    .email("*invalid email")
    .required("*required")
});

const Form = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: ""
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formSchema}
      onSubmit={(values, { setSubmitting }) => {
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        // }, 400);

        requestSaveForm(values);
      }}>
      {({
        values,
        errors,
        status,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div
              className={`form-group col-md-6 ${
                touched.firstName
                  ? errors.firstName
                    ? "has-danger"
                    : "has-success"
                  : ""
              }`}>
              <label>
                First Name<span className="text-danger"> *</span>
              </label>
              {errors.firstName && touched.firstName ? (
                <span className="error-text">{errors.firstName}</span>
              ) : null}
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                // required={true}
              />
            </div>
            <div
              className={`form-group col-md-6 ${
                touched.lastName
                  ? errors.lastName
                    ? "has-danger"
                    : "has-success"
                  : ""
              }`}>
              <label>
                Last Name<span className="text-danger"> *</span>
              </label>
              {errors.lastName && touched.lastName ? (
                <span className="error-text">{errors.lastName}</span>
              ) : null}
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                // required={true}
              />
            </div>
          </div>
          <div
            className={`form-group ${
              touched.email ? (errors.email ? "has-danger" : "has-success") : ""
            }`}>
            <label>
              Email<span className="text-danger"> *</span>
            </label>
            {errors.email && touched.email ? (
              <span className="error-text">{errors.email}</span>
            ) : null}
            <input
              type="email"
              className="form-control"
              placeholder="example@example.com"
              name="email"
              value={values.email}
              onChange={handleChange}
              //   required={true}
            />
          </div>
          <div style={{ textAlign: "right" }}>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Form;
