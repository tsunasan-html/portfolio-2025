import { motion } from "framer-motion";
import About from './component/About';
import Contact from './component/Contact';
import Works from './component/Works';
import Footer from './component/Footer'; 
import Layout from "./component/Layout"; 

const title = "TETSUHIRO MUNEYUKI";
const subtitle = "IT IS A WEB DESIGNER'S PORTFOLIO.";

function Home() {

  return (
    <Layout>
    <div className="main-visual">
      <div>
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
      </div>
    </div>

    <About />
    <Works />
    <Contact />
    <Footer />
    </Layout>
  );
}

export default Home;
