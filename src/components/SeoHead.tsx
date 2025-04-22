
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  videoData?: {
    name: string;
    description: string;
    thumbnailUrl: string;
    uploadDate: string;
    duration: string;
    embedUrl: string;
  };
}

const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage,
  videoData
}) => {
  const siteName = 'HotStream.xxx';
  const fullTitle = `${title} | ${siteName}`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={videoData ? 'video.other' : 'website'} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* VideoObject Schema.org for video pages */}
      {videoData && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            name: videoData.name,
            description: videoData.description,
            thumbnailUrl: videoData.thumbnailUrl,
            uploadDate: videoData.uploadDate,
            duration: videoData.duration,
            embedUrl: videoData.embedUrl,
            contentUrl: canonicalUrl
          })}
        </script>
      )}
      
      {/* Adult content meta tags */}
      <meta name="rating" content="adult" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="classification" content="adult" />
    </Helmet>
  );
};

export default SeoHead;
