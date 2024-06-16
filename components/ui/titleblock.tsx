import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import type { Titles } from "../../lib/types";
import { Body, Heading, PreHeading, SubHeading } from "@/lib/atoms";

const titleStyles = cva("flex w-full max-w-3xl", {
  variants: {
    theme: {
      light: "text-black",
      dark: "text-white",
    },
    orientation: {
      center: "flex-col items-center justify-center w-full text-center",
      left: "flex-col items-start justify-start w-full text-left",
    },
  },
  compoundVariants: [
    {
      theme: "light",
      orientation: "center",
      class: "flex-col items-center justify-center text-black",
    },
    {
      theme: "light",
      orientation: "left",
      class: "flex-col items-start justify-start text-black",
    },
    {
      theme: "dark",
      orientation: "center",
      class: "flex-col items-center justify-center text-white",
    },
    {
      theme: "dark",
      orientation: "left",
      class: "flex-col items-start justify-start text-gray-200",
    },
  ],
  defaultVariants: {
    theme: "light",
    orientation: "center",
  },
});

const Icon = cva("flex items-start justify-start");
const ImageWrap = cva("relative w-10 h-10 py-4");

interface TitleBlockProps extends Titles {
  icon?: JSX.Element;
  image?: string;
  preheading?: string;
  heading?: string;
  subheading?: string;
  body?: string | React.ReactNode;
  theme: "light" | "dark";
  orientation: "center" | "left";
}

export function TitleBlock({
  icon,
  image,
  preheading,
  heading,
  subheading,
  body,
  theme = "light",
  orientation = "center",
}: TitleBlockProps) {
  const darkModeStyles = {
    preHeading: "text-brand-g1", // Example color for PreHeading in dark mode
    body: "text-gray-400", // Example color for Body in dark mode
  };

  return (
    <div className={titleStyles({ theme, orientation })}>
      {/* Conditional rendering and styling for PreHeading and Body based on theme */}
      {preheading && (
        <PreHeading
          className={theme === "dark" ? darkModeStyles.preHeading : ""}
        >
          {preheading}
        </PreHeading>
      )}
      {heading && <Heading className="font-title2">{heading}</Heading>}
      {subheading && <SubHeading>{subheading}</SubHeading>}
      {body && (
        <Body className={theme === "dark" ? darkModeStyles.body : ""}>
          {body}
        </Body>
      )}
    </div>
  );
}
