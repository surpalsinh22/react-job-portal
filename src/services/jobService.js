const BASE_URL = "https://69d91ddf0576c938825a8d10.mockapi.io/jobs"; 

export const getJobs = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const getJobById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};