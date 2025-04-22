
import React from 'react';
import { Video } from '@/types/video';

interface VideoPlayerProps {
  embedUrl: string;
  title: string;
  source?: Video['source'];
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ embedUrl, title, source }) => {
  // Source-specific styling and UI elements
  const getSourceBranding = () => {
    switch(source) {
      case 'pornhub':
        return {
          bgColor: 'bg-gradient-to-r from-black to-orange-900',
          logo: '🅿️🅷',
          name: 'Pornhub'
        };
      case 'xvideos':
        return {
          bgColor: 'bg-gradient-to-r from-black to-red-900',
          logo: '❌▶️',
          name: 'Xvideos'
        };
      case 'xhamster':
        return {
          bgColor: 'bg-gradient-to-r from-black to-yellow-900',
          logo: '❌🐹',
          name: 'xHamster'
        };
      default:
        return {
          bgColor: 'bg-gradient-to-r from-black to-gray-800',
          logo: '🎬',
          name: 'External Source'
        };
    }
  };
  
  const branding = getSourceBranding();
  
  return (
    <div className="video-player">
      <div className="aspect-video bg-black rounded-md overflow-hidden">
        {/* In production, this would embed an actual iframe from a third-party site */}
        <div className={`w-full h-full flex flex-col items-center justify-center ${branding.bgColor} p-4`}>
          <div className="text-4xl mb-4">{branding.logo}</div>
          <p className="text-lg text-center">Video would be embedded from {branding.name}</p>
          <p className="text-sm mt-2 text-center max-w-md">{title}</p>
          <p className="text-xs mt-4 text-muted-foreground text-center">Source: {embedUrl}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
