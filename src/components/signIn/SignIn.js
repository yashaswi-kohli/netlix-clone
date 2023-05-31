import React, { useRef } from "react";
import "./SignIn.css";
import { auth } from "../../firebase";

function SignIn() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        });
    };

    const sign_in = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => alert.apply(error.message));
    };

    return <div className="signIn">
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="Email" placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <button type="sumbit" onClick={sign_in}>Sign In</button>
            <h4>
                <span className="greyy">New to Netflix? </span>
                <span className="linkk" onClick={register}>Sign Up Now.</span>
            </h4>
        </form>
    </div>;
}

export default SignIn;
