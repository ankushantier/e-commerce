import { getListCategory } from '../../../services/adminService'
import React, { useEffect, useState } from 'react'

const ListCategory = ({ categoryAdded }) => {

    const [list, setList] = useState([])
    const getList = async () => {
        try {
            const res = await getListCategory()
            console.log(res);
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

    return (
        <div className="category-list">
            <h1 className="category-list__title">Categories</h1>

            <ul className="category-list__wrapper">
                {list.map((item, index) => (
                    <li key={index} className="category-card">
                        <h2>{item.name}</h2>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListCategory