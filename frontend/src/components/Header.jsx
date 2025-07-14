// src/components/Header.jsx
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeLinkStyle = { color: "#FF385C", fontWeight: "600" };

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-lg bg-white/80 backdrop-blur-lg" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <NavLink to="/" className="flex items-center gap-2">
          <LogoIcon />
          <span className="text-2xl font-bold text-gray-800">BizFind</span>
        </NavLink>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-4">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className="text-base font-medium text-gray-600 hover:text-[#FF385C] transition-colors"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className="text-base font-medium text-gray-600 hover:text-[#FF385C] transition-colors"
            >
              About
            </NavLink>
          </nav>
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
    </header>
  );
};

export default Header;
