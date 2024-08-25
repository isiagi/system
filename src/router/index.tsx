/* eslint-disable @typescript-eslint/no-explicit-any */
import Admin from "@/pages/Admin";
import { ProfileForm } from "@/pages/Demo";
import Home from "@/pages/Home";
import Intro from "@/pages/Intro";
import { LoginForm } from "@/pages/Login";
import Questions from "@/pages/Questions";
import {
  formFields,
  household,
  menstrual,
  sewer,
  wash,
  school,
  division,
  health,
  public_data,
  commercialPremiseFormFields,
} from "@/utils/formData";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Navigate,
  // useNavigate,
} from "react-router-dom";

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
  // SheetClose,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Response from "@/pages/Response";
import { axiosInstance } from "@/api/base";
import Analytics from "@/pages/Analytics";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function DynamicProfileForm() {
  const { formType, subsection } = useParams();

  // console.log(JSON.stringify(obj), "obj loading...");

  // const formMappings = {
  //   demographics: formFields,
  //   wash,
  //   household,
  //   menstrual,
  //   sewer,
  //   school,
  //   division,
  //   health,
  //   public: public_data,
  //   commercial: commercialPremiseFormFields,
  //   // Add other mappings here
  // };

  // const formField = formFields;

  return <ProfileForm formField={formType} subsectionz={subsection} />;
}

function Index() {
  const [section, setSection] = useState([]);

  const [loading] = useState(false);
  const [responseAvailable, setResponseAvailable] = useState(false);

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
      const response = await axiosInstance.get("question/sections/");
      const data = await response.data;
      setSection(data);
      console.log(data);
    };

    fetchSection();
  }, []);
  const obj = useParams();
  // const navigate = Navigate();

  console.log(JSON.stringify(obj), "obj loading...");

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      // navigate("/", { replace: true });

      alert("Please login first");
      <Navigate to="/" replace />;
    }
  }, []);

  const handleLogOut = async () => {
    try {
      await axiosInstance.post("/auth/logout/");
      localStorage.removeItem("token");
      alert("Logged out successfully");
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectChange = (value: any, options: any) => {
    const selectedOption = options.find((option: any) => option.id === value);
    if (selectedOption) {
      // navigate(`form/${selectedOption.id}`);
      // <Navigate to=`form/${selectedOption.id}` replace />
      // showSection(selectedOption.id);
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
    <Router>
      <header className="sticky top-0 flex justify-between h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <div className="flex items-center gap-2 text-lg font-semibold md:text-base">
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </div>
          <Link to={"/home"}>
            <div className="text-muted-foreground transition-colors hover:text-foreground">
              Home
            </div>
          </Link>

          <Link to={"/questions"}>
            <div className="text-muted-foreground transition-colors hover:text-foreground">
              Questions
            </div>
          </Link>
          <Link to={"/response"}>
            <div className="text-muted-foreground transition-colors hover:text-foreground">
              Response
            </div>
          </Link>
          <Link to={"/analytics"}>
            <div className="text-muted-foreground transition-colors hover:text-foreground">
              Analytics
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
                {loading ? (
                  <h3>Loading Sections ...</h3>
                ) : !responseAvailable ? (
                  <div className="border rounded-lg py-2 px-2">
                    <Button
                      className="w-full bg-green-500"
                      onClick={handleClick}
                    >
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
                          {subsections.map((option: any) => (
                            <SelectItem key={option.id} value={option.id}>
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
              <DropdownMenuItem>
                <h3 onClick={handleLogOut}>Logout</h3>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<LoginForm />} index />
        <Route path="/admin" element={<Admin />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/response" element={<Response />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route element={<Home />}>
          <Route path="/home" element={<Intro />} index />
          <Route
            path="/demographics"
            element={<ProfileForm formField={formFields} />}
          />

          <Route path="/form/:formType" element={<DynamicProfileForm />} />
          <Route
            path="/form/:subsection/:formType"
            element={<DynamicProfileForm />}
          />
          <Route
            path="/form/:subsection2/:formType"
            element={<DynamicProfileForm />}
          />
          <Route path="/wash" element={<ProfileForm formField={wash} />} />
          <Route
            path="/household"
            element={<ProfileForm formField={household} />}
          />
          <Route
            path="/menstrual"
            element={<ProfileForm formField={menstrual} />}
          />
          <Route path="/sewer" element={<ProfileForm formField={sewer} />} />
          <Route path="/school" element={<ProfileForm formField={school} />} />
          <Route
            path="/division"
            element={<ProfileForm formField={division} />}
          />
          <Route path="/health" element={<ProfileForm formField={health} />} />
          <Route
            path="/public"
            element={<ProfileForm formField={public_data} />}
          />
          <Route
            path="/community"
            element={
              <>
                <p>Community</p>
              </>
            }
          />
          <Route
            path="/institution"
            element={
              <>
                <p>Institution Sanitation</p>
              </>
            }
          />

          <Route
            path="/commercial"
            element={<ProfileForm formField={commercialPremiseFormFields} />}
          />
          <Route
            path="/private"
            element={
              <>
                <p>Private Sector</p>
              </>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <div className="h-screen flex justify-center items-center flex-col">
              <h1 className="text-3xl">404</h1>
              <p>Page Not Found</p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default Index;
