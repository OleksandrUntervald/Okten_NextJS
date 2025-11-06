import React, { FC } from "react";
import { IUser } from "@/moduls/IUser";
import Link from "next/link";

type UserPropsType = {
    user: IUser;
};

const UserComponent: FC<UserPropsType> = ({ user }) => {
    return (
        <Link
            href={{pathname:`/users/${user.id}`, query: {data: JSON.stringify(user)}}}
            className="block border rounded-xl p-4 mb-2 hover:bg-gray-100 hover:shadow transition"
        >
            <p className="font-semibold text-lg text-blue-600 hover:underline">
                {user.name}
            </p>
            <p className="text-sm text-gray-500">ID: {user.id}</p>
        </Link>
    );
};

export default UserComponent;
