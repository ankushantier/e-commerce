"use client"
import { Col, Row } from 'react-bootstrap'
import CommonInput from '../../../components/common/CommonInput/CommonInput'
import React, { useEffect, useState } from 'react'
import CommonSelect from '../../../components/common/CommonSelect/CommonSelect'
import { useFormik } from 'formik'
import { getListCategory } from '../../../services/adminService'
import CommonButton from '../../../components/common/commonBtn/commonBtn'

const AddProductpage = () => {
    const [categories, setCateogry] = useState([])
    const getCategory = async () => {
        try {
            const res = await getListCategory()
            if (res.success) {
                setCateogry(res.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCategory()
    }, [])

    const categoryOption = categories.map((item) => ({
        value: item.id,
        label: item.name
    }))

    const { handleSubmit, values, handleChange } = useFormik({
        initialValues: {
            productName: "",
            productPrice: "",
            stock: "",
            brand: "",
            category: '',
            description: "",
        },
        onSubmit: (val, action) => {
            console.log(val);
            action.resetForm()
        }
    })
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col lg={6}>
                        <CommonInput
                            name="productName"
                            label="Product Name"
                            placeholder="Product Name"
                            onChange={handleChange}
                            value={values.productName}
                        />
                    </Col>
                    <Col lg={6}>
                        <CommonInput
                            name="productPrice"
                            label="Product Price"
                            placeholder="Product Price"
                            type='number'
                            value={values.productPrice}
                            onChange={handleChange}

                        />
                    </Col>
                    <Col lg={6}>
                        <CommonInput
                            name="stock"
                            placeholder="stock"
                            label="stock"
                            type='number'
                            value={values.stock}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col lg={6}>
                        <CommonInput
                            name="brand"
                            placeholder="brand"
                            label="brand"
                            value={values.brand}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col lg={6}>
                        <CommonSelect
                            options={categoryOption}
                            name="category"
                            label="Select Category"
                            placeholder='select category'
                            value={values.category}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col lg={6}>
                        <CommonInput
                            name="description"
                            label="Description"
                            placeholder="Description"
                            value={values.description}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <CommonButton type='submit' text="Add Product" />
            </form>

        </div>
    )
}

export default AddProductpage