import React from 'react';
import {
  HeroSection,
  AnnouncementTicker,
  WhyPBLSection,
  KeyHighlights,
  MissionVisionSection,
  NewsUpdatesSection
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
    </div>
  );
};

export default HomePage;
