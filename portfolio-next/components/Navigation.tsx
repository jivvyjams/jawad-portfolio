"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const baseLink =
  "inline-block rounded-2xl px-4 py-2 text-base font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

function navLinkClass(isActive: boolean) {
  return isActive
    ? `${baseLink} bg-brand text-bg`
    : `${baseLink} text-fg hover:bg-accent hover:text-bg`;
}

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav
      className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b-2 border-alt pb-4"
      aria-label="primary"
    >
      <ul className="flex flex-wrap gap-2">
        <li>
          <Link href="/" className={navLinkClass(pathname === "/")}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={navLinkClass(pathname.startsWith("/projects"))}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={navLinkClass(pathname.startsWith("/contact"))}
          >
            Contact
          </Link>
        </li>
      </ul>
      <ThemeToggle />
    </nav>
  );
}
