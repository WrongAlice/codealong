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
        
    
    
          const register = () => {
            if (!name) alert("Please enter name");
            registerUser(name, email, password);
          };
          useEffect(() => {
            if (loading) return;
          }, [user, loading]);
    
    
          return (
        <>
        <div className={styles.textCont}>
            <h2> Sign Up </h2>
            </div>
            <div className={styles.container}>
            <div className={styles.inputCont}>
                <input className={styles.input}
                  type="text"
                  
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                />
                 <input className={styles.input}
                  type="text"
                  
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail Address"
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
            
                <div className={styles.txt}>
                  Already have an account? <Link href="/auth/login">Sign in here </Link>
                </div>
              </div>
            </div>
            </>
          )
        }
    
    