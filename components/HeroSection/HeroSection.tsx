import Image from "next/image";
import Button from "../UI/Button/Button";
import Equalizer from "../UI/Equalizer/Equalizer";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("hero");
  return (
    <section className="mx-auto flex w-full flex-col items-center justify-center gap-10 rounded-3xl bg-[linear-gradient(180deg,_#EFF8FF_0%,_#C7E4FF_45.51%,_#9ACEFF_65.12%,_#6272FF_100%)] py-10 lg:max-w-[1856px] lg:flex-row lg:gap-[100px] lg:rounded-[32px] lg:bg-gradient-primary lg:px-8 lg:py-[195px]">
      <div className="max-w-[328px] text-center text-textMain lg:max-w-[643px] lg:px-8 lg:text-left">
        <h1 className="mb-4 text-[32px] font-bold leading-tight md:text-5xl lg:text-[68px] lg:leading-[68px]">
          {t("title")}
        </h1>
        <p className="mb-6 text-sm font-medium leading-6 lg:mb-[40px] lg:text-base">
          {t("description")}
        </p>

        <Button
          title={t("button")}
          size="large"
          className="w-full bg-[linear-gradient(180deg,_#8980F7_0%,_#4136C1_100%)] font-semibold shadow-[0px_6px_12px_0px_#766DE833] lg:w-auto"
        />
      </div>

      <div className="relative mt-12 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:mt-0 lg:max-w-[782px]">
        <Equalizer />
        <Image
          src="/images/hero-image.png"
          alt="Sound Wave Generator"
          width={782}
          height={434}
          className="relative z-10 h-auto w-full"
          priority
          draggable={false}
        />
      </div>
    </section>
  );
};

export default HeroSection;
