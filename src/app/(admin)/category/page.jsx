"use client"
import { useFormik } from 'formik'
import CommonButton from '../../../components/common/commonBtn/commonBtn'
import CommonInput from '../../../components/common/CommonInput/CommonInput'
import React, { useState } from 'react'
import { AddCategory } from '../../../services/adminService'
import ListCategory from '../../../components/pages/ListCategory/ListCategory'

const Categorypage = () => {
    const [categoryAdded, setCategroyAdded] = useState(false)
    const { values, handleSubmit, handleChange } = useFormik({
        initialValues: {
            categoryName: ""
        },
        onSubmit: async (val, actions) => {
            try {
                const payload = {
                    name: val.categoryName
                }
                const res = await AddCategory(payload)
                setCategroyAdded(true)
            } catch (error) {
                console.log(error);
            }
        }
    })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CommonInput
                    name="categoryName"
                    label="Category Name"
                    placeholder="Category Name"
                    onChange={handleChange}
                    value={values.categoryName}
                />
                <CommonButton type='submit' text="Add Category" />
            </form>
            <ListCategory categoryAdded={categoryAdded}/>
        </div>
    )
}

export default Categorypage