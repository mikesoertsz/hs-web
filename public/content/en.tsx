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
    // disclaimer: {
    //   terms: [
    //     "No communication by Investment.Yachts Inc. or any of its affiliates (collectively, “Investment.Yachts™”), through this website or any other medium, should be construed or is intended to be a recommendation to purchase, sell or hold any security or otherwise to be investment, tax, financial, accounting, legal, regulatory or compliance advice, except for specific investment advice that may be provided by Investment.Yachts Management, LLC pursuant to a written advisory agreement between such entity and the recipient. Nothing on this website is intended as an offer to extend credit, an offer to purchase or sell securities or a solicitation of any securities transaction.",
    //     "Any financial projections or returns shown on the website are estimated predictions of performance only, are hypothetical, are not based on actual investment results and are not guarantees of future results. Estimated projections do not represent or guarantee the actual results of any transaction, and no representation is made that any transaction will, or is likely to, achieve results or profits similar to those shown. In addition, other financial metrics and calculations shown on the website (including amounts of principal and interest repaid) have not been independently verified or audited and may differ from the actual financial metrics and calculations for any investment, which are contained in the investors’ portfolios. Any investment information contained herein has been secured from sources that Investment.Yachts believes are reliable, but we make no representations or warranties as to the accuracy of such information and accept no liability therefore.",
    //     "Private placement investments are NOT bank deposits (and thus NOT insured by the FDIC or by any other federal governmental agency), are NOT guaranteed by Investment.Yachts or any other party, and MAY lose value. Investors must be able to afford the loss of their entire investment.",
    //     "Investments in private placements are speculative and involve a high degree of risk and those investors who cannot afford to lose their entire investment should not invest. Additionally, investors may receive illiquid and/or restricted securities that may be subject to holding period requirements and/or liquidity concerns. Investments in private placements are highly illiquid and those investors who cannot hold an investment for the long term (at least 5-7 years) should not invest.",
    //     "Alternative investments should only be part of your overall investment portfolio. Further, the alternative investment portion of your portfolio should include a balanced portfolio of different alternative investments.",
    //     "Articles or information from third-party media outside of this domain may discuss Investment.Yachts or relate to information contained herein, but Investment.Yachts does not approve and is not responsible for such content. Hyperlinks to third-party sites, or reproduction of third-party articles, do not constitute an approval or endorsement by Investment.Yachts of the linked or reproduced content.",
    //     'Investing in securities (the "Securities") listed on Investment.Yachts™ pose risks, including but not limited to credit risk, interest rate risk, and the risk of losing some or all of the money you invest. Before investing you should: (1) conduct your own investigation and analysis; (2) carefully consider the investment and all related charges, expenses, uncertainties and risks, including all uncertainties and risks described in offering materials; and (3) consult with your own investment, tax, financial and legal advisors. Such Securities are only suitable for accredited investors who understand and are willing and able to accept the high risks associated with private investments.',
    //     "Investing in private placements requires long-term commitments, the ability to afford to lose the entire investment, and low liquidity needs. This website provides preliminary and general information about the Securities and is intended for initial reference purposes only. It does not summarize or compile all the applicable information. This website does not constitute an offer to sell or buy any securities. No offer or sale of any Securities will occur without the delivery of confidential offering materials and related documents. This information contained herein is qualified by and subject to more detailed information in the applicable offering materials. Investment.Yachts™ is not registered as a broker-dealer.",
    //     "We prioritize your privacy and make best efforts to be GDPR compliant. Our site does not share your data with any other company or third party. We are committed to protecting your personal information and use only necessary cookies to enhance your experience.",
    //   ],
    // },
    behindtheinvestment: {
      feestructure: {
        title: "Fee Structure",
        description:
          "The fund charges a typical 2/20 structure where the fund manager charges a 2% annual management fee on the value of capital manageed by the fund, and a 20% performance fee based on EBITDA, only AFTER guaranteed dividends have been paid to you. However, the fund has a unique structure where the fund manager's performance fee is only charged on the performance bonus, not on the guaranteed 8% yield. This means the fund manager only earns a performance fee if the fund outperforms the guaranteed 8% yield. This is a unique structure in the industry and aligns the fund manager's interests with the investors. The fund also has a 0% entry fee and 0% exit fee.",
        feeschedule: [
          {
            title: "Entry Fee",
            description: "There is no entry fee charged in this fund.",
            percentage: 0,
            width: 0,
          },
          {
            title: "Preferred Return",
            description:
              "The fund guarantees a preferred return (hurdle rate) at 8% guaranteed yield, paid out quarterly or annually, BEFORE any performance bonus is paid to the fund.",
            percentage: 8,
            width: 0,
          },
          {
            title: "Catch-up Fee",
            description:
              "2% annual management fee on the value of capital managed by the fund, taken only AFTER the guaranteed Performance Return has been paid to investors.",
            percentage: 2,
            width: 0,
          },
          {
            title: "Carried Interest",
            description:
              "The fund carries a standard 80/20 split & earns a 20% on EBITDA, AFTER the guaranteed 8% yield and operating expenses of the portfolio.",
            percentage: 80,
            width: 0,
          },
          {
            title: "Exit Fee",
            description: "There is no exit fee charged in this fund.",
            percentage: 0,
            width: 0,
          },
        ],
      },
    },
    // luxuryCharterMarket: [
    //   {
    //     title: "Market Size and Growth",
    //     dataPoints: [
    //       {
    //         description:
    //           "Global yacht charter market valued at approximately USD 7.22 billion in 2022.",
    //         projection: "Projected to grow to USD 11.06 billion by 2030.",
    //         cagr: "CAGR of around 5.5% from 2022 to 2030.",
    //         source: "Fortune Business Insights",
    //       },
    //       {
    //         description:
    //           "Luxury yacht charter market expected to expand at CAGR of 4.1% from 2022 to 2031.",
    //         projection:
    //           "Projected market value of around USD 19.0 billion by 2031.",
    //         source: "Transparency Market Research",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Yacht Types and Preferences",
    //     dataPoints: [
    //       {
    //         description:
    //           "Motor-yachts dominate the market, preferred for their power, speed, and shallow-draft navigation.",
    //         source: "Grand View Research",
    //       },
    //       {
    //         description:
    //           "20-to-50-meter yacht segment most dominant, favored for lower maintenance and cost-effectiveness.",
    //         source: "Grand View Research",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Regional Insights",
    //     dataPoints: [
    //       {
    //         description: "Europe is the largest market for yacht charters.",
    //         keyCountries: "Including Croatia, Greece, and France.",
    //         source: "Fortune Business Insights",
    //       },
    //       {
    //         description:
    //           "Asia Pacific anticipated to be the fastest-growing region.",
    //         source: "Fortune Business Insights",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Commercial vs. Private Use",
    //     dataPoints: [
    //       {
    //         description:
    //           "Commercial segment drives the luxury yacht market with charter services and corporate events.",
    //         source: "IMARC Group",
    //       },
    //       {
    //         description:
    //           "Private segment caters to personalized yacht ownership experience.",
    //         source: "IMARC Group",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Key Players and Competitive Landscape",
    //     dataPoints: [
    //       {
    //         description:
    //           "Major players include Northrop & Johnson, Yachtico Inc., Sailogy S.A., Burgess, Azimut Benetti.",
    //         source: "Future Market Insights",
    //       },
    //       {
    //         description:
    //           "Italy and Taiwan emerging as significant players in yacht manufacturing.",
    //         source: "Allied Market Research",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Market Challenges",
    //     dataPoints: [
    //       {
    //         description:
    //           "High costs associated with yacht charters, including taxes and insurance, pose barriers in developing countries.",
    //         source: "Allied Market Research",
    //       },
    //     ],
    //   },
    // ],
    corporatestructure: {
      header: {
        icon: "", // Placeholder for actual icon path
        image: "", // Placeholder for actual image path
        preheading: "Understanding Our Foundation",
        heading: "Corporate Structure",
        subheading: "Explore Our Organizational Framework",
        body: "Learn about the entities that form our corporate structure and how they interconnect to sustain our business operations and growth.",
      },
      entities: [
        {
          title: "General Partner",
          name: "TBA",
          country: "Dubai",
          compliance: ["Dubai Financial Services Authority (DFSA)"],
        },
        {
          title: "Special Purpose Vehicle",
          name: "TBA",
          country: "Cayman Islands",
          compliance: ["Cayman Islands Monetary Authority (CIMA)"],
        },
        {
          title: "Trust",
          name: "TBA",
          country: "Dublin",
          compliance: ["Central Bank of Ireland"],
        },
        {
          title: "Audit Partner",
          name: "Deloitte",
          country: "Global",
          compliance: [
            "International Standards on Auditing (ISA)",
            "Anti-Money Laundering (AML)",
            "Know Your Customer (KYC)",
          ],
        },
        {
          title: "Payment Agent",
          name: "TBA",
          country: "Switzerland",
          compliance: ["Swiss Financial Market Supervisory Authority (FINMA)"],
        },
        {
          title: "Counsel - Offshore",
          name: "TBA",
          country: "Cayman Islands",
          compliance: [
            "Cayman Islands Legal Practitioners Association (CILPA)",
          ],
        },
        {
          title: "Counsel - Onshore",
          name: "TBA",
          country: "Dubai",
          compliance: ["Dubai Legal Affairs Department"],
        },
      ],
    },
    advisors: [
      {
        name: "Mike Soertsz",
        title: "Fund Manager / Principle",
        location: "Portugal",
        experience: [
          "More than 15 years experience in Startups & Tech, including building technology and models for the Banking & Finance sectors.",
          "Over 10 years experience with Venture Capital fundraising, HNWI outreach & financial modeling.",
          "International compliance and corporate structuring experience.",
          "20+ years experience with sailing & Yachting Industry.",
        ],
      },
      {
        name: "Jozef Fujka",
        title: "Investment Manager",
        location: "Slovakia",
        experience: [
          "More than a decade experience in Venture Capital and Private Equity.",
          "In excess of USD 150m of Yachting Projects Financed and Managed.",
          "Managed and Financed Real Estate Investment Portfolios worth circa USD 300m.",
          "Deep Yachting industry knowledge and contact book.",
        ],
      },
      {
        name: "David Campbell-Baker",
        title: "Venture Capital Advisory",
        location: "United Kingdom",
        experience: [
          "More than a decade experience in Venture Capital and Private Equity.",
          "In excess of USD 150m of Yachting Projects Financed and Managed.",
          "Managed and Financed Real Estate Investment Portfolios worth circa USD 300m.",
          "Deep Yachting industry knowledge and contact book.",
        ],
      },
    ],
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
            "Investing in guaranteed charter yacht revenues provides a stable and predictable income stream, as our charter partner(s) guarantee a fixed revenue regardless of the yacht's actual usage. This can be particularly attractive in the luxury vacation market where demand can fluctuate seasonally.",
          value: "1",
        },
        {
          question: "How do you guarantee annual yield?",
          answer:
            "The guaranteed revenue model for yacht charters involves a contract where our charter company partner(s) agree to pay the fund (as yacht fleet owner) a predetermined amount of money on a regular basis based on the revenue generated from the vessels through chartering. This amount is paid even if the yacht is not chartered out through the agreement with the charter company, ensuring the owner earns consistent revenue. In practice, the yachts generate well over an 8% yield, but we guarantee 8% and offset performance revenue to the end of the term.",
          value: "2",
        },
        {
          question: "Can I access a yacht for personal usage?",
          answer:
            "No. In this investment model, all yachts are exclusively utilized as business assets to maximize profit generation and are operated year-round by the charter company. This is different from other yacht investment models where the owner can use the yacht for personal purposes, often called 'Fractional Owernship'. This model is designed to maximize the revenue potential of the yacht and provide a stable income stream to the investor without the downside of 'sharing' your fractional yacht in a time-share. This also negates the negative impact of charter usage on the yacht's condition and value, which can be a problem if it's 'your' yacht.",
          value: "7",
        },
        {
          question: "What are the fees charged by the fund?",
          answer:
            "The fund charges a typical 2/20 structure where the fund manager charges a 2% annual management fee on the value of capital manageed by the fund, and a 20% performance fee based on EBITDA, only AFTER guaranteed dividends have been paid to you. However, the fund has a unique structure where the fund manager's performance fee is only charged on the performance bonus, not on the guaranteed 8% yield. This means the fund manager only earns a performance fee if the fund outperforms the guaranteed 8% yield. This is a unique structure in the industry and aligns the fund manager's interests with the investors. The fund also has a 0% entry fee and 0% exit fee.",
          value: "3",
        },
        {
          question: "What kind of return on investment can I expect?",
          answer:
            "At minimum, you will receive an annualized yield guaranteed at 8%, paid either quarterly or annually depending on your preference. The fund also projects a performance bonus of 9.5%-13% at the end of the 6-year term. This is based on the business plan projections of the yacht fleet, historical performance and the charter company's track record, and projections for the charter market over the next 6 years. The fund's projected annualized yield is minimum 9.5%.",
          value: "10",
        },
        {
          question: "Are there any additional fees I should be aware of?",
          answer: "There are zero additional fees.",
          value: "4",
        },
        {
          question: "Is there a minimum investment period?",
          answer:
            "Yes. This fund has a fixed, closed-end structure with a 6-year term. The fund is designed to provide a stable, long-term investment opportunity with a focus on income generation and capital preservation. Your principle will be repaid in full at the end of the 6-year term, as well as a performance bonus of 9.5%-13% based on the cashflow activity of the fund during the term.",
          value: "5",
        },
        {
          question: "Is there an option to exit early?",
          answer:
            "No. This fund does not allow early redemption and is a fixed 6-year term, or the remaining tenure until December 31st, 2029.",
          value: "6",
        },
        {
          question:
            "Can I purchase tickets in the fund in order currencies other than USD?",
          answer:
            "Yes. Other currencies such as, but not limited to GBP, EUR, AED, CHF, QAR, SAR, and others are accepted. The fund will convert the currency to USD at the time of investment and convert back to the original currency at the time of redemption.",
          value: "8",
        },
        {
          question:
            "At the maturity date, will the fund return the principal and the performance bonus?",
          answer:
            "Yes. At the end of the 6-year term, the fund will return the principal and the performance bonus to the investor. The performance bonus is projected to be 9.5%-13% based on the cashflow and activge management activities of the fund during the term.",
          value: "9",
        },
        {
          question: "What happens to the yachts at the end of the term?",
          answer:
            "At the end of the term, the yachts will be sold on the secondary market at fair market value for the highest possible price. The proceeds from these sales will be used to return the principal back to the investors.",
          value: "11",
        },
        {
          question: "What is the minimum investment amount?",
          answer: "",
          value: "12",
        },
        {
          question: "What is the minimum investment amount?",
          answer: "",
          value: "13",
        },
        {
          question: "What is the minimum investment amount?",
          answer: "",
          value: "14",
        },
        {
          question: "What is the minimum investment amount?",
          answer: "",
          value: "15",
        },
      ],
    },
  },
};
