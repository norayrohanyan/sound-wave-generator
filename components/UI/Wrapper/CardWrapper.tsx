import { useTranslations } from "next-intl";

export const CardWrapper = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations("mainFeatures");
  return (
    <div className="mx-auto rounded-[32px] bg-[#E2D7FF] text-textMain lg:max-w-[1580px] lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[328px] md:max-w-[728px] lg:max-w-[1238px]">
        <h2 className="mx-auto pb-8 pt-10 text-center text-2xl font-bold leading-7 lg:max-w-[900px] lg:py-14 lg:text-4xl lg:leading-[44px]">
          {t("title")}
        </h2>
        <div className="space-y-8 pb-10 lg:space-y-14 lg:pb-14">{children}</div>
      </div>
    </div>
  );
};
