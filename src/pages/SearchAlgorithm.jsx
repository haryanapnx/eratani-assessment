import React from "react";
import BackToHomeButton from "../components/BackToHomeButton";

const SearchAlgorithm = () => {
  const code = `
    const data = [
      "Danawi Liam",
      "Tarjaya",
      "Daruna",
      "Warsoni",
      "John Wick",
      "Hadi PS",
      "Derian Lekso",
    ];

    // Search Function
    const searchArray = (query, data) => {
      if (!query.trim()) return []; 
      
      return data.filter((name) =>
        name.toLowerCase().includes(query.toLowerCase())
      );
    };
  `;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Search Algorithm Code</h1>
      <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md w-full max-w-3xl overflow-auto">
        <code>{code}</code>
      </pre>

      <BackToHomeButton />
    </div>
  );
};

export default SearchAlgorithm;
