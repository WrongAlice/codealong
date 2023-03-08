import Link from 'next/link';
import Footer from 'components/footer';
import styles from 'src/styles/blgmain.module.css';
import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "/utils/firebase";
import { useAuthState } from 'react-firebase-hooks/auth'
import { AiFillDelete, FaBeer } from 'react-icons/ai';

function BlgMain({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const [ppl, setPpl] = useState([])
  const [isOpen, setIsOpen] = useState(true)
  const [openItems, setOpenItems] = useState([]);
  const [ user, loading ] = useAuthState(auth)


  // const [isAuthorized, setIsAuthorized] = useState(false);
  const postsCollectionRef = collection(db, "posts");
  // const usersCollectionRef = collection(db, "users")

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const personData = await getDocs(usersCollectionRef);
  //     setPpl(personData.docs.map((docu) => ({...docu.personData, id: docu.id})))

  //   }

  //   getUsers()
  // }, [])
  // console.log(ppl)


  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
 
    };

    getPosts();
  }, [postLists]);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

const toggle = () => {
  setIsOpen(!isOpen)
}

const toggleItem = (index) => {
  if (openItems.includes(index)) {
    setOpenItems(openItems.filter((i) => i !== index));
  } else {
    setOpenItems([...openItems, index]);
  }
};


  return (
    <div className={styles.homePage}>
      {postLists.map((post, index) => {
        return (
          <div key={index}>
          <div className={styles.post}>
           
            <div className={styles.postHeader}>
         
                 <h2 className={styles.date}> {post.date} </h2>
             <h3 className={styles.name}>by: {post.author.name}</h3>
            <h1 className={styles.pageTitle}> 
            {post.title} </h1>
            </div> 
            <button onClick={() => toggleItem(index)}>
      {openItems.includes(index) ? "-" : "+"}
    </button>
    {openItems.includes(index) && <div className={styles.postTextContainer}> <p>{post.postText}</p> </div>}
            
         
           { user && user.uid === 'IlcHLjGNnKXI3uZzOBlThL37nz03'?  (
                <div className={styles.delete}>
                  <button onClick={() => {deletePost(post.id) }}> <AiFillDelete/> </button>
                  </div>
                 
                  
         ) : ( " "
        )  
        
    
       }
    
       
       
          
          
          </div> 
          </div>
           
        );
           
      })}
         <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
         <Footer />
    </div>
  );
}

export default BlgMain;






// export default function BlgMain() {

 
 
//   return (
//     <>
//        <div className={styles.container}>
   
//      <main className={styles.main}>
//      <section className={styles.pgLayout}>
//      <div className={styles.about}>
//       <h1> Post Directory </h1>
//       <p> I will be putting a map list of all posts for uses to see displayed, and to scroll through. </p>
//      {/* <h1 className={styles.pageTitle}>
//           JS Array Methods
//         <br />
//         12/12/2020
//           </h1>  */}

//           {/* <div className={styles.icon} onClick={toggle} > read more... </div>
//       <h2 className={isOpen ? styles.accordion : styles.active} >
//         About me
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//       </h2>


  
//     <h1 className={styles.pageTitle}>
//           JS Data Types
//           </h1>
//      <div className={styles.icon} onClick={toggle2} > read </div>
//       <h2 className= {isOpen2 ? styles.accordion : styles.active}>
//         About me
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//       </h2>  */}
//       </div>
//       </section>
// </main>


// <style jsx global>{`
//         html,
//         body {
//           padding: 0;
//           margin: 0;
//           font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
//             Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
//             sans-serif;
//         }
//         * {
//           box-sizing: border-box;
//         }
//       `}</style>

      
//       </div>
//     </>
//   );
// }