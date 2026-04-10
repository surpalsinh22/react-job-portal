import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";
import CategoryBar from "./CategoryBar";
import { getJobs } from "../services/jobService";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getJobs().then((data) => {
      setJobs(data);
      setFilteredJobs(data);

      // unique categories nikal rahe hai
      const uniqueCats = ["All", ...new Set(data.map(j => j.category))];
      setCategories(uniqueCats);
    });
  }, []);

  // search handle kar rahe hai
  const handleSearch = (q) => {
    const query = q.toLowerCase();

    setFilteredJobs(
      jobs.filter((j) =>
        j.title.toLowerCase().includes(query) ||
        j.company.toLowerCase().includes(query) ||
        j.category.toLowerCase().includes(query)
      )
    );
  };

  // category filter
  const filterBy = (cat) => {
    if (cat === "All") {
      setFilteredJobs(jobs);
    } else {
      setFilteredJobs(jobs.filter((j) => j.category === cat));
    }
  };

  return (
    <div className="p-5">
      <SearchBar onSearch={handleSearch} />
      
      {/* categories pass through props*/}
      <CategoryBar categories={categories} filterBy={filterBy} />

      <div className="p-4 grid gap-4">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}