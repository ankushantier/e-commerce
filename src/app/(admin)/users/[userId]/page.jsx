"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getUserById } from "../../../../services/userService";
import CustomBreadcrumbs from "../../../../components/common/customBreadcrumbs/customBreadcrumbs";

const UserDetailpage = () => {

    const { userId } = useParams();
    const [user, setUser] = useState(null);

    const breadcrumbData = [
        // { label: "Home", path: "/" },
        { label: "users", path: "/users" },
        { label: "user Details" } // last item (active)
    ];
    const fetchUser = async () => {
        try {
            const res = await getUserById(userId);
            if (res) {
                setUser(res);
            }
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };

    useEffect(() => {
        if (userId) {
            fetchUser();
        }
    }, [userId]);

    if (!user) return <p>Loading...</p>;

    return (
        <div className="user-detail-page">

            <CustomBreadcrumbs breadcrumbData={breadcrumbData} />
            <h1>User Detail</h1>

            <div className="card p-3">
                <h2>{user.username}</h2>
                <p>Email: {user.useremail}</p>
                <p>Gender: {user.gender}</p>
                <p>Role: {user.role}</p>
                <p>User ID: {user.uuid}</p>
            </div>
        </div>
    );
};

export default UserDetailpage;


