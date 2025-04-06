import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { Stats } from "@/sections/Stats";
import { NewsEvents } from "@/sections/NewsEvents";
import { MembershipBenefits } from "@/sections/MembershipBenefits";
import { Resources } from "@/sections/Resources";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Newsletter } from "@/components/Newsletter";
import { MarketInsights } from "@/sections/MarketInsights";
import { EventsCalendar } from "@/sections/EventsCalendar";
import { OurBrand } from "./sections/OurBrand";
import { MembershipPlans } from "./sections/MembershipPlans";
import { Membership } from './pages/Membership';
import { MembershipPlansPage } from './pages/MembershipPlans';

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <MembershipBenefits />
      <MarketInsights />
      <EventsCalendar />
      <NewsEvents />
      <Newsletter />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/membership-plans" element={<MembershipPlansPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
