"use client";
import { supabase } from "@/app/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";
import { Copy, Share2 } from "react-feather";
import { useForm, useWatch } from "react-hook-form";
import "react-international-phone/style.css";
import { toast } from "sonner";
import { z } from "zod";

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
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const emailValue = useWatch({
    control: form.control,
    name: "email",
  });

  const isValidEmail = formSchema.safeParse({ email: emailValue }).success;

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      // Submit to webhook
      const webhookResponse = await fetch(
        "https://hook.eu2.make.com/2f8wfyklrsm88mxrf348rsqb6lgjhdk2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!webhookResponse.ok) {
        throw new Error("Webhook submission failed");
      }

      // Submit to Supabase
      const { error: supabaseError } = await supabase
        .from("registrations")
        .insert([
          {
            full_name: data.name,
            email: data.email,
            location: data.location,
            accredited_investor: data.accredited_investor || false,
            city: data.location.split(",")[0]?.trim() || null,
            country: data.location.split(",")[1]?.trim() || null,
          },
        ]);

      if (supabaseError) {
        console.error("Supabase error:", supabaseError);
        throw new Error("Database submission failed");
      }

      toast.success(
        "We received your submission. Check your email for further instructions"
      );
      setIsSubmitted(true);
      setShowConfetti(true);
    } catch (error: any) {
      console.error("Unexpected error:", error);
      toast.error("Unexpected error: " + error.message);
    } finally {
      setLoading(false);
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
          <div className="flex flex-col items-center justify-center gap-4 py-12">
            <Confetti active={showConfetti} config={confettiConfig} />
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
                    <Input placeholder="Your full name" {...field} required />
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
                      required
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
                    <Input placeholder="City, Country" {...field} required />
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
                      Are you an accredited investor? <br />{" "}
                      <span className="text-xs font-base text-gray-800">
                        Not sure,{" "}
                        <a href="#whofor" className="text-blue-700 text-xs">
                          check here
                        </a>
                        .
                      </span>
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
            disabled={!form.watch("accredited_investor") || loading}
          >
            {loading ? "Submitting..." : "Register Interest"}
          </Button>
        </form>
      )}
    </Form>
  );
};
