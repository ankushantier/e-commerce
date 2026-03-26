"use client";

import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import CommonInput from "../../../components/common/CommonInput/CommonInput";
import { changeAdminPassword } from "../../../services/adminService";

const SettingPage = () => {
  const adminData = useSelector((state) => state.admin.adminData);

  const [apiMessage, setApiMessage] = useState({ type: "success", text: "" });

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    onSubmit: async (val, actions) => {
      try {
        setApiMessage({ type: "success", text: "" });

        if (val.newPassword !== val.confirmNewPassword) {
          setApiMessage({ type: "error", text: "New password and confirm password do not match." });
          return;
        }

        const res = await changeAdminPassword({
          email: adminData?.email,
          oldPassword: val.oldPassword,
          newPassword: val.newPassword,
        });

        if (res?.success) {
          setApiMessage({ type: "success", text: res.message || "Password updated successfully." });
          actions.resetForm();
        } else {
          setApiMessage({ type: "error", text: res?.message || "Failed to update password." });
        }
      } catch (error) {
        setApiMessage({ type: "error", text: error?.message || "Something went wrong." });
      } finally {
        actions.setSubmitting(false);
      }
    },
  });

  const isFormValid = useMemo(() => {
    return Boolean(
      adminData?.email &&
        formik.values.oldPassword &&
        formik.values.newPassword &&
        formik.values.confirmNewPassword &&
        formik.values.newPassword === formik.values.confirmNewPassword
    );
  }, [adminData?.email, formik.values]);

  return (
    <div className="settings-page">
      <div className="settings-card">
        <h2 className="settings-title">Settings</h2>
        <p className="settings-subtitle">Signed in as {adminData?.email || "--"}</p>

        <form className="settings-form" onSubmit={formik.handleSubmit}>
          <CommonInput
            name="oldPassword"
            label="Old Password"
            type="password"
            placeholder="Enter old password"
            onChange={formik.handleChange}
            value={formik.values.oldPassword}
          />

          <CommonInput
            name="newPassword"
            label="New Password"
            type="password"
            placeholder="Enter new password"
            onChange={formik.handleChange}
            value={formik.values.newPassword}
          />

          <CommonInput
            name="confirmNewPassword"
            label="Confirm New Password"
            type="password"
            placeholder="Confirm new password"
            onChange={formik.handleChange}
            value={formik.values.confirmNewPassword}
          />

          <button
            type="submit"
            className="btn btn-primary settings-submit"
            disabled={!isFormValid || formik.isSubmitting}
          >
            Change Password
          </button>

          {apiMessage.text ? (
            <p
              className={
                apiMessage.type === "error" ? "settings-message settings-message--error" : "settings-message"
              }
              role="status"
            >
              {apiMessage.text}
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default SettingPage;