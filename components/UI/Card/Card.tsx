import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
  isRight?: boolean;
};
const Card = ({
  title,
  description,
  image,
  alt,
  isRight = true,
}: CardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 lg:gap-14 bg-gradient-secondary rounded-[30px] w-full mx-auto px-8 py-5 lg:mx-auto lg:flex-row max-w-[1238px] lg:px-14 lg:py-8">
      <div className={`text-textMain w-full  ${!isRight && "lg:order-last"}`}>
        <h2 className="text-lg lg:text-[32px] font-bold lg:leading-[39px]">
          {title}
        </h2>
        <p className="text-sm lg:text-base font-medium mt-[14px] lg:mt-4 leading-5 lg:leading-[24px]">
          {description}
        </p>
      </div>
      <div
        className={`order-first relative w-[264px] h-[156px] lg:w-[1080px] lg:h-[340px] ${
          isRight && "lg:order-last"
        }`}
      >
        <Image
          src={image}
          alt={alt}
          // sizes="300px"
          fill
          sizes="(100vw - 48px)"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};

export default Card;
