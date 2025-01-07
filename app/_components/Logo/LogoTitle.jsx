"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CategorySection from "../Divs/CategorySection";


// Define Zod schema
const formSchema = z.object({
  logoTitle: z
    .string()
    .min(1, "Logo Title is required.")
    .nonempty("Logo Title is required."),
  logoDescription: z
    .string()
    .min(5, "Logo Description must be at least 5 characters.")
    .nonempty("Logo Description is required."),
});

export function InputForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const form = useForm({
    defaultValues: {
      logoTitle: "",
      logoDescription: "",
    },
  });

  function onSubmit(data) {
    const result = formSchema.safeParse(data);

    if (!result.success) {
      const error = result.error.errors[0];
      setErrorMessage(error.message);
      return;
    }

    // Clear errors and set submitted data
    setErrorMessage("");
    setSubmittedData(data);
  }

  return (
    <div className="pt-6 w-full p-4 pl-8 mx-auto space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Logo Title Field */}
          <FormField
            control={form.control}
            name="logoTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold">
                  Logo Title
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-12 border-[2px] placeholder:text-sm placeholder:tracking-wide p-3 rounded-lg  border-gray-300 focus:outline-none focus:ring-2 focus:border-none"
                    placeholder="Add title for the project"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-xs">
                  Enter a meaningful title for your logo.
                </FormDescription>
                {errorMessage && (
                  <FormMessage className="text-red-500 text-sm">
                    {errorMessage}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />

          {/* Logo Description Field */}
          <FormField
            control={form.control}
            name="logoDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold">
                  Logo Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="h-32 resize-none placeholder:text-sm placeholder:tracking-wide p-3  rounded-lg border-[2px] focus:border-none border-gray-300 focus:outline-none focus:ring-1 "
                    placeholder="Describe your logo idea, vision, or inspiration."
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-xs">
                  Share your vision for the logo design.
                </FormDescription>
                {errorMessage && (
                  <FormMessage className="text-red-500 text-sm">
                    {errorMessage}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />

          <CategorySection></CategorySection>

          <Button
            className="w-full py-3 text-white bg-fuchsia-800 hover:bg-fuchsia-700 rounded-lg"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>

      {submittedData && (
        <div className="mt-6 p-4 border rounded bg-green-100">
          <h3 className="font-bold">Submitted Data:</h3>
          <pre className="text-sm">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default InputForm;
