import React, {FC} from "react";
import {apiGet} from "@/services/api.services";
import {IUser} from "@/moduls/IUser";
import Link from "next/link";


type ParamsPropsType = {
    params: {id: string}
}

const UserPage: FC<ParamsPropsType> = async ({params}) => {

    const {id} = await params
    const user = await apiGet<IUser>(`/users/${id}`);

    return (
        <div style={{ padding: "20px" }}>
            <h2>User #{user.id}</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p>

            <Link href="/users" style={{ color: "blue", textDecoration: "underline" }}>
                ← Back to Users
            </Link>
        </div>
    );
}
export default UserPage;