/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser, Menu, Package2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
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

const sectionList = [
  {
    id: 0,
    title: "Demographics",
    link: "demographics",
    // options: ["Demographics"],
  },
  {
    id: 1,
    title: "Community / Households",
    link: "community",
    options: [
      {
        id: 1,
        title: "Household Door to Door Sensitizations",
        link: "/household",
      },
      { id: 2, title: "WASH and Solid Waste Management", link: "/wash" },
      { id: 3, title: "Sewer Connection", link: "/sewer" },
    ],
  },
  {
    id: 2,
    title: "Institution Sanitation",
    link: "institution",
    options: [
      { id: 1, title: "Division Offices", link: "/division" },
      { id: 2, title: "Health Centres", link: "/health" },
      { id: 3, title: "Public Schools", link: "/school" },
    ],
  },
  {
    id: 3,
    title: "Public Sanitation",
    link: "public",
    // options: ["All"],
  },
  {
    id: 4,
    title: "Commercial Sanitation",
    link: "commercial",
    // options: ["All"],
  },
];

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
      navigate(selectedOption.link);
    }
  };

  return (
    <div className="">
      <header className="sticky top-0 flex justify-between h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <div className="flex items-center gap-2 text-lg font-semibold md:text-base">
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </div>
          <Link to={"/"}>
            <div className="text-muted-foreground transition-colors hover:text-foreground">
              Home
            </div>
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </div>

              <div className="grid gap-3">
                {sectionList.map(({ id, title, link, options }) =>
                  options ? (
                    <SheetClose>
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
                          {options.map((option) => (
                            <SelectItem key={option.id} value={option.title}>
                              {option.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </SheetClose>
                  ) : (
                    <SheetClose asChild>
                      <Link to={`/${link}`} key={id}>
                        <div className="border rounded-lg py-2 px-2">
                          <p className="text-sm">{title}</p>
                        </div>
                      </Link>
                    </SheetClose>
                  )
                )}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-4 md:ml-auto md:gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-4 lg:gap-8 md:fixed px-5">
        <div className="hidden lg:col-span-1 lg:block">
          <div className="py-5">
            <div className="grid gap-3">
              {sectionList.map(({ id, title, link, options }) =>
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
                      {options.map((option) => (
                        <SelectItem key={option.id} value={option.title}>
                          {option.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : (
                  <Link to={`/${link}`} key={id}>
                    <div className="border rounded-lg py-2 px-2">
                      <p className="text-sm">{title}</p>
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 md:overflow-y-auto md:max-h-[90vh] bg-white py-5 px-1">
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
