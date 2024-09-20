'use client';

import React from "react";
import Link from "next/link";
import { FaBug } from "react-icons/fa";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const NavBar = () => {
    const currentPath = usePathname();

    const links = [
        { label: "Dashboard", href: "/" },
        { label: "Issues", href: "/Issues" }
    ];

    return (
        <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
            <Link href="/"><FaBug /></Link>
            <ul className="flex space-x-6">
                {links.map(link => (
                    <li key={link.href}>
                        <Link
                            className={classNames(
                                "text-zinc-500 hover:text-zinc-800 transition-colors",
                                { "text-zinc-800 font-bold": currentPath === link.href }
                            )}
                            href={link.href}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;