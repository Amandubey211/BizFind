import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// --- SVG Icons ---

const LogoIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
      stroke="#FF385C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 7L12 12L22 7"
      stroke="#FF385C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12V22"
      stroke="#FF385C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// New icon for the hamburger menu
const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 12H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 6H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 18H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// New icon for the close (X) button
const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // State to manage the mobile menu's visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);

    // Prevent body scroll when the mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto"; // Cleanup on component unmount
    };
  }, [isMenuOpen]); // Rerun effect when isMenuOpen changes

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const activeLinkStyle = { color: "#FF385C", fontWeight: "600" };

  // Define menu items for reusability in both mobile and desktop navs
  const navItems = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-shadow duration-300 ${
          isScrolled || isMenuOpen
            ? "shadow-lg bg-white/80 backdrop-blur-lg"
            : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          <NavLink
            to="/"
            className="flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <LogoIcon />
            <span className="text-2xl font-bold text-gray-800">BizFind</span>
          </NavLink>

          {/* --- Desktop Navigation --- */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  style={({ isActive }) =>
                    isActive ? activeLinkStyle : undefined
                  }
                  className="text-base font-medium text-gray-600 hover:text-[#FF385C] transition-colors"
                >
                  {item.text}
                </NavLink>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <NavLink
                to="#"
                className="text-base font-medium text-gray-600 hover:text-[#FF385C] transition-colors"
              >
                Login
              </NavLink>
              <NavLink
                to="#"
                className="bg-[#FF385C] text-white font-bold text-sm py-2 px-5 rounded-full hover:bg-[#E01B4C] transition-all"
              >
                Add Business
              </NavLink>
            </div>
          </div>

          {/* --- Mobile Menu Button (Hamburger) --- */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* --- Mobile Menu Panel (Animated with Framer Motion) --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-[68px] z-40 bg-white md:hidden"
          >
            <nav className="container mx-auto px-4 pt-8 flex flex-col items-center gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={toggleMenu} // Close menu on link click
                  style={({ isActive }) =>
                    isActive ? activeLinkStyle : undefined
                  }
                  className="text-2xl font-medium text-gray-700 hover:text-[#FF385C] transition-colors"
                >
                  {item.text}
                </NavLink>
              ))}
              <div className="w-full border-t border-gray-200 my-4" />
              <div className="flex flex-col items-center gap-6 w-full px-4">
                <NavLink
                  to="#"
                  onClick={toggleMenu}
                  className="w-full text-center text-xl font-medium text-gray-700 hover:text-[#FF385C] transition-colors"
                >
                  Login
                </NavLink>
                <NavLink
                  to="#"
                  onClick={toggleMenu}
                  className="w-full text-center bg-[#FF385C] text-white font-bold py-3 px-6 rounded-full hover:bg-[#E01B4C] transition-all"
                >
                  Add Business
                </NavLink>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
