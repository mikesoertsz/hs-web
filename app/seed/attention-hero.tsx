"use client";
import { Left, Wrapper } from "@/lib/atoms";
import Image from "next/image";

type HeroProps = {
  hero: {
    preheading: string;
    heading: string;
    subheading: string;
    buttonText: string;
    buttonLink: string;
    investmentRange: string;
    imageSrc: string;
    imageAlt: string;
  };
};

export default function AttentionHero({ hero }: HeroProps) {
  return (
    <Wrapper className="relative flex min-h-[50vh] z-10 mx-auto items-center justify-center py-12">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden xl:max-w-7xl">
        <Left className="bg-brand2-base1 min-h-[50dvh] md:aspect-square aspect-auto py-24 md:py-8">
          <div className="flex flex-col items-start justify-center w-3/4 h-full slide-center">
            <h4 className="mb-3 text-sm tracking-wide text-brand-g1">
              {hero.preheading}
            </h4>
            <h1 className="text-6xl font-medium leading-tight text-white drop-shadow-md font-title">
              {hero.heading}
            </h1>
            <p className="hidden w-3/4 mt-4 text-2xl font-light text-brand-p0">
              {hero.subheading}
            </p>
            <div className="flex flex-col items-center justify-between gap-2 mt-12">
              <button className="relative px-12 py-3 overflow-hidden text-black transition duration-100 rounded-lg hover:bg-brand2-g4 bg-brand2-g2">
                <a href={hero.buttonLink} className="relative z-10">
                  {hero.buttonText}
                </a>
              </button>

              <p className="mt-1 text-xs text-gray-400">
                {hero.investmentRange}
              </p>
            </div>
          </div>
        </Left>
        <div className="relative z-10 min-h-[50dvh] md:flex">
          <Image
            src={hero.imageSrc}
            alt={hero.imageAlt}
            fill
            style={{ objectFit: "cover", objectPosition: "70%" }}
            className="absolute inset-0 z-20 bg-blue-950 saturate-50"
          />
        </div>
      </div>
    </Wrapper>
  );
}
