import axios from "axios";
import {IUser} from "@/moduls/IUser";

const axiosInstanse = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {'Content-Type': 'application/json'},
})

export const apiGet = async <T>(url: string): Promise<T> => {
    const response = await axiosInstanse.get<T>(url);
    return response.data;
};

// export const getAllUsers = async (): Promise<IUser[]> => {
//         const usersFetch = await fetch('https://jsonplaceholder.typicode.com/users')
//         .then(value => value.json())
//       return usersFetch
// }