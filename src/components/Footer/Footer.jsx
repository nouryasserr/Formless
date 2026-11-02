import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-tertiary px-2 xs:px-4 sm:px-10 md:px-16 pt-4 text-quaternary ">
        <div className="border-b border-quaternary flex justify-center sm:justify-between items-center gap-4 flex-wrap pb-3">
          <div>
            <h1 className="text-4xl lg:text-6xl font-extrabold">formless</h1>
            <h1 className="pl-2 text-lg font-medium origin-bottom -rotate-3 text-lg hidden xs:block">
              No Fixed Form.
            </h1>
            <h1 className="pl-6 text-lg font-medium origin-bottom -rotate-3 text-lg hidden xs:block">
              Make It Yours.
            </h1>
          </div>
          <ul className="flex items-center gap-6">
            <li>
              <NavLink
                to={"/Products"}
                className={
                  "text-sm xs:text-lg hover:underline transition-all duration-300 ease-in-out"
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Customize"}
                className={
                  "text-sm xs:text-lg hover:underline transition-all duration-300 ease-in-out"
                }
              >
                Customize
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Story"}
                className={
                  "text-sm xs:text-lg hover:underline transition-all duration-300 ease-in-out"
                }
              >
                Our Story
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Contact"}
                className={
                  "text-sm xs:text-lg hover:underline transition-all duration-300 ease-in-out"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <ul className="flex items-center gap-4">
            <li>
              <i className="fa-brands fa-instagram text-xl"></i>
            </li>
            <li>
              <i className="fa-brands fa-tiktok text-xl"></i>
            </li>
          </ul>
        </div>
        <div className="flex justify-center sm:justify-between items-center gap-2 flex-wrap py-2">
          <p>© 2026 formless. All rights reserved.</p>
          <ul className="flex gap-4">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Shipping</li>
            <li>FAQ</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
