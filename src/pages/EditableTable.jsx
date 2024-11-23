import React, { useState } from "react";
import BackToHomeButton from "../components/BackToHomeButton";
import Collapse from "../components/Collapse";

const EditableTable = () => {
  const initialData = [
    { id: 1, name: "John Doe", email: "johndoe@example.com", gender: "Male" },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      gender: "Female",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michaelj@example.com",
      gender: "Male",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emilyd@example.com",
      gender: "Female",
    },
  ];

  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAdd = () => {
    const newRow = { id: Date.now(), name: "", email: "", gender: "" };
    setData([...data, newRow]);
  };

  const handleEdit = (id, field, value) => {
    const updatedData = data.map((row) =>
      row.id === id ? { ...row, [field]: value } : row
    );
    setData(updatedData);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((row) => row.id !== id);
    setData(updatedData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Editable Table</h1>

      {/* Search Input */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-sm mr-4"
        />
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Add Row
        </button>
      </div>

      {/* Table */}
      <table className="min-w-full bg-white border-collapse rounded-lg shadow-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            {["Name", "Email", "Gender", "Actions"].map((header) => (
              <th key={header} className="p-3 border border-gray-300">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100">
              <td className="p-3 border border-gray-300">
                <input
                  type="text"
                  value={row.name}
                  onChange={(e) => handleEdit(row.id, "name", e.target.value)}
                  className="w-full border border-gray-300 rounded px-2"
                />
              </td>
              <td className="p-3 border border-gray-300">
                <input
                  type="email"
                  value={row.email}
                  onChange={(e) => handleEdit(row.id, "email", e.target.value)}
                  className="w-full border border-gray-300 rounded px-2"
                />
              </td>
              <td className="p-3 border border-gray-300">
                <select
                  value={row.gender}
                  onChange={(e) => handleEdit(row.id, "gender", e.target.value)}
                  className="w-full border border-gray-300 rounded px-2"
                >
                  {["", "Male", "Female"].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>
              <td className="p-3 border border-gray-300 text-center">
                <button
                  onClick={() => handleDelete(row.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Collapse label="Final Data">
        <code>{JSON.stringify(data, null, 2)}</code>
      </Collapse>

      <div className="flex justify-center">
        <BackToHomeButton />
      </div>
    </div>
  );
};

export default EditableTable;
