"use client";
import Image from "next/image";
import tw from "tailwind-styled-components";
import type { Titles } from "../../lib/types";
import { Body, Heading, PreHeading, SubHeading } from "@/lib/atoms";

const Icon = tw.div`flex items-start justify-start`;
const ImageWrap = tw.div`relative w-10 h-10 py-4`;
const TitleWrap = tw.div`flex flex-col items-center justify-center w-full`;
const TitleWrapLeft = tw.div`flex flex-col items-start justify-start w-full dark:text-white w-full`;

export function TitleBlock({
  icon,
  image,
  preheading,
  heading,
  subheading,
  body,
}: Titles) {
  return (
    <div className="flex items-center justify-center w-full flex-col">
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
    <>
      <TitleWrapLeft>
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
      </TitleWrapLeft>
    </>
  );
}
