
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { cn } from '@/lib/utils';

interface VideoThumbnailProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  date: string;
  views: number;
  className?: string;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({
  id,
  title,
  thumbnail,
  duration,
  date,
  views,
  className
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const formattedViews = new Intl.NumberFormat('en-US', { 
    notation: 'compact',
    maximumFractionDigits: 1 
  }).format(views);
  
  const timeAgo = formatDistanceToNow(new Date(date), { addSuffix: true });
  
  return (
    <div className={cn("video-card", className)}>
      <Link to={`/video/${id}`} className="video-thumbnail block">
        <div className="aspect-video bg-muted rounded-md overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className={cn(
              "w-full h-full object-cover lazy-image",
              imageLoaded && "loaded"
            )}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          <div className="video-duration">{duration}</div>
        </div>
        <h3 className="video-card-title">{title}</h3>
      </Link>
      <div className="flex justify-between items-center mt-1 text-xs text-muted-foreground">
        <span>{formattedViews} views</span>
        <span>{timeAgo}</span>
      </div>
    </div>
  );
};

export default VideoThumbnail;
