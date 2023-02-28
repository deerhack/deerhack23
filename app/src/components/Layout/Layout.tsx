import React from 'react';
import { Navbar } from '../Navbar';

type Props = {
    children: string | JSX.Element
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <header className="bg-secondary text-white sticky w-full">
                <Navbar />
            </header>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout;