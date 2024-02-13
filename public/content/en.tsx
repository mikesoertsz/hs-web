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

export const homepage = {
  interest: {
    disclaimer: {
      terms: [
        "No communication by Investment.Yachts Inc. or any of its affiliates (collectively, “Investment.Yachts™”), through this website or any other medium, should be construed or is intended to be a recommendation to purchase, sell or hold any security or otherwise to be investment, tax, financial, accounting, legal, regulatory or compliance advice, except for specific investment advice that may be provided by Investment.Yachts Management, LLC pursuant to a written advisory agreement between such entity and the recipient. Nothing on this website is intended as an offer to extend credit, an offer to purchase or sell securities or a solicitation of any securities transaction.",
        "Any financial projections or returns shown on the website are estimated predictions of performance only, are hypothetical, are not based on actual investment results and are not guarantees of future results. Estimated projections do not represent or guarantee the actual results of any transaction, and no representation is made that any transaction will, or is likely to, achieve results or profits similar to those shown. In addition, other financial metrics and calculations shown on the website (including amounts of principal and interest repaid) have not been independently verified or audited and may differ from the actual financial metrics and calculations for any investment, which are contained in the investors’ portfolios. Any investment information contained herein has been secured from sources that Investment.Yachts believes are reliable, but we make no representations or warranties as to the accuracy of such information and accept no liability therefore.",
        "Private placement investments are NOT bank deposits (and thus NOT insured by the FDIC or by any other federal governmental agency), are NOT guaranteed by Investment.Yachts or any other party, and MAY lose value. Investors must be able to afford the loss of their entire investment.",
        "Investments in private placements are speculative and involve a high degree of risk and those investors who cannot afford to lose their entire investment should not invest. Additionally, investors may receive illiquid and/or restricted securities that may be subject to holding period requirements and/or liquidity concerns. Investments in private placements are highly illiquid and those investors who cannot hold an investment for the long term (at least 5-7 years) should not invest.",
        "Alternative investments should only be part of your overall investment portfolio. Further, the alternative investment portion of your portfolio should include a balanced portfolio of different alternative investments.",
        "Articles or information from third-party media outside of this domain may discuss Investment.Yachts or relate to information contained herein, but Investment.Yachts does not approve and is not responsible for such content. Hyperlinks to third-party sites, or reproduction of third-party articles, do not constitute an approval or endorsement by Investment.Yachts of the linked or reproduced content.",
        'Investing in securities (the "Securities") listed on Investment.Yachts™ pose risks, including but not limited to credit risk, interest rate risk, and the risk of losing some or all of the money you invest. Before investing you should: (1) conduct your own investigation and analysis; (2) carefully consider the investment and all related charges, expenses, uncertainties and risks, including all uncertainties and risks described in offering materials; and (3) consult with your own investment, tax, financial and legal advisors. Such Securities are only suitable for accredited investors who understand and are willing and able to accept the high risks associated with private investments.',
        "Investing in private placements requires long-term commitments, the ability to afford to lose the entire investment, and low liquidity needs. This website provides preliminary and general information about the Securities and is intended for initial reference purposes only. It does not summarize or compile all the applicable information. This website does not constitute an offer to sell or buy any securities. No offer or sale of any Securities will occur without the delivery of confidential offering materials and related documents. This information contained herein is qualified by and subject to more detailed information in the applicable offering materials. Investment.Yachts™ is not registered as a broker-dealer.",
        "We prioritize your privacy and make best efforts to be GDPR compliant. Our site does not share your data with any other company or third party. We are committed to protecting your personal information and use only necessary cookies to enhance your experience.",
      ],
    },
  },
  desire: {
    faq: {
      header: {
        icon: "",
        image: "",
        preheading: "FAQ",
        heading: "Still have questions?",
        subheading: "",
        body: "Our investment advisors are here to answer your questions. Get honest and impartial advice on what to expect.",
      },
      questions: [
        {
          question: "What are the benefits of investing a charter yacht fleet?",
          answer:
            "Investing in guaranteed charter yacht revenues provides a stable and predictable income stream, as the charter company guarantees a fixed revenue regardless of the yacht's actual usage. This can be particularly attractive in the luxury vacation market where demand can fluctuate seasonally.",
          value: "item-11",
        },
        {
          question: "How do you guarantee annual yield?",
          answer:
            "The guaranteed revenue model for yacht charters involves a contract where the charter company agrees to pay the fund (as yacht fleet owner) a predetermined amount of money on a regular basis based on the revenue generated from the vessels through chartering. This amount is paid even if the yacht is not chartered out through the agreement with the charter company, ensuring the owner earns consistent revenue. In practice, the yachts generate well over an 8% yield, but we guarantee 8% and offset performance revenue to the end of the term.",
          value: "item-12",
        },
        {
          question: "What kind of return on investment can I expect?",
          answer:
            "At minimum, you will receive an annualized yeild guaranteed at 8%, paid either quarterly or annually. The fund also projects a performance bonus of 9.5%-13% at the end of the term. This is based on the business plan projections of the yacht fleet, historical performance and the charter company's track record, and projections for the charter market over the next 6 years. The fund's projected annualized yield is minimum 9.5%.",
          value: "item-13",
        },
        {
          question: "Are there any additional fees I should be aware of?",
          answer: "There are zero additional fees.",
          value: "item-1",
        },
        {
          question: "Is there a minimum investment period?",
          answer:
            "Yes. This fund has a fixed, closed-end structure with a 6-year term. The fund is designed to provide a stable, long-term investment opportunity with a focus on income generation and capital preservation. Your principle will be repaid in full at the end of the 6-year term, as well as a performance bonus of 9.5%-13% based on the cashflow activity of the fund during the term.",
          value: "item-2",
        },
        {
          question: "Can I use the yacht for personal purposes?",
          answer:
            "No, in this investment model, yachts are exclusively utilized as business assets to maximize profit generation and are operated year-round by the charter company. This is different from other yacht investment models where the owner can use the yacht for personal purposes, often called 'Fractional Owernship'.",
          value: "item-3",
        },
      ],
    },
  },
};
