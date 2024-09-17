import Link from "next/link";
import Image from "next/image";
import Dropdown from "../UI/DropDown/DropDown";
import { useState } from "react";

interface DropdownSection {
  title: string;
  items: { label: string; href: string }[];
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  dropdownSections?: DropdownSection[];
  className?: string;
  isMenuOpen?: boolean;
}

const NavLink = ({ href, children, dropdownSections }: NavLinkProps) => {
  const hasDropdown = dropdownSections && dropdownSections.length > 0;
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };
  return (
    <>
      <div className="group hidden h-full lg:relative lg:block">
        <Link
          href={href}
          className="flex h-full cursor-pointer items-center justify-between"
        >
          {children}
          {hasDropdown && (
            <Image
              src="/assets/arrow-down.svg"
              alt="Dropdown arrow"
              width={24}
              height={24}
              className={`ml-1 transition-transform group-hover:rotate-180 ${
                showDropdown ? "rotate-180" : ""
              }`}
            />
          )}
        </Link>
        {hasDropdown && <Dropdown dropdownSections={dropdownSections} />}
      </div>

      <ul className="group h-full md:block lg:hidden">
        <li className="h-full" onClick={toggleDropdown}>
          <Link
            href={href}
            className="flex h-full cursor-pointer items-center justify-between"
          >
            {children}
            {hasDropdown && (
              <Image
                src="/assets/arrow-down.svg"
                alt="Dropdown arrow"
                width={24}
                height={24}
                className={`ml-1 transition-transform lg:group-hover:-rotate-180 ${
                  showDropdown ? "-rotate-180" : ""
                }`}
              />
            )}
          </Link>
        </li>
        {hasDropdown && (
          <Dropdown
            dropdownSections={dropdownSections}
            handleClick={toggleDropdown}
            isMenuOpen={showDropdown}
          />
        )}
      </ul>
    </>
  );
};

export default NavLink;
