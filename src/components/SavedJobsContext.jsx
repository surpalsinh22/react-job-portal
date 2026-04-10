import { createContext, useState, useEffect } from "react";

export const SavedJobsContext = createContext();

export default function SavedJobsProvider({ children }) {
  const [savedJobs, setSavedJobs] = useState(() => {
    return JSON.parse(localStorage.getItem("savedJobs")) || [];
  });

  useEffect(() => {
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
  }, [savedJobs]);

  // save job
  const saveJob = (job) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const exists = savedJobs.some((j) => j.id === job.id);
    if (exists) return;

    setSavedJobs([...savedJobs, job]);
  };

  // remove job
  const removeJob = (id) => {
    setSavedJobs(savedJobs.filter((job) => job.id !== id));
  };

  return (
    <SavedJobsContext.Provider value={{ savedJobs, saveJob, removeJob }}>
      {children}
    </SavedJobsContext.Provider>
  );
}