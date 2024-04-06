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
    <Wrapper>
      <InnerWrap>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">{faq.header.title}</h2>
          <p className="text-gray-500">{faq.header.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {faq.questions.map((q, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="font-bold">{q.question}</h3>
              <p className="text-gray-500">{q.answer}</p>
            </div>
          ))}
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
