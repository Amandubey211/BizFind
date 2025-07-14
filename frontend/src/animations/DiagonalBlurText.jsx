// src/animations/DiagonalBlurText.jsx
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// This sub-component handles each word's animation.
const AnimatedWord = ({ children, containerRef, isColored }) => {
  const ref = useRef(null);
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    if (!ref.current || !containerRef.current) return;
    const wordRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const relativeX = wordRect.left - containerRect.left;
    const relativeY = wordRect.top - containerRect.top;
    const calculatedDelay = (relativeX + relativeY) * 0.035; // Fine-tuned delay
    setDelay(calculatedDelay);
  }, [containerRef]);

  const animation = {
    hidden: { filter: "blur(8px)", opacity: 0, y: -20 },
    visible: { filter: "blur(0px)", opacity: 1, y: 0 },
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-block whitespace-nowrap ${
        isColored ? "text-[#FF385C]" : ""
      }`}
      style={{ willChange: "transform, filter, opacity" }}
      initial="hidden"
      animate="visible"
      variants={animation}
      transition={{ duration: 0.5, ease: "easeOut", delay: delay }}
    >
      {children}
    </motion.span>
  );
};

// This is the main component that orchestrates the animation.
const DiagonalBlurText = ({
  text,
  className = "",
  component: Component = "p",
  coloredWords = [],
}) => {
  const words = text.split(" ");
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(containerRef.current);
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={containerRef}
      className={`${className} flex flex-wrap`}
      variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <span key={index} className="mr-[0.25em]">
          {inView && (
            <AnimatedWord
              containerRef={containerRef}
              isColored={coloredWords.includes(word)}
            >
              {word}
            </AnimatedWord>
          )}
        </span>
      ))}
    </Component>
  );
};

export default DiagonalBlurText;
