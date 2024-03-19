import React, { useState } from 'react';

// Define TypeScript interfaces based on the YouTube API response structure
interface YouTubeVideo {
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      // Add other thumbnail sizes if needed
    };
    channelTitle: string;
    liveBroadcastContent: string;
  };
}

interface YouTubeApiResponse {
  items: YouTubeVideo[];
  // Include other properties from the API response if needed
}

const YouTubeSearch = () => {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState<YouTubeVideo[]>([]); // Use the YouTubeVideo interface

  const API_KEY = 'AIzaSyAucf9fw5MxWv8SYan5BD9F2SYlI1ry_BU'; // Replace with your YouTube Data API key
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

  const searchVideos = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form from submitting normally
    try {
      const response = await fetch(`${BASE_URL}?part=snippet&q=${encodeURIComponent(query)}&type=video&key=${API_KEY}`);
      const data: YouTubeApiResponse = await response.json(); // Cast the response to the YouTubeApiResponse interface
      setVideos(data.items);
    } catch (error) {
      console.error('Failed to fetch videos:', error);
    }
  };

  return (
    <div>
      <form onSubmit={searchVideos}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search YouTube videos"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {videos.map((video) => (
          <li className="list-group" key={video.id.videoId}>
            <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
              {video.snippet.title}
              <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YouTubeSearch;
