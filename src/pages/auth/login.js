import styles from 'src/styles/Home.module.css'
import { FcGoogle } from 'react-icons/fc'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../utils/firebase';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';



export default function Login() {
    const route= useRouter();
    const [ user, loading ] = useAuthState(auth);

    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log(result);
            route.push("/dashboard");
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        if(user){
            route.push("/dashboard");
        } else {
            console.log("login")
        }
    }, [user])


  return (
    <>
     <div className={styles.container}>
  
    
      <h1>Login</h1>
      <button onClick={GoogleLogin}>
        <FcGoogle />
        sign in with google
      </button>
   
    </div>
    </>
  )
}