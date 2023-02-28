import Link from "next/link";


const Navbar = () => {
    return (
        <nav className="flex justify-between container mx-auto p-5">
            <div>Logo</div>
            <ul className="flex flex-row justify-around gap-10 font-poppins font-semibold">
                <li>
                    <Link href="#">About</Link>
                </li>
                <li>
                    <Link href="#">Tracks</Link>
                </li>
                <li>
                    <Link href="#">Prizes</Link>
                </li>
                <li>
                    <Link href="#">FAQ</Link>
                </li>
            </ul>

        </nav>
    );
}

export default Navbar;