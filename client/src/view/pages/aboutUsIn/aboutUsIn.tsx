import './AboutUsin.scss';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/header/header';



const aboutUs = () => {
    return (
        <div>
            <header><Header></Header></header>
        <div className='warpper'>

            <div>
                <div>
                    <h1>hi every one into abo ali Online market
                    </h1>
                    we have akk products that u want like : fruts and vegetables , meat and fish , organic and healthy , drinks and more other things
                   <div className='images'>
                   <img src="https://previews.123rf.com/images/_fla/_fla1205/_fla120500230/13756213-warenkorb-voll.jpg?fj=1" alt="" />
                  <h1>==</h1>
                   <img src="https://pro-ledger.com/wp-content/uploads/2020/10/savemoney-1.png" alt="" />
                   </div>
                   <div> we are so happy to see you hear </div>
                    <Link to="/store"> to home Page</Link>

                </div>
            </div>

        </div>
        </div>
    )
}


export default aboutUs;