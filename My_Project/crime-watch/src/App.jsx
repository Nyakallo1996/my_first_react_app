
import React, { useEffect, useState } from 'react';
import CrimePostForm from './components/CrimePostForm';
import CrimePostList from './components/CrimePostList';
import './index.css';

const App = () => {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const handleNewPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className="App">
      <h1>Crime Watch</h1>
      <CrimePostForm onSubmit={handleNewPost} />
      <CrimePostList posts={posts} />
    </div>
  );
};

export default App;
