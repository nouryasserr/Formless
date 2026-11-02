import { useRef, useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const links = [
  { label: "Shop", href: "/Products" },
  { label: "Customize", href: "/Customize" },
  { label: "Our story", href: "/Story" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);

  function handleKeyDown(event) {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
      toggleRef.current?.focus();
    }
  }

  return (
    <header onKeyDown={handleKeyDown} className="sticky top-0 z-50">
      <div className="flex items-center justify-center gap-3 xs:gap-5 bg-primary px-2 py-1 sm:py-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 24"
          fill="none"
          aria-hidden="true"
          className="h-5 w-6 shrink-0"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <path d="M13 3 L20 11" />
          <path d="M4 15 L14 18" />
        </svg>
        <p className="text-xs text-tertiary sm:text-base font-semibold">
          No fixed form. Make it yours.
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 24"
          fill="none"
          aria-hidden="true"
          className="h-5 w-6 shrink-0"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <path d="M15 3 L8 11" />
          <path d="M24 15 L14 18" />
        </svg>
      </div>
      <nav aria-label="Main navigation" className="bg-quaternary">
        <div className="container flex items-center justify-between py-2 sm:py-3">
          <NavLink to="/" aria-label="Formless home" className="shrink-0">
            <img src={logo} alt="Formless" className="h-6 w-auto sm:h-10" />
          </NavLink>
          <ul className="hidden items-center gap-5 sm:flex lg:gap-12">
            {links.map(({ label, href }) => (
              <li key={href}>
                <NavLink
                  to={href}
                  className="whitespace-nowrap text-base font-semibold text-tertiary hover:text-secondary hover:underline transition-all duration-300 ease-in-out lg:text-lg"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex shrink-0 items-center gap-2 sm:gap-5 lg:gap-8">
            <NavLink
              to="/Account"
              aria-label="My account"
              className="flex items-center justify-center text-tertiary hover:text-secondary"
            >
              <i
                className="fa-regular fa-user text-base sm:text-xl"
                aria-hidden="true"
              />
            </NavLink>
            <NavLink
              to="/Cart"
              aria-label="Shopping cart, 0 items"
              className="relative flex items-center justify-center text-tertiary hover:text-secondary"
            >
              <i
                className="fa-solid fa-basket-shopping text-base sm:text-xl"
                aria-hidden="true"
              />
              <span
                aria-hidden="true"
                className="absolute -right-2 -top-1 flex h-4 sm:h-5 w-4 sm:w-5 items-center justify-center rounded-full bg-secondary text-xs sm:font-semibold text-white"
              >
                0
              </span>
            </NavLink>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setIsOpen((previous) => !previous)}
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="flex items-center justify-center rounded text-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary sm:hidden"
            >
              <i
                className={
                  isOpen
                    ? "fa-solid fa-xmark text-xl"
                    : "fa-solid fa-bars-staggered text-xl"
                }
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
        <div
          id="mobile-navigation"
          className={`${isOpen ? "block" : "hidden"} sm:hidden`}
        >
          <ul className="container flex flex-col gap-1 py-3">
            {links.map(({ label, href }) => (
              <li key={href}>
                <NavLink
                  to={href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded px-3 py-3 text-base font-semibold text-tertiary transition-colors hover:bg-primary hover:text-secondary"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
