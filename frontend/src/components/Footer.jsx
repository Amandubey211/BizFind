// src/components/Footer.jsx
import { motion } from "framer-motion";

const LogoIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
      stroke="#4B5563"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 7L12 12L22 7"
      stroke="#4B5563"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12V22"
      stroke="#4B5563"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const SocialIcon = ({ children }) => (
  <a
    href="#"
    className="text-gray-500 hover:text-[#FF385C] transition-colors duration-300"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div>
            <h3 className="font-bold text-gray-800 mb-4">About Us</h3>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-gray-600 hover:text-[#FF385C]">
                Our Mission
              </a>
              <a href="#" className="text-gray-600 hover:text-[#FF385C]">
                The Team
              </a>
              <a href="#" className="text-gray-600 hover:text-[#FF385C]">
                Press Kit
              </a>
            </nav>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Contact Info</h3>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-gray-600 hover:text-[#FF385C]">
                support@bizfind.com
              </a>
              <a href="#" className="text-gray-600 hover:text-[#FF385C]">
                123 Business Rd, Suite 100
              </a>
              <a href="#" className="text-gray-600 hover:text-[#FF385C]">
                Contact Form
              </a>
            </nav>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Terms & Privacy</h3>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-gray-600 hover:text-[#FF385C]">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-[#FF385C]">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-[#FF385C]">
                Cookie Settings
              </a>
            </nav>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Social Media</h3>
            <div className="flex gap-4">
              <SocialIcon>
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.5 5.2c-.8.4-1.7.6-2.6.7.9-.5 1.6-1.4 2-2.4-.9.5-1.8.9-2.8 1.1-.8-.9-2-1.4-3.2-1.4-2.5 0-4.5 2-4.5 4.5 0 .3.1.7.1 1-3.7-.2-7-2-9.2-4.7-.4.7-.6 1.4-.6 2.3 0 1.6.8 3 2 3.8-.7 0-1.4-.2-2-.6v.1c0 2.2 1.5 4 3.6 4.4-.4.1-.8.2-1.2.2-.3 0-.6 0-.8-.1.6 1.8 2.3 3.1 4.3 3.1-1.5 1.2-3.5 1.9-5.6 1.9-.4 0-.7 0-1.1-.1 2 1.3 4.4 2 7 2 8.3 0 12.9-6.9 12.9-12.9v-.6c.9-.6 1.7-1.4 2.3-2.4z"></path>
                </svg>
              </SocialIcon>
              <SocialIcon>
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3C8.7 3 8.1 3 7 3.1c-1.1.1-1.8.3-2.4.6-.6.3-1.1.7-1.5 1.2-.5.4-.9.9-1.2 1.5-.3.6-.5 1.3-.6 2.4C3 8.1 3 8.7 3 12s0 3.9.1 5c.1 1.1.3 1.8.6 2.4.3.6.7 1.1 1.2 1.5.4.5.9.9 1.5 1.2.6.3 1.3.5 2.4.6 1.1.1 1.7.1 5 .1s3.9 0 5-.1c1.1-.1 1.8-.3 2.4-.6.6-.3 1.1-.7 1.5-1.2.5-.4.9-.9 1.2-1.5.3-.6.5-1.3.6-2.4.1-1.1.1-1.7.1-5s0-3.9-.1-5c-.1-1.1-.3-1.8-.6-2.4-.3-.6-.7-1.1-1.2-1.5-.4-.5-.9-.9-1.5-1.2-.6-.3-1.3-.5-2.4-.6C15.9 3 15.3 3 12 3zm0 2c3.2 0 3.6 0 4.9.1.9.1 1.4.2 1.7.4.4.2.7.4.9.7.3.3.5.6.7.9.2.4.3.8.4 1.7.1 1.3.1 1.6.1 4.9s0 3.6-.1 4.9c-.1.9-.2 1.4-.4 1.7-.2.4-.4.7-.7.9-.3.3-.6.5-.9.7-.4.2-.8.3-1.7.4-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-.9-.1-1.4-.2-1.7-.4-.4-.2-.7-.4-.9-.7-.3-.3-.5-.6-.7-.9-.2-.4-.3-.8-.4-1.7-.1-1.3-.1-1.6-.1-4.9s0-3.6.1-4.9c.1-.9.2-1.4.4-1.7.2-.4.4-.7.7-.9.3-.3.6.5.9-.7.4-.2.8-.3 1.7-.4C8.4 5 8.8 5 12 5zm0 4.1c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 9.6 12 9.6s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm4.8-6.9c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1z"></path>
                </svg>
              </SocialIcon>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BizFind. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
