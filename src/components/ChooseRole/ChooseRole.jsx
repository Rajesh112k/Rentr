import React from "react";
import './ChooseRole.css'
import { useState } from "react";

import x from '../Assets/x.svg'
import renter from '../Assets/Renter.svg'
import owner from '../Assets/PropertyOwner.svg'
import renterSelected from '../Assets/renterSelected.svg'
import ownerSelected from '../Assets/ownerSelected.svg'


const ChooseRole= () => {
    const [selectedRole, setSelectedRole] = useState(null);
    const [textColor, setTextColor] = useState('#24B86F');
    return (
        <div className = "container">
            <div className = "chooseRoleHeader">
                <div className="chooseRoleExit">
                    <img src={x} />
                </div>
                <div className = "chooseRoleTitle"> Sign Up </div>
                <div className="chooseRoleUnderline"></div>
            </div>
            <div className="roles">
                <button className={`role ${selectedRole === 'renter' ? 'selected' : ''}`}
                onClick={() => {
                    setSelectedRole('renter')
                    setTextColor('#24B86F')
                }}
                >
                {selectedRole === 'renter' ? (
                    <>
                        <img src={selectedRole === 'renter' ? renterSelected : renter} alt="" />
                        <div className="roleText" style = {{color: textColor }}>
                            I'm a Renter
                        </div>
                    </>
                ) : (
                    <>
                        <img src={renter} alt="" />
                        <div className="roleText">I'm a Renter</div>
                    </>
                 )}
                </button>
                <button className={`role ${selectedRole === 'owner' ? 'selected' : ''}`}
                onClick={() =>{
                    setSelectedRole('owner')
                    setTextColor('#24B86F')
                }}
                >
                {selectedRole === 'owner' ? (
                    <>
                        <img src={selectedRole === 'owner' ? ownerSelected : owner} alt="" />
                        <div className="roleText" style = {{color: textColor }}>
                            I'm a Property Owner
                        </div>
                    </>
                ) : (
                    <>
                        <img src={owner} alt="" />
                        <div className="roleText">I'm a Property Owner</div>
                    </>
                )}
                </button>
            </div>
            <button className="submit"> NEXT </button>
        </div>
    )
}

export default ChooseRole