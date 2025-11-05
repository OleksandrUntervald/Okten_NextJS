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
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/users"
                        className="hover:text-blue-400 transition-colors duration-200"
                    >
                        Users
                    </Link>
                </li>
                <li>
                    <Link
                        href="/posts"
                        className="hover:text-blue-400 transition-colors duration-200"
                    >
                        Posts
                    </Link>
                </li>
                <li>
                    <Link
                        href="/comments"
                        className="hover:text-blue-400 transition-colors duration-200"
                    >
                        Comments
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
