import "./LoginScreen.css";
import SignIn from "../signIn/SignIn";
import React, { useState } from "react";

function LoginScreen() {

    const [signIn, setSignIn] = useState(false);

    return <div className="loginScreen">
        <div className="loginScreen_background">
            <img
                className="loginScreen_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                alt=""
            />
            <button onClick={() => setSignIn(true)} className="loginScreen_button">Sign In</button>
            <div className="LoginScreen_gradient" />
        </div>
        <div className="LoginScreen_body">
            {signIn ? (
                <SignIn />
            ) : (
                <>
                    <h1>Unlimited movies, TV Shows</h1>
                    <h1>and more</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                    <div className="loginScreen_input">
                        <form>
                            <input
                                type="email"
                                placeholder="Email address"
                            />
                            <button
                                onClick={() => setSignIn(true)}
                                className="loginScreen_getStarted">Get Started
                            </button>
                        </form>
                    </div>
                </>
            )}
        </div>
    </div>
}

export default LoginScreen;
