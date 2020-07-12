import React, { useState } from 'react'
import "./SignInForm.css"
import FaceBook from '../../img/facebook.png'

function SignInForm() {
    const [isRecaptcha, setIsRecaptcha] = useState(false);
    return (
        <div className="SignIn">
            <div className="SignIn-container">
                <h1>Sign in </h1>
                <form className="nfForm-login">
                    <input type="text" placeholder="Email or phone number" className="nfText" autoComplete="on" />
                    <input type="password" placeholder="Password" className="nfText" autoComplete="on" />
                    <button className="login-btn">Sign in</button>
                </form>
                <div className="d-flex">
                    <div className='remember'>
                        <input type="checkbox" className="rememberMe m-1" checked/>
                        <label className="label-rememberMe">
                            <span>Remember me</span>
                        </label>
                    </div>
                    <a href="#" className="help-tag">Need help?</a>
                </div>
                <div className='facebooklogin'>
                    <img src={FaceBook} alt="facebook" id="facebooklogo" />
                    Login With Facebook
                    </div>
                <div className="newC">New to Netflix? <a href="#" className="signUp">Sign up now.</a></div>
                <p id="recaptcha">This page is protected by Google reCAPTCHA to ensure you're not a bot. <button id="Learn-more" onClick={() => setIsRecaptcha(true)}>{isRecaptcha ? null : "Learn more"}</button> </p>

                <div className={isRecaptcha ? "showRecaptcha recaptcha-more" : "recaptcha-more"}>The information collected by Google reCAPTCHA is subject to the Google<a href="#"> Privacy Policy</a> and<a href="#"> Terms of Service</a> and is used for providing, maintaining and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).</div>
            </div>
        </div>
    )
}

export default SignInForm
