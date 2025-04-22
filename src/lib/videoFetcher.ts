
import { Video } from '@/types/video';
import { toast } from '@/components/ui/sonner';

// This simulates a backend service that would fetch from external APIs
// In a real implementation, these calls would go to a backend server
// that handles API requests to Pornhub and Xvideos

// Simulate network latency and occasional failures for realism
const simulateApiCall = async <T>(data: T): Promise<T> => {
  // Random delay between 500ms and 2000ms
  const delay = Math.floor(Math.random() * 1500) + 500;
  await new Promise(resolve => setTimeout(resolve, delay));
  
  // 10% chance of random failure to simulate network issues
  if (Math.random() < 0.1) {
    throw new Error('Network error: Failed to fetch data from external API');
  }
  
  return data;
};

// Mock data that resembles real API responses from adult sites
const pornhubMockVideos: Video[] = [
  {
    id: 'ph60f5e8a7c9ce1',
    title: 'Hot blonde gets intimate massage after workout',
    description: 'Professional massage turns intimate for athletic blonde woman.',
    thumbnail: 'https://picsum.photos/id/1011/600/400',
    duration: '12:45',
    views: 1245678,
    likes: 34567,
    date: new Date(Date.now() - 86400000 * 2).toISOString(),
    embedUrl: 'https://www.pornhub.com/embed/ph60f5e8a7c9ce1',
    tags: ['blonde', 'massage', 'athletic'],
    categories: ['massage', 'blonde'],
    source: 'pornhub'
  },
  {
    id: 'ph60e4c7b91c023',
    title: 'Amateur couple has passionate hotel encounter',
    description: 'Young couple records their intimate moments during a hotel staycation.',
    thumbnail: 'https://picsum.photos/id/1035/600/400',
    duration: '18:32',
    views: 2567890,
    likes: 78901,
    date: new Date(Date.now() - 86400000 * 3).toISOString(),
    embedUrl: 'https://www.pornhub.com/embed/ph60e4c7b91c023',
    tags: ['amateur', 'couple', 'hotel'],
    categories: ['amateur', 'couple'],
    source: 'pornhub'
  },
  {
    id: 'ph61a2c8d72f4e5',
    title: 'Redhead with natural body enjoys sensual experience',
    description: 'Beautiful redhead with all-natural figure explores her sensuality.',
    thumbnail: 'https://picsum.photos/id/1027/600/400',
    duration: '21:17',
    views: 3890123,
    likes: 91234,
    date: new Date(Date.now() - 86400000 * 4).toISOString(),
    embedUrl: 'https://www.pornhub.com/embed/ph61a2c8d72f4e5',
    tags: ['redhead', 'natural', 'solo'],
    categories: ['redhead', 'solo'],
    source: 'pornhub'
  },
  {
    id: 'ph59f8e7d6c5b4a',
    title: 'Asian model explores new fantasies on camera',
    description: 'Elegant Asian model experiences new sensations in exclusive video.',
    thumbnail: 'https://picsum.photos/id/1062/600/400',
    duration: '25:08',
    views: 5432109,
    likes: 123456,
    date: new Date(Date.now() - 86400000 * 5).toISOString(),
    embedUrl: 'https://www.pornhub.com/embed/ph59f8e7d6c5b4a',
    tags: ['asian', 'model', 'fantasy'],
    categories: ['asian', 'model'],
    source: 'pornhub'
  }
];

