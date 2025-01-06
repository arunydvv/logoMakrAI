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
  username: z
    .string()
    .min(2, "Username must be at least 2 characters.")
    .nonempty("Username is required."),
});

export function InputForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const form = useForm({
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data) {
    const result = formSchema.safeParse(data);

    if (!result.success) {
      const error = result.error.errors[0]; r
      setErrorMessage(error.message);
      return;
    }

    // Clear errors and set submitted data
    setErrorMessage("");
    setSubmittedData(data);
  }

  return (
    <div className="w-2/3 mx-auto space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                {errorMessage && (
                  <FormMessage className="text-red-500">
                    {errorMessage}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
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
