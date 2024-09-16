"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { navLinks } from "../../constants/navlinks";
import Button from "../UI/Button/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      const target = e.target as HTMLElement;

      if (isMenuOpen && target.closest(".dropdown-content")) {
        return;
      }

      if (isMenuOpen) {
        e.preventDefault();
      }
    };

    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isMenuOpen]);

  return (
    <>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-20 pointer-events-none"></div>
      )}
      <header className="glass-effect fixed h-16 top-0 right-0 left-0 bg-white text-sm text-textHeader leading-4 font-bold lg:shadow-none shadow-[0px_4px_4px_0px_#1B55D80F] z-50">
        <div className="flex justify-between items-center max-w-[1635px] h-full mx-auto">
          {/* Logo */}
          <div className="hidden xl:flex items-center mr-10">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Renderforest Logo"
                width={175}
                height={40}
              />
            </Link>
          </div>
          <div className="xl:hidden mr-10">
            <Link href="/">
              <Image
                src="/images/logo-mobile.png"
                alt="Renderforest Logo"
                width={23}
                height={32}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 lg:flex-1 h-full">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                href={link.href}
                dropdownSections={link.dropdownItems}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Side Links and Buttons for Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="#">Pricing</Link>
            <div className="flex items-center">
              <NavLink href="#">Learn</NavLink>
              <Image
                src="/assets/arrow-down.svg"
                alt="Dropdown arrow"
                width={24}
                height={24}
                className="ml-1 cursor-pointer"
              />
            </div>
            <div className="flex items-center">
              <div className="border rounded-full border-[#C1C9E0] size-7 flex items-center justify-center">
                <Image
                  src="/assets/flag.svg"
                  alt="Flag"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </div>
              <Image
                src="/assets/arrow-down.svg"
                alt="Dropdown arrow"
                width={24}
                height={24}
                className="ml-1 cursor-pointer"
              />
            </div>
            <div className="flex gap-4">
              <Button
                title="Sign in"
                colored={false}
                className="px-[22px] py-[10px]"
              />
              <Button title="Try for free" className="px-[22px] py-[10px]" />
            </div>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-label="Open Menu"
              className="space-y-1"
            >
              <div
                className={`w-6 h-1 bg-[#353E5A] rounded transition-transform duration-300 ease-in-out ${
                  isMenuOpen && "rotate-45 translate-y-1"
                }`}
              ></div>
              <div
                className={`w-6 h-1 bg-[#353E5A] rounded transition-transform duration-300 ease-in-out ${
                  isMenuOpen && "-rotate-45 -translate-y-1"
                }`}
              ></div>
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden fixed top-full bottom-0 right-0 bg-white py-4 overflow-hidden h-screen max-w-[300px] w-full  transition-all duration-500 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } dropdown-content`}
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {/* Mobile Menu Links */}
          <nav className="flex flex-col w-full">
            <div className=" border-b-gray-300 border-b p-5">
              <NavLink href="#" dropdownSections={navLinks[0].dropdownItems}>
                Create
              </NavLink>
            </div>
            <div className=" border-b-gray-300 border-b p-5">
              <NavLink href="#" dropdownSections={navLinks[1].dropdownItems}>
                Explore AI
              </NavLink>
            </div>
            <div className=" border-b-gray-300 border-b p-5">
              <NavLink href="#">Pricing</NavLink>
            </div>
            <div className=" border-b-gray-300 border-b p-5">
              <NavLink href="#" dropdownSections={navLinks[2].dropdownItems}>
                Learn
              </NavLink>
            </div>

            <div className="flex items-center gap-2 border-b-gray-300 border-b p-5">
              <div className="border rounded-full border-[#C1C9E0] size-7 flex items-center justify-center">
                <Image
                  src="/assets/flag.svg"
                  alt="Flag"
                  width={24}
                  height={24}
                />
              </div>
              <span>English</span>
            </div>
          </nav>

          <div className="mt-8 flex flex-col gap-4 px-5">
            <Button title="Try for free" className="px-[22px] py-[10px]" />
            <Button
              title="Sign in"
              colored={false}
              className="px-[22px] py-[10px]"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
