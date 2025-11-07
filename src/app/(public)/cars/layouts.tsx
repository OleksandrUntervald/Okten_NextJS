import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'CarsLayout metadata'
}
type Props = {children: React.ReactNode};

const CarsLayout = ({children}: Props) => {
    return (
        <div>
    {children}
    </div>
    )
};

export default CarsLayout;