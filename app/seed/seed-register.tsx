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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Confetti from "react-dom-confetti";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  location: z.string().min(1, { message: "Location is required" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  formType: z.literal("AngelSeed"),
});

type Props = {};

export default function BookCallCTA() {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      location: "",
      phone: "",
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
    phone: form.getValues("phone"),
    formType: "AngelSeed",
  }).success;

  useEffect(() => {
    setEmailVerified(false);
  }, [emailValue]);

  async function onSubmit(data: {
    name: string;
    email: string;
    location: string;
    phone: string;
    formType: string;
  }) {
    setLoading(true);

    try {
      await fetch(
        "https://hook.eu2.make.com/d1xvhxkg2vnd165gqyqz9hfc5q7gh35f",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      toast({
        title: "Success",
        description:
          "We received your submission. Check your email for further instructions",
        variant: "default",
      });
      setIsSubmitted(true);
      setShowConfetti(true);
    } catch (error: any) {
      console.error("Unexpected error:", error);
      toast({
        title: "Error",
        description: "Unexpected error: " + error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      form.reset();
    }
  }

  const resetForm = () => {
    setIsSubmitted(false);
    setShowConfetti(false);
    form.reset();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Success",
      description: "Link copied to clipboard!",
      variant: "default",
    });
  };

  const sharePage = () => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          url: window.location.href,
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      toast({
        title: "Error",
        description: "Share not supported on this browser.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      setShowConfetti(true);
    }
  }, [isSubmitted]);

  return (
    <Wrapper className="md:py-[5vh] relative py-8 bg-gray-900" id="book-call">
      <InnerWrap className="relative z-20 grid w-full grid-cols-1 gap-4 overflow-hidden bg-white shadow-md md:grid-cols-2 rounded-xl">
        <div className="flex flex-col h-full p-12 border-r border-slate-200">
          <TitleBlock
            preheading="Interested?"
            heading="Register"
            theme="light"
            orientation="left"
          />
          <div>
            <p className="mt-4 text-sm text-gray-900 balanced">
              Filling this form, you agree to be contacted by our team regarding
              your interest in HelmShare Seed Round. We respect your privacy and
              will handle your information with care.
            </p>
          </div>
        </div>
        <div className="p-4 md:p-12 flex w-full">
          <FormProvider {...form}>
            <Form {...form}>
              {isSubmitted ? (
                <div className="space-y-3 p-4 pt-8 bg-white border rounded-lg">
                  <div className="flex flex-col items-center justify-center gap-4 py-12">
                    <Confetti
                      active={showConfetti}
                      config={{
                        angle: 90,
                        spread: 45,
                        startVelocity: 45,
                        elementCount: 50,
                        dragFriction: 0.1,
                        duration: 3000,
                        stagger: 0,
                        width: "10px",
                        height: "10px",
                        colors: [
                          "#a864fd",
                          "#29cdff",
                          "#78ff44",
                          "#ff718d",
                          "#fdff6a",
                        ],
                      }}
                    />
                    <span className="text-4xl">🎉</span>
                    <p className="text-center text-lg font-semibold">
                      Submission Successful!
                    </p>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <Button
                      onClick={resetForm}
                      className=""
                      variant="secondary"
                      size="sm"
                    >
                      Reset Form
                    </Button>
                    <Button
                      onClick={sharePage}
                      className=""
                      variant="outline"
                      size="sm"
                    >
                      Share <span className="ml-2">🔗</span>
                    </Button>
                    <Button
                      onClick={copyToClipboard}
                      className=""
                      variant="outline"
                      size="sm"
                    >
                      Copy Link <span className="ml-2">📋</span>
                    </Button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-full rounded-lg border border-indigo-300 border-opacity-20 p-4 flex flex-col gap-2 items-center justify-center "
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input placeholder="Full Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Email"
                            {...field}
                            onChange={(e) => {
                              form.setValue("email", e.target.value);
                              setEmailVerified(false);
                            }}
                            onBlur={() => {
                              if (
                                formSchema.shape.email.safeParse(emailValue)
                                  .success
                              ) {
                                setEmailVerified(true);
                              }
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                        {emailVerified && (
                          <Check
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500"
                            size={18}
                          />
                        )}
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input placeholder="Mobile" {...field} />
                        </FormControl>
                        <FormDescription className="w-full text-right">
                          * Please include country code, i.e. +351 XXXXXXXX
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input placeholder="Your City, Country" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <input
                    type="hidden"
                    value="AngelSeed"
                    {...form.register("formType")}
                  />
                  <Button
                    type="submit"
                    className="relative z-20 w-full text-center flex items-center justify-center h-11 rounded-lg"
                  >
                    Submit
                  </Button>
                </form>
              )}
            </Form>
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
