// src/pages/AboutPage.jsx
import { motion } from "framer-motion";

// Reusable component for section titles to keep the design consistent
const SectionTitle = ({ children }) => (
  <h2 className="text-3xl font-extrabold text-gray-800 mb-8 border-b-2 border-[#FF385C] pb-2 inline-block">
    {children}
  </h2>
);

// Reusable component for skill pills
const SkillPill = ({ skill }) => (
  <div className="bg-pink-100 text-pink-700 font-semibold py-1.5 px-4 rounded-full text-sm">
    {skill}
  </div>
);

const AboutPage = () => {
  // Animation variants for orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-20">
        {/* --- Header Section --- */}
        <motion.div className="text-center" variants={itemVariants}>
          <img
            src="https://avatars.githubusercontent.com/u/109097090?s=400&u=4f4b94545f31e961f7e4550fab571fdb4b973742&v=4" // Replace with your professional photo URL
            alt="Aman Dubey"
            className="w-40 h-40 rounded-full mx-auto mb-6 shadow-2xl border-4 border-white"
          />
          <h1 className="text-5xl font-extrabold text-gray-800">Aman Dubey</h1>
          <p className="text-xl text-[#FF385C] font-semibold mt-2">
            Full-Stack Developer | 2 Years of Experience
          </p>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Delivering secure, high-performance applications with React and
            Node.js. Expert in frontend optimization, scalable architecture, and
            intuitive UI/UX.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="https://www.linkedin.com/in/profile-amandubey/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#FF385C]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Amandubey211"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#FF385C]"
            >
              GitHub
            </a>
            <a
              href="mailto:amandubey8833@gmail.com"
              className="text-gray-500 hover:text-[#FF385C]"
            >
              Email
            </a>
          </div>
        </motion.div>

        {/* --- Project Purpose Section --- */}
        <motion.div
          className="text-center bg-gray-50 p-8 rounded-xl mt-20"
          variants={itemVariants}
        >
          <SectionTitle>About This Project</SectionTitle>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            This website is a demonstration of my ability to rapidly prototype
            and build a full-stack application from scratch. It was completed as
            a take-home assignment, showcasing key skills in modern web
            development, including creating a responsive UI with React, building
            a RESTful API with Node.js, and implementing features like live
            search and pagination.
          </p>
        </motion.div>

        {/* --- Primary Skills Section --- */}
        <motion.div className="mt-20 text-center" variants={itemVariants}>
          <SectionTitle>Primary Skills</SectionTitle>
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
            {[
              "JavaScript",
              "TypeScript",
              "React.js",
              "Next.js",
              "Node.js",
              "Express.js",
              "Redux",
              "MongoDB",
              "Tailwind CSS",
              "Framer Motion",
              "React Native",
              "Firebase",
              "REST APIs",
              "Git",
              "CI/CD",
            ].map((skill) => (
              <SkillPill key={skill} skill={skill} />
            ))}
          </div>
        </motion.div>

        {/* --- Work Experience Section --- */}
        <motion.div className="mt-20" variants={itemVariants}>
          <div className="text-center">
            <SectionTitle>Work Experience</SectionTitle>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Job 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-xl text-gray-800">
                  Frontend Lead
                </h3>
                <p className="text-gray-500">1.7 Years</p>
              </div>
              <p className="text-[#FF385C] font-semibold">
                Student Diwan LMS | Qatar (Remote)
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li>
                  Led frontend development for a large-scale SaaS Learning
                  Management System (LMS).
                </li>
                <li>
                  Engineered a granular Role-Based Access Control (RBAC) system.
                </li>
                <li>
                  Developed 30+ core modules for academic and school operations.
                </li>
                <li>
                  Optimized application performance by 30% via code splitting
                  and lazy loading.
                </li>
              </ul>
            </div>
            {/* Job 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-xl text-gray-800">
                  Full-Stack Developer
                </h3>
                <p className="text-gray-500">6 Months</p>
              </div>
              <p className="text-[#FF385C] font-semibold">
                Xpert, OptaCloud | Singapore (Remote)
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li>Architected and launched a scalable expert marketplace.</li>
                <li>
                  Reduced fraudulent profiles by 70% with a multi-tier
                  verification system.
                </li>
                <li>
                  Engineered a secure fintech system using Razorpay and a custom
                  Firebase wallet.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
