
import React, { useState, useEffect } from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import VideoThumbnail from './VideoThumbnail';
import { Video } from '@/types/video';
import { fetchVideosFromSources } from '@/lib/videoFetcher';

const TrendingVideos = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        setIsLoading(true);
        // This function simulates fetching from external sources
        const fetchedVideos = await fetchVideosFromSources();
        setVideos(fetchedVideos);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch videos:', err);
        setError('Unable to load videos at this time. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadVideos();
  }, []);

  return (
    <div className="trending-videos">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Trending Videos</h2>
        <div className="text-sm text-muted-foreground">
          Sourced from popular adult sites
        </div>
      </div>
      
      {error && (
        <div className="bg-destructive/10 text-destructive p-4 rounded-md mb-4">
          {error}
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
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TrendingVideos;
