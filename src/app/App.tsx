import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Popup } from './components/Popup';
import { SiteTranslator } from './components/SiteTranslator';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { BlogAdminDashboard, BlogAdminLogin } from './pages/BlogAdmin';
import { DocumentTranslation } from './pages/services/DocumentTranslation';
import { LegalTranslation } from './pages/services/LegalTranslation';
import { MedicalTranslation } from './pages/services/MedicalTranslation';
import { TechnicalTranslation } from './pages/services/TechnicalTranslation';
import { SubtitlesTranscription } from './pages/services/SubtitlesTranscription';
import { WebsiteLocalization } from './pages/services/WebsiteLocalization';
import { CEO } from './pages/CEO';
import { Team } from './pages/Team';
import { MissionVision } from './pages/MissionVision';
import { JoinUs } from './pages/JoinUs';
import { Testimonials } from './pages/Testimonials';
import { Pricing } from './pages/Pricing';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { RefundPolicy } from './pages/RefundPolicy';
import { TranslationService } from './pages/services/TranslationService';
import { InterpretationService } from './pages/services/InterpretationService';
import { ApostilleService } from './pages/services/ApostilleService';
import { ProofReadingService } from './pages/services/ProofReadingService';
import { DTPTypingService } from './pages/services/DTPTypingService';
import { AttestationService } from './pages/services/AttestationService';
import { OverseasEducationService } from './pages/services/OverseasEducationService';
import { CarrierCoachingService } from './pages/services/CarrierCoachingService';
import { VisaAssistance } from './pages/services/VisaAssistance';
import { StudyAbroadService } from './pages/services/StudyAbroadService';
import { LanguageTrainingService } from './pages/services/LanguageTrainingService';
import { ContentWritingService } from './pages/services/ContentWritingService';
import { LocalizationService } from './pages/services/LocalizationService';
import { VoiceOverDubbingService } from './pages/services/VoiceOverDubbingService';
import { GraphicDesignService } from './pages/services/GraphicDesignService';
import { TranscriptionService } from './pages/services/TranscriptionService';
import { SubtitlingService } from './pages/services/SubtitlingService';

function AppShell() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/blog/admin');

  useEffect(() => {
    setIsPopupOpen(false);

    if (isAdminRoute) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsPopupOpen(true);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [location.pathname, isAdminRoute]);

  return (
    <div className="min-h-screen bg-white">
      {!isAdminRoute && <ScrollProgressBar />}
      {!isAdminRoute && <Header onOpenPopup={() => setIsPopupOpen(true)} />}
      {!isAdminRoute && <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />}
      {!isAdminRoute && <SiteTranslator />}
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/ceo" element={<CEO />} />
      <Route path="/team" element={<Team />} />
      <Route path="/mission-vision" element={<MissionVision />} />
      <Route path="/join-us" element={<JoinUs />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/translation" element={<TranslationService />} />
      <Route path="/services/interpretation" element={<InterpretationService />} />
      <Route path="/services/apostille" element={<ApostilleService />} />
      <Route path="/services/proof-reading" element={<ProofReadingService />} />
      <Route path="/services/dtp-typing" element={<DTPTypingService />} />
      <Route path="/services/attestation" element={<AttestationService />} />
      <Route path="/services/overseas-education" element={<OverseasEducationService />} />
      <Route path="/services/carrier-coaching" element={<CarrierCoachingService />} />
      <Route path="/services/visa-assistance" element={<VisaAssistance />} />
      <Route path="/services/study-abroad" element={<StudyAbroadService />} />
      <Route path="/services/language-training" element={<LanguageTrainingService />} />
      <Route path="/services/content-writing" element={<ContentWritingService />} />
      <Route path="/services/localization" element={<LocalizationService />} />
      <Route path="/services/voice-over-dubbing" element={<VoiceOverDubbingService />} />
      <Route path="/services/graphic-design" element={<GraphicDesignService />} />
      <Route path="/services/transcription" element={<TranscriptionService />} />
      <Route path="/services/subtitling" element={<SubtitlingService />} />
      <Route path="/document-translation" element={<DocumentTranslation />} />
      <Route path="/legal-translation" element={<LegalTranslation />} />
      <Route path="/medical-translation" element={<MedicalTranslation />} />
      <Route path="/technical-translation" element={<TechnicalTranslation />} />
      <Route path="/subtitles-transcription" element={<SubtitlesTranscription />} />
      <Route path="/website-localization" element={<WebsiteLocalization />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/admin" element={<BlogAdminLogin />} />
      <Route path="/blog/admin/dashboard" element={<BlogAdminDashboard />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
    </Routes>
    {!isAdminRoute && <Footer />}
  </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppShell />
    </Router>
    </LanguageProvider>
  );
}
