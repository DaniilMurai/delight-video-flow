
import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '@/components/Layout/MainLayout';
import VideoGrid from '@/components/VideoGrid';
import TagsList from '@/components/TagsList';
import AdBanner from '@/components/Ads/AdBanner';
import SeoHead from '@/components/SeoHead';
import { categories, tags, getVideosByCategory } from '@/data/mockData';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find(cat => cat.slug === slug);
  const categoryVideos = getVideosByCategory(slug || '');
  
  if (!category) {
    return (
      <MainLayout>
        <div className="min-h-[50vh] flex items-center justify-center">
          <h1 className="text-2xl">Category not found</h1>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <SeoHead 
        title={`${category.name} Videos`}
        description={`Watch the best ${category.name.toLowerCase()} adult videos. Browse our collection of ${category.count}+ ${category.name.toLowerCase()} videos for free.`}
        canonicalUrl={`https://hotstream.xxx/category/${category.slug}`}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">{category.name} Videos</h1>
            <p className="text-muted-foreground mt-2">
              Showing {categoryVideos.length} of {category.count} videos in the {category.name.toLowerCase()} category
            </p>
          </div>
          
          <VideoGrid videos={categoryVideos} />
          
          <div className="my-8">
            <AdBanner size="banner" />
          </div>
        </div>
        
        <div className="space-y-8">
          <AdBanner size="sidebar" />
          
          <TagsList tags={tags} limit={15} />
          
          <AdBanner size="rectangle" />
        </div>
      </div>
    </MainLayout>
  );
};

export default CategoryPage;
