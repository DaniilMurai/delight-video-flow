
import React from 'react';

interface VideoPlayerProps {
  embedUrl: string;
  title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ embedUrl, title }) => {
  return (
    <div className="video-player">
      <div className="aspect-video bg-black rounded-md overflow-hidden">
        {/* In production, this would embed an actual iframe from a third-party site */}
        <div className="w-full h-full flex items-center justify-center bg-secondary">
          <p className="text-lg">This is a placeholder for embedded content from {embedUrl}</p>
          <p className="text-sm mt-2">Actual video "{title}" would play here</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
