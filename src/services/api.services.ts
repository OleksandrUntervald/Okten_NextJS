import axios from "axios";
import {ICar} from "@/moduls/ICar";

const BASE_URL = "http://owu.linkpc.net/carsAPI/v1";

const axiosInstanse = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'},
})

export const apiGet = async <T>(url: string): Promise<T> => {
    const response = await axiosInstanse.get<T>(url);
    return response.data;
};

export const createCar = async (brand: string, price: number, year: number): Promise<ICar> => {
    const response = await axios.post<ICar>(`${BASE_URL}/cars`, { brand, price, year }, {
        headers: { "Content-Type": "application/json" },
    });
    return response.data;
};