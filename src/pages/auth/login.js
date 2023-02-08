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
    <div className={styles.textCont}>
    <h2>Login</h2>
    </div>
     <div className={styles.container}>
   <div className={styles.inputCont}>
      <button className={styles.gbtn} onClick={signInWithGoogle}>
        <FcGoogle />
        sign in with google
      </button>
 
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
      
   

   
      
        <button className={styles.btn}
      onClick={() => logInWithEmailAndPassword(email, password)}>login 
        </button>

   
        <Link href={"/reset"} 
        onClick={() => sendPasswordReset(email)}>reset password
        </Link>
        </div>
        </div>
    </>
    

  )
}