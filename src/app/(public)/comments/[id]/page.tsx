import React, {FC} from "react";
import {apiGet} from "@/services/api.services";
import Link from "next/link";
import {IComments} from "@/moduls/IComments";


type ParamsPropsType = {
    params: {id: string}
}

const CommentsPage: FC<ParamsPropsType> = async ({params}) => {

    const {id} = await params
    const comment = await apiGet<IComments>(`/comments/${id}`);

    return (
        <div style={{ padding: "20px" }}>
            <p><strong>Name:</strong> {comment.name}</p>
            <p><strong>Username:</strong> {comment.body}</p>

            <Link href="/comments" style={{ color: "blue", textDecoration: "underline" }}>
                ← Back to Comments
            </Link>
        </div>
    );
}
export default CommentsPage;