import styles from 'src/styles/login.module.css'
import { FcGoogle } from 'react-icons/fc'
import { auth, db, signInWithGoogle, logInWithEmailAndPassword, registerUser,
  sendPasswordReset, logout } from '../../../utils/firebase';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import Link from 'next/link'



export default function Login() {
    const route= useRouter();
    const [ user, loading ] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    useEffect(() => {
        if(user){
            route.push("/dashboard");
        } else {
            console.log("login")
        }
    }, [user])



  return (
    <>
    <div className={styles.main}>
    <h2 className={styles.h2}>Login</h2>
    </div>
     <div className={styles.container}>
   <div className={styles.inputCont}>
     
 
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
      
   

   
      
        <button className={styles.btn}
      onClick={() => logInWithEmailAndPassword(email, password)}>login 
        </button>

        <button className={styles.gbtn} onClick={signInWithGoogle}>
        <FcGoogle />
        sign in with google
      </button>

      <div className={styles.linkCont}>
        <p> forgot something? 
        </p>
        <Link className={styles.hyperlink} href={"/reset"} 
        onClick={() => sendPasswordReset(email)}>Reset Password
        </Link>
        </div>
        </div>
        </div>
    </>
    

  )
}

