import React, {FC} from "react";
import Link from "next/link";
import {SearchParams} from "next/dist/server/request/search-params";
import {ICar} from "@/moduls/ICar";


type ParamsPropsType = {
    searchParams: Promise<SearchParams>;
}

const CarPage: FC<ParamsPropsType> = async ({searchParams}) => {

    const {data} = await searchParams;
    let car = null;
    if (typeof data === 'string'){
        car = JSON.parse(data) as ICar;
    }

    return (
       <div>
           {car &&
               <div style={{ padding: "20px" }}>
                   <p><strong>brand:</strong> {car.brand}</p>
                   <p><strong>price:</strong> {car.price}</p>
                   <p><strong>year:</strong> {car.year}</p>

                   <Link href="/cars" style={{ color: "blue", textDecoration: "underline" }}>
                       ← Back to Cars
                   </Link>
               </div>
           }
       </div>
    );
}
export default CarPage;