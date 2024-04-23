import React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { FiAirplay } from "react-icons/fi";
import { Wrapper } from "@/lib/atoms";

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
        light: "text-black",
        dark: "text-white",
      },
      variant: {
        primary: "bg-brand2-g3 hover:bg-brand2-g1",
        secondary: "bg-green-500 hover:bg-green-700",
        tertiary: "text-gray-700 hover:text-gray-900 hover:underline",
      },
    },
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
    <div className="flex items-center justify-center gap-6 p-12">
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
