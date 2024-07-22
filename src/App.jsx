import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

import { About, Contact, Hero, Navbar, Tech, Projects, PricingPlans } from './components';
import { StarsCanvas } from "./components";
import SecondaryNav from './components/SecondaryNav';


ReactGA.initialize('415281702'); 

const App = () => {
  return (
    <BrowserRouter>
      <AnalyticsTracker>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <PricingPlans />
          <Tech />
          <Projects />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <div className="relative z-0 flex justify-center items-center h-screen">
            <SecondaryNav />
            <StarsCanvas />
          </div>
        </div>
      </AnalyticsTracker>
    </BrowserRouter>
  );
};

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

  return null;
};

export default App;
