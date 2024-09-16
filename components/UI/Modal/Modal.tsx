import Link from "next/link";
import Image from "next/image";

interface DropdownSection {
  title: string;
  items: { label: string; href: string }[];
}

interface DropdownProps {
  dropdownSections: DropdownSection[];
  isMenuOpen?: boolean;
  handleClick?: () => void;
}

const Dropdown = ({
  dropdownSections,
  isMenuOpen,
  handleClick,
}: DropdownProps) => {
  return (
    <div
      className={`fixed top-0 right-0 lg:p-6 lg:absolute lg:right-auto left-0 lg:top-full bg-white shadow-[0px_2px_12px_0px_#0052E01F] lg:rounded-2xl lg:opacity-0 lg:invisible transition-transform lg:transition-opacity duration-300 lg:group-hover:opacity-100 lg:group-hover:visible ${
        isMenuOpen
          ? "translate-x-0 lg:translate-x-auto"
          : "translate-x-full lg:translate-x-0"
      }`}
    >
      <div
        className="flex items-center justify-start w-full border-b border-b-gray-300 lg:border-none gap-20 lg:gap-3 py-6 bg-[#F3F6FF] lg:bg-[#EEF5FF] lg:pl-4 lg:pr-2 lg:py-4 lg:rounded-lg mb-7 cursor-pointer lg:hover:bg-[#E9F0FF] lg:[&_span]:hover:translate-x-1"
        onClick={handleClick}
      >
        <Image
          src="/assets/video-icon.svg"
          alt="icon"
          width={33}
          height={32}
          className="hidden lg:block"
        />
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="lg:hidden ml-2"
        >
          <path
            d="M15 19L8 12L15 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-sm font-semibold text-textMain underline lg:no-underline lg:text-inherit lg:text-base lg:font-bold leading-[19.5px] lg:duration-300">
          Create Video
        </span>
      </div>

      <div className="relative px-6 flex flex-col lg:flex-row gap-[72px] mb-10 before:content-[''] before:absolute before:left-1/2  before:-translate-x-1/2 before:top-1/2 lg:before:left-1/2 lg:before:top-0 before:w-[90%] before:h-[2px] lg:before:w-[2px] lg:before:h-full before:bg-gray-200">
        {dropdownSections.map((section) => (
          <div className="flex flex-col gap-4" key={section.title}>
            <h4 className="text-[#7683A8] text-sm font-semibold leading-[17px]">
              {section.title}
            </h4>
            <ul className="flex flex-col gap-6 border-b-gray-50 lg:grid lg:grid-rows-5 lg:grid-flow-col lg:gap-x-8 lg:gap-y-4 w-max">
              {section.items.map((item) => (
                <li
                  className="w-full text-sm text-textMain leading-[17px] lg:text-inherit lg:text-base font-medium lg:leading-[18.30px]"
                  key={item.label}
                >
                  <Link
                    href={item.href}
                    className="text-sm lg:hover:text-blue-500 transition-all duration-300 transform lg:hover:translate-x-1"
                    style={{ display: "-webkit-box", WebkitLineClamp: "1" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-t-gray-300 w-full pt-5 pb-6 lg:p-0 lg:border-none text-center mt-6 lg:w-max mx-auto lg:[&_img]:hover:translate-x-1">
        <Link
          href="/#"
          className="text-[#3271E6] text-sm leading-[17px] font-medium flex items-center justify-center gap-3"
        >
          Browse More
          <Image
            src="/assets/arrow-right.svg"
            alt="arrow right"
            width={12}
            height={15}
            className="duration-300"
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
