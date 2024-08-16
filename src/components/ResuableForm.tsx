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
// import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldValues } from "react-hook-form";
import { ZodType } from "zod";
// import { Label } from "./ui/label";

interface FormFieldConfig {
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
  type: "text" | "radio";
  options?: { label: string; value: string }[]; // For radio buttons
}

interface ReusableFormProps {
  schema: ZodType<any>;
  defaultValues: FieldValues;
  fields: FormFieldConfig[];
  onSubmit: (values: FieldValues) => void;
}

export function ReusableForm({
  schema,
  defaultValues,
  fields,
  onSubmit,
}: ReusableFormProps) {
  const form = useForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                    {fieldConfig.type === "text" && (
                      <Input placeholder={fieldConfig.placeholder} {...field} />
                    )}
                    {fieldConfig.type === "radio" && (
                      <RadioGroup
                        defaultValue={fieldConfig.options?.[0].value}
                        onValueChange={field.onChange}
                        {...field}
                      >
                        {fieldConfig.options?.map(({ label, value }) => (
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
