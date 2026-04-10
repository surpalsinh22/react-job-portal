import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import ApplyForm from "./pages/ApplyForm";
import Submitted from "./pages/Submitted";
import Navbar from "./components/Navbar";
import SavedJobsPage from "./pages/SavedJobsPage";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import SavedJobsProvider from "./components/SavedJobsContext";
import Footer from "./pages/Footer";

export default function App() {
  return (
<SavedJobsProvider>
  <div className="min-h-screen flex flex-col">
    
    <Navbar />


    <div className="flex-1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/apply/:id" element={<ApplyForm />} />
        <Route path="/submitted" element={<Submitted />} />
        <Route path="/saved" element={<SavedJobsPage />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>

    <Footer />

  </div>
</SavedJobsProvider>
  );
}