import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'UserLayout metadata'
}
type Props = {children: React.ReactNode};

const UserLayout = ({children}: Props) => {
    return (
        <div>

    {children}
    </div>
    )
};

export default UserLayout;