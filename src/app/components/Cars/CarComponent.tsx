import React, { FC } from "react";
import Link from "next/link";
import {ICar} from "@/moduls/ICar";

type CarPropsType = {
    car: ICar;
};

const CarComponent: FC<CarPropsType> = ({ car }) => {

    return (
        <Link
            href={{pathname:`/cars/${car.id}`, query: {data: JSON.stringify(car)}}}
            className="block border rounded-xl p-4 mb-2 hover:bg-gray-100 hover:shadow transition"
        >
            <p className="font-semibold text-lg text-blue-600 hover:underline">
                brand: {car.brand}
            </p>
            <p className="font-semibold text-lg text-blue-600 hover:underline">
                price: {car.price}
            </p>
            <p className="text-sm  text-blue-600 hover:underline">year: {car.year}</p>
        </Link>
    );
};

export default CarComponent;
