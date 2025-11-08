import React, {FC} from "react";
import {IUser} from "@/moduls/IUser";
import Link from "next/link";
import {SearchParams} from "next/dist/server/request/search-params";


type ParamsPropsType = {
    searchParams: Promise<SearchParams>;
}

const UserPage: FC<ParamsPropsType> = async ({searchParams}) => {

    const {data} = await searchParams;
    let user = null;
    if (typeof data === 'string'){
        user = JSON.parse(data) as IUser;
    }

    return (
       <div>
           {user &&
               <div style={{ padding: "20px" }}>
                   <p><strong>Name:</strong> {user.name}</p>
                   <p><strong>Username:</strong> {user.email}</p>
                   <p><strong>Username:</strong> {user.website}</p>

                   <Link href="/users" style={{ color: "blue", textDecoration: "underline" }}>
                       ← Back to Users
                   </Link>
               </div>
           }
       </div>
    );
}
export default UserPage;