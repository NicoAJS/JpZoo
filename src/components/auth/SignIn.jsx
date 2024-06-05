import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {

    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log (userCredential)
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="logInBox">
            <form onSubmit={signIn}>
                <h1>Log Ind</h1>
                <input type="email"
                 value={email} 
                 placeholder="Email"
                 onChange={(e) => setEmail(e.target.value)}
                 />
                 

                <input type="password"
                 value={password} 
                 placeholder="Adgangskode"
                 onChange={(e) => setPassword(e.target.value)}
                 />

                 <button type="submit">Log Ind</button>
            </form>
        </div>
    )

}

export default SignIn