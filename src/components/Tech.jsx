import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/index";
import { styles } from "../styles"; // Ensure this import is available if styles are needed

import { BallCanvas } from "./canvas";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const Tech = () => {
  return (
    <section id="tech" className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="mb-8"
      >
        <p className={styles.sectionSubText}>Explore the technologies I use</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
      <div className='w-full flex'>
          <motion.p 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
           Explore the technologies and tools that power my development process. Each tool is chosen for its ability to enhance performance and create scalable, efficient solutions. These technologies are integral to building high-quality applications.
           </motion.p>
        </div>
       <div className='mt-10 flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "tech");
