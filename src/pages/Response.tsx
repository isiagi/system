/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "@/api/base";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Response() {
  const [section, setSection] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // fetch section from django localhost
    const fetchSection = async () => {
      //   const response = await fetch(
      //     "http://127.0.0.1:8000/api/question/answers/"
      //   );
      try {
        setLoading(true);
        const response = await axiosInstance.get("question/grouped-answers/");
        const data = await response.data;
        setSection(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSection();
  }, []);

  console.log(section);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h1>Response</h1>
      {/* <pre>{JSON.stringify(section, null, 2)}</pre> */}
      {/* <div className="px-5 grid gap-3">
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
      </div> */}
      <div className="px-5 grid gap-3">
        {section.map(({ id, user, answers }: any) => (
          <Link to={`/responseDetail/${id}/${user.username}`} key={id}>
            <div className="border flex justify-between items-center p-3">
              <p>{id}</p>
              <p>User: {user.username}</p>
              <p>{answers.length} answers</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
