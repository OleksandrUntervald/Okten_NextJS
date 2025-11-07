'use server';

import { createCar } from "@/services/api.services";
import { revalidatePath } from "next/cache";

export const saveCars = async (formData: FormData) => {
    // 1. Отримуємо дані з форми
    const brand = formData.get("brand") as string;
    const price = Number(formData.get("price"));
    const year = Number(formData.get("year"));

    if (!brand || !price || !year) {
        throw new Error("Усі поля мають бути заповнені!");
    }

    // 3. Викликаємо наш API POST запит
    await createCar( brand, price, year );

    // 4. Оновлюємо сторінку (щоб дані підвантажилися знову)
    revalidatePath("/cars");
};
