import axios from "axios";

const axiosInstanse = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {'Content-Type': 'application/json'},
})

export const apiGet = async <T>(url: string): Promise<T> => {
    const response = await axiosInstanse.get<T>(url);
    return response.data;
};