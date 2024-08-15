"use client";

import { ReusableForm } from "@/components/ResuableForm";
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
import { formFields } from "@/utils/formData";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";

interface FormFieldConfig {
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
  type: "text" | "radio";
  options?: { label: string; value: string }[]; // For radio buttons
}

const activityFormSchema = z.object({
  activity_date: z.string().nonempty("Date is required."),
  division: z.string().nonempty("Division is required."),
  parish: z.string().nonempty("Parish is required."),
  village: z.string().nonempty("Village is required."),
  physical_location: z.string().nonempty("Physical location is required."),
  gps_location: z.string().nonempty("GPS location is required."),
});

export function ProfileForm() {
  const defaultValues = {
    activity_date: "",
    division: "",
    parish: "",
    village: "",
    physical_location: "",
    gps_location: "",
  };

  function handleSubmit(values: FieldValues) {
    console.log(values);
  }

  return (
    <ReusableForm
      schema={activityFormSchema}
      defaultValues={defaultValues}
      fields={formFields}
      onSubmit={handleSubmit}
    />
  );
}
