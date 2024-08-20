"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Button } from "@/components/ui/button";
import { supabase } from "@/supabase/supabase";
import { toast } from "sonner";
import { Copy, Share2 } from "react-feather";
import Confetti from "react-dom-confetti";

const formSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address."),
  location: z.string().min(1, "Location is required."),
  // contactNumber: z.string().min(1, "Contact number is required."),
});

const confettiConfig = {
  angle: 90,
  spread: 180,
  startVelocity: 30,
  elementCount: 200,
  decay: 0.95,
  width: "8px",
  height: "7px",
  colors: ["#900C3F", "#C70039", "#F94C10", "#F8DE22"],
};

export const RegisterForm = () => {
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Mike Soertsz",
      email: "mike@helmshare.yachts",
      location: "Porto, Portugal",
    },
  });

  const onSubmit = async (data: any) => {
    try {
      const { error } = await supabase.from("investor_submissions").insert([
        {
          name: data.name,
          email: data.email,
          location: data.location,
          // contactNumber: data.contactNumber,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        console.error("Error inserting data:", error);
        toast.error("Error inserting data: " + error.message);
      } else {
        console.log("Data inserted successfully");
        toast.success("Data inserted successfully");
        setIsSubmitted(true);
        setShowConfetti(true);
      }
    } catch (error: any) {
      console.error("Unexpected error:", error);
      toast.error("Unexpected error: " + error.message);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setShowConfetti(false);
    form.reset();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
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
      toast.error("Share not supported on this browser.");
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      setShowConfetti(true);
    }
  }, [isSubmitted]);

  return (
    <Form {...form}>
      {isSubmitted ? (
        <div className="space-y-3 p-4 pt-8 bg-white border rounded-lg">
          <Confetti active={showConfetti} config={confettiConfig} />
          <p className="text-center text-lg font-semibold">
            Submission Successful! 🎉
          </p>
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
              Share <Share2 className="ml-2" size={16} />
            </Button>
            <Button
              onClick={copyToClipboard}
              className=""
              variant="outline"
              size="sm"
            >
              Copy Link <Copy className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <fieldset className="grid gap-4 p-6 bg-white border rounded-lg">
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
            {/* <FormField
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
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
          </fieldset>
          <Button
            type="submit"
            className="flex w-full py-6 text-md font-semibold"
          >
            Register Interest
          </Button>
        </form>
      )}
    </Form>
  );
};
