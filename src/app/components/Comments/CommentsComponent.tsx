import React from 'react';
import {apiGet} from "@/services/api.services";
import {IComments} from "@/moduls/IComments";
import CommentComponet from "@/app/components/Comments/CommentComponet";

const CommentsComponent = async ()  => {
    const comments = await apiGet<IComments[]>(`/comments`);
    return (
        <div>
            {comments.map((comment) =>   <CommentComponet key={comment.id} comment={comment}/> )}
        </div>
    );
};

export default CommentsComponent;