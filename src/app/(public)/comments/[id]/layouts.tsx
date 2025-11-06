import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'CommentLayout metadata'
}
type Props = {children: React.ReactNode};

const CommentLayout = ({children}: Props) => {
    return (
        <div>

    {children}
    </div>
    )
};

export default CommentLayout;