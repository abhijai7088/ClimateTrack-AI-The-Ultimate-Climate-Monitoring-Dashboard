import React, { useEffect, useState } from "react";
import "./NewsFeed.css"; // Import the CSS for styling

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://newsapi.org/v2/everything?q=weather&pagesize=10&apiKey=a208c1e437ad46279f872ab1d87f5760";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setNews(data.articles || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="news-loading">Loading News...</div>;
  }

  return (
    <div className="news-feed">
      <h2>🌍 Latest Climate News</h2>
      <div className="news-slider">
        {news.map((article, index) => (
          <div key={index} className="news-card">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <div className="news-image-container">
                <img
                  src={article.urlToImage || "https://via.placeholder.com/300"}
                  alt={article.title}
                  className="news-image"
                />
                <div className="news-overlay">
                  <p className="news-title">{article.title}</p>
                  <p className="news-source">{article.source.name}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
