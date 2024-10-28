"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch, FormProvider } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import { Check, X } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { TitleBlock } from "@/components/ui/titleblock";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import AutocompleteLocation from "@/components/forms/autocomplete-location";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  location: z.string().min(1, { message: "Location is required" }),
  formType: z.literal("AngelSeed"),
});

type Props = {};

export default function BookCallCTA() {
  const [loading, setLoading] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      location: "",
      formType: "AngelSeed",
    },
  });

  const emailValue = useWatch({
    control: form.control,
    name: "email",
  });

  const isValidForm = formSchema.safeParse({
    name: form.getValues("name"),
    email: emailValue,
    location: form.getValues("location"),
    formType: "AngelSeed",
  }).success;

  useEffect(() => {
    setEmailVerified(false);
  }, [emailValue]);

  async function onSubmit(data: {
    name: string;
    email: string;
    location: string;
    formType: string;
  }) {
    setLoading(true);

    try {
      await fetch(
        "https://hook.eu2.make.com/2f8wfyklrsm88mxrf348rsqb6lgjhdk2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      toast({
        title: "Form Submitted",
        description: `Thank you ${data.name}, we will be in touch soon.`,
      });
    } catch (error) {
      console.error("Error sending webhook:", error);
    } finally {
      setLoading(false);
      form.reset();
    }
  }

  const cta = {
    header: {
      preheading: "Ready to discuss?",
      heading: "Get in touch.",
      subheading:
        "Speak directly with our fund principles to discuss the details of the fund angle round.",
      cta1: {
        text: "Book a Call",
        href: "",
      },
    },
  };

  return (
    <Wrapper className="md:py-[5vh] relative py-8 bg-gray-900" id="book-call">
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
              Filling this form, you agree to be contacted by our team regarding
              your interest in HelmShare. We respect your privacy and will
              handle your information with care.
            </p>
          </div>
        </div>
        <div className="p-4 md:p-12">
          <FormProvider {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full max-w-xl rounded-lg bg-white bg-opacity-30 border border-indigo-300 border-opacity-20 p-4 flex flex-col gap-2 items-center justify-center"
            >
              <div className="w-full">
                <Input
                  type="text"
                  placeholder="Full Name"
                  className="bg-white py-5 text-left h-9 rounded-lg text-black w-full pr-10 pl-5"
                  {...form.register("name")}
                />
              </div>
              <div className="relative w-full">
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-white py-5 text-left h-9 rounded-lg text-black w-full pr-10 pl-5"
                  {...form.register("email")}
                  onChange={(e) => {
                    form.setValue("email", e.target.value);
                    setEmailVerified(false);
                  }}
                  onBlur={() => {
                    if (formSchema.shape.email.safeParse(emailValue).success) {
                      setEmailVerified(true);
                    }
                  }}
                />
                {emailVerified && (
                  <Check
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500"
                    size={18}
                  />
                )}
              </div>
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="City, Country"
                  className="bg-white py-5 text-left h-9 rounded-lg text-black w-full pr-10 pl-5"
                  {...form.register("location")}
                />
              </div>
              <input
                type="hidden"
                value="AngelSeed"
                {...form.register("formType")}
              />
              <Button
                type="submit"
                className="relative z-20 w-full text-center flex items-center justify-center h-11 rounded-lg"
              >
                {cta.header.cta1.text}
              </Button>
            </form>
          </FormProvider>
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
