import React from 'react';
import {
  HeroSection,
  AnnouncementTicker,
  WhyPBLSection,
  KeyHighlights,
  MissionVisionSection,
  NewsUpdatesSection,
  CallToActionSection
} from '../components';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AnnouncementTicker />
      <WhyPBLSection />
      <KeyHighlights />
      <MissionVisionSection />
      <NewsUpdatesSection />
      <CallToActionSection />
    </div>
  );
};

export default HomePage;
