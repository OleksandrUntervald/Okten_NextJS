import React from 'react';
import {apiGet} from "@/services/api.services";
import {IPosts} from "@/moduls/IPosts";
import PostComponent from "@/app/components/Posts/PostComponent";

const PostsComponent = async () => {
    const posts = await apiGet<IPosts[]>('/posts')

    return (
        <div>
            {posts.map((post) => <PostComponent key={post.id} post={post}/> )}
        </div>
    );
};

export default PostsComponent;