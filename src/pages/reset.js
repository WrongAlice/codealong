import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from 'next/link'
import { auth, sendPasswordReset } from "utils/firebase";



function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);



  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <div>
      <div >
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button
    
          onClick={() => sendPasswordReset(email)}
        >
          Send password reset email
        </button>
        <Link href={"/dashboard"}>Login</Link>
      </div>
    </div>
  );
}
export default Reset;