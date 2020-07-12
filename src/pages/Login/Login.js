import React from 'react'
import Logo from '../../img/logo.svg'
import SignInForm from '../../components/SignInForm/SignInForm'
import SignInFooter from '../../components/Footer/SignInFooter'
import "./Login.css"
import {Link} from 'react-router-dom'
function Login() {
    return (
        <div class="Login">
            <div class="Login-main">
            <nav>
              <Link to="/"> <img src={Logo} alt="logo" id="loginLogo"/></Link> 
            </nav>
            <SignInForm />
            </div>
            <SignInFooter />
        </div>
    )
}

export default Login
