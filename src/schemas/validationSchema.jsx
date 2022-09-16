import * as Yup from "yup";
const ValidationSch = Yup.object({
  name: Yup.string().min(2).max(25).required("Full Name is Required !"),
  email: Yup.string().email().required("Email is Required !"),
  password: Yup.string().min(6).required("Password is Required !"),
  confirmpassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null, "Password must be match"]),
});

export { ValidationSch };
