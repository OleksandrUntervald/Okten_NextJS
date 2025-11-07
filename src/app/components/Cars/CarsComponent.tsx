import React from 'react';
import CarComponent from "@/app/components/Cars/CarComponent";
import {apiGet} from "@/services/api.services";
import {ICar} from "@/moduls/ICar";

const CarsComponent = async () => {
    const cars = await apiGet<ICar[]>("/cars");
    return (
        <div>
            {cars.map((car) =>
                <div key={car.id}>

                <CarComponent car={car} key={car.id}/>
            </div>)}

        </div>
    );
};

export default CarsComponent;