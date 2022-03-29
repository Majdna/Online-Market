// import './ aboutUs.scss';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../../../components/header/header';



const aboutUs = () => {
    return (
        <div>
            <div className="header">
            <div className="header-right">
            <Link to="/AdminProfile">Profile</Link>
                    
            <Link to="/HelpAdmin">help</Link>
            <Link to="/aboutUsAdmin">About Us</Link>
            <Link to="/logIn">LogOut</Link>
                </div>
            </div>
        
        <div className='warpper'>

            <div>
                <div>
                    <h1>hi Seller </h1>
                    <h2>welcome in your online market</h2>
                   <h2>you can add/sell whatever you want in your market </h2>
                    <div> we are so happy to see you hear in our website </div>


                    <Link to="/Seller"> to home Page</Link>

                </div>
            </div>

        </div>
        </div>
    )
}


export default aboutUs;