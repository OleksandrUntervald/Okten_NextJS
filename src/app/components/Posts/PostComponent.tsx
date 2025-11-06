import React, {FC} from 'react';
import {IPosts} from "@/moduls/IPosts";
import Link from "next/link";

type PostPropsType = {
    post: IPosts
}

const PostComponent: FC<PostPropsType> = ({post}) => {
    return (
        <div>
            <Link
                href={`/posts/${post.id}`}
                className="block border rounded-xl p-4 mb-2 hover:bg-gray-100 hover:shadow transition"
            >
                <p className="font-semibold text-lg text-blue-600 hover:underline">
                    {post.body}
                </p>
                <p className="text-sm text-gray-500">ID: {post.title}</p>
            </Link>
        </div>
    );
};

export default PostComponent;