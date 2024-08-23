import React, { useState } from 'react'
import { signIn, signInWithGoogle } from '../functions/auth'
import { UserAuth } from '../context/AuthContext';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!email) {
            alert("Email is required");
        } else if (!password) {
            alert("Password is required")
        } else {
            signIn(email, password);
        }
    }

    return (
        <section className='flex w-full h-screen'>
            <div className='image'>
                <img src="bgimg.png " className='img' alt="background image" />
            </div>
            <div className="flex justify-center items-center w-[50%] h-[100%]">
                <div className='w-[50%]'>
                    <h2>Login</h2>
                    <form action="#">
                        <div className="input">
                            <span>Username</span>
                            <input type="text" name="username" required onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="input">
                            <span>Password</span>
                            <input type="password" name="password" required onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div className="remember-me">
                            <label>
                                <input type="checkbox" /> Remember me?
                            </label>
                        </div>
                        <div className="input">
                            <input type="button" value="Submit" id="submit-button" onClick={handleLogin}/>
                        </div>

                        <div className="input">
                            <p>Don't have an account? <a href="#">Sign up</a></p>
                        </div>
                    </form>

                    <div className="input">
                        <input type="button" value="Login with Google" id="google-login-btn" onClick={signInWithGoogle} />
                    </div>

                    <h3>Login with Social media</h3>
                    <ul className="social-media">
                        <li><img src="instagram.png" /></li>
                        <li><img src="linkedin.png" /></li>
                        <li><img src="whatsapp.png" /></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
