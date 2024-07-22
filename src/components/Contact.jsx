import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc/";
import { slideIn } from "../utils/motion";

// Your reCAPTCHA site key
const RECAPTCHA_SITE_KEY = '6LfHMBYqAAAAAMHX8LpmYxUGQEeLr42nOCYDPCYL';

const Contact = () => {
  const formRef = useRef();
  const recaptchaRef = useRef(); // Corrected ref name
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  useEffect(() => {
    emailjs.init('Rbm9jj4Ydh8irLWgX'); 
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleRecaptcha = (value) => {
    setRecaptchaToken(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    try {
      setLoading(true);

      const serviceId = "service_rticdy9";
      const templateId = "template_mus93mb";
      const templateParams = {
        to_name: "Mariya",
        from_name: form.name,
        message: form.message,
        reply_to: form.email,
      };

      // Send email using EmailJS
      const response = await emailjs.send(serviceId, templateId, templateParams);

      console.log("EmailJS Response:", response);
      alert("Email sent successfully! Please check your inbox.");

      setForm({
        name: "",
        email: "",
        message: "",
      });
      setRecaptchaToken(null); // Reset reCAPTCHA token

    } catch (error) {
      console.error('EmailJS Error:', error);
      alert(`Failed to send email: ${error.text}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              id="name"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              id="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              id="message"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Please, feel free to write your questions or comment!'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <ReCAPTCHA
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={handleRecaptcha}
            ref={recaptchaRef} // Corrected ref name
          />
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
