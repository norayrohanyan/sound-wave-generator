import Image from "next/image";
import Button from "../UI/Button/Button";
import Equalizer from "../UI/Equalizer/Equalizer";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("hero");
  return (
    <section className="bg-[linear-gradient(180deg,_#EFF8FF_0%,_#C7E4FF_45.51%,_#9ACEFF_65.12%,_#6272FF_100%)] lg:bg-gradient-primary flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-[100px] rounded-3xl lg:rounded-[32px] w-full mx-auto lg:px-8 lg:py-[195px] py-10 lg:max-w-[1856px]">
      <div className="text-textMain lg:px-8 max-w-[328px] lg:max-w-[643px] text-center lg:text-left">
        <h1 className="text-[32px] md:text-5xl lg:text-[68px] font-bold leading-tight lg:leading-[68px] mb-4">
          {t("title")}
        </h1>
        <p className="text-sm lg:text-base font-medium leading-6 mb-6 lg:mb-[40px]">
          {t("description")}
        </p>

        <Button
          title={t("button")}
          size="large"
          className="bg-[linear-gradient(180deg,_#8980F7_0%,_#4136C1_100%)] font-semibold w-full lg:w-auto shadow-[0px_6px_12px_0px_#766DE833]"
        />
      </div>

      <div className="relative w-full max-w-[300px] lg:mt-0 mt-12 sm:max-w-[400px] md:max-w-[500px] lg:max-w-[782px]">
        <Equalizer />
        <Image
          src="/images/hero-image.png"
          alt="Sound Wave Generator"
          width={782}
          height={434}
          className="w-full h-auto z-10 relative"
          priority
          draggable={false}
        />
      </div>
    </section>
  );
};

export default HeroSection;
