import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const MyForm = () => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Captcha value:', captchaValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ReCAPTCHA
        sitekey="6LfHMBYqAAAAAMHX8LpmYxUGQEeLr42nOCYDPCYL"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
