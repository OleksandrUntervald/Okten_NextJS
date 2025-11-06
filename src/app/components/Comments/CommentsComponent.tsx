import React from 'react';
import {apiGet} from "@/services/api.services";
import {IComments} from "@/moduls/IComments";
import CommentComponent from "@/app/components/Comments/CommentComponent";

const CommentsComponent = async ()  => {
    const comments = await apiGet<IComments[]>(`/comments`);
    return (
        <div>
            {comments.map((comment) =>   <CommentComponent key={comment.id} comment={comment}/> )}
        </div>
    );
};

export default CommentsComponent;