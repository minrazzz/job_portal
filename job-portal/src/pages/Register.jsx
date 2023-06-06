import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";

const nameRegex = /^[a-zA-Z-' ]+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(2, "*Name must have at least 2 characters")
    .matches(nameRegex, "*Please enter a valid name")
    .max(100, "*Names can't be longer than 100 characters")
    .required("*Required"),
  email: Yup.string().email("Invalid email address!").required("*Required!"),
  password: Yup.string()
    .min(8, "*Password must contain minimum of 8 characters")
    .matches(
      passwordRegex,
      "*Must contain at least one uppercase letter, one lowercase letter, one number and one special character"
    )
    .required("*Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password doesnot match!")
    .required("*Required"),
});

const Register = () => {
  const onSubmit = (values) => {
    // console.log("formike", values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  console.log("Visited data", formik.values);
  return (
    <>
      <form
        action=""
        className="shadow-md mx-auto max-w-sm pt-1  pb-3 px-5 max-h dark:shadow-2xl dark:bg-[#1E2936] mt-20"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-3xl font-fair text-[#057E01] font-bold text-center mb-4 dark:text-white py-3">
          Register
        </h1>
        <div className="form-control mb-5 ">
          <input
            className="email bg-[#E8F6F0] border-transparent focus:border-transparent focus:ring-0 block w-full  py-2 mb-1 rounded-md px-2 shadow-md dark:bg-white"
            type="text"
            name="fullName"
            placeholder="Full Name"
            {...formik.getFieldProps("fullName")}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div className="text-red-500 text-sm ">
              {formik.errors.fullName}
            </div>
          ) : null}
        </div>

        <div className="form-control mb-5 ">
          <input
            className="email bg-[#E8F6F0] border-transparent focus:border-transparent focus:ring-0 block w-full  py-2 mb-1 rounded-md px-2 shadow-md dark:bg-white"
            type="text"
            name="email"
            placeholder="Email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm ">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-control mb-5 ">
          <input
            className="password bg-[#E8F6F0] border-transparent focus:border-transparent focus:ring-0 block w-full  py-2 mb-1 rounded-md px-2 shadow-md dark:bg-white"
            type="text"
            name="password"
            placeholder="Password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm ">
              {formik.errors.password}
            </div>
          ) : null}
        </div>

        <div className="form-control mb-5 ">
          <input
            className="password bg-[#E8F6F0] border-transparent focus:border-transparent focus:ring-0 block w-full  py-2 mb-1 rounded-md px-2 shadow-md dark:bg-white"
            type="text"
            name="confirmPassword"
            placeholder="Confirm Password"
            {...formik.getFieldProps("confirmPassword")}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="text-red-500 text-sm ">
              {formik.errors.confirmPassword}
            </div>
          ) : null}
        </div>

        <div className="grid place-items-center mb-3">
          <button
            className="py-1 w-1/4 bg-[#E8F6F0] text-[#057E01] rounded-md hover:bg-[#BCEAD5] hover:transition-all dark:bg-[#ced6e0] dark:hover:bg-[#b0bdce] dark:text-black"
            type="submit"
          >
            Register
          </button>
        </div>
        <div className="Register mx-auto text-center flex flex-col gap-1 dark:text-slate-400">
          <p className="">Don't have an account ?</p>
          <NavLink
            className="hover:font-bold hover:transition-all text-[#057E01] dark:text-white"
            to="/login"
          >
            Login
          </NavLink>
        </div>
      </form>
    </>
  );
};

export default Register;
