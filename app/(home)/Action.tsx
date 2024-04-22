import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useState } from "react";
import {
  Heading,
  InnerWrap,
  PreHeading,
  SubHeading,
  Wrapper,
} from "@/lib/atoms";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CTAButtonsBasic from "../(shared)/CTAButtonsBasic";

const formSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address."),
  location: z.string().min(1, "Location is required."),
  contactNumber: z.string().min(1, "Contact number is required."),
});

type Props = {};

export default function ActionCTA() {
  const [phone, setPhone] = useState("");
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

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <Wrapper className="py-[10vh] relative">
      <InnerWrap className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full bg-white relative z-20">
        <div className="flex flex-col justify-center items-start p-12 bg-slate-100 h-full shadow-lg">
          <PreHeading>{cta.header.preheading}</PreHeading>
          <Heading>{cta.header.heading}</Heading>
          <SubHeading>{cta.header.subheading}</SubHeading>
          <a
            href={cta.header.cta1.href}
            className="inline-block bg-white text-blue-500 font-bold rounded-lg px-6 py-3 transition duration-300 ease-in-out hover:bg-gray-100"
          >
            {cta.header.cta1.text}
          </a>
        </div>
        <div className="p-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Location" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Number</FormLabel>
                    <FormControl>
                      <PhoneInput
                        defaultCountry="us"
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Register Interest
              </Button>
            </form>
          </Form>
        </div>
      </InnerWrap>
      <div className="absolute inset-0 bg-sky-50">
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

export function ActionMidCTA() {
  return (
    <Wrapper>
      <InnerWrap>
        <CTAButtonsBasic />
      </InnerWrap>
    </Wrapper>
  );
}
