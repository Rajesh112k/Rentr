import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Signup from "../Signup/Signup";
import google from"../Assets/Google__G__Logo.png"
const Login = ({ onClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const toggleSignup = () => {
      setShowSignup(!showSignup);
    };

    const handleClose1 = () => {
        setShowSignup(false);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleDisable = () => {
        setDisabled(true);
    };

    return (
        <div className={`login-container ${disabled ? "disabled" : ""}`}>
            {!showSignup &&  (
                <div className="login-form">
                    <div className="exit" onClick={() => { 
                        if (onClose) {
                            onClose(); 
                            handleDisable(); 
                        }
                    }}>
                        <i class="bi bi-file-excel"></i>
                    </div>
                    <div className="text"> Login </div>
                    <div className="underline"></div>
                    <div className="welcome"> Welcome to Rentr! </div>
                    <div className="inputs">
                        <div className="input">
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Email"
                            />
                        </div>
                        <div className="input">
                            <input
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder="Password"
                            />
                        </div>
                        <div className="forgot-password">
                            {" "}
                            <span>
                                <u>Forgot Password?</u>
                            </span>
                        </div>
                    </div>
                    <button className="submit">
                        <Link to="/login">Log In</Link>
                    </button>
                    <div className="or">
                        <span>OR</span>
                    </div>
                    <div className="services">
                        <button className="facebook">
                        <i class="bi bi-facebook"></i>
                            <div className="facebookText">
                           Continue with Facebook
                            <div></div>
                            </div>
                        </button>
                        <button className="google j1s">
                            <img src={google} alt="" className="img1"/>
                            <div className="googleText">
                                Continue with Google
                            </div>
                        </button>
                        <button className="apple">
                        <i class="bi bi-apple"></i>
                            <div className="appleText">
                                Continue with Apple
                            </div>
                        </button>
                    </div>
                    <div className="signUp">
                        {" "}
                        <span>
                            Don't have an Account yet? <u onClick={toggleSignup}>Sign Up</u>
                        </span>
                    </div>
                </div>
            )}
            {showSignup && (
        <div className="signup-popup">
          <Signup onClose={() => setShowSignup(false)} />
        </div>
      )}
        </div>
    );
};

export default Login;
