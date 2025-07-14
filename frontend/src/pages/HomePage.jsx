// src/pages/HomePage.jsx
import Hero from "../components/Hero";
import FeaturedBusinesses from "../components/FeaturedBusinesses";
import CallToAction from "../components/CallToAction";

// This component no longer needs the <Layout> wrapper.
// The router in App.jsx provides it.
const HomePage = ({
  searchQuery,
  setSearchQuery,
  businesses,
  isLoading,
  error,
  hasSearched,
}) => {
  return (
    <>
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FeaturedBusinesses
        businesses={businesses}
        isLoading={isLoading}
        error={error}
        hasSearched={hasSearched}
      />
      <CallToAction />
    </>
  );
};

export default HomePage;
