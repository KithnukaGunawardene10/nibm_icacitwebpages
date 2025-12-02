// src/pages/Gallery.js
import React, { useState } from 'react';
import '../App.css';

export default function Gallery() {
  const [posts, setPosts] = useState([
    { id: 1, type: 'image', src: '/gallery/post1.jpg', username: 'stopwork.ai', likes: 740, liked: false },
    { id: 2, type: 'video', src: '/gallery/video1.mp4', username: 'atomiiiiic', likes: 197, liked: true },
    { id: 3, type: 'image', src: '/gallery/post3.jpg', username: 'ai.confantasia', likes: 143, liked: false },
    { id: 4, type: 'image', src: '/gallery/post4.jpg', username: 'icacit.official', likes: 2103, liked: true },
    { id: 5, type: 'video', src: '/gallery/video2.mp4', username: 'nibm.gallery', likes: 892, liked: false },
    { id: 6, type: 'image', src: '/gallery/post6.jpg', username: 'techwave.lk', likes: 3055, liked: true },
    // Add more images/videos here
  ]);

  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleLike = (e, id) => {
    e.stopPropagation();
    setPosts(posts.map(post =>
      post.id === id
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  return (
    <div className="gallery-page">
      <div className="gallery-hero">
        <h1>GALLERY</h1>
        <p className="breadcrumb">HOME › GALLERY</p>
      </div>
    </div>

      
  );
}