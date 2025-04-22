
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border mt-12 py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">HotStream.xxx</h3>
            <p className="text-muted-foreground text-sm">
              HotStream.xxx is an adult content aggregator that brings you the best videos from across the web.
              All content on this site is embedded from third-party websites and we do not host any content directly.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/categories" className="text-muted-foreground hover:text-foreground transition-colors">Categories</Link></li>
              <li><Link to="/tags" className="text-muted-foreground hover:text-foreground transition-colors">Tags</Link></li>
              <li><Link to="/dmca" className="text-muted-foreground hover:text-foreground transition-colors">DMCA</Link></li>
              <li><Link to="/2257" className="text-muted-foreground hover:text-foreground transition-colors">2257 Statement</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li className="text-sm text-muted-foreground mt-6">
                All models appearing on this website are 18 years or older. By entering this site you confirm that you are 18+ years of age.
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {year} HotStream.xxx - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
