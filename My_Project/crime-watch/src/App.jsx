// src/App.jsx
import React, { useState } from 'react';
import BlogPostForm from './components/BlogPostForm';
import BlogPostList from './components/BlogPostList';
import './index.css';
import CrimePostForm from './components/CrimePostForm';

const App = () => {
  const [posts, setPosts] = useState([]);

  const handleNewPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className="App">
      <h1>Blog Posts</h1>
      <CrimePostForm onSubmit={handleNewPost} />
      <CrimePostList posts={posts} />
    </div>
  );
};

export default App;

