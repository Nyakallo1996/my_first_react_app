import React, {useState} from "react";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, auth, storage } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreatePost() {
    
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");
    const [image, setImage] = useState(null);

    const postsCollectionRef = collection(db, "posts");
    let navigate = useNavigate();

    const uploadImage = async (imageFile) => {
        if (!imageFile) return null;

        const imageRef = ref(storage, `images/${imageFile.name + new Date().getTime()}`);
        await uploadBytes(imageRef, imageFile);
        const imageUrl = await getDownloadURL(imageRef);
        return imageUrl;
    };

    const createPost = async () => {
        const imageUrl = await uploadImage(image);
        await addDoc(postsCollectionRef, {
            title,
            postText,
            imageUrl,
            author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}
        });
        navigate("/");
    };

    return(<div className="createPostPage">
        <div className="cpContainer">
            <h1>Report Crime:</h1>
            <div className="inputGp">
                <label>Title:</label>
                <input placeholder="e.g HighJacking..." onChange={(event) => {
                    setTitle(event.target.value);
                }}/>
            </div>
            <div className="inputGp">
                <label>Description Of Crime:</label>
                <textarea placeholder="e.g elderly women just got robbed on 5000 Halfway House" onChange={(event) => {
                    setPostText(event.target.value);
                }}/>
            </div>
            <div className="inputGp">
                    <label>Image:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(event) => {
                            setImage(event.target.files[0]);
                        }}
                    />
            </div>
            <button onClick={createPost}>Submit Post</button>
        </div>
    </div>)
}

export default CreatePost;