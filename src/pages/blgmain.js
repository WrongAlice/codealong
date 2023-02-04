import Link from 'next/link';
import styles from 'src/styles/Home.module.css';
// import { useState } from 'react';
// import FirstPost from './posts/first-post';
// import SecondPost from './posts/second-post';


//accordion toggle functions to change state


export default function BlgMain() {

  // const [isOpen, setIsOpen] = useState(true)
  // const [isOpen2, setIsOpen2] = useState(true)

  // const toggle2 = () => !isOpen2 ? setIsOpen2(true) : setIsOpen2(false);

  // const toggle = () => !isOpen ? setIsOpen(true) : setIsOpen(false);
  // console.log(isOpen)

 
 
  return (
    <>
       <div className={styles.container}>
   
     <main className={styles.main}>
     <section className={styles.pgLayout}>
     <div className={styles.about}>
      <h1> Post Directory </h1>
      <p> I will be putting a map list of all posts for uses to see displayed, and to scroll through. </p>
     {/* <h1 className={styles.pageTitle}>
          JS Array Methods
        <br />
        12/12/2020
          </h1>  */}

          {/* <div className={styles.icon} onClick={toggle} > read more... </div>
      <h2 className={isOpen ? styles.accordion : styles.active} >
        About me
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </h2>


  
    <h1 className={styles.pageTitle}>
          JS Data Types
          </h1>
     <div className={styles.icon} onClick={toggle2} > read </div>
      <h2 className= {isOpen2 ? styles.accordion : styles.active}>
        About me
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </h2>  */}
      </div>
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