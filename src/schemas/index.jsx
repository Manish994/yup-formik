import * as Yup from "yup";
export const signUpYup = Yup.object({
  name: Yup.string().min(2).max(25).required("Please Enter Your name"),
  email: Yup.string()
    .email("Please eneter valid email")
    .required("Please Enter your email"),
  password: Yup.string().min(6).required("Please Eneter your password"),
  confirmpassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null, "Password must be match"]),
});
