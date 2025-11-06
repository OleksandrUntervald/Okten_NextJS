import React from 'react';
import {IUser} from "@/moduls/IUser";
import UserComponent from "@/app/components/Users/UserComponent";
import {apiGet} from "@/services/api.services";

const UsersComponent = async () => {
    const users = await apiGet<IUser[]>("/users");
    return (
        <div>
            {users.map((user) =>
                <div key={user.id}>

                <UserComponent user={user} key={user.id}/>
            </div>)}

        </div>
    );
};

export default UsersComponent;