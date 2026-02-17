import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';

const MEDIUM_FEED = 'https://medium.com/feed/@pessini';
const API_KEY = import.meta.env.VITE_RSS2JSON_API_KEY;
const RSS2JSON_URL = API_KEY
    ? `https://api.rss2json.com/v1/api.json?rss_url=${MEDIUM_FEED}&api_key=${API_KEY}`
    : `https://api.rss2json.com/v1/api.json?rss_url=${MEDIUM_FEED}`;

// Strip HTML tags and extract plain text excerpt
function extractExcerpt(htmlString, maxLength = 150) {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    const text = doc.body.textContent || '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trimEnd() + '...';
}

// Format date string to readable format
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

// Extract first image src from HTML content as thumbnail fallback
function extractFirstImage(htmlString) {
    const match = htmlString.match(/<img[^>]+src="([^"]+)"/);
    return match ? match[1] : null;
}

const MediumBlog = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(RSS2JSON_URL);
                if (!response.ok) throw new Error('Failed to fetch articles');
                const data = await response.json();
                if (data.status !== 'ok') throw new Error('RSS feed error');
                setArticles(data.items);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchArticles();
    }, []);

    if (loading) {
        return (
            <div className="blog-section">
                <div className="section-header">
                    <h2>Latest Articles</h2>
                    <div className="title-underline"></div>
                </div>
                <div className="blog-loading">
                    <div className="blog-skeleton-card" />
                    <div className="blog-skeleton-card" />
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="blog-section">
                <div className="section-header">
                    <h2>Latest Articles</h2>
                    <div className="title-underline"></div>
                </div>
                <p className="blog-error">
                    Unable to load articles.{' '}
                    <a href="https://pessini.medium.com/" target="_blank" rel="noopener noreferrer">
                        Visit my Medium profile
                    </a>
                </p>
            </div>
        );
    }

    return (
        <div className="blog-section">
            <div className="section-header">
                <h2>Latest Articles</h2>
                <div className="title-underline"></div>
            </div>
            <div className="blog-grid">
                {articles.map((article) => {
                    const thumbnail = article.thumbnail || extractFirstImage(article.content || article.description);
                    return (
                        <a
                            key={article.guid}
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="blog-card"
                        >
                            {thumbnail && (
                                <div className="blog-card-image">
                                    <img src={thumbnail} alt={article.title} loading="lazy" />
                                </div>
                            )}
                            <div className="blog-card-content">
                                <h3 className="blog-card-title">{article.title}</h3>
                                <div className="blog-card-meta">
                                    <span className="blog-card-date">
                                        <FaCalendarAlt /> {formatDate(article.pubDate)}
                                    </span>
                                </div>
                                {article.categories && article.categories.length > 0 && article.categories[0] !== '' && (
                                    <div className="blog-card-tags">
                                        {article.categories.map((cat) => (
                                            <span key={cat} className="tag">{cat}</span>
                                        ))}
                                    </div>
                                )}
                                <p className="blog-card-excerpt">
                                    {extractExcerpt(article.description)}
                                </p>
                                <span className="blog-card-link">
                                    Read on Medium <FaExternalLinkAlt />
                                </span>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default MediumBlog;
