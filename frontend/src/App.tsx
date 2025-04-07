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
import { SuccessStories } from './pages/SuccessStories';
import { About } from './pages/About';
import { OurStory } from './pages/OurStory';
import { BoardOfDirectors } from './pages/BoardOfDirectors';
import { ExecutiveLeadership } from './pages/ExecutiveLeadership';
import { AdministrationTeam } from './pages/AdministrationTeam';
import { Portfolio } from './pages/Portfolio';
import { AtigsSummit } from './pages/initiatives/AtigsSummit';
import { AtigsAwards } from './pages/initiatives/AtigsAwards';
import { AtigsTradeShow } from './pages/initiatives/AtigsTradeShow';
import { AtigsDealRoom } from './pages/initiatives/AtigsDealRoom';
import { AtigsInvestorsSummit } from './pages/initiatives/AtigsInvestorsSummit';
import { AtigsDealMarketplace } from './pages/initiatives/AtigsDealMarketplace';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <MembershipBenefits />
      <MarketInsights />
      <Stats />
      <OurBrand />
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
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/board-of-directors" element={<BoardOfDirectors />} />
          <Route path="/executive-leadership" element={<ExecutiveLeadership />} />
          <Route path="/administration-team" element={<AdministrationTeam />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/initiatives/atigs-summit" element={<AtigsSummit />} />
          <Route path="/initiatives/atigs-awards" element={<AtigsAwards />} />
          <Route path="/initiatives/atigs-trade-show" element={<AtigsTradeShow />} />
          <Route path="/initiatives/atigs-deal-room" element={<AtigsDealRoom />} />
          <Route path="/initiatives/investors-summit" element={<AtigsInvestorsSummit />} />
          <Route path="/initiatives/deal-marketplace" element={<AtigsDealMarketplace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
