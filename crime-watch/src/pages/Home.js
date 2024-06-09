import React, {useEffect, useState} from "react"
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";


function Home() {

    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");

       useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getPosts();
       })


    return(<div className="homePage">
       {postLists.map((post) => {
        return(<div></div>)
       })}
    </div>)
}

export default Home;