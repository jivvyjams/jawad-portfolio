import { NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";

const baseLink =
  "inline-block rounded-2xl px-4 py-2 text-base font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

function navLinkClass({ isActive }: { isActive: boolean }) {
  return isActive
    ? `${baseLink} bg-brand text-bg`
    : `${baseLink} text-fg hover:bg-accent hover:text-bg`;
}

export default function Navigation() {
  return (
    <nav
      className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b-2 border-alt pb-4"
      aria-label="primary"
    >
      <ul className="flex flex-wrap gap-2">
        <li>
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </li>
      </ul>
      <ThemeToggle />
    </nav>
  );
}
