"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";
import { useStore } from "@/lib/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type QuestionName = "income" | "assets" | "entity" | "license" | "score";

type Props = {};

export default function QualifierForm({}: Props) {
  const [qualifies, setQualifies] = useState(false);
  const { setAccredited } = useStore() as {
    setAccredited: (value: boolean) => void;
  };

  const FormSchema = z.object({
    income: z.boolean(),
    assets: z.boolean(),
    entity: z.boolean(),
    license: z.boolean(),
    score: z.number(),
  });

  const questions: {
    label: string;
    description: string;
    name: QuestionName;
    score: number;
  }[] = [
    {
      label:
        "Do you earn $200K+ yearly, or $300K+ with your spousal equivalent?",
      description: "Indicate your annual income level.",
      name: "income",
      score: 50,
    },
    {
      label: "Do you have $1M+ in assets, excluding your primary residence?",
      description: "Indicate if your asset value exceeds $1 million.",
      name: "assets",
      score: 50,
    },
    {
      label: "Do you own an entity (i.e., family office) with $5M+ in assets?",
      description:
        "Indicate if you own an entity with significant asset value.",
      name: "entity",
      score: 50,
    },
    {
      label:
        "Do you hold a Series 7, 65, or 82 license currently in good standing?",
      description: "Indicate if you have a valid financial license.",
      name: "license",
      score: 50,
    },
  ];
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  // Function to check if any of the form values are true
  const checkQualification = (data: z.infer<typeof FormSchema>) => {
    const qualifies = Object.values(data).some((value) => value === true);
    setQualifies(qualifies);
    if (qualifies) {
      setAccredited(true); // Update zustand state
    }
  };

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

  const qualifier = {
    header: {
      preheading: "Interested in investing?",
      heading: "See if you qualify.",
      subheading: "This fund is exclusively for Accredited Investors.",
      body: "HelmShare is an exclusive fund available only to experienced, accredited investors. Each potential investor will undergo a standard vetting process through our partner InvestorVerify.com.",
      icon: "",
      image: "",
    },
    qualifiedHeader: {
      preheading: "Congratulations!",
      heading: "You Qualify",
      subheading: "",
      body: (
        <>
          You meet the criteria for an accredited investor. <br />
          Register below & we&apos;ll reach out to you with more information.
        </>
      ),
      icon: "",
      image: "",
    },
  };
  return (
    <>
      <Form {...form}>
        <form
          className="grid grid-cols-1 gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {questions.map(({ label, description, name }) => (
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field }) => (
                <FormItem
                  className={`flex flex-row items-center justify-between p-3 transition duration-200 ease-in-out border rounded-lg shadow-sm ${
                    field.value === true
                      ? "bg-green-100 hover:border-green-400"
                      : "hover:bg-slate-50"
                  } border-slate-300`}
                >
                  <div className="space-y-0.5">
                    <FormLabel>{label}</FormLabel>
                    <FormDescription>{description}</FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value === true} // Ensure the value is a boolean
                      onCheckedChange={(checked) => {
                        field.onChange(checked);
                        checkQualification({
                          ...form.getValues(),
                          [name]: checked,
                        }); // Update qualification state on switch toggle
                      }}
                      className="ml-8"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          ))}
        </form>
      </Form>
    </>
  );
}
