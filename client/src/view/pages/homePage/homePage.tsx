import './homePage.scss';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import logo from '../logo.png';
import Button from '@mui/material/Button';

const HomePage = () =>{
    // useEffect(()=>{
    //     axios.get("/Cookie")
    //     .then(({data})=>{
    //       console.log(data);
    //     })
    //   },[]);
    
    return(
        <div className='warpper'>
            
            <div>
        
          <img src={logo}/>  <br></br>
            <Link to="/Login">  <Button
                style={{
                    borderRadius: 35,
                    backgroundColor: "#FF6700",
                    padding: "18px 36px",
                    fontSize: "18px"
                }}
                variant="contained"

                >
                Sign in
            </Button> </Link>
            <br />
            <Link to="/signUp"> <Button
                style={{
                    borderRadius: 35,
                    backgroundColor: "#FF6700",
                    padding: "18px 36px",
                    fontSize: "18px"
                }}
                variant="contained"

                >
                Sign up </Button></Link>
            <br />
            <Link to="/AboutUs"> <Button
                style={{
                    borderRadius: 35,
                    backgroundColor: "#FF6700",
                    padding: "18px 36px",
                    fontSize: "18px"
                }}
                variant="contained"

                >
                 About Us</Button></Link>
            
            </div>
        </div>
    )
}


export default HomePage;