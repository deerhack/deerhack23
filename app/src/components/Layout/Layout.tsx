import React from 'react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

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
            
            <Footer/>
        </>
    )
}

export default Layout;