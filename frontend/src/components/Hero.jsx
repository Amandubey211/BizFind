// src/components/Hero.jsx
import { motion } from "framer-motion";
import DiagonalBlurText from "../animations/DiagonalBlurText";

// New static icon for the dropdown
const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-500"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

// This component is now a "controlled component" for the search functionality.
// It receives the current search query and the function to update it from App.jsx.
const Hero = ({ searchQuery, setSearchQuery }) => {
  // Animation variants for orchestration
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full bg-white pt-24 pb-20 md:pb-28 overflow-hidden">
      {/* Soft, glowing background gradient */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-[150vw] h-[150vh] bg-gradient-to-br from-pink-100/50 via-white to-white rounded-full blur-3xl -z-1"></div>

      <div className="container mx-auto px-4">
        {/* --- TOP SECTION: Two-Column Layout --- */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* --- Left Column: Text Content --- */}
          <div className="flex flex-col text-center lg:text-left">
            <motion.div variants={itemVariants}>
              <DiagonalBlurText
                component="h1"
                text="Find Top Local Businesses In Your Area"
                coloredWords={["Top", "Businesses"]}
                className="text-5xl sm:text-6xl font-extrabold text-gray-800 leading-tight"
              />
            </motion.div>

            <motion.p
              className="text-gray-600 text-lg max-w-xl mx-auto lg:mx-0 mt-7"
              variants={itemVariants}
            >
              Explore our curated directory of premier local businesses, from
              five-star restaurants to trusted local services.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-7 flex items-center justify-center lg:justify-start gap-x-6"
            >
              <div className="flex -space-x-4">
                <img
                  className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
                  alt="User 1"
                />
                <img
                  className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
                  alt="User 2"
                />
                <img
                  className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                  src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?w=100"
                  alt="User 3"
                />
                <div className="w-12 h-12 rounded-full border-2 border-white shadow-md bg-[#FF385C] flex items-center justify-center text-white text-sm font-bold">
                  +4k
                </div>
              </div>
              <div>
                <p className="font-bold text-gray-800 flex items-center gap-1">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  Ratings 5.0
                </p>
                <p className="text-sm text-gray-500">
                  Trusted by Clients Worldwide
                </p>
              </div>
            </motion.div>
          </div>

          {/* --- Right Column: Image Collage --- */}
          <motion.div
            className="relative hidden lg:block"
            variants={itemVariants}
          >
            <div className="relative w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
                alt="Modern cafe interior"
                className="relative z-10 w-4/5 h-auto rounded-2xl shadow-2xl"
              />
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop"
                alt="Restaurant seating"
                className="absolute bottom-[-10%] right-0 z-20 w-1/2 rounded-2xl shadow-2xl border-4 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                alt="Tech startup office"
                className="absolute top-[-10%] right-[20%] z-0 w-2/5 rounded-2xl shadow-xl"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* --- BOTTOM SECTION: Full-Width Search Bar --- */}
        <motion.div
          className="max-w-4xl mx-auto mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <div className="bg-white/60 p-2 rounded-xl shadow-2xl backdrop-blur-md border border-gray-100 flex flex-col md:flex-row items-center gap-2">
            <input
              type="text"
              placeholder="Search by name or category (e.g., 'Coffee', 'Tech')"
              className="w-full p-2.5 bg-transparent focus:outline-none text-gray-800 placeholder-gray-500 flex-grow"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* --- Static Dropdown for Alignment --- */}
            <button className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2.5 text-gray-600 font-medium rounded-lg hover:bg-gray-100/50 bg-white/50 border border-gray-200/50 transition-colors flex-shrink-0">
              <span>All Categories</span>
              <ChevronDownIcon />
            </button>

            <button className="w-full md:w-auto bg-[#FF385C] text-white font-bold py-2.5 px-8 rounded-lg hover:bg-[#E01B4C] transition-all duration-300 flex-shrink-0">
              Search
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
