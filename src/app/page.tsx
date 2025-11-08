'use client';

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { ICar } from "@/moduls/ICar";
import { carValidator } from "@/validators/car.validator";
import { saveCars } from "@/server-actions/serverActions";

export default function CreateCar() {
    const {
        handleSubmit,
        register,
        formState: { errors, isValid },
        reset,
    } = useForm<ICar>({ mode: "all", resolver: joiResolver(carValidator) });

    const customHandler = async (formDataProps: ICar) => {
        try {

            const formData = new FormData();
            formData.append("brand", formDataProps.brand);
            formData.append("price", String(formDataProps.price));
            formData.append("year", String(formDataProps.year));

            await saveCars(formData);

            alert("✅ Авто успішно створено!");
            reset();
        } catch (err) {
            console.error(err);
            alert("❌ Помилка при збереженні авто.");
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white text-black">
            <form onSubmit={handleSubmit(customHandler)} className="flex flex-col gap-2">
                <label>
                    <input type="text" {...register("brand")} className="border-2" placeholder="brand" />
                    {errors.brand && <div className="text-red-500">{errors.brand.message}</div>}
                </label>
                <label>
                    <input type="number" {...register("price")} className="border-2" placeholder="price" />
                    {errors.price && <div className="text-red-500">{errors.price.message}</div>}
                </label>
                <label>
                    <input type="number" {...register("year")} className="border-2" placeholder="year" />
                    {errors.year && <div className="text-red-500">{errors.year.message}</div>}
                </label>
                <button className="border-2" disabled={!isValid}>send</button>
            </form>
        </div>
    );
}
