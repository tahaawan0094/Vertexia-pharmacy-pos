"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import { TextRoll } from "./text-roll";

export const AnimatedCarousel = ({
  title = "Trusted by thousands of businesses worldwide",
  logoCount = 15,
  autoPlay = true,
  autoPlayInterval = 3000,
  logos = null, // Array of image URLs
  containerClassName = "",
  titleClassName = "",
  carouselClassName = "",
  logoClassName = "",
  itemsPerViewMobile = 4,
  itemsPerViewDesktop = 6,
  spacing = "gap-10",
  padding = "py-8",
  // New logo size customization props
  logoContainerWidth = "w-48",
  logoContainerHeight = "h-24",
  logoImageWidth = "w-full",
  logoImageHeight = "h-full",
  logoMaxWidth = "",
  logoMaxHeight = "",
}: any) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api || !autoPlay) {
      return;
    }

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent((c) => c + 1);
      }
    }, autoPlayInterval);

    return () => clearTimeout(timer);
  }, [api, current, autoPlay, autoPlayInterval]);

  const defaultLogos = [
    "/logos/blackwell.svg",
    "/logos/numeriq.svg",
    "/logos/flux.svg",
    "/logos/astra.svg",
    "/logos/quantum.svg",
    "/logos/vortex.svg",
  ];

  const logoItems = logos || Array.from({ length: logoCount }, (_, i) => defaultLogos[i % defaultLogos.length]);

  const logoImageSizeClasses = `${logoImageWidth} ${logoImageHeight} ${logoMaxWidth} ${logoMaxHeight}`.trim();

  return (
    <div className={`w-full ${padding} ${containerClassName}`}>
      <div className="container mx-auto">
        <div className={`flex flex-col ${spacing}`}>
          <h2
            className={`text-sm md:text-lg lg:text-xl tracking-tighter lg:max-w-xl font-regular text-left ml-2 text-white ${titleClassName}`}>
            <TextRoll>{title}</TextRoll>
          </h2>

          <div>
            <Carousel setApi={setApi} className={`w-full ${carouselClassName}`}>
              <CarouselContent>
                {logoItems.map((logo: any, index: number) => (
                  <CarouselItem
                    className={`basis-1/${itemsPerViewMobile} lg:basis-1/${itemsPerViewDesktop}`}
                    key={index}
                  >
                    <div
                      className={`flex items-center justify-center p-4 ${logoClassName} ${logoContainerWidth} ${logoContainerHeight}`}
                    >
                      <img
                        src={typeof logo === "string" ? logo : logo}
                        alt={`Logo ${index + 1}`}
                        className={`${logoImageSizeClasses} object-contain`}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Case1 = (props: any) => {
  return <AnimatedCarousel {...props} />;
};
