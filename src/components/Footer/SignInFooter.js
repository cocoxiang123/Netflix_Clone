import React from 'react'

function SignInFooter() {
    return (
        <div className="footer signInFooter">
            <div className="signInFooter-container">
            <div>Questions? Phone 1800 071 578</div>
            <div className="footerItems">
                <a href="#">Gift Card Terms</a>
                <a href="#">Terms of Use</a>
                <a href="#">Privacy Statement</a>
            </div>
            <select className="lanSelect">
                <option value="English" selected >English</option>
            </select>
            </div>
        </div>
    )
}

export default SignInFooter
