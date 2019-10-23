import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import fetch from "isomorphic-unfetch";

const saveForm = data => {
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
  const res = await response.json();
  if (response.status === 200) {
    const { first, last, email } = res;
  }
  console.log(res);
  setTimeout(() => {
    alert(JSON.stringify(res));
  }, 400);

  //     throw new Error("error");
};

const formSchema = Yup.object().shape({
  first: Yup.string()
    .min(2, "*invalid")
    .max(50, "*invalid")
    .required("*required"),
  last: Yup.string()
    .min(2, "*invalid")
    .max(50, "*invalid")
    .required("*required"),
  email: Yup.string()
    .email("*invalid email")
    .required("*required")
});

const Form = () => {
  const initialValues = {
    first: "",
    last: "",
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
                touched.first
                  ? errors.first
                    ? "has-danger"
                    : "has-success"
                  : ""
              }`}>
              <label>
                First Name<span className="text-danger"> *</span>
              </label>
              {errors.first && touched.first ? (
                <span className="error-text">{errors.first}</span>
              ) : null}
              <input
                type="text"
                className="form-control"
                name="first"
                value={values.first}
                onChange={handleChange}
                // required={true}
              />
            </div>
            <div
              className={`form-group col-md-6 ${
                touched.last ? (errors.last ? "has-danger" : "has-success") : ""
              }`}>
              <label>
                Last Name<span className="text-danger"> *</span>
              </label>
              {errors.last && touched.last ? (
                <span className="error-text">{errors.last}</span>
              ) : null}
              <input
                type="text"
                className="form-control"
                name="last"
                value={values.last}
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
