import { useState } from "react";

const Collapse = ({ label, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="mt-6">
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        {isCollapsed ? `Hide ${label}` : `Show ${label}`}
      </button>
      {isCollapsed && (
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4 overflow-auto">
          {children}
        </pre>
      )}
    </div>
  );
};

export default Collapse;
