import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialYoutube,
} from "react-icons/ti";

export const navbar = {
  logo: {
    icon: "/img/Investment.Yachts_icon.png",
    text: "Investment.Yachts logo",
    url: "/",
    imageWidth: 40,
    imageHeight: 40,
  },
  links: [
    // {
    //   text: "Get started",
    //   url: "/",
    // },
    // {
    //   text: "Work",
    //   url: "/work",
    // },
    // {
    //   text: "Story",
    //   url: "/story",
    // },
    {
      text: "Pricing",
      url: "#pricing",
    },
  ],
  cta: {
    text: "30min chat",
    url: "/booking",
  },
  socials: [
    {
      icon: <TiSocialFacebook className="w-5 h-5" />,
      url: "https://www.facebook.com",
      color: "#1877F2", // Facebook Blue
    },
    {
      icon: <TiSocialInstagram className="w-5 h-5" />,
      url: "https://www.instagram.com",
      color: "#E4405F", // Instagram Gradient Start (Pink)
    },
    {
      icon: <TiSocialTwitter className="w-5 h-5" />,
      url: "https://www.twitter.com",
      color: "#1DA1F2", // Twitter Blue
    },
  ],
};

export const footer = {
  text: {
    title: "Investment.Yachts",
    subtitle: "Digital Services Agency in Portugal",
    description: "",
    trademark: "All rights reserved.",
    drifter: {
      title: "Drifter",
      url: "https://www.drifter.agency",
    },
  },
  links: [
    // {
    //   text: "Careers",
    //   url: "/careers",
    // },
    {
      text: "Terms",
      url: "/legal/terms",
    },
    {
      text: "Refunds",
      url: "/legal/refunds",
    },
    {
      text: "Privacy",
      url: "/legal/privacy",
    },
    {
      text: "GDPR",
      url: "/legal/gdpr",
    },
  ],
};

export const banners = {
  narrow: {
    text: [
      "Use code ",
      <span className="p-1 px-2 mx-1 text-white bg-gray-900 rounded-sm" key="1">
        KICKOFF23
      </span>,
      " for 20% off",
    ],
    url: "#",
  },
};
