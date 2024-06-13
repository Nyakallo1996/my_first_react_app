import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";

function Home() {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const deletePost = async (id) => {
       const postDoc = doc(db, "posts", id);
       await deleteDoc(postDoc);
  }

  return (
    <div className="homePage">
      <p>Crime watch is a website thats allows community users to post about crime thats happening in their community in real time.</p>
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
              <div className="deletePost">
                <button onClick={() => {deletePost(post.id);}}>&#128465;</button>
              </div>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            {post.imageUrl && (
              <div className="imageContainer">
                <img src={post.imageUrl} alt="Post Image" className="postImage" />
              </div>
            )}
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
