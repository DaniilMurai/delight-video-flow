
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '@/components/Layout/MainLayout';
import VideoPlayer from '@/components/VideoPlayer';
import VideoMetadata from '@/components/VideoMetadata';
import VideoGrid from '@/components/VideoGrid';
import AdBanner from '@/components/Ads/AdBanner';
import SeoHead from '@/components/SeoHead';
import { getVideoById, getRelatedVideos } from '@/data/mockData';

const VideoPage = () => {
  const { id } = useParams<{ id: string }>();
  const video = getVideoById(id || '');
  const relatedVideos = getRelatedVideos(id || '', 8);
  
  useEffect(() => {
    // Scroll to top when video page loads
    window.scrollTo(0, 0);
    
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
  }, [id]);
  
  if (!video) {
    return (
      <MainLayout>
        <div className="min-h-[50vh] flex items-center justify-center">
          <h1 className="text-2xl">Video not found</h1>
        </div>
      </MainLayout>
    );
  }
  
  // Format duration for schema.org (PT1M30S format)
  const formatDuration = (duration: string) => {
    const [minutes, seconds] = duration.split(':').map(Number);
    return `PT${minutes}M${seconds}S`;
  };
  
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
          <VideoPlayer embedUrl={video.embedUrl} title={video.title} />
          
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
                <span>{video.source}</span>
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
