"use client";
import React, { useState } from "react";
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
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address."),
  location: z.string().min(1, "Location is required."),
  contactNumber: z.string().min(1, "Contact number is required."),
});

export const RegisterForm = () => {
  const [phone, setPhone] = useState("");
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <Form {...form}>
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
                  <Input type="email" placeholder="your@email.com" {...field} />
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
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>
        <Button
          type="submit"
          className="flex w-full py-6 text-md font-semibold"
        >
          Register Interest
        </Button>
      </form>
    </Form>
  );
};
