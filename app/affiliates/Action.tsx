"use client";
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
import { Select } from "@/components/ui/select";

import {
  Heading,
  InnerWrap,
  PreHeading,
  SubHeading,
  Wrapper,
} from "@/lib/atoms";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const formSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address."),
  location: z.string().min(1, "Location is required."),
  role: z.enum([
    "captain",
    "crew",
    "broker",
    "manager",
    "charter_agent",
    "other",
  ]),
});
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ActionCTA() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <Wrapper className="py-[10vh] relative">
      <InnerWrap className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full bg-white relative z-20">
        <div className="flex flex-col justify-center items-start p-12 bg-slate-100 h-full shadow-lg">
          <PreHeading>Join Our Network</PreHeading>
          <Heading>Become a Partner</Heading>
          <SubHeading>Unlock New Earnings</SubHeading>
          <p className="mt-2 text-sm">
            Have another question?{" "}
            <a
              href="#inquiry"
              className="text-blue-500 hover:underline transition duration-200 ease-in-out"
            >
              Get in touch
            </a>
          </p>
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
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Role</FormLabel>
                    <div className="relative w-max">
                      <FormControl>
                        <select
                          className={cn(
                            buttonVariants({ variant: "outline" }),
                            "w-[200px] appearance-none font-normal"
                          )}
                          {...field}
                        >
                          <option value="">Your Role</option>
                          <option value="captain">Captain</option>
                          <option value="crew">Crew</option>
                          <option value="broker">Broker</option>
                          <option value="manager">Manager</option>
                          <option value="charter_agent">Charter Agent</option>
                          <option value="other">Other</option>
                        </select>
                      </FormControl>
                      <ChevronDownIcon className="absolute right-3 top-2.5 h-4 w-4 opacity-50" />
                    </div>
                    <FormDescription>
                      Choose the role that best describes your position in the
                      yachting industry.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Apply to be an Affiliate
              </Button>
            </form>
          </Form>
        </div>
      </InnerWrap>
      <div className="absolute inset-0 bg-sky-50">
        <Image
          src="/img/bgs/watertile1.webp"
          alt=""
          fill
          className="absolute inset-0 z-10"
          style={{ objectFit: "cover" }}
        />
      </div>
    </Wrapper>
  );
}
