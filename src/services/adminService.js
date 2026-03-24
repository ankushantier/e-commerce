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

export const DeleteCategory = async (id) => {
    const res = await axiosInstance.delete(`categories/delete/${id}`);
    return res.data;
};

export const AddProducts = async (productData) => {
    const res = await axiosInstance.post("products/add", productData);
    return res.data;
}
export const GetAllProducts = async () => {
    const res = await axiosInstance.get("products");
    return res.data;
}

export const deleteProduct = async (id) => {
    const res = await axiosInstance.delete(`products/delete/${id}`);
    return res.data;
}