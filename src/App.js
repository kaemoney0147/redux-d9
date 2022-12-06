import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoriteList from "./components/FavoriteList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:companyName/" element={<CompanySearchResults />} />
        <Route path="/favoritelist" element={<FavoriteList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
