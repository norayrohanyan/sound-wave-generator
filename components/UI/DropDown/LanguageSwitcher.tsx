'use client';

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

  const locales = [
    { code: "en", src: "/assets/en-flag.svg", alt: "English" },
    { code: "am", src: "assets/am-flag.svg", alt: "Armenian" },
    { code: "ru", src: "assets/ru-flag.svg", alt: "Russian" },
  ];

  const onLocaleChange = (nextLocale: string) => {
    setDropdownOpen(false); // Close the dropdown
    startTransition(() => {
      router.replace(`/${nextLocale}/${pathName.split("/")[2] || ""}`);
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!isDropdownOpen)}
        className="flex items-center p-2 transition-transform transform focus:outline-none"
        disabled={isPending}
      >
        <Image
          className="rounded-full"
          src={locales.find(locale => locale.code === localActive)?.src || ""}
          alt="Active Locale"
          width={46}
          height={46}
        />
      </button>

      <div
        className={`absolute mt-2 border right-0 w-16 flex flex-col justify-center items-center border-gray-300 rounded-md shadow-lg transition-all duration-300 ease-in-out transform ${isDropdownOpen ? 'opacity-100 block scale-100' : 'opacity-0 hidden scale-95'}`}
      >
        {locales
          .filter(locale => locale.code !== localActive) // Exclude the active locale from the dropdown
          .map(locale => (
            <button
              key={locale.code}
              onClick={() => onLocaleChange(locale.code)}
              className="flex w-full items-center justify-center p-2 hover:bg-gray-100 transition-colors duration-200"
              disabled={isPending}
            >
              <Image
                className="inline-block rounded-full"
                src={locale.src}
                alt={locale.alt}
                width={30}
                height={30}
              />
            </button>
          ))}
      </div>
    </div>
  );
}
