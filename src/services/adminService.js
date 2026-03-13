import axiosInstance from "../axios/axios";

export const AdminLogin = async (loginDetails) => {
    try {
        const { data } = await axiosInstance.post("admin/login", loginDetails);
        return data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

export const AddCategory = async (payload) => {
    const { data } = await axiosInstance.post("categories/add", payload);

    return data;
};

export const getListCategory = async () => {
    const { data } = await axiosInstance.get("categories");
    return data;
};