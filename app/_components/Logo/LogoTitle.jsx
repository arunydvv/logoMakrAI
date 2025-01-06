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

// Define Zod schema
const formSchema = z.object({
  logoTitle: z
    .string()
    .min(1, "Logo Title must be at least 1 character.")
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
    <div className="pt-3 w-full p-2 pl-8 mx-auto space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Logo Title Field */}
          <FormField
            control={form.control}
            name="logoTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Logo Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your logo title" {...field} />
                </FormControl>
                <FormDescription>
                  This will be the title of your logo.
                </FormDescription>
                {errorMessage && (
                  <FormMessage className="text-red-500">
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
                <FormLabel>Logo Description</FormLabel>
                <FormControl>
                  <Input
                    className="h-24 pt-2 leading-none"
                    placeholder="Describe your logo  "
                    {...field}
                  />
                </FormControl>
                <FormDescription className="">
                  Provide a brief description of your logo.
                </FormDescription>
                {errorMessage && (
                  <FormMessage className="text-red-500">
                    {errorMessage}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />

          <Button className="content-center w-full" type="submit">
            Submit
          </Button>
        </form>
      </Form>

      {submittedData && (
        <div className="mt-4 p-4 border rounded bg-green-100">
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
