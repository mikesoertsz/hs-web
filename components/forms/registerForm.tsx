"use client";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
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
  accredited_investor: z.boolean().default(false).optional(),
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
  });

  const onSubmit = async (data: any) => {
    try {
      const { error } = await supabase.from("investor_submissions").insert([
        {
          name: data.name,
          email: data.email,
          location: data.location,
          accredited_investor: data.accredited_investor,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        console.error("Error inserting data:", error);
        toast.error("Error inserting data: " + error.message);
      } else {
        console.log("Data inserted successfully");
        toast.success(
          "We received your submission. Check your email for further instructions"
        );
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
                  <FormLabel>FullName</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
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
              name="accredited_investor"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Are you an accredited investor?
                    </FormLabel>
                  </div>
                  <FormControl>
                    <div className="flex items-center">
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <span className="ml-2 text-sm">
                        {field.value ? "Yes" : "No"}
                      </span>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <p className="text-xs text-gray-500 mt-4">
              By submitting this form, you agree to our Terms and Conditions and
              Privacy Policy.
            </p>
          </fieldset>
          <Button
            type="submit"
            className="flex w-full py-6 text-md font-medium"
            disabled={!form.watch("accredited_investor")}
          >
            Register Interest
          </Button>
        </form>
      )}
    </Form>
  );
};
