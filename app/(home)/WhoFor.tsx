"use client";
import { Button } from "@/components/ui/button";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import React, { useEffect } from "react";
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
import { useForm, useWatch } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";

type Props = {};
type QuestionName = "income" | "assets" | "entity" | "license" | "none";

const FormSchema = z.object({
  income: z.boolean(),
  assets: z.boolean(),
  entity: z.boolean(),
  license: z.boolean(),
  none: z.boolean(),
});

export default function WhoFor({}: Props) {
  const questions: {
    label: string;
    description: string;
    name: QuestionName;
  }[] = [
    {
      label:
        "Do you earn $200K+ yearly, or $300K+ with your spousal equivalent?",
      description: "Indicate your annual income level.",
      name: "income",
    },
    {
      label: "Do you have $1M+ in assets, excluding your primary residence?",
      description: "Indicate if your asset value exceeds $1 million.",
      name: "assets",
    },
    {
      label: "Do you own an entity (i.e., family office) with $5M+ in assets?",
      description:
        "Indicate if you own an entity with significant asset value.",
      name: "entity",
    },
    {
      label:
        "Do you hold a Series 7, 65, or 82 license currently in good standing?",
      description: "Indicate if you have a valid financial license.",
      name: "license",
    },
    {
      label: "None of the above",
      description: "Select if none of the above options apply to you.",
      name: "none",
    },
  ];
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const noneSelected = useWatch({
    control: form.control,
    name: "none",
  });

  useEffect(() => {
    if (noneSelected) {
      form.setValue("income", false);
      form.setValue("assets", false);
      form.setValue("entity", false);
      form.setValue("license", false);
    }
  }, [noneSelected, form]);

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
          <div className="flex flex-col items-start justify-start basis-1/2">
            <h4 className="mb-3 text-sm tracking-wide text-brand-g1">
              Interested in investing?
            </h4>
            <h2 className="text-4xl font-medium text-white font-title">
              See if you qualify.
            </h2>
            <p className="text-md text-white mt-4 mb-4">
              This fund is specifically restricted to non-US <br /> Accredited
              Investors<sup>?</sup>.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg basis-1/2">
            <Form {...form}>
              <form
                className="grid grid-cols-1 gap-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                {questions.map((question) => (
                  <FormField
                    key={question.name}
                    control={form.control}
                    name={question.name}
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition duration-200 ease-in-out">
                        <div className="space-y-0.5">
                          <FormLabel>{question.label}</FormLabel>
                          <FormDescription>
                            {question.description}
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={(checked) => {
                              if (question.name === "none") {
                                if (checked) {
                                  form.setValue("income", false);
                                  form.setValue("assets", false);
                                  form.setValue("entity", false);
                                  form.setValue("license", false);
                                }
                              } else if (noneSelected) {
                                field.onChange(false);
                              } else {
                                field.onChange(checked);
                              }
                            }}
                            className="ml-8"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                ))}
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
