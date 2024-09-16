import Card from "@/components/UI/Card/Card";
import HeroSection from "@/components/HeroSection/HeroSection";
import TrustedPartners from "@/components/TrustedPartners/TrustedPartners";
import { CardsData } from "@/constants/cards-data";
import { CardWrapper } from "@/components/UI/Wrapper/CardWrapper";

export default function Home() {
  return (
    <div className="space-y-24 lg:space-y-32 lg:mx-8 mt-[88px]">
      <HeroSection />
      <TrustedPartners />
      <CardWrapper>
        {CardsData.map((card, index) => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            image={card.image}
            alt={card.alt}
            isRight={index % 2 === 0}
          />
        ))}
      </CardWrapper>
    </div>
  );
}
