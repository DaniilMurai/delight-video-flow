
import React from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import VideoGrid from '@/components/VideoGrid';
import TagsList from '@/components/TagsList';
import CategoryList from '@/components/CategoryList';
import AdBanner from '@/components/Ads/AdBanner';
import SeoHead from '@/components/SeoHead';
import { videos, categories, tags } from '@/data/mockData';

const Index = () => {
  // For demonstration, we're using our mock data
  const latestVideos = [...videos].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  const trendingVideos = [...videos].sort((a, b) => b.views - a.views);
  
  return (
    <MainLayout>
      <SeoHead 
        title="Best Free Adult Videos - Watch Now"
        description="Stream the hottest adult videos from the best sources. Browse by categories or tags and find your favorite content. 100% free, no registration required."
        canonicalUrl="https://hotstream.xxx"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <VideoGrid videos={trendingVideos} title="Trending Videos" />
          
          <div className="my-8">
            <AdBanner size="banner" />
          </div>
          
          <VideoGrid videos={latestVideos} title="Latest Videos" />
        </div>
        
        <div className="space-y-8">
          <AdBanner size="sidebar" />
          
          <CategoryList categories={categories} />
          
          <TagsList tags={tags} limit={20} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
