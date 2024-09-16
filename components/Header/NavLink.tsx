import Link from "next/link";
import Image from "next/image";
import Dropdown from "../UI/Modal/Modal";
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

const NavLink = ({
  href,
  children,
  dropdownSections,
}: NavLinkProps) => {
  const hasDropdown = dropdownSections && dropdownSections.length > 0;
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };
  return (
    <>
       {/* Desktop Navigation (lg and above) */}
       <div className="hidden lg:relative lg:block group h-full">
       <Link
          href={href}
          className="flex items-center justify-between cursor-pointer h-full"
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
        {hasDropdown && (
          // <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg transition-all duration-300 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible">
            <Dropdown dropdownSections={dropdownSections} />
          // {/* </div> */}
        )}
      </div>
      {/* Tablet  */}
      {/* <div className="hidden md:block lg:hidden group h-full">
        <Link
          href={href}
          className="flex items-center justify-between cursor-pointer h-full"
        >
          {children}
          
        </Link>
      </div> */}

      <ul className="md:block lg:hidden group h-full">
        <li className="h-full" onClick={toggleDropdown}>
          <Link
            href={href}
            className="flex items-center justify-between cursor-pointer h-full"
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
