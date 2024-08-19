import { axiosInstance } from "@/api/base";
import { Button } from "@/components/ui/button";

function Intro() {
  const handleClick = async () => {
    try {
      // await fetch("http://127.0.0.1:8000/api/question/responses/", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     questionnaire: "1",
      //     user: "1",
      //   }),
      // });

      const response = await axiosInstance.post("question/responses/", {
        questionnaire: "1",
        user: "1",
      });

      const data = await response.data;
      console.log(data.id, "kol");

      localStorage.setItem("responseId", data.id);

      console.log("Response added successfully");
      alert("Response added successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <div>
          <div className="flex justify-between items-center mb-7">
            <h1 className="text-3xl">Introduction</h1>
            <Button onClick={handleClick}>Respond</Button>
          </div>
        </div>

        <div className="p-4 border leading-loose">
          <p>
            This is a sanitation activity reporting digital platform for
            monitoring, analyzing, and reporting on urban sanitation activities,
            helping stakeholders track progress and improve sanitation services
            citywide. This tool facilitates data collection, analysis, and
            visualization of key performance indicators (KPIs) related to
            sanitation services. It provides real-time insights into sanitation
            efforts, enabling informed decision-making, and progress tracking
            towards achieving inclusive and sustainable sanitation for all city
            residents.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
