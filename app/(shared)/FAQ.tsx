import tw from "tailwind-styled-components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { InnerWrap, Wrapper } from "@/lib/atoms";
import { Desire } from "../../lib/types";

export default function FAQ({ faq }: Desire) {
  return (
    <Wrapper id="faqs" className="bg-slate-50 py-[5vh]">
      <InnerWrap className="flex max-w-4xl">
        <Accordion type="single" collapsible className="w-full pt-12">
          {faq.questions.slice(0, 7).map((item, index) => (
            <AccordionItem
              key={index}
              value={item.value}
              className="px-4 mt-3 transition duration-200 ease-in-out bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md first:mt-0 "
            >
              <AccordionTrigger>
                <div className="text-left md:text-[1.2em] pl-2">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex px-4 pt-3 pb-6 text-md max-w-prose">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="text-xs tect-gray-400 mt-9">
          For a more comprehensive list of FAQs,{" "}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-700 tranistion duration-200 ease-in-out"
          >
            please download here
          </a>
          .
        </p>
      </InnerWrap>
    </Wrapper>
  );
}
