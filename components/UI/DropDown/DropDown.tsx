import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("nav");
  return (
    <div
      className={`fixed overflow-y-scroll h-[calc(100vh-64px)] lg:h-auto top-0 right-0 lg:p-6 lg:absolute lg:right-auto left-0 lg:top-full z-50 bg-white shadow-[0px_2px_12px_0px_#0052E01F] lg:rounded-2xl lg:opacity-0 lg:invisible transition-all lg:transition-opacity duration-300 lg:group-hover:opacity-100 lg:group-hover:visible ${
        isMenuOpen
          ? "translate-x-0 lg:translate-x-auto"
          : "translate-x-full lg:translate-x-0"
      }`}
    >
      <div
        className="mb-7 flex w-full cursor-pointer items-center justify-start gap-20 border-b border-b-gray-300 bg-[#F3F6FF] py-6 lg:gap-3 lg:rounded-lg lg:border-none lg:bg-[#EEF5FF] lg:py-4 lg:pl-4 lg:pr-2 lg:hover:bg-[#E9F0FF] lg:[&_span]:hover:translate-x-1"
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
          className="ml-2 lg:hidden"
        >
          <path
            d="M15 19L8 12L15 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-sm font-semibold leading-[19.5px] text-textMain underline lg:text-base lg:font-bold lg:text-inherit lg:no-underline lg:duration-300">
          {t("createVideo")}
        </span>
      </div>

      <div className="relative mb-10 flex flex-col gap-[72px] px-6 before:absolute before:left-1/2 before:top-1/2 before:h-[2px] before:w-[90%] before:-translate-x-1/2 before:bg-gray-200 before:content-[''] lg:flex-row lg:before:left-1/2 lg:before:top-0 lg:before:h-full lg:before:w-[2px]">
        {dropdownSections.map((section) => (
          <div className="flex flex-col gap-4" key={section.title}>
            <h4 className="text-sm font-semibold leading-[17px] text-[#7683A8]">
              {section.title}
            </h4>
            <ul className="flex w-max flex-col gap-6 border-b-gray-50 lg:grid lg:grid-flow-col lg:grid-rows-5 lg:gap-x-8 lg:gap-y-4">
              {section.items.map((item) => (
                <li
                  className="w-full text-sm font-medium leading-[17px] text-textMain lg:text-base lg:leading-[18.30px] lg:text-inherit"
                  key={item.label}
                >
                  <Link
                    href={item.href}
                    className="transform text-sm transition-all duration-300 lg:hover:translate-x-1 lg:hover:text-blue-500"
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

      <div className="mx-auto mt-6 w-full border-t border-t-gray-300 pb-6 pt-5 text-center lg:w-max lg:border-none lg:p-0 lg:[&_img]:hover:translate-x-1">
        <Link
          href="/#"
          className="flex items-center justify-center gap-3 text-sm font-medium leading-[17px] text-[#3271E6]"
        >
          {t('browseMore')}
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
