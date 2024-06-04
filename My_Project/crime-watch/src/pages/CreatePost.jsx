import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, auth, storage} from "../firebase-config";
import { useNavigate } from "react-router-dom";




function CreatePost({ isAuth }) {

    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [postText, setPostText] = useState("");
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrl, setImageUrl] = useState("");

   
    
    
    //Storing data to my firebase
    const postsCollectionRef = collection(db,   "posts");
    let navigate = useNavigate();

    const uploadImage = async () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name}`);
        await uploadBytes(imageRef, imageUpload);
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
        return url;
    } 

    const createPost = async () => {
        await uploadImage();
        await addDoc(postsCollectionRef, {
             title,
             location, 
             postText, 
             author: {name: auth.currentUser.displayName, id: auth.currentUser.uid },
             imageUrl

            });
            navigate("/");
    };

 
    

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
                   <input className="img" type="file" id="image" onChange={(event) => setImageUpload(event.target.files[0])}/>
                </div>
                <button type="Submit" onClick={createPost}>Submit</button>
            </div>
        </div>
    )
}

export default CreatePost;