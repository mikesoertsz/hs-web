import { Body, Heading, InnerWrap, PreHeading, Wrapper } from "@/lib/atoms";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

export default function DesireEarningPotential({}: Props) {
  const earningpotential = {
    header: {
      preheader: "Unlock Earnings Through Referrals",
      title: "Leverage Your Network for Income",
      description:
        "Discover how your connections can become a source of passive income. By referring successful investors to our yacht investment fund, you can earn substantial commissions. It's a simple yet effective way to monetize your network and expertise in the luxury yacht market. Whether you're well-versed in the industry or just starting out, our program offers a lucrative opportunity to support your financial goals through referrals.",
      buttontext: "Learn More",
      buttonlink: "/earnings-through-referrals",
    },
    tabs: [
      {
        title: "Profitability",
        description:
          "Unlock Exceptional Profit Margins. Our referral program is designed to ensure you benefit from every introduction, with a clear and transparent commission structure that rewards your efforts generously.",
      },
      {
        title: "Community",
        description:
          "Join an Elite Circle. By becoming a part of our referral program, you're not just expanding your network; you're entering an elite circle of yacht industry professionals. This is your chance to align with the best in the business and elevate your standing in the luxury yacht community.",
      },
      {
        title: "Confidence",
        description:
          "Invest in a Relationship Built on Confidence. We understand the importance of trust in business. That's why we're committed to building a lasting relationship with you, grounded in transparency and mutual respect. Our proven track record in the yacht investment sector speaks volumes, allowing you to refer with confidence.",
      },
    ],
  };
  return (
    <Wrapper>
      <InnerWrap>
        <div className="flex items-center justify-center w-full">
          <div className="text-left flex flex-col items-center justify-center w-full">
            <PreHeading>{earningpotential.header.preheader}</PreHeading>
            <Heading className="balanced">
              {earningpotential.header.title}
            </Heading>
            <Body>{earningpotential.header.description}</Body>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}

export function DesireFAQ() {
  const faq = {
    header: {
      preheader: "Frequently Asked Questions",
      title: "Got Questions?",
      description: "We've got answers.",
      buttontext: "",
      buttonlink: "",
    },
    questions: [
      {
        question: "How do I get started?",
        answer:
          "To get started, simply fill out the form on this page and one of our team members will reach out to you to discuss the next steps.",
      },
      {
        question: "How much can I earn?",
        answer:
          "The earning potential is unlimited. You will earn a commission for every successful referral you make to our yacht investment fund.",
      },
      {
        question: "How do I get paid?",
        answer:
          "You will receive your commission payment via bank transfer or PayPal, depending on your preference.",
      },
    ],
  };
  return (
    <Wrapper className="py-[10vh]">
      <InnerWrap>
        <div className="flex items-center justify-center w-full">
          <div className="text-left flex flex-col items-start justify-start w-full">
            <PreHeading>{faq.header.preheader}</PreHeading>
            <Heading>{faq.header.title}</Heading>
            <Body>{faq.header.description}</Body>
          </div>
          <div className="text-center flex items-center justify-center w-full">
            <Accordion type="single" collapsible className="w-full text-left">
              {faq.questions.map((q, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{q.question}</AccordionTrigger>
                  <AccordionContent>{q.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
