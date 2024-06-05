import { useState } from 'react'
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import AppLogo from "../assets/AppLogo.png";


export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            const user = userCredential.user;
            sessionStorage.setItem('user', user.email);
            navigate("/info");
        } catch (error) {
            alert("Brugernavn eller adgangskode genkendes ikke! Prøv igen.")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='login-form'>
                <div className='indputBox'>
                    <input className='loginput'
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="useremail"
                    />
                    <input className='loginput'
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="userpassword"
                    />
                </div>
                <button type="submit" className='login-button'>Login</button>
            </form>
            <img className='logLogo' src={AppLogo} alt="Jyllands Park Zoo App logo" />

        </div>
    )
}