"use client"
import Link from 'next/link';
import CommonTable from '../../../components/common/CommonTable/CommonTable';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { deleteUser, getAllUsers } from '../../../services/userService';
import CommonPagination from '../../../components/common/CommonPagination/CommonPagination';
import { useDispatch } from 'react-redux';
import { setTotalUserCount } from '../../../redux/Slices/user.Slice';
import ConfirmationModal from '../../../components/common/Modals/ConfirmationModal/ConfirmationModal';

const Userspage = () => {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [limit, setLimit] = useState(5)
    const dispatch = useDispatch()
    const [showDelete, setShowDelete] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null);

    const fields = [
        { label: "Sr No." },
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

    const handleDelete = async (id) => {
        try {
            if (!selectedUser) return;

            const res = await deleteUser(selectedUser);
            console.log(res);
            if (res.status === 200) {
                setShowDelete(false);
                getUsers();
                setTimeout(() => {
                    alert('delete succes')
                }, 400);
            }
        } catch (error) {
            console.log(error);
        }
    }

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
                                    <Link href={`/users/${item.uuid}`} >
                                        <button className="btn btn-info btn-sm me-2">View</button>
                                    </Link>
                                    <button className="btn btn-danger btn-sm"
                                        onClick={() => {
                                            setSelectedUser(item.uuid)
                                            setShowDelete(true)
                                        }}
                                    >Delete</button>
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
            <ConfirmationModal
                show={showDelete}
                onHide={() => setShowDelete(false)}
                onDelete={handleDelete}
            />
        </div>
    )
}

export default Userspage