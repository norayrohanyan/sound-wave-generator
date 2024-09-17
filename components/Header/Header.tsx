"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { useNavLinks } from "@/constants/navlinks";
import Button from "../UI/Button/Button";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../UI/DropDown/LanguageSwitcher";

const Header = () => {
  const navLinks = useNavLinks();
  const t = useTranslations("nav");
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
        <div className="pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-20 bg-black opacity-50"></div>
      )}
      <header className="glass-effect fixed left-0 right-0 top-0 z-50 h-16 bg-white text-sm font-bold leading-4 text-textHeader shadow-[0px_4px_4px_0px_#1B55D80F] lg:shadow-none">
        <div className="mx-auto flex h-full max-w-[1635px] items-center justify-between px-6">
          {/* Logo */}
          <div className="mr-10 hidden items-center xl:flex">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Renderforest Logo"
                width={175}
                height={40}
              />
            </Link>
          </div>
          <div className="mr-10 xl:hidden">
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
          <nav className="hidden h-full items-center gap-4 lg:flex lg:flex-1">
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
          <div className="hidden h-full items-center gap-6 lg:flex">
            <Link href="#">{t("pricing")}</Link>
            <div className="group flex items-center">
              <NavLink href="#">{t("learn")}</NavLink>
              <Image
                src="/assets/arrow-down.svg"
                alt="Dropdown arrow"
                width={24}
                height={24}
                className="ml-1 duration-300 group-hover:rotate-180"
              />
            </div>
            <LanguageSwitcher />
            <div className="flex gap-4">
              <Button
                title={t("signIn")}
                colored={false}
                className="px-[22px] py-[10px]"
              />
              <Button title={t("tryForFree")} className="px-[22px] py-[10px]" />
            </div>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="flex items-center lg:hidden">
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
          <nav className="flex w-full flex-col">
            <div className="border-b border-b-gray-300 p-5">
              <NavLink href="#" dropdownSections={navLinks[0].dropdownItems}>
                {t("create")}
              </NavLink>
            </div>
            <div className="border-b border-b-gray-300 p-5">
              <NavLink href="#" dropdownSections={navLinks[1].dropdownItems}>
                {t("exploreAI")}
              </NavLink>
            </div>
            <div className="border-b border-b-gray-300 p-5">
              <NavLink href="#">{t("pricing")}</NavLink>
            </div>
            <div className="border-b border-b-gray-300 p-5">
              <NavLink href="#" dropdownSections={navLinks[2].dropdownItems}>
                {t("learn")}
              </NavLink>
            </div>

            <LanguageSwitcher />
          </nav>

          <div className="mt-8 flex flex-col gap-4 px-5 transition-all duration-300">
            <Button title={t("tryForFree")} className="px-[22px] py-[10px]" />
            <Button
              title={t("signIn")}
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
