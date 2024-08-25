/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import axios from "axios";
import { axiosInstance } from "@/api/base";
import useSection from "@/store/section";
import { Button } from "@/components/ui/button";

// const sectionList = [
//   {
//     id: 0,
//     title: "Demographics",
//     link: "demographics",
//     // options: ["Demographics"],
//   },
//   {
//     id: 1,
//     title: "Community / Households",
//     link: "community",
//     options: [
//       {
//         id: 1,
//         title: "Household Door to Door Sensitizations",
//         link: "/household",
//       },
//       { id: 2, title: "WASH and Solid Waste Management", link: "/wash" },
//       { id: 3, title: "Sewer Connection", link: "/sewer" },
//     ],
//   },
//   {
//     id: 2,
//     title: "Institution Sanitation",
//     link: "institution",
//     options: [
//       { id: 1, title: "Division Offices", link: "/division" },
//       { id: 2, title: "Health Centres", link: "/health" },
//       { id: 3, title: "Public Schools", link: "/school" },
//     ],
//   },
//   {
//     id: 3,
//     title: "Public Sanitation",
//     link: "public",
//     // options: ["All"],
//   },
//   {
//     id: 4,
//     title: "Commercial Sanitation",
//     link: "commercial",
//     // options: ["All"],
//   },
// ];

// {
//   id: 5,
//   title: "Private Sector",
//   link: "private",
//   // options: ["All"],
// },
// {
//   id: 6,
//   title: "Knowledge",
//   link: "private",
//   // options: [
//   //   "Peer to Peer Engagements",
//   //   "Abstracts and Papers",
//   //   "Report Writing",
//   // ],
// },

function Home() {
  const navigate = useNavigate();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [locationName, setLocationName] = useState("");
  const [section, setSection] = useState([]);
  const [loading, setLoading] = useState(false);
  const [responseAvailable, setResponseAvailable] = useState(false);

  const showSection = useSection((state: any) => state.setSection);
  const setSubsection = useSection((state: any) => state.setSubsection);

  useEffect(() => {
    const responseId = localStorage.getItem("responseId");
    setResponseAvailable(!!responseId);
  }, [responseAvailable]);

  useEffect(() => {
    // fetch section from django localhost
    // const fetchSection = async () => {
    //   const response = await fetch(
    //     "http://127.0.0.1:8000/api/question/sections/"
    //   );
    //   const data = await response.json();
    //   setSection(data);
    //   console.log(data);
    // };

    const fetchSection = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("question/sections/");
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

  const apiKey = "AIzaSyAu20JbWiiLjfp0lhJN6xqfAgKL9xaa3Xk"; // Replace with your API key

  const getLocationName = async () => {
    if (!position.latitude || !position.longitude) {
      // alert("Please enter both latitude and longitude");
      return;
    }

    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.latitude},${position.longitude}&key=${apiKey}`;
    try {
      const response = await axios.get(url);
      const results = response.data.results;
      if (results.length > 0) {
        setLocationName(results[0].formatted_address);
      } else {
        setLocationName("No address found");
      }
    } catch (error) {
      console.error("Error fetching location data:", error);
      setLocationName("Error fetching location data");
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });

      getLocationName();
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, [position.latitude, position.longitude]);

  const handleSelectChange = (value: any, options: any) => {
    if (value === "#") return;
    const selectedOption = options.find((option: any) => option.id === value);
    if (selectedOption) {
      navigate(`form/subsection/${selectedOption.id}`);
      showSection(selectedOption.id);
    }
  };

  const handleSubChange = (value: any, options: any) => {
    const selectedOption = options.find((option: any) => option.id === value);
    if (selectedOption) {
      navigate(`form/subsection2/${selectedOption.id}`);
      setSubsection(selectedOption.id);
    }
  };

  const handleEndResponse = () => {
    localStorage.removeItem("responseId");
    setResponseAvailable(false);
  };

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

      localStorage.setItem("responseId", JSON.stringify(data.id));

      setResponseAvailable(true);

      console.log("Response added successfully");
      alert("Response added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-4 lg:gap-8 md:fixed px-5 w-full">
        <div className="hidden lg:col-span-1 lg:block">
          <div className="py-5">
            <div className="grid gap-3">
              {loading ? (
                <h3>Loading Sections ...</h3>
              ) : !responseAvailable ? (
                <div className="border rounded-lg py-2 px-2">
                  <Button className="w-full bg-green-500" onClick={handleClick}>
                    Create Response
                  </Button>
                </div>
              ) : (
                section.map(({ id, title, subsections }: any) =>
                  subsections && subsections.length > 0 ? (
                    <Select
                      key={id}
                      onValueChange={(value) =>
                        handleSelectChange(value, subsections)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={title} />
                      </SelectTrigger>
                      <SelectContent>
                        {subsections.map(
                          ({
                            id: subId,
                            title: subTitle,
                            subsubsections,
                          }: any) => (
                            <div key={subId}>
                              <SelectItem value={subId}>{subTitle}</SelectItem>
                              {subsubsections && subsubsections.length > 0 && (
                                <div className="">
                                  <Select
                                    onValueChange={(value) =>
                                      handleSubChange(value, subsubsections)
                                    }
                                  >
                                    <SelectTrigger className="w-full mt-2">
                                      <SelectValue
                                        placeholder={`Select ${subTitle}`}
                                      />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {subsubsections.map(
                                        (subsubsection: any) => (
                                          <SelectItem
                                            key={subsubsection.id}
                                            value={subsubsection.id}
                                          >
                                            {subsubsection.title}
                                          </SelectItem>
                                        )
                                      )}
                                    </SelectContent>
                                  </Select>
                                </div>
                              )}
                            </div>
                          )
                        )}
                      </SelectContent>
                    </Select>
                  ) : (
                    <Link to={`/form/${id}`} key={id}>
                      <div className="border rounded-lg py-2 px-2">
                        <p className="text-sm">{title}</p>
                      </div>
                    </Link>
                  )
                )
              )}

              {responseAvailable && (
                <div className="border rounded-lg py-2 px-2">
                  <Button
                    className="w-full bg-red-500"
                    onClick={handleEndResponse}
                  >
                    End Response
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 md:overflow-y-auto md:max-h-[90vh] bg-white py-5 px-1">
          <Outlet />
        </div>
        {/* <div className="hidden md:block py-5">
          <h2>My Current Location</h2>
          {position.latitude && position.longitude ? (
            <p className="text-sm">
              Latitude: {position.latitude}, Longitude: {position.longitude}
            </p>
          ) : (
            <p>Loading...</p>
          )}

          <p className="w-[10px] h-[10px] rounded-full bg-green-700" />
          <p className="text-sm">{locationName}</p>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
