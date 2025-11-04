import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'ContactsLayout metadata'
}
type Props = {children: React.ReactNode};

const ContactsLayout = ({children}: Props) => {
    return (
        <div>
            contacts Layout
            {children}
        </div>
    );
};

export default ContactsLayout;