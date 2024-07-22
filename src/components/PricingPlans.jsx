
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { pricingPackages } from "../constants";
import { styles } from "../styles";
import { FaCheck } from 'react-icons/fa';

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, duration: 0.5 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const bounceIn = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 10, duration: 0.5 } }
};

const PricingPlans = () => {
  const [hoveredButtons, setHoveredButtons] = useState(Array(pricingPackages.length).fill(false));

  const handleHover = (index) => {
    const newHoveredButtons = [...hoveredButtons];
    newHoveredButtons[index] = true;
    setHoveredButtons(newHoveredButtons);
  };

  const handleHoverOut = (index) => {
    const newHoveredButtons = [...hoveredButtons];
    newHoveredButtons[index] = false;
    setHoveredButtons(newHoveredButtons);
  };

  return (
    <section id="pricing-plans" className="py-20 bg-primary text-white">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center mb-8"
        >
          <p className={styles.sectionSubText}>Choose the best plan for your needs</p>
          <h2 className={styles.sectionHeadText}>Pricing Plans</h2>
        </motion.div>
        <div className='w-full flex'>
        <motion.p
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I offer comprehensive web development services, specializing in React.js development and SEO services, to help businesses create efficient, scalable, and user-friendly web applications. Additionally, I provide a range of digital products and services tailored to meet diverse business needs.
           </motion.p>
      </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pricingPackages.map((plan, index) => (
            <motion.div
              key={plan.title}
              variants={zoomIn}
              initial="hidden"
              animate="visible"
              className="relative overflow-hidden"
            >
              <Tilt
                options={{
                  max: 45,
                  scale: 1.05,
                  speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full transition-transform transform hover:scale-105'
              >
                <div className='relative w-full h-[230px]'>
                  <motion.div
                    variants={bounceIn}
                    initial="hidden"
                    animate="visible"
                    className='absolute inset-0 flex justify-center items-center card-img_hover'
                  >
                    <div className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-primary'>
                      <span className='text-white text-xl font-bold'>{plan.price}</span>
                    </div>
                  </motion.div>
                </div>

                <div className='mt-5 text-center'>
                  <h3 className='text-white font-bold text-[24px]'>{plan.title}</h3>
                  <p className='mt-2 text-gray-300'>{plan.description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2 justify-center'>
                  {plan.features.map((feature, idx) => (
                    <p key={`${feature}-${idx}`} className={`text-[14px] ${feature.color}`}>
                      #{feature.name}
                    </p>
                  ))}
                </div>

                <div className='relative w-full mt-5 flex justify-center'>
                  <button
                    className="text-white bg-primary py-2 px-4 rounded-lg relative overflow-hidden"
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={() => handleHoverOut(index)}
                  >
                    {hoveredButtons[index] ? (
                      <FaCheck className="absolute inset-0 m-auto opacity-100 scale-100" />
                    ) : (
                      "Choose Plan"
                    )}
                  </button>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
