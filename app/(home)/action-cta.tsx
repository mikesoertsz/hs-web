import { RegisterForm } from "@/components/forms/registerForm";
import { TitleBlock } from "@/components/ui/titleblock";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import Image from "next/image";

export default function ActionCTA() {
  const cta = {
    header: {
      preheading: "Ready to subscribe?",
      heading: "Register your interest",
      subheading:
        "Speak to an expert fund manager to see if this is the right fit for you.",
      cta1: {
        text: "Register Interest",
        href: "",
      },
    },
  };

  return (
    <Wrapper className="md:py-[5vh] relative py-8 bg-gray-900" id="register">
      <InnerWrap className="relative z-20 grid w-full grid-cols-1 gap-4 overflow-hidden bg-white shadow-md md:grid-cols-2 rounded-xl">
        <div className="flex flex-col h-full p-12 border-r border-slate-200">
          <TitleBlock
            preheading={cta.header.preheading}
            heading={cta.header.heading}
            theme="light"
            orientation="left"
          />
          <div>
            <p className="mt-4 text-sm text-gray-900 balanced">
              By submitting the form, you agree to be contacted by our team
              regarding your interest in HelmShare. We respect your privacy and
              will handle your information with care.
            </p>
          </div>
        </div>
        <div className="p-4 md:p-12">
          <RegisterForm />
        </div>
      </InnerWrap>
      <div className="absolute inset-0 hidden bg-sky-50">
        <Image
          src="/img/bgs/watertile4.webp"
          alt=""
          fill
          className="absolute inset-0 z-10"
          style={{ objectFit: "fill" }}
        />
      </div>
    </Wrapper>
  );
}
