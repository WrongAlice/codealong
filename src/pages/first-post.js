import Link from 'next/link';
import styles from 'src/styles/Home.module.css';
import { useState } from 'react';
import Image from 'next/image';
import post1 from 'assets/post1.png';



export default function FirstPost() {

  
  return (
    <>
       <div className={styles.container}>

     <main className={styles.main}>
   

     <section className={styles.about}>
      <h3 className={styles.smallText}> Oct 21, 2009 </h3>
    <h1 className={styles.pageTitle}>
          </h1>
          <h3 className={styles.smallText}> by: Nicole Pizzano </h3>
          <div className={styles.grid}>
   <Image 
      src={post1}
      alt="logo"
      width={900}
      height={500}
      max-width={900}
      style={{
        maxWidth: '100%',
        height: '100%',
      }}
      /> 
          
</div>
        
      <h2 >
        What are arrays?
        To begin, we should first examine what an array is. An array is a way to store a series of values, which you can later retreive by using an index. For example, if you wanted to store the names of your friends, you could create an array like this:
        const friends = ['Nicole', 'John', 'Sally', 'Bob']; This is an important concept to understand, because it will be used in many different ways throughout your coding career.
        Arrays really come in handy when you want to store a list of items. For example, if you wanted to store a list of your favorite movies, you could create an array like this:
        const movies = ['The Matrix', 'The Notebook', 'The Lion King', 'The Avengers']; You can also store numbers in an array:
        const numbers = [1, 2, 3, 4, 5]; You can also store a mix of different data types in an array:
         You can store an array inside of an array:
         You can store an array inside of an object:
          You can store an object inside of an array:
        but we will get more into that in another post.
      </h2>
      <h2 >
        About me
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </h2>
      <h2 >
        About me
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </h2>
      <h2 >
        About me
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </h2>

     </section>


</main>


     
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

      
      </div>
    </>
  );
}