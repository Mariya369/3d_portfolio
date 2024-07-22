
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Tech, Projects, PricingPlans } from './components';
import { StarsCanvas } from "./components";
import SecondaryNav from './components/SecondaryNav';

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
