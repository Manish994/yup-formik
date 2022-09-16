import React from "react";
import { useFormik } from "formik";
// import { signUpYup } from "./schemas";
import { ValidationSch } from "./schemas/validationSchema";
const initialFormValues = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const NewRegistration = () => {
  const { values, errors, handleChange, touched, handleSubmit } = useFormik({
    initialValues: initialFormValues,
    validationSchema: ValidationSch,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group row mt-5">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              name="name"
              autoComplete="off"
              placeholder="Enter Name"
              value={values.name}
              onChange={handleChange}
            ></input>
            {errors.name && touched.name ? (
              <p className="text-danger">{errors.name}</p>
            ) : null}
          </div>
        </div>
        <div className="form-group row mt-5">
          <label className="col-sm-2 col-form-label" htmlFor="email">
            Email
          </label>
          <div className="col-sm-6">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter Email"
              autoComplete="off"
              value={values.email}
              onChange={handleChange}
            ></input>
            {errors.email && touched.email ? (
              <p className="text-danger">{errors.email}</p>
            ) : null}
          </div>
        </div>
        <div className="form-group row mt-5">
          <label className="col-sm-2 col-form-label" htmlFor="password">
            Password
          </label>
          <div className="col-sm-6">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Enter Password"
              autoComplete="off"
              value={values.password}
              onChange={handleChange}
            ></input>
            {errors.password && touched.password ? (
              <p className="text-danger">{errors.password}</p>
            ) : null}
          </div>
        </div>
        <div className="form-group row mt-5">
          <label className="col-sm-2 col-form-label" htmlFor="confirmpassword">
            Confirm Password
          </label>
          <div className="col-sm-6">
            <input
              className="form-control"
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              autoComplete="off"
              value={values.confirmpassword}
              onChange={handleChange}
            ></input>
            {errors.confirmpassword && touched.confirmpassword ? (
              <p className="text-danger">{errors.confirmpassword}</p>
            ) : null}
          </div>
        </div>
        <div className="form-group row mt-5">
          <div className="col-sm-6">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewRegistration;
