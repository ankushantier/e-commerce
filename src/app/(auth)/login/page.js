"use client"
import Link from "next/link";
import CommonButton from "../../../components/common/commonBtn/commonBtn";
import CommonInput from "../../../components/common/CommonInput/CommonInput";
import React from "react";
import { useFormik } from "formik";
import { AdminLogin } from "../../../services/adminService";
import { useDispatch } from "react-redux";
import { setAdminData, setToken } from "../../../redux/Slices/admin.slice";
import { useRouter } from "next/navigation";

const Loginpage = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await AdminLogin(values);
        console.log(res);
        if (res.token) {
          resetForm();
          dispatch(setToken(res.token))
          dispatch(setAdminData(res.admin))
          router.push("/dashboard")
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