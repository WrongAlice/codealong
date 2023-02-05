import Link from 'next/link'
import styles from 'src/styles/Home.module.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../utils/firebase'



export default function Nav( ){

  const [ user, loading ] = useAuthState(auth)
  return (
    <div className={styles.top}>
    <nav className={styles.nav}>
    <li className={styles.li}>
<Link href={"/"} className={styles.links}>Home</Link>
</li>
<li className={styles.li}>
    <Link href="/blgmain" className={styles.links}>Blog</Link>
    </li>

  { !user && (
    <li className={styles.li}>
  <Link href={"/auth/login"} className={styles.links}>
   Sign In 
  </Link> 
  </li>
  )}
  { user && (
    <li className={styles.li}>
  <Link href={"/dashboard"} className={styles.links}>
    Dashboard
  </Link>
  </li>
  )}
  { user && (
     <li className={styles.li}>
     <Link href={"/create"} className={styles.links}>Create</Link>
     </li>
  )}

    </nav>
    </div>
  )
}


request.auth.email == 'pizzano.nicole@gmail.com';
request.time < timestamp.date(2023, 3, 6);