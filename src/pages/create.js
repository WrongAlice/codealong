import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from '/utils/firebase';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth'
import styles from '../styles/Home.module.css'


export default function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [ user, loading ] = useAuthState(auth)

  const postsCollectionRef = collection(db, "posts");
  const route = useRouter();  

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    route.push("/");
    
  };


  useEffect(() => {
    if(loading) return <h1>Loading...</h1>
    if (!user) {
        route.push("/auth/login");
    }
  }, []);


// if(loading) return <h1>Loading...</h1>
// if(!user) route.push("/auth/login");
// if(user) 

  return (
     <div className={styles.container}>
    <div className={styles.createPostPage}>
      <div className={styles.cpContainer}>
        <h1>Create A Post</h1>
        <div className={styles.inputGp}>
          <label> Title:</label>
          <input
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className={styles.inputGp}>
          <label> Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}> Submit Post</button>
      </div>
    </div>
    </div>
  );
}





