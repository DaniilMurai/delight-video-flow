
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/Layout/MainLayout';
import SeoHead from '@/components/SeoHead';

const NotFound = () => {
  return (
    <MainLayout>
      <SeoHead 
        title="Page Not Found"
        description="The page you are looking for does not exist."
        canonicalUrl="https://hotstream.xxx/404"
      />
      
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Oops! Page not found</p>
        <Link to="/" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md transition-colors">
          Return to Home
        </Link>
      </div>
    </MainLayout>
  );
};

export default NotFound;
