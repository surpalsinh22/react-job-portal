const BASE_URL = "http://localhost:5001/jobs"; 

export const getJobs = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const getJobById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};