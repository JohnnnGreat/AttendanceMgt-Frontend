import React from "react";
import Link from "next/link";

const navItemName = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
export const NavItem = ({ navItem }) => {
  return (
    <>
      <li className="ml-3">
        <Link
          className="no-underline hover:font-bold transition-all duration-150"
          href={navItem.href}
        >
          {navItem.name}
        </Link>
      </li>
    </>
  );
};

function Header() {
  return (
    <div className="w-full h-[80px] shadow px-2">
      <div className="wrapper max-w-[1000px] mx-auto flex justify-between items-center h-full">
        <div className="logo">
          <h1>AttendanceMgt</h1>
        </div>
        <div className="flex gap-5 h-full items-center">
          <ul className="flex h-full items-center gap-3">
            {navItemName.map((item) => (
              <NavItem navItem={item} />
            ))}
          </ul>
          <div>
            <Link
              className="border-2 border-black py-2 px-4 rounded-full hover:mb-2 transition-all duration-150 inline-block"
              href="/auth/sign-up"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
