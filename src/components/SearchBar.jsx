import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ onSearch }) {
  const [text, setText] = useState("");

  return (
    <div className="max-w-3xl mx-auto flex gap-2">

      <div className="flex items-center border rounded-lg px-3 flex-1">
        <FiSearch className="text-gray-500" />
        <input
          className="w-full p-2 outline-none"
          placeholder="Job title, keywords..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <button
        onClick={() => onSearch(text)}
        className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700"
      >
        Find jobs
      </button>

    </div>
  );
}