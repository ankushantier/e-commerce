"use client";

import React from "react";
import { useFormik } from "formik";
import CommonModal from "../../CommonModal/CommonModal";
import CommonInput from "../../CommonInput/CommonInput";
import { updateCategory } from "../../../../services/adminService";

const EditCategoryModal = ({ show, onHide, category, onUpdated }) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: category?.name || "",
    },
    onSubmit: async (val, actions) => {
      try {
        const payload = {
          name: val.name,
        };

        const res = await updateCategory(category.id, payload);
        if (res?.success) {
          onUpdated?.();
          onHide();
        }
      } catch (error) {
        console.log(error);
      } finally {
        actions.setSubmitting(false);
      }
    },
  });

  const canSubmit = Boolean(category?.id);

  return (
    <CommonModal title="Edit Category" show={show} onHide={onHide}>
      <form onSubmit={formik.handleSubmit}>
        <CommonInput
          name="name"
          label="Category Name"
          placeholder="Category Name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <div className="modal_action_btn">
          <button type="button" className="btn btn-secondary" onClick={onHide}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary" disabled={!canSubmit || formik.isSubmitting}>
            Update
          </button>
        </div>
      </form>
    </CommonModal>
  );
};

export default EditCategoryModal;

