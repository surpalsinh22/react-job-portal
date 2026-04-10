const BASE_URL = "https://react-job-portal-tvk4.onrender.com/api/jobs";

export const signupApi = async (payload) => {
  try {
    const res = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return await res.json();
  } catch (err) {
    return { message: "Network error" };
  }
};

export const loginApi = async (payload) => {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return await res.json();
  } catch (err) {
    return { message: "Network error" };
  }
};