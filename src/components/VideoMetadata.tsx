
import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { Video } from '@/types/video';

interface VideoMetadataProps {
  video: Video;
}

const VideoMetadata: React.FC<VideoMetadataProps> = ({ video }) => {
  const timeAgo = formatDistanceToNow(new Date(video.date), { addSuffix: true });
  
  const formattedViews = new Intl.NumberFormat('en-US', { 
    notation: 'compact',
    maximumFractionDigits: 1 
  }).format(video.views);
  
  const formattedLikes = new Intl.NumberFormat('en-US', { 
    notation: 'compact',
    maximumFractionDigits: 1 
  }).format(video.likes);
  
  return (
    <div className="video-metadata">
      <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
      
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
        <div>{formattedViews} views</div>
        <div>{formattedLikes} likes</div>
        <div>{timeAgo}</div>
        <div className="bg-primary/20 text-primary px-2 py-0.5 rounded">
          Source: {video.source}
        </div>
      </div>
      
      <p className="text-sm mb-4">{video.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {video.tags.map((tag) => (
          <Link key={tag} to={`/tag/${tag}`} className="tag">
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoMetadata;
