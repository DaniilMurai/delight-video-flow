
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '@/components/Layout/MainLayout';
import VideoPlayer from '@/components/VideoPlayer';
import VideoMetadata from '@/components/VideoMetadata';
import VideoGrid from '@/components/VideoGrid';
import AdBanner from '@/components/Ads/AdBanner';
import SeoHead from '@/components/SeoHead';
import { Video } from '@/types/video';
import { fetchVideoById, fetchRelatedVideos } from '@/lib/videoFetcher';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from '@/components/ui/sonner';

const VideoPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [video, setVideo] = useState<Video | null>(null);
  const [relatedVideos, setRelatedVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Scroll to top when video page loads
    window.scrollTo(0, 0);
    
    const loadVideo = async () => {
      if (!id) return;
      
      try {
        setIsLoading(true);
        setError(null);
        
        const videoData = await fetchVideoById(id);
        if (!videoData) {
          setError('Video not found');
          return;
        }
        
        setVideo(videoData);
        
        // Fetch related videos
        const related = await fetchRelatedVideos(id, 8);
        setRelatedVideos(related);
        
      } catch (err) {
        console.error('Failed to load video:', err);
        setError('Unable to load this video. Please try another one.');
        toast.error('Failed to load video details');
      } finally {
        setIsLoading(false);
      }
    };
    
    loadVideo();
    
    // Simulate a pop-under ad on first click
    // In production, this would be handled by the ad network
    const handleFirstClick = () => {
      console.log('First click - pop-under ad would show here');
      // Remove the event listener after first click
      document.removeEventListener('click', handleFirstClick);
    };
    
    document.addEventListener('click', handleFirstClick);
    
    return () => {
      document.removeEventListener('click', handleFirstClick);
    };
  }, [id, navigate]);
  
  // Loading state
  if (isLoading) {
    return (
      <MainLayout>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <Skeleton className="w-full aspect-video rounded-md" />
            <div className="mt-4 space-y-2">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-full" />
              <div className="flex flex-wrap gap-2 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-6 w-16 rounded-full" />
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <Skeleton className="w-full h-[600px]" />
          </div>
        </div>
      </MainLayout>
    );
  }
  
  // Error state
  if (error || !video) {
    return (
      <MainLayout>
        <div className="min-h-[50vh] flex flex-col items-center justify-center">
          <h1 className="text-2xl mb-4">{error || 'Video not found'}</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Back to home
          </button>
        </div>
      </MainLayout>
    );
  }
  
  // Format duration for schema.org (PT1M30S format)
  const formatDuration = (duration: string) => {
    const [minutes, seconds] = duration.split(':').map(Number);
    return `PT${minutes}M${seconds}S`;
  };
  
  // Get source-specific details
  const getSourceDetails = () => {
    switch(video.source) {
      case 'pornhub':
        return {
          name: 'Pornhub',
          color: 'text-orange-500',
          link: `https://www.pornhub.com/view_video.php?viewkey=${video.id.replace('ph', '')}`
        };
      case 'xvideos':
        return {
          name: 'Xvideos',
          color: 'text-red-500',
          link: `https://www.xvideos.com/video${video.id.replace('xv', '')}`
        };
      case 'xhamster':
        return {
          name: 'xHamster',
          color: 'text-yellow-500',
          link: `https://xhamster.com/videos/${video.id}`
        };
      default:
        return {
          name: 'External Source',
          color: 'text-primary',
          link: '#'
        };
    }
  };
  
  const sourceDetails = getSourceDetails();
  
  return (
    <MainLayout>
      <SeoHead 
        title={video.title}
        description={video.description}
        canonicalUrl={`https://hotstream.xxx/video/${video.id}`}
        ogImage={video.thumbnail}
        videoData={{
          name: video.title,
          description: video.description,
          thumbnailUrl: video.thumbnail,
          uploadDate: video.date,
          duration: formatDuration(video.duration),
          embedUrl: video.embedUrl
        }}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <VideoPlayer embedUrl={video.embedUrl} title={video.title} source={video.source} />
          
          <div className="my-4">
            <VideoMetadata video={video} />
          </div>
          
          <div className="my-6">
            <AdBanner size="banner" />
          </div>
          
          <div className="mt-8">
            <VideoGrid videos={relatedVideos} title="Related Videos" />
          </div>
        </div>
        
        <div className="space-y-8">
          <AdBanner size="sidebar" />
          
          <div className="bg-secondary rounded-lg p-4">
            <h3 className="font-medium mb-2">About this video</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Source:</span>
                <a 
                  href={sourceDetails.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${sourceDetails.color} hover:underline`}
                >
                  {sourceDetails.name}
                </a>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Duration:</span>
                <span>{video.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Views:</span>
                <span>{video.views.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Likes:</span>
                <span>{video.likes.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Added:</span>
                <span>{new Date(video.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
          
          <AdBanner size="rectangle" />
        </div>
      </div>
    </MainLayout>
  );
};

export default VideoPage;
