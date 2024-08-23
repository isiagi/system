/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { axiosInstance } from "@/api/base";
import { ReusableForm } from "@/components/ResuableForm";
import useSection from "@/store/section";
import { useEffect, useState } from "react";
// import { FieldValues } from "react-hook-form";
// import { z } from "zod";

// interface FormFieldConfig {
//   name: string;
//   label: string;
//   placeholder?: string;
//   description?: string;
//   type: "text" | "radio";
//   options?: { label: string; value: string }[]; // For radio buttons
// }

// const activityFormSchema = z.object({
//   activity_date: z.string().nonempty("Date is required."),
//   division: z.string().nonempty("Division is required."),
//   parish: z.string().nonempty("Parish is required."),
//   village: z.string().nonempty("Village is required."),
//   physical_location: z.string().nonempty("Physical location is required."),
//   gps_location: z.string().nonempty("GPS location is required."),
// });

export function ProfileForm({ formField }: any) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const showSection = useSection((state: any) => state.section);

  console.log(questions);
  const route = showSection ? "subsections" : "section";

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(
          `question/${route}/${formField}/questions/`
        );
        const data = await response.data;
        setQuestions(data);
        console.log(data, "yyyyyyyyyyyyyyyyy");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [formField]);

  // const defaultValues = {
  //   activity_date: "",
  //   division: "",
  //   parish: "",
  //   village: "",
  //   physical_location: "",
  //   gps_location: "",
  // };

  // const formFields =
  //   questions &&
  //   questions.map((field) => {
  //     const fieldConfig = {
  //       id: field.id,
  //       name: field.text.toLowerCase().replace(/\s+/g, "_"), // For example: 'hey' -> 'hey'
  //       label: field.text,
  //       placeholder: "", // You can set a placeholder if needed
  //       description: "", // Any description if needed
  //       type: field.question_type === "input" ? "text" : field.question_type,
  //     };

  //     if (field.options) {
  //       fieldConfig.options = field.options.map((option) => ({
  //         label: option,
  //         value: option.toLowerCase().replace(/\s+/g, "_"),
  //       }));
  //     }

  //     return fieldConfig;
  //   });

  async function handleSubmit(
    values: Record<
      string,
      { value: any; type: string; section: string; subsection: string }
    >
  ) {
    // console.log(responseId, "responseId");
    // Construct formattedAnswers from the `values` object
    const formattedAnswers = Object.keys(values).map((key) => {
      const { value, type, section, subsection } = values[key];

      const responseId = JSON.parse(localStorage.getItem("responseId"));

      return {
        response: responseId, // Replace with actual response ID if available
        question: key, // Use the key as question ID
        answer_text:
          type === "input" || type === "textarea"
            ? typeof value === "string"
              ? value
              : null
            : null, // Handle input or textarea types
        answer_choice:
          type === "radio" ? (typeof value === "string" ? value : null) : null, // Handle choice-based answers
        question_type: type,
        section: section,
        subsection: subsection,
      };
    });

    console.log(formattedAnswers, "formatted");

    try {
      // Send the formatted answers to the server
      // await fetch("http://127.0.0.1:8000/api/question/answers/", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formattedAnswers),
      // });
      await axiosInstance.post("question/answers/", formattedAnswers);

      // Handle successful submission
      alert("Answers submitted successfully");
    } catch (error) {
      console.log(error);
    }

    console.log(JSON.stringify(formattedAnswers), "Submitted Answers");
  }

  // console.log(formFields, "formFields");

  const fields = questions.map((question: any) => ({
    name: `question_${question.id}`, // Unique name for each field
    label: question.text,
    type: question.question_type === "input" ? "input" : "radio",
    options:
      question.options &&
      question.options?.map((option: any) => ({
        label: option,
        value: option,
      })), // Only for radio type
    questionId: question.id?.toString(), // Store the question id
    // section and subsection
    section: question.section,
    subsection: question.subsection,
  }));

  console.log(fields, "fields");

  if (loading) {
    return <div>Loading...</div>;
  }
  // alert(showSection);

  return (
    <>
      <ReusableForm
        // schema={activityFormSchema}
        // defaultValues={defaultValues}
        fields={fields}
        onSubmit={handleSubmit}
      />
    </>
  );
}
