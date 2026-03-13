import axiosInstance from "../axios/axios";

export const AdminLogin = async (loginDetails) => {
    try {
        const { data } = await axiosInstance.post("admin/login", loginDetails);
        return data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};
