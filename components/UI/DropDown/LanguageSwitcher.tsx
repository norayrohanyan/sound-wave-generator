"use client";

import { locales } from "@/constants/locales";
import { useLocale } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const pathName = usePathname();
  const router = useRouter();
  const localActive = useLocale();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const onLocaleChange = (nextLocale: string) => {
    setDropdownOpen(false);
    startTransition(() => {
      router.replace(`/${nextLocale}/${pathName.split("/")[2] || ""}`);
    });
  };

  return (
    <div className="relative flex h-full flex-col items-start">
      {/* Button for mobile*/}
      <button
        onClick={() => setDropdownOpen(!isDropdownOpen)}
        className="relative flex w-full transform items-center justify-between border-b border-gray-300 p-4 transition-transform focus:outline-none lg:hidden"
        disabled={isPending}
      >
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full"
            src={
              locales.find((locale) => locale.code === localActive)?.src || ""
            }
            alt="Active Locale"
            width={30}
            height={30}
          />
          <span>
            {locales.find((locale) => locale.code === localActive)?.alt}
          </span>
        </div>
        <Image
          src="/assets/arrow-down.svg"
          alt="Dropdown arrow"
          width={24}
          height={24}
          className={`transform transition-transform ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown for mobile*/}
      {isDropdownOpen && (
        <div className="w-full border-t border-gray-200 bg-white shadow-md lg:hidden lg:rounded-md">
          {locales
            .filter((locale) => locale.code !== localActive)
            .map((locale) => (
              <button
                key={locale.code}
                onClick={() => onLocaleChange(locale.code)}
                className="flex w-full items-center gap-2 border-b border-gray-300 p-4"
                disabled={isPending}
              >
                <Image
                  className="rounded-full"
                  src={locale.src}
                  alt={locale.alt}
                  width={30}
                  height={30}
                />
                <span>{locale.alt}</span>
              </button>
            ))}
        </div>
      )}

      {/* Hover effect for larger screens */}
      <div className="group hidden h-full items-center lg:flex">
        <div className="w-7 rounded-full border border-[#C1C9E0] p-[1px]">
          <Image
            className="rounded-full"
            src={
              locales.find((locale) => locale.code === localActive)?.src || ""
            }
            alt="Active Locale"
            width={46}
            height={46}
          />
        </div>
        <Image
          src="/assets/arrow-down.svg"
          alt="Dropdown arrow"
          width={24}
          height={24}
          className="ml-1 duration-300 group-hover:rotate-180"
        />
        <div className="absolute left-0 w-max border bg-white opacity-0 shadow-[0px_2px_12px_0px_#0052E01F] transition-all duration-300 group-hover:opacity-100 lg:top-full lg:rounded-2xl">
          {locales
            .filter((locale) => locale.code !== localActive)
            .map((locale) => (
              <button
                key={locale.code}
                onClick={() => onLocaleChange(locale.code)}
                className="flex w-full items-center justify-start gap-2 p-4"
                disabled={isPending}
              >
                <Image
                  className="inline-block rounded-full"
                  src={locale.src}
                  alt={locale.alt}
                  width={30}
                  height={30}
                />
                <span className="ml-2">{locale.alt}</span>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
