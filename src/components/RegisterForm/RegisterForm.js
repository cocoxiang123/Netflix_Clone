import React from 'react'
import './RegisterForm.css'

function RegisterForm() {
    return (
        <div className="Rform">
            <div className="nfform">
                <input id="nfInput" type='email' name="email" placeholder="Email address" maxLength="50" minLength="5" autoComplete="email" />
                <button id="nfbtn" className="" >GET STARTED &gt;</button>

            </div>
            <p className="nfRcontent">Ready to watch Netflix? Enter your email to create or restart your membership.</p>
        </div>
    )
}

export default RegisterForm
