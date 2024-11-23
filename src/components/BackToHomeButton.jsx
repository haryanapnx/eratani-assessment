import { Link } from "react-router-dom";

const BackToHomeButton = () => {
  return (
    <Link
      to="/"
      className="mt-10 block px-6 py-3 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
    >
      Back to home
    </Link>
  );
};

export default BackToHomeButton;
