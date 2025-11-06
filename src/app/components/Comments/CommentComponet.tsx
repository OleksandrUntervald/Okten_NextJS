import React, {FC} from 'react';
import {IComments} from "@/moduls/IComments";
import Link from "next/link";

type CommentPropsType = {
    comment: IComments
}

const CommentComponet: FC<CommentPropsType> = ({comment}) => {
    return (
        <div>
            <Link
                href={`/comments/${comment.id}`}
                className="block border rounded-xl p-4 mb-2 hover:bg-gray-100 hover:shadow transition"
            >
                <p className="font-semibold text-lg text-blue-600 hover:underline">
                    {comment.name}
                </p>
                <p className="text-sm text-gray-500">ID: {comment.id}</p>
            </Link>
            
        </div>
    );
};

export default CommentComponet;