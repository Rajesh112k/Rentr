import React, { useState } from "react";
import './Signup.css';
import Login from "../Login/Login";
import google from"../Assets/Google__G__Logo.png"

const Signup = ({ onClose, onLoginClick }) => {
    const [disabled, setDisabled] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleDisable = () => {
        setDisabled(true);
    };
    const handleClose = () => {
        if (onClose) {
            handleDisable();
            onClose();
        }
        };

    const toggleLogin = () => {
        if (onLoginClick) {
            onLoginClick();
        }
        setShowLogin(true);
    };

    return (
        <div className={`container ${disabled ? "disabled" : ""}`}>
            {!disabled && !showLogin && (
                <div>
                    <div className="header">
                        <div></div>
                        
                        <div className="text"> Sign Up </div>
                        <div className="exit1" onClick={handleClose}>
                        <i class="bi bi-file-excel"></i>
                        </div>
                        
                    </div>
                    <div className="underline"></div>
                    <div className="welcome"> Welcome to Rentr! </div>
                    <div className="inputs">
                        <div className="input">
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="input">
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input">
                            <input type="tel" placeholder="Phone Number" />
                        </div>
                        <div className="input">
                            <input type="password" placeholder="Password" />
                        </div>
                    </div>
                    <button className="submit"> NEXT </button>
                    <div className="or"><span>OR</span></div>
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
                    <div className="login" onClick={toggleLogin}>
                        <span> Already have an Account? <u>Login</u></span>
                    </div>
                </div>
            )}
             {showLogin && (
                <div className="login-popup">
                    <Login onClose={() => {
                        if (onClose) {
                            handleDisable();
                            setShowLogin(false);
                        }
                    }} />
                </div>
            )}
        </div>
    )
}

export default Signup;
