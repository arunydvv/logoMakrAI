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
import Curved from "../Divs/Curved";

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
                  <Input
                    className="h-8 align-top placeholder:text-xs placeholder:tracking-wide p-3"
                    placeholder="Add title for the project"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-xs">
                  Add your Title
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
                  <Textarea
                    className="h-20 resize-none align-top placeholder:text-xs placeholder:tracking-wide p-3"
                    placeholder="Share your ideas, themes, or inspirations to create a logo that
                  perfectly represents your brand or project"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-xs">
                  Describe Your Logo Vision
                </FormDescription>
                {errorMessage && (
                  <FormMessage className="text-red-500">
                    {errorMessage}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />

          <label className=" text-[0.875rem] py-[4.5rem]">Logo Style</label>
          <div>
            <Curved>Hello</Curved>
            <Curved>Hello</Curved>
            <Curved>Hello</Curved>
          </div>

          <Button className=" w-full" type="submit">
            Submit
          </Button>
        </form>
      </Form>

    </div>
  );
}

export default InputForm;
