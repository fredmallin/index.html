import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNavbar from "./components/TopNavbar";
import CategoryNavbar from "./components/CategoryNavbar";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <TopNavbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CategoryNavbar />
      <Routes>
        <Route path="/" element={<HomePage searchQuery={searchQuery} />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;