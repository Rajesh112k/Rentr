import React, { useState } from "react";
import './Signup.css';
import Login from "../Login/Login";
import Google_G_Logo from '../Assets/Google__G__Logo.png'
import facebook_logo_white from '../Assets/facebook_logo_white.png'
import Apple_logo_white from '../Assets/Apple_logo_white.png'
import x from '../Assets/x.svg'
import person from '../Assets/person.svg'
import mail from '../Assets/mail.svg'
import phone from '../Assets/phone.svg'
import lock from '../Assets/lock.svg'

const Signup = ({ onClose, onLoginClick }) => {
    const [disabled, setDisabled] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        phoneNumber: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

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

    const handleSubmit = async () => {
        console.log(JSON.stringify(formData))
        let mydata = {
            "firstName" : "hello",
            "lastName" : "hu",
            "password" : "ueitlkdorkdlgo",
            "email" : "joe@gmail.com",
            "phoneNumber" : "2389482937"
        }
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(formData),
                // body : mydata,
                //mode: 'no-cors'
            });

            if (response.ok) {
                console.log("Registration successful");
            } else {
                console.error("Registration failed");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className={`container ${disabled ? "disabled" : ""}`}>
            {!disabled && !showLogin && (
                <div>
                    <div className="signUpHeader">
                        <div></div>
                        
                        <div className="signUpLabel"> Sign Up </div>
                        <div className="exit1" onClick={handleClose}>
                            <img src={x} alt="" className="signUpExitIcon" />
                            {/* <i class="bi bi-file-excel"></i> */}
                        </div>
                        
                    </div>
                    <div className="signUpUnderline"></div>
                    <div className="welcome"> Welcome to Rentr! </div>
                    <div className="inputs">
                        <div className="input">
                            <input 
                                type="text" 
                                placeholder="Name" 
                                name="firstName" 
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input">
                            <input 
                                type="email" 
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input">
                            <input 
                                type="tel" 
                                placeholder="Phone Number"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input">
                            <input 
                                type="password" 
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button className="submit" onClick={handleSubmit}> NEXT </button>
                    <div className="or"><span>OR</span></div>
                    <div className="services">
                        <button className="facebook">
                            <img src={facebook_logo_white} alt="" />
                            <div className="facebookText">Continue with Facebook</div>
                        </button>
                        <button className="google">
                            <img src={Google_G_Logo} alt="" />
                            <div className="googleText">Continue with Google</div>
                        </button>
                        <button className="apple">
                            <img src={Apple_logo_white} alt="" />
                            <div className="appleText">Continue with Apple</div>
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
