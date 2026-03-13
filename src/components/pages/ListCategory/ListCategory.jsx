import { DeleteCategory, getListCategory } from '../../../services/adminService'
import React, { useEffect, useState } from 'react'

const ListCategory = ({ categoryAdded }) => {
    const [list, setList] = useState([])
    const getList = async () => {
        try {
            const res = await getListCategory()
            if (res) {
                setList(res.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getList()
    }, [categoryAdded])

    const handleDelete = async (id) => {
        try {
            const res = await DeleteCategory(id)

            if (res.success) {
                getList()
            }

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="category-list">
            <h1 className="common-subHeading">Categories</h1>

            <ul className="category-list__wrapper">
                {list.map((item) => (
                    <li key={item.id} className="category-card">
                        <h2>{item.name}</h2>

                        <div className="card-actions">
                            <button
                                className="btn-edit"
                                onClick={() => handleEdit(item)}
                            >
                                Edit
                            </button>

                            <button
                                className="btn-delete"
                                onClick={() => handleDelete(item.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListCategory