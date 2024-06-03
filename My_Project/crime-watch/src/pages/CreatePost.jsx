import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {

    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [postText, setPostText] = useState("");
    const [image, setImage] = useState("");
    
    //Storing data to my firebase
    const postsCollectionRef = collection(db, "posts");
    let navigate = useNavigate();

    const createPost = async () => {
        await addDoc(postsCollectionRef, {
             title,
             location, 
             postText, 
             image, 
             author: {name: auth.currentUser.displayName, id: auth.currentUser.uid },

            });
            navigate("/");
    };

    /*useEffect(() => {
      if (!isAuth) {
        navigate("/Login");
      }
    }, [isAuth])*/

    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Report Crime</h1>
                <div className="inputGp">
                    <label>Crime Description:</label>
                    <input type="text" placeholder="Description..." onChange={(event) => {
                        setTitle(event.target.value);
                    }}/>
                </div>
                <div className="inputGp">
                    <label>Location:</label>
                    <input type="text" placeholder="e.g 700 Kite Street, Vornavalley" onChange={(event) => {
                        setLocation(event.target.value);
                    }}/>
                </div>
                <div className="inputGp">
                    <label>Post:</label>
                    <textarea placeholder="Post..." onChange={(event) => {
                        setPostText(event.target.value);
                    }}/>
                </div>
                <div className="inputGp">
                   <label htmlFor="image">Image:</label>
                   <input type="file" id="image" onChange={(event) => {
                    setImage(event.target.value);
                   }} />
                </div>
                <button onClick={createPost}>Submit Post</button>
            </div>
        </div>
    )
}

export default CreatePost;