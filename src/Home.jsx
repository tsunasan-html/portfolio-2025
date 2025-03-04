import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const title = "TETSUHIRO MUNEYUKI";
const subtitle = "IT IS A WEB DESIGNER'S PORTFOLIO.";

function Home() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const hasSeenAnimation = localStorage.getItem("hasSeenAnimation");
    if (!hasSeenAnimation) {
      setHasAnimated(true);
      localStorage.setItem("hasSeenAnimation", "true");
    } else {
      setHasAnimated(false);
    }
  }, []);

  return (
    <div className="main-visual">
      <div>
        {hasAnimated ? (
          <motion.h1 className="main-visual__title">
            {title.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              className="main-visual__subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                ease: "easeOut",
                delay: title.length * 0.05 + 1.4,
              }}
            >
              {subtitle}
            </motion.span>
          </motion.h1>
        ) : (
          <h1 className="main-visual__title">
            {title}
            <span className="main-visual__subtitle">{subtitle}</span>
          </h1>
        )}
      </div>
    </div>
  );
}

export default Home;
