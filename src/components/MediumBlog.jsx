import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';

// ── Configuration ────────────────────────────────────────────────
const MEDIUM_FEED = 'https://medium.com/feed/@pessini';
const MAX_ARTICLES = 4;                          // Max articles to display
const CACHE_KEY = 'medium_blog_cache';
const CACHE_TTL = 7 * 24 * 60 * 60 * 1000;      // Cache duration (7 days)
// ─────────────────────────────────────────────────────────────────

const API_KEY = import.meta.env.VITE_RSS2JSON_API_KEY;
const RSS2JSON_URL = API_KEY
    ? `https://api.rss2json.com/v1/api.json?rss_url=${MEDIUM_FEED}&api_key=${API_KEY}`
    : `https://api.rss2json.com/v1/api.json?rss_url=${MEDIUM_FEED}`;

function getCachedArticles() {
    try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (!cached) return null;
        const { timestamp, articles } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_TTL) return articles;
    } catch {
        // Corrupted cache or localStorage unavailable
    }
    return null;
}

function setCachedArticles(articles) {
    try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({
            timestamp: Date.now(),
            articles,
        }));
    } catch {
        // localStorage full or unavailable — silently ignore
    }
}

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
            // Check cache first
            const cached = getCachedArticles();
            if (cached) {
                setArticles(cached);
                setLoading(false);
                return;
            }

            // Cache miss or expired — fetch fresh
            try {
                const response = await fetch(RSS2JSON_URL);
                if (!response.ok) throw new Error('Failed to fetch articles');
                const data = await response.json();
                if (data.status !== 'ok') throw new Error('RSS feed error');
                setArticles(data.items);
                setCachedArticles(data.items);
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
                {articles.slice(0, MAX_ARTICLES).map((article) => {
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
