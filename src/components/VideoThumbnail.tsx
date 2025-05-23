
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { cn } from '@/lib/utils';
import { Video } from '@/types/video';

interface VideoThumbnailProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  date: string;
  views: number;
  source?: Video['source'];
  className?: string;
  onClick?: () => void;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({
  id,
  title,
  thumbnail,
  duration,
  date,
  views,
  source,
  className,
  onClick
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const formattedViews = new Intl.NumberFormat('en-US', { 
    notation: 'compact',
    maximumFractionDigits: 1 
  }).format(views);
  
  const timeAgo = formatDistanceToNow(new Date(date), { addSuffix: true });
  
  const sourceLabel = {
    pornhub: 'PH',
    xvideos: 'XV',
    xhamster: 'XH',
    other: 'SRC'
  }[source || 'other'];
  
  const sourceColors = {
    pornhub: 'bg-orange-500',
    xvideos: 'bg-red-500',
    xhamster: 'bg-yellow-500',
    other: 'bg-primary'
  };
  
  const sourceColor = sourceColors[source || 'other'];
  
  // Use a div with onClick instead of Link if onClick is provided
  const Container = onClick ? 'div' : Link;
  const containerProps = onClick 
    ? { onClick, className: "block cursor-pointer" } 
    : { to: `/video/${id}`, className: "block" };
  
  return (
    <div className={cn("video-card group", className)}>
      <Container {...containerProps}>
        <div className="video-thumbnail relative rounded-md overflow-hidden">
          <div className="aspect-video bg-muted rounded-md overflow-hidden">
            <img
              src={thumbnail}
              alt={title}
              className={cn(
                "w-full h-full object-cover transition-all duration-300",
                imageLoaded ? "opacity-100" : "opacity-0",
                "group-hover:scale-105"
              )}
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
            />
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-0.5 text-xs rounded">{duration}</div>
            {source && (
              <div className={`absolute top-2 left-2 ${sourceColor} text-white text-xs px-1.5 py-0.5 rounded font-medium`}>
                {sourceLabel}
              </div>
            )}
          </div>
          <h3 className="mt-2 font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">{title}</h3>
        </div>
        <div className="flex justify-between items-center mt-1 text-xs text-muted-foreground">
          <span>{formattedViews} views</span>
          <span>{timeAgo}</span>
        </div>
      </Container>
    </div>
  );
};

export default VideoThumbnail;
