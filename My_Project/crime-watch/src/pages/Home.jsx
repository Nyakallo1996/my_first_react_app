import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import {db, auth, provider} from "../firebase-config";


function Home({isAuth}) {

    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db,  "posts");

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        };

        getPosts();
    });

    //Creating my post delete function
    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
        
    }

    return (
        <div className="homePage">
            {postLists.map((post) => {
                return (
                    <div className="post">
                        <div className="postHeader">
                            <div className="title">
                                <h1>{post.title}</h1>
                            </div>
                            <div className="deletePost">
                                {isAuth && post.author.id === auth.currentUser.uid && (<button 
                                onClick={
                                () => {deletePost(post.id);

                                }}>
                                    &#128465;
                                </button>
                                )}
                            </div>
                        </div>
                        <div className="postTextContainer">
                            {post.postText}
                        </div>
                        <div className="postTextContainer">
                            <strong><p>Location:</p></strong> {post.location}
                        </div>
                        <div className="postImage">{post.imageUrl && <img src={post.imageUrl} alt="Post Image" style={{ 
                                width: '100%', 
                                height: 'auto', 
                                borderRadius: '10px', 
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
                            }}/>}</div>
                        <h2>@{post.author.name}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;