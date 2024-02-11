"use client";

import Image from "next/image";
import tw from "tailwind-styled-components";
import type { Titles } from "../../lib/types";

const Icon = tw.div`flex items-start justify-start`;
const ImageWrap = tw.div`relative w-10 h-10 py-4`;
const TitleWrap = tw.div`flex flex-col items-center justify-center w-full`;

export const PreHeading = tw.h4`text-sm text-gray-400 font-body text-center`;
export const Heading = tw.h2`max-w-2/3 tracking-tight font-title text-5xl my-3 text-center`;
export const SubHeading = tw.h3`text-3xl md:text-2xl tracking-tight font-body max-w-3xl font-light mt-2 text-center`;
export const Body = tw.p`max-w-prose text-sm font-body leading-relaxed text-center mx-auto px-4 md:px-0`;

export function TitleBlock({
  icon,
  image,
  preheading,
  heading,
  subheading,
  body,
}: Titles) {
  return (
    <div className="">
      <TitleWrap>
        {icon && <Icon>{icon}</Icon>}
        {image && (
          <ImageWrap>
            <Image src={image} alt="" layout="fill" />
          </ImageWrap>
        )}
        {preheading && <PreHeading>{preheading}</PreHeading>}
        {heading && <Heading>{heading}</Heading>}
        {subheading && <SubHeading>{subheading}</SubHeading>}
        {body && <Body>{body}</Body>}
      </TitleWrap>
    </div>
  );
}

export function TitleLeft({
  icon,
  image,
  preheading,
  heading,
  subheading,
  body,
}: Titles) {
  return (
    <div className="mb-8">
      <TitleWrap>
        {icon && <Icon>{icon}</Icon>}
        {image && (
          <ImageWrap>
            <Image src={image} alt="" layout="fill" />
          </ImageWrap>
        )}
        {preheading && <PreHeading>{preheading}</PreHeading>}
        {heading && <Heading>{heading}</Heading>}
        {subheading && <SubHeading>{subheading}</SubHeading>}
        {body && <Body>{body}</Body>}
      </TitleWrap>
    </div>
  );
}
