import Image from "next/image";

const TrustedPartners = () => {
  return (
    <div className="mx-auto px-4 text-center">
      <div className="flex items-center justify-center mb-6">
        <p className="relative inline-block text-base text-gray-500 font-medium leading-5 px-3 lg:px-7 lg:before:content-[''] lg:before:block lg:before:absolute lg:before:top-1/2 lg:before:right-full lg:before:w-full lg:before:h-[2px] lg:before:bg-gradient-to-l from-gray-300 to-white lg:after:content-[''] lg:after:block lg:after:absolute lg:after:top-1/2 lg:after:left-full lg:after:w-full lg:after:h-[2px] lg:after:bg-gradient-to-r">
          <span className="hidden md:inline">
            <strong className="text-textMain">Sound Wave Generator</strong>{" "}
            Trusted by Our <strong className="text-textMain">Partners</strong>
          </span>

          <span className="md:hidden">
            Trusted by <strong className="text-textMain">25M+</strong> users and{" "}
            <strong className="text-textMain">100k+</strong> high-end companies
          </span>
        </p>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-12 lg:gap-8">
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
