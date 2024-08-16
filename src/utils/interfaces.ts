interface FormFieldConfig {
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
  type: "text" | "radio";
  options?: { label: string; value: string }[]; // For radio buttons
}

export type { FormFieldConfig };
