
import React from 'react';
import VideoThumbnail from './VideoThumbnail';
import { Video } from '@/types/video';
import { useNavigate } from 'react-router-dom';

interface VideoGridProps {
  videos: Video[];
  title?: string;
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos, title }) => {
  const navigate = useNavigate();

  const handleVideoClick = (videoId: string) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div className="video-grid">
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <VideoThumbnail
            key={video.id}
            id={video.id}
            title={video.title}
            thumbnail={video.thumbnail}
            duration={video.duration}
            date={video.date}
            views={video.views}
            source={video.source}
            onClick={() => handleVideoClick(video.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;
