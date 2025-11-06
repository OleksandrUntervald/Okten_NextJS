import React, {FC} from "react";
import {apiGet} from "@/services/api.services";
import Link from "next/link";
import {IPosts} from "@/moduls/IPosts";


type ParamsPropsType = {
    params: {id: string}
}

const CommentsPage: FC<ParamsPropsType> = async ({params}) => {

    const {id} = await params
    const post = await apiGet<IPosts>(`/posts/${id}`);

    return (
        <div style={{ padding: "20px" }}>
            <p><strong>Name:</strong> {post.title}</p>
            <p><strong>Username:</strong> {post.body}</p>

            <Link href="/posts" style={{ color: "blue", textDecoration: "underline" }}>
                ← Back to Post
            </Link>
        </div>
    );
}
export default CommentsPage;