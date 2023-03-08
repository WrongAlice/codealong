import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../../components/footer';
import Nav from '../../components/nav';
import banner from 'assets/banner.png';
import post1 from 'assets/post1.png';
import post2 from 'assets/post2.png';
import post3 from 'assets/post3.png';
import post4 from 'assets/post4.png';
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { AiOutlineSmile } from "react-icons/ai";


export default function Home() {


  return (

    <div className={styles.container}>
     
      <main className={styles.main}>
        <div className={styles.image}>
        <Image
        alt="banner image"
        src={banner}
        width={1900}
        height={500}
        style={{
          maxWidth: '100%',
          height: '100%',
        }}
      />
        </div>
        

        <div className={styles.description}>
        <div className={styles.descLeft}>
          < AiTwotoneThunderbolt />
          <p> Who I am </p>
            <p> a full stack web developer who loves nerding out</p>
            </div>
          <div className={styles.descRight}>
          <AiOutlineSmile/>
          <p>Let me show you some stuff! </p>
          <p>Get started by reading the latest posts below </p>
          </div> 
        </div>

        <div className={styles.cardTitle}>
          <h2>Latest Posts </h2>
        </div>

       <div className={styles.grid}>
       
        <a href="/first-post" className={styles.card}>
          <Image
        alt="banner image"
        src={post1}
        // width={1900}
        // height={500}
        style={{
          maxWidth: '100%',
          height: '100%',
        }}
      />
            
            <h3> JS Array Methods </h3>
            <p>Find in-depth information about Js arrays and methods.</p>
          </a>


          <a href="/posts/second-post" className={styles.card}>
          <Image
        alt="banner image"
        src={post3}
        // width={1900}
        // height={500}
        style={{
          maxWidth: '100%',
          height: '100%',
        }}
      />

            <h3> Data Types </h3>
            <p>Learn about the different kinds of JavaScript data types </p>
          </a>


          <a href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}>
        <Image
        alt="banner image"
        src={post2}
        // width={1900}
        // height={500}
        style={{
          maxWidth: '100%',
          height: '100%',
        }}
      />

            <h3> Data Structures </h3>
            <p>Discover some facts about JavaScript Data Structures and how to use them.</p>
          </a>


          <a href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}>
        <Image
        alt="banner image"
        src={post4}
        // width={1900}
        // height={500}
        style={{
          maxWidth: '100%',
          height: '100%',
        }}
      />

            <h3> Deploying your creations </h3>
            <p> Instantly deploy your site to a public URL with these platforms.</p>
          </a>
        </div>
      </main>

      <Footer />
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
  )
}
