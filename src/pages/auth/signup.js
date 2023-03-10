import React from 'react';
import styles from 'src/styles/signup.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { db, auth, registerUser} from '../../../utils/firebase';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

    



        export default function Login() {
        const route= useRouter();
    
    
          const [email, setEmail] = useState("");
          const [password, setPassword] = useState("");
          const [name, setName] = useState("");
          const [user, loading, error] = useAuthState(auth);
          // const [admin, setAdmin] = useState("false")
        
    
    
          const register = () => {
            if (!name) alert("Please enter name");
            registerUser(name, email, password);
          };
          useEffect(() => {
            if (loading) return;
          }, [user, loading]);
    
    
          return (
        <>
        <div className={styles.main}>
            <h2 className={styles.h2}> Create an Account </h2>
            </div>
            <div className={styles.container}>
            <div className={styles.inputCont}>
                <input className={styles.input}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="User Name"
                />
                 <input className={styles.input}
                  type="text"
                  
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"
                />
                <input className={styles.input}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <button className={styles.btn} onClick={register}>
                  Register
                </button>
            
                <div className={styles.linkCont}>
               
               <p> Want to sign up with Google?  <Link className={styles.hyperlink} href="/auth/login">Sign in </Link></p> 
                </div>
              </div>
            </div>
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
            </>
          )
        }
    
    