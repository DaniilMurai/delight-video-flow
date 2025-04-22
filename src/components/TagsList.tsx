
import React from 'react';
import { Link } from 'react-router-dom';
import { Tag } from '@/types/video';

interface TagsListProps {
  tags: Tag[];
  limit?: number;
}

const TagsList: React.FC<TagsListProps> = ({ tags, limit }) => {
  const displayTags = limit ? tags.slice(0, limit) : tags;
  
  return (
    <div className="tags-list">
      <h3 className="text-lg font-semibold mb-3">Popular Tags</h3>
      <div className="flex flex-wrap gap-2">
        {displayTags.map((tag) => (
          <Link key={tag.id} to={`/tag/${tag.slug}`} className="tag">
            {tag.name} ({tag.count})
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagsList;
