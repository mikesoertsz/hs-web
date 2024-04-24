import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
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
  HeaderWrapLeft,
  Heading,
  InnerWrap,
  Left,
  PreHeading,
  SubHeading,
  Wrapper,
} from "@/lib/atoms";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CTAButtonsBasic from "../(shared)/CTAButtonsBasic";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { TitleLeft } from "../(shared)/Titles";

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
    <Wrapper className="md:py-[10vh] relative" id="register">
      <InnerWrap className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full bg-white relative z-20 rounded-xl overflow-hidden shadow-md">
        <div className="flex h-full p-12">
          <TitleLeft
            preheading={cta.header.preheading}
            heading={cta.header.heading}
            subheading={cta.header.subheading}
          />
        </div>
        <div className="p-12 bg-slate-100">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <fieldset className="grid rounded-lg border p-6 gap-4 bg-white">
                <legend className="-ml-1 px-1 text-sm text-brand2-base1 font-medium">
                  Contact Information
                </legend>
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
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          {...field}
                        />
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
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="City, Country" {...field} />
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
              </fieldset>
              <fieldset className="grid rounded-lg border p-6 gap-4 bg-white">
                <legend className="-ml-1 px-1 text-sm text-brand2-base1 font-medium">
                  Investment Preferences
                </legend>
                <FormField
                  control={form.control}
                  name="payoutFrequency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="m-0">Payout Frequency</FormLabel>
                      <p className="p-0 text-xs text-gray-400">
                        How often would you like to be paid out your earnings?
                      </p>
                      <FormControl>
                        <RadioGroup
                          {...field}
                          defaultValue="quarterly"
                          className="grid grid-cols-1 md:grid-cols-3 gap-4"
                        >
                          <div>
                            <RadioGroupItem
                              value="quarterly"
                              id="quarterly"
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor="quarterly"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              Quarterly
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem
                              value="yearly"
                              id="yearly"
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor="yearly"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              Yearly
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem
                              value="endOfTerm"
                              id="endOfTerm"
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor="endOfTerm"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              End of Term
                            </Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </fieldset>
              <fieldset className="grid rounded-lg border p-6 gap-4 bg-white">
                <legend className="-ml-1 px-1 text-sm text-brand2-base1 font-medium">
                  Contact preferences
                </legend>
                <FormField
                  control={form.control}
                  name="communication_emails"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Communication emails
                        </FormLabel>
                        <FormDescription>
                          Receive emails about your account activity.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="marketing_emails"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Marketing emails
                        </FormLabel>
                        <FormDescription>
                          Receive emails about new products, features, and more.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </fieldset>
              <Button
                type="submit"
                className="w-full rounded-lg px-8 text-md text-black h-12 flex items-center gap-2 bg-brand2-g1 hover:bg-brand2-g3"
              >
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
        <CTAButtonsBasic variant="secondary" theme="light" />
      </InnerWrap>
    </Wrapper>
  );
}
