"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getUserById } from "../../../../services/userService";
import CustomBreadcrumbs from "../../../../components/common/customBreadcrumbs/customBreadcrumbs";

const UserDetailpage = () => {

    const { userId } = useParams();
    const [user, setUser] = useState(null);

    const breadcrumbData = [
        { label: "Users", path: "/users" },
        { label: "User Details" }
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

            <div className="user-detail-card">
                <h1 className="page-title">User Detail</h1>

                <div className="user-info-grid">

                    <div className="info-item">
                        <span>Username</span>
                        <p>{user.username}</p>
                    </div>

                    <div className="info-item">
                        <span>Email</span>
                        <p>{user.useremail}</p>
                    </div>

                    <div className="info-item">
                        <span>Gender</span>
                        <p>{user.gender}</p>
                    </div>

                    <div className="info-item">
                        <span>Role</span>
                        <p>{user.role}</p>
                    </div>

                    <div className="info-item">
                        <span>User ID</span>
                        <p>{user.uuid}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserDetailpage;