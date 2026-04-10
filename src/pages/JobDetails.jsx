import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getJobById } from "../services/jobService";
import { SavedJobsContext } from "../components/SavedJobsContext";

export default function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { saveJob } = useContext(SavedJobsContext);
  const [job, setJob] = useState(null);

  
  // only user system
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchJob = async () => {
      const data = await getJobById(id);
      setJob(data);
    };

    fetchJob();
  }, [id]);

  if (!job) return <p className="p-6 text-center">Loading...</p>;

  const fd = job.fullDescription || {};

  // apply
  const handleApply = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
    return;
  }

navigate(`/apply/${job.id || job._id}`);};
// save
const handleSave = () => {
  if (!user) return navigate("/login");

  saveJob(job);
};

return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-8">

        {/* header */}
        <div>
          <h1 className="text-3xl font-bold">{job.title}</h1>
          <p className="text-gray-600 mt-1">
            {job.company} • {job.location}
          </p>
        </div>

        {/* info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-xl border">
            <p className="text-xs text-gray-500">Salary</p>
            <p className="text-green-600 font-bold">{job.salary}</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-xl border">
            <p className="text-xs text-gray-500">Job Type</p>
            <p className="font-semibold">{job.type}</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-xl border">
            <p className="text-xs text-gray-500">Location</p>
            <p className="font-semibold">{job.location}</p>
          </div>
        </div>

        {/* about */}
        <div className="bg-blue-50 p-5 rounded-xl">
          <h2 className="text-xl font-bold mb-2">About Company</h2>
          <p>{fd.about || "We are a fast-growing company hiring talented developers."}</p>
        </div>

        {/* skills */}
        <div>
          <h2 className="text-xl font-bold mb-2">Skills Required</h2>
          <div className="flex flex-wrap gap-2">
            {(job.skills || ["HTML", "CSS", "JavaScript", "React"]).map((s, i) => (
              <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* respomsibilities*/}
        <div>
          <h2 className="text-xl font-bold mb-2">Responsibilities</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            {(fd.responsibilities || [
              "Build scalable web applications",
              "Work with API integration",
              "Collaborate with team"
            ]).map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

        {/* REQUIREMENTS */}
        <div>
          <h2 className="text-xl font-bold mb-2">Requirements</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            {(fd.requirements || [
              "Knowledge of React",
              "Basic Node.js understanding",
              "Problem solving skills"
            ]).map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

        {/* PERKS */}
        <div>
          <h2 className="text-xl font-bold mb-2">Perks</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            {(fd.perks || [
              "Remote work",
              "Flexible timing",
              "Growth opportunities"
            ]).map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 pt-4 border-t">
          <button
            onClick={handleApply}
            className="flex-1 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
          >
            Apply Now
          </button>

          <button
            onClick={handleSave}
            className="flex-1 border py-3 rounded-xl hover:bg-gray-100"
          >
            Save Job
          </button>
        </div>

      </div>
    </div>
  );
}