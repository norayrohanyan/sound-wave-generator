import Card from "@/components/Card/Card";
import HeroSection from "@/components/HeroSection/HeroSection";
import TrustedPartners from "@/components/TrustedPartners/TrustedPartners";
import { CardsData } from "@/constants/cards-data";

export default function Home() {
  return (
    <div className="space-y-24 lg:mx-8 mt-[88px]">
      <HeroSection />
      <TrustedPartners />
      <div className="bg-[#E2D7FF] text-textMain rounded-[32px] lg:max-w-[1580px] mx-auto">
        <div className="max-w-[328px] lg:max-w-[1238px] mx-auto">
          <h2 className="text-2xl lg:text-4xl lg:max-w-[900px] mx-auto font-bold leading-7 lg:leading-[43.88px] pb-8 pt-10 lg:py-14 text-center">
            Main Features of Renderforest’s Sound Wave Visualizer
          </h2>
          <div className="space-y-8 lg:space-y-14 pb-10 lg:pb-14">
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
          </div>
        </div>
      </div>
    </div>
  );
}
