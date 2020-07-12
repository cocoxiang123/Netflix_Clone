import React from 'react'
import RegisterForm from '../RegisterForm/RegisterForm'
import './landing.css'
import Header from '../Header'

function Landing() {
    return (
        <div className="landing">
            <section className="landing-main ">
                <Header />
                <div className="landing-content">
                    <div className="landing-content-wrapper">
                        <div className="title">
                            <h1 id="title">Unlimited movies,TV shows and more.</h1></div>
                        <div className="sub-title">
                            <h2 id="subtitle">Watch anywhere. Cancel at any time.</h2>
                        </div>
                        <RegisterForm />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Landing
