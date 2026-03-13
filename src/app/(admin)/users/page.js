"use client"
import Link from 'next/link';
import CommonTable from '../../../components/common/CommonTable/CommonTable';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { getAllUsers } from '../../../services/userService';
import CommonPagination from '../../../components/common/CommonPagination/CommonPagination';
import { useDispatch } from 'react-redux';
import { setTotalUserCount } from '../../../redux/Slices/user.Slice';

const Userspage = () => {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [limit, setLimit] = useState(5)
    const dispatch = useDispatch()

    const fields = [
        { label: "Name" },
        { label: "Email" },
        { label: "Gender" },
        { label: "Role" },
        { label: "DOB" },
        { label: "Action" },
    ];

    const getUsers = async () => {
        const res = await getAllUsers(page, limit)
        if (res) {
            setUsers(res.data)
            setTotalCount(res.totalUsers)
            setTotalPage(res.totalPages)
            setLimit(res.limit)
            dispatch(setTotalUserCount(res.totalUsers))
        }
    }
    useEffect(() => {
        getUsers()
    }, [page])

    const handlePageChange = useCallback((page) => {
        setPage(page)
    }, [])

    return (
        <div>
            <CommonTable fields={fields} >
                {
                    users.length > 0 &&
                    users.map((item, index) => {
                        return (
                            <tr key={item.uuid}>
                                <td>{index + 1}</td>
                                <td>{item.username}</td>
                                <td>{item.useremail}</td>
                                <td>{item.gender}</td>
                                <td>{item.role}</td>
                                <td>{item.dob?.slice(0, 10)}</td>
                                <td>
                                    <Link href={`/users/${item.uuid}`}>
                                        <button className="btn btn-info btn-sm me-2">View</button>
                                    </Link>
                                    {/* <button className="btn btn-warning btn-sm me-2">Update</button> */}
                                    <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </CommonTable>
            {
                totalCount > limit &&
                <CommonPagination
                    limit={limit}
                    page={page}
                    count={totalCount}
                    onChange={handlePageChange}
                />
            }
        </div>
    )
}

export default Userspage