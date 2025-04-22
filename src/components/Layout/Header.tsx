
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-card border-b border-border py-4">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              HotStream<span className="text-white">.xxx</span>
            </Link>
          </div>
          
          <div className="w-full md:w-auto flex-1 max-w-md">
            <div className="relative">
              <Input 
                type="search" 
                placeholder="Search videos..." 
                className="w-full pl-10 bg-secondary" 
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/categories">
              <Button variant="ghost" className="hidden md:flex">Categories</Button>
            </Link>
            <div className="ad-placeholder h-8 w-32 rounded">
              {/* Ad space */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
