import axios from 'axios';

const API_URL = 'http://localhost:5000/api/';

const axiosInstance = axios.create({
    baseURL: API_URL,
});
export default axiosInstance;

// axiosInstance.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

// export const loginUser = async (email, password) => {
//     const response = await axiosInstance.post('auth/login', { email, password });
//     return response.data;
// };

// export const registerUser = async (userData) => {
//     const response = await axiosInstance.post('auth/register', userData);
//     return response.data;
// };

// export const forgotPassword = async (email, currentPassword, newPassword, confirmNewPassword) => {
//     const response = await axiosInstance.post('/forgot-password', {
//         email,
//         currentPassword,
//         newPassword,
//         confirmNewPassword
//     });
//     return response.data;
// };

// export const fetchUserProfile = async () => {
//     const response = await axiosInstance.get('/me');
//     return response.data;
// };

// export const getAllUsers = async (page) => {
//       const { data } = await axiosInstance.get(`/users?page=${page}`);
//     return data
// }

export const getAllUsers = async (page, limit) => {
    const { data } = await axiosInstance.get("/users", {
        params: { page, limit }
    });

    return data;
};

export const getUserById = async (id) => {
    const { data } = await axiosInstance.get(`/users/${id}`)
    return data
}