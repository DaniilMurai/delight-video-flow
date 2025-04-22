
import React from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import CategoryList from '@/components/CategoryList';
import TagsList from '@/components/TagsList';
import AdBanner from '@/components/Ads/AdBanner';
import SeoHead from '@/components/SeoHead';
import { categories, tags } from '@/data/mockData';

const CategoriesPage = () => {
  return (
    <MainLayout>
      <SeoHead 
        title="Categories & Tags"
        description="Browse all adult video categories and tags. Find exactly what you're looking for with our extensive collection of adult content categories."
        canonicalUrl="https://hotstream.xxx/categories"
      />
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Categories</h1>
        <CategoryList categories={categories} />
      </div>
      
      <div className="my-8">
        <AdBanner size="banner" />
      </div>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Tags</h1>
        <TagsList tags={tags} />
      </div>
    </MainLayout>
  );
};

export default CategoriesPage;
