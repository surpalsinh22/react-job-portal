import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Submitted() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">

      <div className="bg-white w-full max-w-md p-10 rounded-2xl shadow text-center">

        <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600 text-3xl mb-4">
          ✓
        </div>

        <h1 className="text-2xl font-bold">
          Application Submitted
        </h1>

        <p className="text-gray-600 mt-3 text-sm">
          Your application has been submitted successfully.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Go Home
        </Link>

      </div>
    </div>
  );
}