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
  const [locationName, setLocationName] = useState("");
  const [section, setSection] = useState([]);
  const [loading, setLoading] = useState(false);

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
    const selectedOption = options.find(
      (option: any) => option.title === value
    );
    if (selectedOption) {
      navigate(selectedOption.id);
    }
  };

  return (
    <div className="">
      <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-4 lg:gap-8 md:fixed px-5">
        <div className="hidden lg:col-span-1 lg:block">
          <div className="py-5">
            <div className="grid gap-3">
              {loading ? (
                <h3>Loading Sections ...</h3>
              ) : (
                section.map(({ id, title, options }: any) =>
                  options ? (
                    <Select
                      key={id}
                      onValueChange={(value) =>
                        handleSelectChange(value, options)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={title} />
                      </SelectTrigger>
                      <SelectContent>
                        {options.map((option: any) => (
                          <SelectItem key={option.id} value={option.title}>
                            {option.title}
                          </SelectItem>
                        ))}
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
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 md:overflow-y-auto md:max-h-[90vh] bg-white py-5 px-1">
          <div></div>
          <Outlet />
        </div>
        <div className="hidden md:block py-5">
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
        </div>
      </div>
    </div>
  );
}

export default Home;
