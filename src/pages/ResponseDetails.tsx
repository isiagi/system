/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "@/api/base";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ResponseDetails() {
  const { responseId, username } = useParams();
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

  // Filter data based on responseId and username
  const filteredData = section.filter(
    (item: any) => item.id == responseId && item.user.username == username
  );

  console.log(filteredData);

  return (
    <div>
      {/* <h1>Response Details</h1>
      <p>Response ID: {responseId}</p>
      <p>Username: {username}</p> */}
      <QuestionAnswerList data={filteredData} />
    </div>
  );
}

export default ResponseDetails;

const QuestionAnswerList = ({ data }: any) => {
  return (
    <div>
      {data.map((item: any) => (
        <div key={item.id}>
          <h3>Questionnaire ID: {item.id}</h3>
          <ul>
            {item.answers.map((answer: any) => (
              <li key={answer.id}>
                <strong>Question:</strong> {answer.question.text}
                <br />
                <strong>Answer:</strong>{" "}
                {answer.answer_text ||
                  answer.answer_choice ||
                  "No answer provided"}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

// Usage
