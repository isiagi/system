/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "@/api/base";
import React, { useEffect, useState } from "react";

export default function Response() {
  const [section, setSection] = useState([]);
  useEffect(() => {
    // fetch section from django localhost
    const fetchSection = async () => {
      //   const response = await fetch(
      //     "http://127.0.0.1:8000/api/question/answers/"
      //   );
      const response = await axiosInstance.get("question/answers/");
      const data = await response.data;
      setSection(data);
      console.log(data);
    };

    fetchSection();
  }, []);

  console.log(section);

  return (
    <div>
      <h1>Response</h1>
      {/* <pre>{JSON.stringify(section, null, 2)}</pre> */}
      <div className="px-5 grid gap-3">
        <div className="flex justify-between items-center">
          <h3>Question</h3>
          <h3>Answer</h3>
          <h3>User</h3>
        </div>
        {section.map((data: any) => (
          <div>
            <div className="border flex justify-between items-center p-3">
              <p>{data.question.text}</p>
              <p>{data.answer_text || data.answer_choice}</p>
              <p>{data.response.user.username}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
