
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AdBannerProps {
  size: 'banner' | 'sidebar' | 'rectangle';
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ size, className }) => {
  const [loaded, setLoaded] = useState(false);
  
  // Dimensions based on standard ad sizes
  const dimensions = {
    banner: { width: 728, height: 90 },
    sidebar: { width: 300, height: 600 },
    rectangle: { width: 300, height: 250 }
  };
  
  const { width, height } = dimensions[size];
  
  useEffect(() => {
    // Simulate ad loading
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div 
      className={cn(
        "ad-placeholder mx-auto",
        loaded && "animate-pulse-light",
        className
      )}
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
        maxWidth: '100%'
      }}
    >
      {/* In production, ad network code would go here */}
    </div>
  );
};

export default AdBanner;
