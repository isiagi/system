import { ProfileForm } from "@/pages/Demo";
import Home from "@/pages/Home";
import Intro from "@/pages/Intro";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function index() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />}>
          <Route path="/" element={<Intro />} index />
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
      </Routes>
    </Router>
  );
}

export default index;
