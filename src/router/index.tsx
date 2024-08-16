import { ProfileForm } from "@/pages/Demo";
import Home from "@/pages/Home";
import Intro from "@/pages/Intro";
import { LoginForm } from "@/pages/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} index />
        <Route element={<Home />}>
          <Route path="/home" element={<Intro />} index />
          <Route path="/demographics" element={<ProfileForm />} />
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
            path="/public"
            element={
              <>
                <p>Public Sanitation</p>
              </>
            }
          />
          <Route
            path="/commercial"
            element={
              <>
                <p>Commercial Sanitation</p>
              </>
            }
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
