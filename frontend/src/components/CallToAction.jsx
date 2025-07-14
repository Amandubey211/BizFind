// src/components/CallToAction.jsx
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#FF385C] to-[#E01B4C]">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Register Your Business
          </h2>
          <p className="text-white/80 mt-4 text-lg max-w-xl mx-auto">
            Join our growing directory of amazing businesses and connect with
            thousands of potential customers today. It's fast and easy!
          </p>
          <a
            href="#"
            className="mt-8 inline-block bg-white text-[#FF385C] font-bold text-base py-3 px-8 rounded-full hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get Started Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
