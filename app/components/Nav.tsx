"use client";

import { useRouter, usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/wordle", label: "Wordle" },
  { href: "/word-search", label: "Word Search" },
  { href: "/settings", label: "Settings" },
];

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 px-4 py-3">
      <ul className="flex flex-wrap justify-center gap-6">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <button
                onClick={() => router.push(link.href)}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? "text-indigo-400 border-b-2 border-indigo-400 pb-1"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}