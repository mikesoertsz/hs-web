"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { autocomplete } from "@/lib/google";
import { PlaceAutocompleteResult } from "@googlemaps/google-maps-services-js";

const cities = [
  { label: "London", value: "london" },
  { label: "Paris", value: "paris" },
  { label: "Frankfurt", value: "frankfurt" },
  { label: "Zurich", value: "zurich" },
  { label: "Amsterdam", value: "amsterdam" },
  { label: "Luxembourg", value: "luxembourg" },
  { label: "Milan", value: "milan" },
  { label: "Madrid", value: "madrid" },
  { label: "Dublin", value: "dublin" },
] as const;

const FormSchema = z.object({
  location: z.string({
    required_error: "Please select a location.",
  }),
});

export default function AutocompleteLocation() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [predictions, setPredictions] = useState<PlaceAutocompleteResult[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchPredictions = async () => {
      if (input) {
        const predictions = await autocomplete(input);
        setPredictions(predictions ?? []);
      } else {
        setPredictions([]);
      }
    };
    fetchPredictions();
  }, [input]);

  return (
    <Form {...form}>
      <form className="space-y-6">
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground mt-1 py-5"
                      )}
                    >
                      {field.value
                        ? cities.find((city) => city.value === field.value)
                            ?.label
                        : "Select location"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search location..."
                      value={input}
                      onValueChange={setInput}
                    />
                    <CommandList>
                      <CommandEmpty>Start typing to search...</CommandEmpty>
                      <CommandGroup heading="Suggestions">
                        {predictions.map((prediction) => (
                          <CommandItem
                            key={prediction.place_id}
                            onSelect={() => {
                              form.setValue("location", prediction.description);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                prediction.description === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {prediction.description}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                      <CommandSeparator />
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
