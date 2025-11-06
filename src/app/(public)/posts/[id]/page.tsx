import React, {FC} from "react";
import Link from "next/link";
import {SearchParams} from "next/dist/server/request/search-params";
import {IPosts} from "@/moduls/IPosts";



type ParamsPropsType = {
    searchParams: Promise<SearchParams>
}

const CommentsPage: FC<ParamsPropsType> = async ({searchParams}) => {

    const {dataPost} = await searchParams;
    let post = null;
    if (typeof dataPost === 'string'){
        post = JSON.parse(dataPost) as IPosts;
    }

    return (
        <div>
        {post &&     <div style={{ padding: "20px" }}>
            <p><strong>Name:</strong> {post.id}</p>
            <p><strong>Username:</strong> {post.body}</p>

            <Link href="/posts" style={{ color: "blue", textDecoration: "underline" }}>
                ← Back to Post
            </Link>
        </div>}
        </div>
    );
}
export default CommentsPage;