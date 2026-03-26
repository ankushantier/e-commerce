"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useFormik } from "formik";
import CommonModal from "../../CommonModal/CommonModal";
import CommonInput from "../../CommonInput/CommonInput";
import CommonSelect from "../../CommonSelect/CommonSelect";
import { getListCategory, updateProduct } from "../../../../services/adminService";

const EditProductModal = ({ show, onHide, product, onUpdated }) => {
  const [categories, setCategories] = useState([]);

  const categoryOptions = useMemo(() => {
    return (categories || []).map((item) => ({
      value: item.id,
      label: item.name,
    }));
  }, [categories]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getListCategory();
        if (res?.success) setCategories(res.data || []);
      } catch (error) {
        console.log(error);
      }
    };

    if (show) fetchCategories();
  }, [show]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      product_name: product?.product_name || "",
      description: product?.description || "",
      brand: product?.brand || "",
      price: product?.price ?? "",
      stock: product?.stock ?? "",
      category_id: product?.category_id ?? "",
    },
    onSubmit: async (val, actions) => {
      try {
        const payload = {
          product_name: val.product_name,
          description: val.description,
          brand: val.brand,
          price: val.price,
          stock: val.stock,
          category_id: val.category_id,
          // status is non-editable; backend model requires it
          status: product?.status ?? 1,
        };

        const res = await updateProduct(product.id, payload);
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

  const canSubmit = Boolean(product?.id);

  return (
    <CommonModal title="Edit Product" show={show} onHide={onHide}>
      <form onSubmit={formik.handleSubmit}>
        <CommonInput
          name="product_name"
          label="Product Name"
          placeholder="Product Name"
          onChange={formik.handleChange}
          value={formik.values.product_name}
        />

        <CommonInput
          name="description"
          label="Description"
          placeholder="Description"
          onChange={formik.handleChange}
          value={formik.values.description}
        />

        <CommonInput
          name="brand"
          label="Brand"
          placeholder="Brand"
          onChange={formik.handleChange}
          value={formik.values.brand}
        />

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 220px" }}>
            <CommonInput
              name="price"
              label="Price"
              type="number"
              placeholder="Price"
              onChange={formik.handleChange}
              value={formik.values.price}
            />
          </div>
          <div style={{ flex: "1 1 220px" }}>
            <CommonInput
              name="stock"
              label="Stock"
              type="number"
              placeholder="Stock"
              onChange={formik.handleChange}
              value={formik.values.stock}
            />
          </div>
        </div>

        <CommonSelect
          options={categoryOptions}
          name="category_id"
          label="Select Category"
          placeholder="Select category"
          value={formik.values.category_id}
          onChange={formik.handleChange}
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

export default EditProductModal;

