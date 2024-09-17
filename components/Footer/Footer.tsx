import { footerIcons } from "@/constants/footer-icons";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer className="relative bg-[#FAF8F4] py-6 text-textMain before:absolute before:top-10 before:h-[2px] before:w-full before:bg-gray-200 before:content-['']">
      <div className="mx-auto mt-10 flex max-w-[1256px] flex-col items-center justify-between gap-5 lg:flex-row">
        <div className="">
          <Image
            src="/images/logo.png"
            alt="Renderforest Logo"
            width={157}
            height={36}
            style={{
              filter:
                "brightness(0) saturate(100%) invert(14%) sepia(7%) saturate(4648%) hue-rotate(187deg) brightness(94%) contrast(87%)",
            }}
          />
        </div>

        <div className="text-sm font-medium">{t("copyright")}</div>

        <div className="flex items-center justify-center gap-6">
          {footerIcons.map((icon) => (
            <a
              key={icon.alt}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={24}
                height={24}
                className="size-5"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
