"use client";
import React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { FiAirplay } from "react-icons/fi";

type ButtonConfig = {
  href: string;
  label: string;
  icon?: JSX.Element; // Make icon optional
};

type ButtonConfigs = {
  primary: {
    primaryButton: ButtonConfig;
    textLinkButton: ButtonConfig;
  };
  secondary: {
    primaryButton: ButtonConfig;
    textLinkButton: ButtonConfig;
  };
  tertiary: {
    primaryButton: ButtonConfig;
    textLinkButton: ButtonConfig;
  };
};

const buttonStyles = cva(
  "font-medium transition-colors duration-200 ease-in-out",
  {
    variants: {
      theme: {
        light: "text-black bg-brand2-g3 hover:bg-brand2-g1",
        dark: "text-gray-200 hover:text-white",
      },
      variant: {
        primary: "bg-brand2-g3 hover:bg-brand2-g1",
        secondary: "bg-transparent text-brand2-g3 hover:text-brand2-g1",
        tertiary: "text-gray-700 hover:text-gray-900 hover:underline",
      },
    },
    compoundVariants: [
      {
        theme: "light",
        variant: "primary",
        class: "text-black bg-brand2-g3 hover:bg-brand2-g1",
      },
      {
        theme: "light",
        variant: "secondary",
        class: "bg-transparent text-brand2-g3 hover:text-brand2-g1",
      },
      {
        theme: "light",
        variant: "tertiary",
        class: "text-gray-700 hover:text-gray-900 hover:underline",
      },
      {
        theme: "dark",
        variant: "primary",
        class: "text-gray-200 bg-brand2-g3 hover:bg-brand2-g1",
      },
      {
        theme: "dark",
        variant: "secondary",
        class: "text-gray-200 hover:text-white",
      },
      {
        theme: "dark",
        variant: "tertiary",
        class: "text-gray-100 hover:text-gray-200",
      },
    ],
    defaultVariants: {
      theme: "light",
      variant: "primary",
    },
  }
);

const buttonConfigs: ButtonConfigs = {
  primary: {
    primaryButton: {
      href: "#download",
      label: "Download Prospectus",
      icon: <PiDownloadSimpleBold />,
    },
    textLinkButton: { href: "#register", label: "Register Interest" },
  },
  secondary: {
    primaryButton: {
      href: "#video",
      label: "Watch Video (1min)",
      icon: <FiAirplay />,
    },
    textLinkButton: { href: "#register", label: "Register Interest" },
  },
  tertiary: {
    primaryButton: {
      href: "#download",
      label: "Download Prospectus",
      icon: <PiDownloadSimpleBold />,
    },
    textLinkButton: {
      href: "#video",
      label: "Watch Video (1min)",
      icon: <FiAirplay />,
    },
  },
};

type Props = VariantProps<typeof buttonStyles> & {
  theme: "light" | "dark";
  variant: "primary" | "secondary" | "tertiary";
};

export default function CTAButtonsBasic({
  theme = "light",
  variant = "primary",
}: Props) {
  const primaryButtonClass = buttonStyles({ theme, variant });
  const textLinkButtonClass = buttonStyles({ theme, variant: "tertiary" }); // Always use tertiary style for text link button

  const { primaryButton, textLinkButton } = buttonConfigs[variant];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
      <Link
        href={primaryButton.href}
        className={`${primaryButtonClass} rounded-lg px-8 py-3 text-md flex items-center gap-2`}
        passHref
      >
        {primaryButton.label} {primaryButton.icon}
      </Link>
      <Link
        href={textLinkButton.href}
        className={`${textLinkButtonClass} bg-none text-sm`}
        passHref
      >
        {textLinkButton.label}{" "}
        {textLinkButton.icon && (
          <span className="inline-block">{textLinkButton.icon}</span>
        )}
      </Link>
    </div>
  );
}
