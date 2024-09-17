import Card from "@/components/UI/Card/Card";
import HeroSection from "@/components/HeroSection/HeroSection";
import TrustedPartners from "@/components/TrustedPartners/TrustedPartners";
import { CardsData } from "@/constants/cards-data";
import { CardWrapper } from "@/components/UI/Wrapper/CardWrapper";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("mainFeatures.cards");
  return (
    <div className="space-y-24 lg:space-y-32 lg:mx-8 mt-[88px]">
      <HeroSection />
      <TrustedPartners />
      <CardWrapper>
        {CardsData.map((card, index) => (
          <Card
            key={t(`${card.key}.title`)}
            title={t(`${card.key}.title`)}
            description={t(`${card.key}.description`)}
            image={card.image}
            alt={t(`${card.key}.title`)}
            isRight={index % 2 === 0}
          />
        ))}
      </CardWrapper>
    </div>
  );
}
