
import { Video } from '@/types/video';

// This function simulates fetching videos from external sources
// In a real implementation, this would connect to APIs or use server-side scraping
export const fetchVideosFromSources = async (): Promise<Video[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // These would normally come from external APIs
  const mockVideos: Video[] = [
    {
      id: 'ph123456',
      title: 'Blonde amateur in first private casting',
      description: 'Watch this beautiful blonde amateur in her first private casting session.',
      thumbnail: 'https://picsum.photos/id/1011/600/400',
      duration: '12:45',
      views: 1245678,
      likes: 34567,
      date: new Date(Date.now() - 86400000 * 2).toISOString(), // 2 days ago
      embedUrl: 'https://www.example.com/embed/ph123456',
      tags: ['amateur', 'blonde', 'casting'],
      categories: ['amateur', 'blonde'],
      source: 'pornhub'
    },
    {
      id: 'xv789012',
      title: 'Hot brunette gets massage after workout',
      description: 'Sexy brunette receives a sensual massage after an intense workout session.',
      thumbnail: 'https://picsum.photos/id/1027/600/400',
      duration: '18:32',
      views: 2345678,
      likes: 56789,
      date: new Date(Date.now() - 86400000 * 1).toISOString(), // 1 day ago
      embedUrl: 'https://www.example.com/embed/xv789012',
      tags: ['massage', 'brunette', 'workout'],
      categories: ['massage', 'brunette'],
      source: 'xvideos'
    },
    {
      id: 'xh345678',
      title: 'Redhead in surprising hotel encounter',
      description: 'Gorgeous redhead has an unexpected encounter at a luxury hotel.',
      thumbnail: 'https://picsum.photos/id/1031/600/400',
      duration: '24:18',
      views: 3456789,
      likes: 78901,
      date: new Date(Date.now() - 86400000 * 3).toISOString(), // 3 days ago
      embedUrl: 'https://www.example.com/embed/xh345678',
      tags: ['redhead', 'hotel', 'luxury'],
      categories: ['redhead', 'hotel'],
      source: 'xhamster'
    },
    {
      id: 'ph901234',
      title: 'Asian beauty explores new sensations',
      description: 'Beautiful Asian model explores new sensations in this exclusive video.',
      thumbnail: 'https://picsum.photos/id/1035/600/400',
      duration: '15:52',
      views: 4567890,
      likes: 89012,
      date: new Date(Date.now() - 86400000 * 4).toISOString(), // 4 days ago
      embedUrl: 'https://www.example.com/embed/ph901234',
      tags: ['asian', 'model', 'exclusive'],
      categories: ['asian', 'model'],
      source: 'pornhub'
    },
    {
      id: 'xv567890',
      title: 'Tattooed couple in passionate encounter',
      description: 'Watch this tattooed couple in their passionate and intimate encounter.',
      thumbnail: 'https://picsum.photos/id/1066/600/400',
      duration: '21:37',
      views: 5678901,
      likes: 90123,
      date: new Date(Date.now() - 86400000 * 5).toISOString(), // 5 days ago
      embedUrl: 'https://www.example.com/embed/xv567890',
      tags: ['tattoo', 'couple', 'passionate'],
      categories: ['tattoo', 'couple'],
      source: 'xvideos'
    },
    {
      id: 'xh123456',
      title: 'Ebony goddess in solo performance',
      description: 'Stunning ebony goddess gives an unforgettable solo performance.',
      thumbnail: 'https://picsum.photos/id/1074/600/400',
      duration: '16:45',
      views: 6789012,
      likes: 101234,
      date: new Date(Date.now() - 86400000 * 6).toISOString(), // 6 days ago
      embedUrl: 'https://www.example.com/embed/xh123456',
      tags: ['ebony', 'solo', 'goddess'],
      categories: ['ebony', 'solo'],
      source: 'xhamster'
    },
    {
      id: 'ph678901',
      title: 'Latina beauty in beachside adventure',
      description: 'Hot Latina beauty has an exciting adventure at a secluded beach.',
      thumbnail: 'https://picsum.photos/id/1081/600/400',
      duration: '19:23',
      views: 7890123,
      likes: 112345,
      date: new Date(Date.now() - 86400000 * 7).toISOString(), // 7 days ago
      embedUrl: 'https://www.example.com/embed/ph678901',
      tags: ['latina', 'beach', 'adventure'],
      categories: ['latina', 'beach'],
      source: 'pornhub'
    },
    {
      id: 'xv234567',
      title: 'MILF teaches inexperienced couple',
      description: 'Experienced MILF teaches an inexperienced couple new techniques.',
      thumbnail: 'https://picsum.photos/id/1083/600/400',
      duration: '28:12',
      views: 8901234,
      likes: 123456,
      date: new Date(Date.now() - 86400000 * 8).toISOString(), // 8 days ago
      embedUrl: 'https://www.example.com/embed/xv234567',
      tags: ['milf', 'couple', 'teaching'],
      categories: ['milf', 'couple'],
      source: 'xvideos'
    }
  ];
  
  return mockVideos;
};

// Function to fetch a single video by ID
export const fetchVideoById = async (id: string): Promise<Video | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const allVideos = await fetchVideosFromSources();
  return allVideos.find(video => video.id === id) || null;
};

// Function to fetch related videos
export const fetchRelatedVideos = async (videoId: string, count: number = 4): Promise<Video[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  const allVideos = await fetchVideosFromSources();
  // Exclude the current video and take up to 'count' videos
  return allVideos
    .filter(video => video.id !== videoId)
    .sort(() => Math.random() - 0.5) // Shuffle for variety
    .slice(0, count);
};
