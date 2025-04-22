
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AdBanner from '../Ads/AdBanner';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Age verification would go here in production */}
      
      <Header />
      
      <AdBanner size="banner" className="mt-4" />
      
      <main className="flex-1 container max-w-7xl mx-auto px-4 py-6">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
