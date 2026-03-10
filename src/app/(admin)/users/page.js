"use client"
import Link from 'next/link';
import CommonTable from '../../../components/CommonTable/CommonTable';
import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../../../services/userService';

const Userspage = () => {
    const [users, setUsers] = useState([])
    const fields = [
        { label: "Name" },
        { label: "Email" },
        { label: "Gender" },
        { label: "Role" },
        { label: "Action" },
    ];

    const getUsers = async () => {
        const res = await getAllUsers()
        if (res) {
            console.log('user fetched');
            console.log(res);
            setUsers(res)
        }
    }
    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div>
            <CommonTable fields={fields} >
                {
                    users.length > 0 &&
                    users.map((item) => {
                        return (
                            <tr key={item.uuid}>
                                <td>{item.username}</td>
                                <td>{item.useremail}</td>
                                <td>{item.gender}</td>
                                <td>{item.role}</td>
                                {/* <td>{item.dob}</td> */}
                                <td>{item.dob?.slice(0,10)}</td>
                                <td>
                                    <Link href={`/users/${item.uuid}`}>
                                        <button className="btn btn-info btn-sm me-2">View</button>
                                    </Link>
                                    <button className="btn btn-warning btn-sm me-2">Update</button>
                                    <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </CommonTable>
        </div>
    )
}

export default Userspage