const xvideosMockVideos: Video[] = [
  {
    id: 'xv7654321',
    title: 'Tattooed brunette in first-time audition',
    description: 'Amateur tattooed brunette participates in her first professional adult video audition.',
    thumbnail: 'https://picsum.photos/id/1066/600/400',
    duration: '17:23',
    views: 3456789,
    likes: 67890,
    date: new Date(Date.now() - 86400000 * 1).toISOString(),
    embedUrl: 'https://www.xvideos.com/embedframe/xv7654321',
    tags: ['brunette', 'tattoo', 'audition'],
    categories: ['brunette', 'tattoo'],
    source: 'xvideos'
  },
  {
    id: 'xv8765432',
    title: 'Latina beauty shows off curves by the pool',
    description: 'Gorgeous Latina showcases her curves during a private pool photoshoot.',
    thumbnail: 'https://picsum.photos/id/1081/600/400',
    duration: '15:47',
    views: 4567890,
    likes: 78901,
    date: new Date(Date.now() - 86400000 * 6).toISOString(),
    embedUrl: 'https://www.xvideos.com/embedframe/xv8765432',
    tags: ['latina', 'pool', 'curves'],
    categories: ['latina', 'outdoor'],
    source: 'xvideos'
  },
  {
    id: 'xv9876543',
    title: 'MILF teaches inexperienced couple bedroom techniques',
    description: 'Experienced woman guides a young couple through advanced intimate techniques.',
    thumbnail: 'https://picsum.photos/id/1083/600/400',
    duration: '28:39',
    views: 6789012,
    likes: 123456,
    date: new Date(Date.now() - 86400000 * 7).toISOString(),
    embedUrl: 'https://www.xvideos.com/embedframe/xv9876543',
    tags: ['milf', 'couple', 'teaching'],
    categories: ['milf', 'couple'],
    source: 'xvideos'
  },
  {
    id: 'xv0987654',
    title: 'Ebony goddess in solo performance art',
    description: 'Stunning ebony performer creates an artistic solo video with dramatic lighting.',
    thumbnail: 'https://picsum.photos/id/1074/600/400',
    duration: '19:52',
    views: 5678901,
    likes: 89012,
    date: new Date(Date.now() - 86400000 * 8).toISOString(),
    embedUrl: 'https://www.xvideos.com/embedframe/xv0987654',
    tags: ['ebony', 'solo', 'artistic'],
    categories: ['ebony', 'solo'],
    source: 'xvideos'
  }
];

// Simulate fetching from Pornhub API
const fetchFromPornhub = async (): Promise<Video[]> => {
  try {
    // This would be a real API call in production
    return await simulateApiCall(pornhubMockVideos);
  } catch (error) {
    console.error('Error fetching from Pornhub:', error);
    throw new Error('Failed to fetch videos from Pornhub');
  }
};

// Simulate fetching from Xvideos API
const fetchFromXvideos = async (): Promise<Video[]> => {
  try {
    // This would be a real API call in production
    return await simulateApiCall(xvideosMockVideos);
  } catch (error) {
    console.error('Error fetching from Xvideos:', error);
    throw new Error('Failed to fetch videos from Xvideos');
  }
};

// Main function to fetch videos from all sources
export const fetchVideosFromSources = async (): Promise<Video[]> => {
  try {
    // Fetch from multiple sources in parallel
    const [pornhubVideos, xvideosVideos] = await Promise.allSettled([
      fetchFromPornhub(),
      fetchFromXvideos()
    ]);
    
    let allVideos: Video[] = [];
    
    // Handle results from each source
    if (pornhubVideos.status === 'fulfilled') {
      allVideos = [...allVideos, ...pornhubVideos.value];
    } else {
      console.error('Pornhub API error:', pornhubVideos.reason);
      toast.error('Could not load videos from Pornhub');
    }
    
    if (xvideosVideos.status === 'fulfilled') {
      allVideos = [...allVideos, ...xvideosVideos.value];
    } else {
      console.error('Xvideos API error:', xvideosVideos.reason);
      toast.error('Could not load videos from Xvideos');
    }
    
    // If both sources failed, throw an error
    if (allVideos.length === 0) {
      throw new Error('Unable to fetch videos from any source');
    }
    
    // Sort by date (newest first) and return
    return allVideos.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    
  } catch (error) {
    console.error('Failed to fetch videos from sources:', error);
    throw error;
  }
};

// Function to fetch a single video by ID
export const fetchVideoById = async (id: string): Promise<Video | null> => {
  try {
    // In a real implementation, this would fetch directly from the appropriate API
    // based on the video ID format or prefix
    
    // For now, we'll just search our mock data
    const allVideos = [...pornhubMockVideos, ...xvideosMockVideos];
    const video = allVideos.find(video => video.id === id);
    
    if (!video) {
      throw new Error(`Video with ID ${id} not found`);
    }
    
    return await simulateApiCall(video);
  } catch (error) {
    console.error(`Error fetching video ${id}:`, error);
    return null;
  }
};

// Function to fetch related videos
export const fetchRelatedVideos = async (videoId: string, count: number = 4): Promise<Video[]> => {
  try {
    // In a real implementation, this would use the video's tags/categories 
    // to find related content from the appropriate API
    
    const allVideos = [...pornhubMockVideos, ...xvideosMockVideos];
    
    // Exclude the current video
    const otherVideos = allVideos.filter(video => video.id !== videoId);
    
    // Shuffle the videos for variety
    const shuffled = [...otherVideos].sort(() => Math.random() - 0.5);
    
    // Take the requested number of videos
    return await simulateApiCall(shuffled.slice(0, count));
  } catch (error) {
    console.error(`Error fetching related videos for ${videoId}:`, error);
    return [];
  }
};
