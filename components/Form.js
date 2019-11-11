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
    const { name, email, message } = res;
  }
  console.log(res);
  setTimeout(() => {
    alert(JSON.stringify(res));
  }, 400);

  //     throw new Error("error");
};

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "*invalid")
    .max(50, "*invalid")
    .required("*required"),
  email: Yup.string()
    .email("*invalid email")
    .required("*required"),
  message: Yup.string().required("*required")
});

const Form = () => {
  const initialValues = {
    name: "",
    email: "",
    message: ""
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
              className={`form-group col-md-5 ${
                touched.name ? (errors.name ? "has-danger" : "has-success") : ""
              }`}>
              <label>
                Name<span className="text-danger"> *</span>
              </label>
              {errors.name && touched.name ? (
                <span className="error-text">{errors.name}</span>
              ) : null}
              <input
                type="text"
                className="form-control"
                name="name"
                value={values.name}
                onChange={handleChange}
                // required={true}
              />
            </div>
            <div
              className={`form-group col-md-7 ${
                touched.email
                  ? errors.email
                    ? "has-danger"
                    : "has-success"
                  : ""
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
                // placeholder="example@example.com"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div
            className={`form-group ${
              touched.message
                ? errors.message
                  ? "has-danger"
                  : "has-success"
                : ""
            }`}>
            <label>
              Message<span className="text-danger"> *</span>
            </label>
            {errors.message && touched.message ? (
              <span className="error-text">{errors.message}</span>
            ) : null}
            <textarea
              type="message"
              className="form-control"
              name="message"
              rows="4"
              value={values.message}
              onChange={handleChange}
            />
          </div>
          <div style={{ textAlign: "right" }}>
            <button
              type="submit"
              className="btn btn-info"
              disabled={isSubmitting}>
              Send
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Form;
