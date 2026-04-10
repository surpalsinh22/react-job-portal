import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getJobById } from "../services/jobService";

export default function Apply() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    experience: "",
    degree: "",
    resume: null,
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchJob = async () => {
      const data = await getJobById(id);
      setJob(data);
    };

    fetchJob();
  }, [id]);

  if (!job)
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Loading...
      </div>
    );

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "resume" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.experience ||
      !form.degree ||
      !form.resume
    ) {
      alert("Fill all fields");
      return;
    }

    const appliedJobs =
      JSON.parse(localStorage.getItem("appliedJobs")) || [];

    const newApplication = {
      jobId: job.id,
      jobTitle: job.title,
      company: job.company,
      ...form,
    };

    localStorage.setItem(
      "appliedJobs",
      JSON.stringify([...appliedJobs, newApplication])
    );

    navigate("/submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">
        
        {/* title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-1">
          Apply for {job.title}
        </h1>

        <p className="text-gray-500 mb-6">
          {job.company} • {job.location}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="email"
            onChange={handleChange}
            placeholder="Email"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="experience"
            onChange={handleChange}
            placeholder="Experience (e.g. 2 years)"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="degree"
            onChange={handleChange}
            placeholder="Degree"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="file"
            name="resume"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg bg-white"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>

        </form>
      </div>
    </div>
  );
}