import Link from "next/link";

export const Menu = () => {
    return (
        <nav className="bg-gray-900 text-white py-3 shadow-md">
            <ul className="flex justify-center gap-6">
                <li>
                    <Link
                        href="/"
                        className="hover:text-blue-400 transition-colors duration-200"
                    >
                        Create car
                    </Link>
                </li>
                <li>
                    <Link
                        href="/cars"
                        className="hover:text-blue-400 transition-colors duration-200"
                    >
                        Cars
                    </Link>
                </li>

            </ul>
        </nav>
    );
};
