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
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import CookiePolicy from './pages/legal/CookiePolicy';

import AtigsBusinessClub from './pages/initiatives/AtigsBusinessClub';
import AtigsTimes from './pages/initiatives/AtigsTimes';
import AtigsFdiSharkTank from './pages/initiatives/AtigsFdiSharkTank';
import AtigsAdvantageSeminar from './pages/initiatives/AtigsAdvantageSeminar';
import TradeServices from './pages/services/TradeServices';
import MarketAccess from './pages/services/MarketAccess';
import BusinessDevelopment from './pages/services/BusinessDevelopment';
import TrainingAndEvents from './pages/services/TrainingAndEvents';
import OurPurpose from './pages/OurPurpose';
import OurWork from './pages/OurWork';
import TradeInsights from './pages/resources/TradeInsights';
import MarketReports from './pages/resources/MarketReports';
import IndustryNews from './pages/resources/IndustryNews';
import Publications from './pages/resources/Publications';
import LatestNews from './pages/news/LatestNews';
import UpcomingEvents from './pages/news/UpcomingEvents';
import PressReleases from './pages/news/PressReleases';
import MediaGallery from './pages/news/MediaGallery';
import GetInTouch from './pages/contact/GetInTouch';
import OfficeLocations from './pages/contact/OfficeLocations';
import Support from './pages/contact/Support';
import Careers from './pages/contact/Careers';
import SignUp from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';
import VerifyOTP from './pages/auth/VerifyOTP';
import { MembershipPaymentPage } from './pages/MembershipPayment';

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

          <Route path="/initiatives/business-club" element={<AtigsBusinessClub />} />
          <Route path="/initiatives/times" element={<AtigsTimes />} />
          <Route path="/initiatives/fdi-shark-tank" element={<AtigsFdiSharkTank />} />
          <Route path="/initiatives/advantage-seminar" element={<AtigsAdvantageSeminar />} />
          
          {/* Service Pages */}
          <Route path="/services/trade-services" element={<TradeServices />} />
          <Route path="/services/market-access" element={<MarketAccess />} />
          <Route path="/services/business-development" element={<BusinessDevelopment />} />
          <Route path="/services/training-and-events" element={<TrainingAndEvents />} />
          
          {/* What We Do Pages */}
          <Route path="/purpose" element={<OurPurpose />} />
          <Route path="/work" element={<OurWork />} />
          
          {/* Resource Pages */}
          <Route path="/resources/trade-insights" element={<TradeInsights />} />
          <Route path="/resources/market-reports" element={<MarketReports />} />
          <Route path="/resources/industry-news" element={<IndustryNews />} />
          <Route path="/resources/publications" element={<Publications />} />

          {/* News & Events Routes */}
          <Route path="/news/latest-news" element={<LatestNews />} />
          <Route path="/news/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/news/press-releases" element={<PressReleases />} />
          <Route path="/news/media-gallery" element={<MediaGallery />} />

          {/* Contact Us Routes */}
          <Route path="/contact/get-in-touch" element={<GetInTouch />} />
          <Route path="/contact/office-locations" element={<OfficeLocations />} />
          <Route path="/contact/support" element={<Support />} />
          <Route path="/contact/careers" element={<Careers />} />

          {/* Legal Routes */}
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms-of-service" element={<TermsOfService />} />
          <Route path="/legal/cookie-policy" element={<CookiePolicy />} />

          {/* Auth Routes */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/membership-payment" element={<MembershipPaymentPage />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
