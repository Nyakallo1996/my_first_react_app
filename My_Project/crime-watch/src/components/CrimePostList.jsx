// src/components/BlogPostList.jsx
import React from 'react';

const CrimePostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className="blog-post">
          <img src={post.image} alt="Blog Post" style={{ width: '100%' }} />
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CrimePostList;
