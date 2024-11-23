import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import SearchAlgorithm from "./pages/SearchAlgorithm";
import EditableTable from "./pages/EditableTable";
import FetchDataTable from "./pages/FetchDataTable";
import RegisterUser from "./pages/RegisterUser";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/design-ui" element={<AboutPage />} />
        <Route path="/search-algorithm" element={<SearchAlgorithm />} />
        <Route path="/spa-table" element={<EditableTable />} />
        <Route path="/api-table" element={<FetchDataTable />} />
        <Route path="/register-form" element={<RegisterUser />} />
      </Routes>
    </Router>
  );
};

export default App;
