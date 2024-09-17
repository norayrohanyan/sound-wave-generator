import { useTranslations } from "next-intl";

export const CardWrapper = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations("mainFeatures");
  return (
    <div className="bg-[#E2D7FF] text-textMain rounded-[32px] lg:max-w-[1580px] mx-auto lg:px-12 xl:px-16">
      <div className="max-w-[328px] md:max-w-[728px] lg:max-w-[1238px] mx-auto">
        <h2 className="text-2xl lg:text-4xl lg:max-w-[900px] mx-auto font-bold leading-7 lg:leading-[44px] pb-8 pt-10 lg:py-14 text-center">
          {t("title")}
        </h2>
        <div className="space-y-8 lg:space-y-14 pb-10 lg:pb-14">{children}</div>
      </div>
    </div>
  );
};
