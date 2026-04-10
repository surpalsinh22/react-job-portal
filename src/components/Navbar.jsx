import { FaBookmark, FaUser } from "react-icons/fa";
import { useContext } from "react";
import { SavedJobsContext } from "../components/SavedJobsContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { savedJobs } = useContext(SavedJobsContext);
  const nav = useNavigate();

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">

      {/* LOGO */}
      <h1
        className="text-xl text-blue-400 font-bold cursor-pointer"
        onClick={() => nav("/")}
      >
        CareerHub
      </h1>

      <div className="flex items-center gap-6">

        {/* save job */}
        <div
          className="relative cursor-pointer"
          onClick={() => nav("/saved")}
        >
          <FaBookmark size={20} />

          {savedJobs.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded">
              {savedJobs.length}
            </span>
          )}
        </div>

        {/* user icon */}
        <FaUser
          size={20}
          className="cursor-pointer"
          onClick={() => nav("/login")}
        />

      </div>
    </nav>
  );
}