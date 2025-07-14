// src/components/FeaturedBusinesses.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DiagonalBlurText from "../animations/DiagonalBlurText";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
// --- Sub-Component for Pagination Controls ---
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const baseButtonClasses =
    "w-10 h-10 flex items-center justify-center font-bold rounded-lg transition-colors duration-300";
  const inactiveButtonClasses =
    "bg-white text-gray-700 shadow-md hover:bg-pink-100";
  const activeButtonClasses = "bg-[#FF385C] text-white shadow-lg";
  const disabledButtonClasses = "opacity-50 cursor-not-allowed bg-gray-100";

  return (
    <nav className="flex items-center justify-center gap-2 mt-16">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${baseButtonClasses} ${
          currentPage === 1 ? disabledButtonClasses : inactiveButtonClasses
        }`}
      >
        <FaArrowAltCircleLeft />
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`${baseButtonClasses} ${
            currentPage === number ? activeButtonClasses : inactiveButtonClasses
          }`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${baseButtonClasses} ${
          currentPage === totalPages
            ? disabledButtonClasses
            : inactiveButtonClasses
        }`}
      >
        <FaArrowAltCircleRight />
      </button>
    </nav>
  );
};

const NoResults = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center col-span-1 md:col-span-2 lg:col-span-3 py-16"
  >
    <div className="inline-block p-5 bg-pink-100 rounded-full mb-6">
      <svg
        className="w-12 h-12 text-[#FF385C]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 10l.01.01"
        />
      </svg>
    </div>
    <h3 className="text-2xl font-bold text-gray-800">No Businesses Found</h3>
    <p className="text-gray-500 mt-2">
      Try adjusting your search terms or clearing the search to see all
      businesses.
    </p>
  </motion.div>
);

// --- Business Card Component ---
const BusinessCard = ({ business, index }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30, scale: 0.98 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 },
      },
    }}
    className="group relative rounded-xl overflow-hidden bg-white shadow-lg h-full"
  >
    <div className="relative h-56">
      <img
        src={business.imageUrl}
        alt={business.name}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/40"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="p-4 bg-white/30 rounded-full backdrop-blur-sm transform scale-75 group-hover:scale-100 transition-transform duration-300">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div className="p-6">
      <span className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
        {business.category}
      </span>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{business.name}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {business.description}
      </p>
    </div>
  </motion.div>
);

// --- Main FeaturedBusinesses Component ---
const FeaturedBusinesses = ({ businesses, isLoading, error, hasSearched }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  useEffect(() => {
    setCurrentPage(1);
  }, [businesses]);

  const totalPages = Math.ceil(businesses.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentBusinesses = businesses.slice(startIndex, endIndex);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <DiagonalBlurText
            component="h2"
            text={hasSearched ? "Search Results" : "Featured Businesses"}
            coloredWords={["Results", "Featured"]}
            className="text-4xl md:text-5xl font-extrabold text-gray-800"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-500 mt-4 max-w-2xl mx-auto"
          >
            {hasSearched
              ? `Showing ${businesses.length} results for your search.`
              : "Discover top-rated businesses selected by our team, celebrated for their quality and service."}
          </motion.p>
        </div>

        {isLoading && (
          <div className="text-center text-gray-500">
            Loading amazing businesses...
          </div>
        )}
        {error && (
          <div className="text-center text-red-500 bg-red-100 border border-red-400 rounded-lg p-4 max-w-md mx-auto">
            <strong>Error:</strong> {error}
          </div>
        )}

        {!isLoading && !error && (
          <>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
              >
                {currentBusinesses.length > 0
                  ? currentBusinesses.map((business, index) => (
                      <BusinessCard
                        key={business.id}
                        business={business}
                        index={index}
                      />
                    ))
                  : hasSearched && <NoResults />}
              </motion.div>
            </AnimatePresence>

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedBusinesses;
