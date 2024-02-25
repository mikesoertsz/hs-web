"use client";
import { Button } from "@/components/ui/button";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import React from "react";
import { Switch } from "@/components/ui/switch";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";

type Props = {};

const FormSchema = z.object({
  income: z.boolean(),
  assets: z.boolean(),
  entity: z.boolean(),
  license: z.boolean(),
  none: z.boolean(),
});

export default function WhoFor({}: Props) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <Wrapper className="py-[5vh]">
      <InnerWrap>
        <div className="bg-gray-900 flex w-full items-start justify-center p-12 rounded-xl gap-12">
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-4xl font-medium text-white">
              Who is this for?
            </h2>
            <p className="text-lg text-white mt-2 mb-4">
              This fund is specifically restricted to Accredited Investors.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg">
            <Form {...form}>
              <form className="grid grid-cols-1 gap-4">
                <FormField
                  control={form.control}
                  name="income"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                      <div className="space-y-0.5">
                        <FormLabel className="">
                          Do you earn $200K+ yearly, or $300K+ with your spousal
                          equivalent?
                        </FormLabel>
                        <FormDescription>
                          Indicate your annual income level.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="assets"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                      <div className="space-y-0.5">
                        <FormLabel>
                          Do you have $1M+ in assets, excluding your primary
                          residence?
                        </FormLabel>
                        <FormDescription>
                          Indicate if your asset value exceeds $1 million.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="entity"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                      <div className="space-y-0.5">
                        <FormLabel>
                          Do you own an entity (i.e., family office) with $5M+
                          in assets?
                        </FormLabel>
                        <FormDescription>
                          Indicate if you own an entity with significant asset
                          value.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="license"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                      <div className="space-y-0.5">
                        <FormLabel>
                          Do you hold a Series 7, 65, or 82 license currently in
                          good standing?
                        </FormLabel>
                        <FormDescription>
                          Indicate if you have a valid financial license.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="none"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                      <div className="space-y-0.5">
                        <FormLabel>None of the above</FormLabel>
                        <FormDescription>
                          Select if none of the above options apply to you.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button variant="outline" type="submit" className="flex w-full">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
