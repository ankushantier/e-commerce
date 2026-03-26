import { DeleteCategory, getListCategory } from '../../../services/adminService'
import React, { useEffect, useState } from 'react'
import EditCategoryModal from '../../common/Modals/EditCategoryModal/EditCategoryModal'

const ListCategory = ({ categoryAdded }) => {
    const [list, setList] = useState([])
    const [showEdit, setShowEdit] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(null)
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

    const handleEdit = (item) => {
        setSelectedCategory(item)
        setShowEdit(true)
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

            <EditCategoryModal
                show={showEdit}
                onHide={() => setShowEdit(false)}
                category={selectedCategory}
                onUpdated={getList}
            />
        </div>
    )
}

export default ListCategory