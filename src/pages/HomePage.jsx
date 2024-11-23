import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center font-sans">
      <header className="bg-green-600 w-full py-6 text-center text-white text-3xl font-bold shadow-md">
        <h1>Eratani Assessment</h1>
      </header>

      <main className="flex flex-col items-center space-y-6 mt-10">
        <h2 className="text-xl text-gray-800 font-semibold">
          Assessment answer list
        </h2>
        <ul className="space-y-4">
          <li>
            <Link
              to="/design-ui"
              className="block px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
            >
              1. UI Design (slicing page)
            </Link>
          </li>
          <li>
            <Link
              to="/search-algorithm"
              className="block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              2. Build a Search Algorithm Function for Array
            </Link>
          </li>
          <li>
            <Link
              to="/spa-table"
              className="block px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
            >
              3. SPA Table (Search, Edit, Add, Delete)
            </Link>
          </li>
          <li>
            <Link
              to="/api-table"
              className="block px-6 py-3 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 transition duration-300"
            >
              4. Fetch API and Display Data in a Table
            </Link>
          </li>
          <li>
            <Link
              to="/register-form"
              className="block px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300"
            >
              5. Create a User Registration Form
            </Link>
          </li>
        </ul>
      </main>

      <footer className="bg-gray-800 w-full py-4 text-center text-white mt-10">
        <p>© 2024 Eratani Assessment</p>
      </footer>
    </div>
  );
};

export default HomePage;
