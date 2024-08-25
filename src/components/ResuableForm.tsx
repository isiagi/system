/* eslint-disable @typescript-eslint/no-explicit-any */

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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm, FieldValues } from "react-hook-form";

// Mocking the questions array
// const questions = [
//   {
//     id: 1,
//     text: "What is love?",
//     question_type: "input",
//     options: [],
//   },
//   {
//     id: 4,
//     text: "What is love id?",
//     question_type: "radio",
//     options: [
//       { label: "Option 1", value: "option1" },
//       { label: "Option 2", value: "option2" },
//       { label: "Option 3", value: "option3" },
//     ],
//   },
//   // More questions...
// ];

// const field = questions.map((question) => ({
//   name: `question_${question.id}`, // Unique name for each field
//   label: question.text,
//   type: question.question_type === "input" ? "text" : "radio",
//   options: question.options.map((option) => ({
//     label: option.label,
//     value: option.value,
//   })), // Only for radio type
//   questionId: question.id.toString(), // Store the question id
// }));

export function ReusableForm({
  fields,
  onSubmit,
}: {
  fields: any[];
  onSubmit: (values: FieldValues) => void;
}) {
  const form = useForm();

  const handleSubmit = (values: FieldValues) => {
    console.log(values, "values");
    const formattedValues = fields.reduce((acc, field) => {
      const value = values[field.name];
      if (value !== undefined) {
        acc[field.questionId] = {
          value: value,
          type: field.type,
          section: field.section,
          subsection: field.subsection,
          subsubsection: field.subsubsection,
        }; // Use questionId as the key
      }
      return acc;
    }, {} as Record<string, any>);

    console.log(formattedValues, "formattedValues");

    onSubmit(formattedValues);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-2">
        {fields.map((fieldConfig) => (
          <FormField
            key={fieldConfig.name}
            control={form.control}
            name={fieldConfig.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{fieldConfig.label}</FormLabel>
                <FormControl>
                  <>
                    {fieldConfig.type === "input" && (
                      <Input placeholder={fieldConfig.placeholder} {...field} />
                    )}
                    {fieldConfig.type === "radio" && (
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        {fieldConfig.options?.map(({ label, value }: any) => (
                          <div
                            key={value}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem
                              key={value}
                              value={value}
                              id={value}
                            />
                            <FormLabel htmlFor={value} className="font-normal">
                              {label}
                            </FormLabel>
                          </div>
                        ))}
                      </RadioGroup>
                    )}
                  </>
                </FormControl>
                {fieldConfig.description && (
                  <FormDescription>{fieldConfig.description}</FormDescription>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
