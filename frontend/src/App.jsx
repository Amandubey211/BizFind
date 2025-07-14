// src/App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  const [allBusinesses, setAllBusinesses] = useState([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBusinesses = async () => {
      const fetchUrl = import.meta.env.PROD
        ? "/api/businesses"
        : "http://localhost:3001/api/businesses";

      try {
        console.log("Fetching from URL:", fetchUrl); // Helpful for debugging
        const response = await fetch(fetchUrl);
        if (!response.ok) {
          throw new Error(
            `Network response was not ok. Status: ${response.status}`
          );
        }
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
  }, []); // The empty dependency array is correct, this runs once on mount.

  // Filtering logic remains the same, it's perfect.
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
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
