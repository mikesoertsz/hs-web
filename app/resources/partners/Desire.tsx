import { InnerWrap, Wrapper } from "@/lib/atoms";
import React from "react";

type Props = {};

export default function DesireEarningPotential({}: Props) {
  return (
    <Wrapper>
      <InnerWrap>Desire</InnerWrap>
    </Wrapper>
  );
}

export function DesireFAQ() {
  const faq = {
    header: {},
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
    <Wrapper>
      <InnerWrap>Desire</InnerWrap>
    </Wrapper>
  );
}
