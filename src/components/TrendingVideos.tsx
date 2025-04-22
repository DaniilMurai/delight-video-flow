
import React, { useState, useEffect } from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import VideoThumbnail from './VideoThumbnail';
import { Video } from '@/types/video';
import { fetchVideosFromSources } from '@/lib/videoFetcher';
import { toast } from "@/components/ui/sonner";
import { useNavigate } from 'react-router-dom';

const TrendingVideos = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadVideos = async () => {
      try {
        setIsLoading(true);
        // This function fetches from external sources (simulated)
        const fetchedVideos = await fetchVideosFromSources();
        setVideos(fetchedVideos);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch videos:', err);
        setError('Unable to load videos at this time. Please try again later.');
        toast.error('Failed to load videos. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    loadVideos();
  }, []);

  const handleRetry = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const fetchedVideos = await fetchVideosFromSources();
      setVideos(fetchedVideos);
      toast.success('Videos refreshed successfully!');
    } catch (err) {
      console.error('Failed to refresh videos:', err);
      setError('Unable to load videos at this time. Please try again later.');
      toast.error('Failed to refresh videos. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVideoClick = (videoId: string) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div className="trending-videos">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Trending Videos</h2>
        <div className="flex items-center gap-2">
          {!isLoading && (
            <button 
              onClick={handleRetry} 
              className="text-primary text-sm hover:underline"
            >
              Refresh
            </button>
          )}
          <div className="text-sm text-muted-foreground">
            From Pornhub & Xvideos
          </div>
        </div>
      </div>
      
      {error && (
        <div className="bg-destructive/10 text-destructive p-4 rounded-md mb-4">
          <p>{error}</p>
          <button 
            onClick={handleRetry}
            className="mt-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Try Again
          </button>
        </div>
      )}
      
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <Skeleton className="aspect-video w-full rounded-md" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          ))}
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default TrendingVideos;
