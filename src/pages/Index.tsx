
import React from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import TrendingVideos from '@/components/TrendingVideos';
import TagsList from '@/components/TagsList';
import CategoryList from '@/components/CategoryList';
import AdBanner from '@/components/Ads/AdBanner';
import SeoHead from '@/components/SeoHead';
import { categories, tags } from '@/data/mockData';

const Index = () => {
  return (
    <MainLayout>
      <SeoHead 
        title="Best Free Adult Videos - Watch Now"
        description="Stream the hottest adult videos from the best sources. Browse by categories or tags and find your favorite content. 100% free, no registration required."
        canonicalUrl="https://hotstream.xxx"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <TrendingVideos />
          
          <div className="my-8">
            <AdBanner size="banner" />
          </div>
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
