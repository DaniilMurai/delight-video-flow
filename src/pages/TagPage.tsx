
import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '@/components/Layout/MainLayout';
import VideoGrid from '@/components/VideoGrid';
import CategoryList from '@/components/CategoryList';
import AdBanner from '@/components/Ads/AdBanner';
import SeoHead from '@/components/SeoHead';
import { tags, categories, getVideosByTag } from '@/data/mockData';

const TagPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const tag = tags.find(t => t.slug === slug);
  const tagVideos = getVideosByTag(slug || '');
  
  if (!tag) {
    return (
      <MainLayout>
        <div className="min-h-[50vh] flex items-center justify-center">
          <h1 className="text-2xl">Tag not found</h1>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <SeoHead 
        title={`${tag.name} Videos`}
        description={`Watch the best ${tag.name} adult videos. Browse our collection of ${tag.count}+ ${tag.name} videos tagged with "${tag.name}" for free.`}
        canonicalUrl={`https://hotstream.xxx/tag/${tag.slug}`}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">{tag.name} Videos</h1>
            <p className="text-muted-foreground mt-2">
              Showing {tagVideos.length} of {tag.count} videos tagged with "{tag.name}"
            </p>
          </div>
          
          <VideoGrid videos={tagVideos} />
          
          <div className="my-8">
            <AdBanner size="banner" />
          </div>
        </div>
        
        <div className="space-y-8">
          <AdBanner size="sidebar" />
          
          <CategoryList categories={categories.slice(0, 8)} />
          
          <AdBanner size="rectangle" />
        </div>
      </div>
    </MainLayout>
  );
};

export default TagPage;
