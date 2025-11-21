// src/pages/Gallery.js
import React, { useState } from 'react';
import '../App.css';

export default function Gallery() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      image: '/gallery/post1.jpg',
      author: 'conference_official',
      caption: 'Opening ceremony of ICACIT 2025 at NIBM City Campus',
      likes: 892,
      comments: ['Amazing event!', 'Well organized'],
      timeAgo: '2 hours ago',
      liked: false,
      commentText: ''
    },
    // ... other posts (same as before)
  ]);

  const handleLike = (id) => {
    setPosts(posts.map(post =>
      post.id === id
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const handleCommentChange = (id, text) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, commentText: text } : post
    ));
  };

  const handleCommentSubmit = (id, e) => {
    e.preventDefault();
    const post = posts.find(p => p.id === id);
    if (post.commentText.trim()) {
      setPosts(posts.map(p =>
        p.id === id
          ? { ...p, comments: [...p.comments, p.commentText], commentText: '' }
          : p
      ));
    }
  };

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: 'ICACIT 2025 Gallery',
        url: window.location.href
      });
    } else {
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="gallery-page">
      <div className="gallery-hero">
        <h1>GALLERY</h1>
        <p className="breadcrumb">HOME > GALLERY</p>
      </div>

      <div className="ig-grid">
        {posts.map(post => (
          <article key={post.id} className="ig-post">
            {/* HEADER */}
            <header className="ig-header">
              <div className="ig-user">
                <div className="ig-avatar">
                  <img src={`/avatars/${post.author}.jpg`} alt="" />
                </div>
                <span className="ig-username">{post.author}</span>
              </div>
              <button className="ig-more">More</button>
            </header>

            {/* IMAGE */}
            <div className="ig-image">
              <img src={post.image} alt="" />
            </div>

            {/* ACTIONS */}
            <div className="ig-actions">
  <button
    onClick={() => handleLike(post.id)}
    className={`ig-btn ${post.liked ? 'liked' : ''}`}
    aria-label="Like"
  >
    {post.liked ? (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#ed4956" stroke="#ed4956">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ) : (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    )}
  </button>

  <button className="ig-btn" aria-label="Comment">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  </button>

  <button onClick={sharePost} className="ig-btn" aria-label="Share">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
      <polyline points="16 6 12 2 8 6"/>
      <line x1="12" y1="2" x2="12" y2="15"/>
    </svg>
  </button>

  <button className="ig-save" aria-label="Save">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
      <polyline points="17 21 17 13 7 13 7 21"/>
      <polyline points="7 3 7 8 15 8"/>
    </svg>
  </button>
</div>
            {/* LIKES */}
            <div className="ig-likes">
              <strong>{post.likes.toLocaleString()} likes</strong>
            </div>

            {/* CAPTION */}
            <div className="ig-caption">
              <strong>{post.author}</strong> {post.caption}
            </div>

            {/* COMMENTS */}
            <div className="ig-comments-preview">
              {post.comments.length > 0 && (
                <p><strong>{post.comments[0].split(' ')[0]}</strong> {post.comments[0]}</p>
              )}
              {post.comments.length > 1 && (
                <span className="view-all">View all {post.comments.length} comments</span>
              )}
            </div>

            {/* ADD COMMENT */}
            <form onSubmit={(e) => handleCommentSubmit(post.id, e)} className="ig-comment-form">
              <input
                type="text"
                placeholder="Add a comment..."
                value={post.commentText}
                onChange={(e) => handleCommentChange(post.id, e.target.value)}
              />
              <button type="submit" disabled={!post.commentText.trim()}>
                Post
              </button>
            </form>

            <time className="ig-time">{post.timeAgo}</time>
          </article>
        ))}
      </div>
    </div>
  );
}