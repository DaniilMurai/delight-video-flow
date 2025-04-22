
import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '@/types/video';

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="category-list">
      <h3 className="text-lg font-semibold mb-3">Categories</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            to={`/category/${category.slug}`} 
            className="bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors p-3 rounded text-center"
          >
            <div className="font-medium">{category.name}</div>
            <div className="text-xs text-muted-foreground mt-1">{category.count} videos</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
