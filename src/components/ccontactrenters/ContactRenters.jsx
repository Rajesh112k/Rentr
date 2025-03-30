import React, {useState} from "react";
import './ContactRenters.css'
import x from '../Assets/x.svg'
import ownerPic from '../Assets/ownerPic.png'
import jake from '../Assets/jake.png'
import mail from '../Assets/mail.svg'
import phone from '../Assets/phone.svg'
import smallMessage from '../Assets/smallMessageIcon.png'
import jane from '../Assets/exampleProfilePic.svg'
import { Link } from "react-router-dom";

const ContactRenters= () => {
    return ( 
        <div className = "requestsContainer">
            <div className="leftPanel">
                <div className="userInfo">
                    <img src={ownerPic} alt="" />
                    <div className="userName">Joe Smith</div>
                </div>
                <Link to="/owner-properties"><button className="myProperties">My Properties</button> </Link>
                <Link to="/owner-documents"><button className="actions">Documents</button> </Link>
                <Link to="/owner-requests"><button className="actions">Maintenance Requests</button> </Link>
                <Link to="/ccontact-renter"><button className="actions">Contact Renters</button> </Link>
                <Link to="/owner-inspections"><button className="actions">Inspections</button> </Link>
            </div>
            <div className="rightPanel">
                <div className="containerHead">
                    <div className="manageRentalsTitle">Contact Renters</div>
                    <div className="exitX"> <img src={x} alt="" /> </div>
                </div>
                <div className="renterCards">
                    <div className="renterCard">
                        <div className="renterInfo">
                            <img src={jake} alt="" className="renterPhoto" />
                            <div className="renterName">Jake Moore</div>
                            <div className="renterProp">Red Barn House</div>
                        </div>
                        <div className="contactInfo">
                            <div className="mailPhone">
                                <div className="mail">
                                    <img src={mail} alt="" className="emailIcon" />
                                    <div className="emailRenter">jakemoore@gmail.com</div>
                                </div>
                                <div className="phone">
                                    <img src={phone} alt="" className="phoneIcon" />
                                    <div className="callRenter">+1 (123) 456-7890</div>
                                </div>
                            </div>
                            <img src={smallMessage} alt="" className="messageRenter" />
                        </div>
                    </div>
                    <div className="renterCard">
                        <div className="renterInfo">
                            <img src={jane} alt="" className="renterPhoto" />
                            <div className="renterName">Jane Doe</div>
                            <div className="renterProp">Verve</div>
                        </div>
                        <div className="contactInfo">
                            <div className="mailPhone">
                                <div className="mail">
                                    <img src={mail} alt="" className="emailIcon" />
                                    <div className="emailRenter">janedoe@gmail.com</div>
                                </div>
                                <div className="phone">
                                    <img src={phone} alt="" className="phoneIcon" />
                                    <div className="callRenter">+1 (123) 456-7890</div>
                                </div>
                            </div>
                            <img src={smallMessage} alt="" className="messageRenter" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactRenters