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
    <h2 className={styles.h2}>Welcome, sign in to continue </h2>
    <div className={styles.container}>
 
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
        <FcGoogle className={styles.btnsize}/>
        sign in with google
      </button>
      <div className={styles.linkCont}>
        <p> Need something else?</p> 
        <Link className={styles.hyperlink} href={"/auth/signup"}>Create account
        </Link>
      </div>

      <div className={styles.linkCont}>
        <Link className={styles.hyperlink} href={"/reset"} 
        onClick={() => sendPasswordReset(email)}>Reset Password
        </Link>
        </div>
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

