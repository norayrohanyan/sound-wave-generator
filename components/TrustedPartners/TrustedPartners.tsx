import Image from "next/image";
import { useTranslations } from "next-intl"

const TrustedPartners = () => {
  const t = useTranslations("trustedPartners");
  return (
    <div className="mx-auto px-4 text-center">
      <div className="mb-6 flex items-center justify-center">
        <p className="relative inline-block from-gray-300 to-white px-3 text-base font-medium leading-5 text-gray-500 lg:px-7 lg:before:absolute lg:before:right-full lg:before:top-1/2 lg:before:block lg:before:h-[2px] lg:before:w-full lg:before:bg-gradient-to-l lg:before:content-[''] lg:after:absolute lg:after:left-full lg:after:top-1/2 lg:after:block lg:after:h-[2px] lg:after:w-full lg:after:bg-gradient-to-r lg:after:content-['']">
          <span className="hidden md:inline">
            <strong className="text-textMain">{t("desktopParts.part1")}</strong>{" "}
            {t("desktopParts.part2")} <strong className="text-textMain">{t("desktopParts.part3")}</strong>
          </span>

          <span className="md:hidden">
          {t("mobileParts.part1")} <strong className="text-textMain">25M+</strong> {t("mobileParts.part2")}{" "}
            <strong className="text-textMain">100k+</strong> {t("mobileParts.part3")}
          </span>
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-8">
        <Image
          src="/images/stanford.png"
          alt="trusted partners"
          width={100}
          height={24}
          className="lg:order-1"
        />
        <Image
          src="/images/meta.png"
          alt="trusted partners"
          width={90}
          height={18}
          className="lg:order-2"
        />
        <Image
          src="/images/booking.png"
          alt="trusted partners"
          width={119}
          height={20}
          className="lg:order-3"
        />
        <Image
          src="/images/nike.png"
          alt="trusted partners"
          width={57}
          height={20}
          className="order-5 lg:order-4"
        />
        <Image
          src="/images/hootsuite.png"
          alt="trusted partners"
          width={110}
          height={24}
          className="order-4 lg:order-5"
        />
      </div>
    </div>
  );
};

export default TrustedPartners;
