import { ProfileForm } from "@/pages/Demo";
import Home from "@/pages/Home";
import Intro from "@/pages/Intro";
import { LoginForm } from "@/pages/Login";
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

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} index />
        <Route element={<Home />}>
          <Route path="/home" element={<Intro />} index />
          <Route
            path="/demographics"
            element={<ProfileForm formField={formFields} />}
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

export default index;
