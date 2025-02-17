export const seed_page = {
  attention: {
    hero: {
      preheading: "Seed Round Investment Opportunity",
      heading: "Join Our Transformative Journey",
      subheading:
        "Be at the forefront of a groundbreaking venture that aims to reshape the financial landscape.",
      buttonText: "Invest Now",
      buttonLink: "#seed",
      investmentRange: "Target Raise: €100,000",
      imageSrc: "/img/hero/hero-seed.png",
      imageAlt: "hero",
      stats: [
        {
          title: "Target Raise",
          value: "€100,000",
          subtitle: "Debt Note",
        },
        {
          title: "Return on Investment",
          value: "18%",
          subtitle: "Fixed Returns",
        },
      ],
    },
  },
  faq: {
    header: {
      icon: "",
      image: "",
      preheading: "FAQ",
      heading: "Frequently Asked Questions",
      subheading: "",
      body: "Our investment advisors are here to answer your questions. Get honest and impartial advice on what to expect.",
    },
    questions: [
      {
        question: "What is the minimum investment amount?",
        answer: "The minimum investment amount for our seed round is €10,000.",
        value: "1",
      },
      {
        question: "How will my investment be used?",
        answer:
          "Your investment will be used for legal setup, marketing campaigns, and sales infrastructure to ensure the success of our fund.",
        value: "2",
      },
      {
        question: "What is the expected return on investment?",
        answer:
          "You will receive your principal investment back along with a 18% interest payment upon reaching our fund milestone of €5 million.",
        value: "3",
      },
      {
        question: "What is the repayment period?",
        answer:
          "We are committed to a repayment period ranging from a minimum of 6 months to a maximum of 18 months.",
        value: "4",
      },
      {
        question: "Is my investment guaranteed?",
        answer:
          "While all investments carry some level of risk, we are dedicated to meeting repayment terms promptly and ensuring the security of your investment. The funds will be used for further fundraising, and as soon as minimums are hit, your seed principle will be paid back first.",
        value: "5",
      },
      {
        question: "Can I convert my investment into a discounted rate ticket?",
        answer: `Yes, you have the option to convert your investment into a discounted rate ticket in the overall fund, offering an 8% guaranteed yield and a projected 10% yield at the end of the 6-year closed fund term ending in ${new Date().getFullYear() + 6}.`,
        value: "6",
      },
    ],
  },
};
