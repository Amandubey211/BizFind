// src/App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  // State management remains here, at the top level of the app.
  const [allBusinesses, setAllBusinesses] = useState([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Data fetching remains here.
  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;
    const fetchBusinesses = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Network response was not ok.");
        const data = await response.json();
        setAllBusinesses(data);
        setFilteredBusinesses(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBusinesses();
  }, []);

  // Filtering logic remains here.
  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase().trim();
    if (lowercasedQuery === "") {
      setFilteredBusinesses(allBusinesses);
      return;
    }
    const results = allBusinesses.filter(
      (business) =>
        business.name.toLowerCase().includes(lowercasedQuery) ||
        business.category.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredBusinesses(results);
  }, [searchQuery, allBusinesses]);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Home Page Route */}
          <Route
            path="/"
            element={
              <HomePage
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                businesses={filteredBusinesses}
                isLoading={isLoading}
                error={error}
                hasSearched={searchQuery.length > 0}
              />
            }
          />
          {/* About Page Route */}
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
