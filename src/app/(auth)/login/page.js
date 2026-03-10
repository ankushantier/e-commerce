"use client"
import Link from "next/link";
import CommonButton from "../../../components/commonBtn/commonBtn";
import CommonInput from "../../../components/CommonInput/CommonInput";
import React from "react";
import { useFormik } from "formik";
import { adminLogin } from "../../../services/adminService";
const Loginpage = () => {

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await adminLogin(values);

        if (res.token) {
          resetForm();
        }

      } catch (error) {
        console.log(error);
      }
    }
  })

  return (
    <div className="login-page">
      <h2 className="title">Login</h2>

      <form onSubmit={handleSubmit}>
        <CommonInput
          name="email"
          value={values.email}
          onChange={handleChange}
          label="Email"
          placeholder="Enter your email"
        />

        <CommonInput
          name="password"
          value={values.email}
          onChange={handleChange}
          label="Password"
          placeholder="Enter your password"
        />

        <div className="forgot">
          <a href="#">Forgot Password?</a>
        </div>

        <CommonButton text="login" fullWidth type="submit" />

        <p className="register">
          Don't have an account? <Link href="/register">Register Now</Link>
        </p>
      </form>
    </div>
  );
};

export default Loginpage;