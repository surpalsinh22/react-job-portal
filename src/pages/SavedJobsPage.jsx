import { useContext } from "react";
import { SavedJobsContext } from "../components/SavedJobsContext";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SavedJobsPage() {
  const { savedJobs, removeJob } = useContext(SavedJobsContext);
  const nav = useNavigate();

  console.log("Saved Jobs:", savedJobs); 

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Saved Jobs</h1>

      {savedJobs.length === 0 ? (
        <p className="text-gray-500">No saved jobs yet</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {savedJobs.map((job) => (
            <div
              key={job.id}
              className="border rounded-xl p-5 shadow-sm relative"
            >
              <div onClick={() => nav(`/job/${job.id}`)} className="cursor-pointer">
                <h2 className="font-semibold text-lg">{job.title}</h2>
                <p className="text-sm text-gray-600">{job.company}</p>
                <p className="text-xs text-gray-500">{job.location}</p>
              </div>

              <button
                onClick={() => removeJob(job.id)}
                className="absolute top-3 right-3 text-red-500"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}