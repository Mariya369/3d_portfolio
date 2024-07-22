import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { pricingPackages } from "../constants";
import { styles } from "../styles";
import { FaCheck, FaCartPlus } from 'react-icons/fa';

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
    <section id="pricing-plans" className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <p className={styles.sectionSubText}>Choose the best plan for your needs</p>
          <h2 className={styles.sectionHeadText}>Pricing Plans</h2>
        </motion.div>
        <div className='w-full flex'>
          <motion.p 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
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
                  scale: 1,
                  speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full transition-transform transform hover:scale-105 rounded-2xl'
              >
                <div className='relative w-full h-[230px] rounded-2xl overflow-hidden'>
                  <motion.div
                    variants={bounceIn}
                    initial="hidden"
                    animate="visible"
                    className='absolute inset-0 flex py-5 items-center card-img_hover rounded-2xl'
                  >
                    <div className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-primary'>
                      <span className='text-white text-xl font-bold'>{plan.price}</span>
                    </div>
                  </motion.div>
                </div>

                <div className='mt-5'>
                  <h3 className='text-white font-bold text-[24px]'>{plan.title}</h3>
                  <p className='mt-2 text-secondary text-[14px]'>{plan.description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                  {plan.features.map((feature, idx) => (
                    <p key={`${feature}-${idx}`} className={`text-[14px] ${feature.color}`}>
                      #{feature.name}
                    </p>
                  ))}
                </div>

                <div className='relative w-full mt-5 flex'>
                  <button
                    className="text-white bg-primary py-2 px-4 rounded-lg relative overflow-hidden flex items-center"
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={() => handleHoverOut(index)}
                  >
                    {hoveredButtons[index] ? (
                      <FaCheck className="mr-2" />
                    ) : (
                        <FaCartPlus className="mr-2" />
                    )}
                    {hoveredButtons[index] ? 'Selected' : 'Choose Plan'}
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
