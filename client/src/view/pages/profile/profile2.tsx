
import './profile.scss';
import { useState , useEffect,useCallback } from "react";
import {useParams, Link, useNavigate} from 'react-router-dom';
import Header from '../../components/header/header';
import axios from 'axios';
import WhatsappSharpIcon from '@mui/icons-material/WhatsappSharp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

export default function Profile2() {
    const {id} = useParams();
    //const admin = useAppSelector(state=> state.user)
    
    
    useEffect(()=>{axios.post(`http://localhost:4001/users/${id}`).then(({data})=>{
    console.log('Response from main API: ',data)
    console.log(data);
    setFullName(data.fullName);
    setAddress(data.address);
    setCity(data.city);
    setEmail(data.Email);
    setPhone(data.phone);
    console.log(phone);
  
  })
  },[]);
 
  const[fullName,setFullName]= useState("");
  const[address,setAddress]= useState("");
  const[Email,setEmail]= useState("");
  const[city,setCity]= useState("");
  const[phone,setPhone]= useState("");
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate(`http:// https://wa.me/`, {replace: true}), [navigate]);
    return (
    <div>
    <div className="wrapper">
        <img src="https://cc-media-foxit.fichub.com/image/fox-it-mondofox/e8c0f288-781d-4d0b-98ad-fd169782b53b/scene-sottacqua-per-i-sequel-di-avatar-maxw-654.jpg"></img>
      <div>
      <p> {fullName}</p>
      <p> {address}</p>
      <p> {city}</p>
      <p> {phone}</p>
      <a href={" https://wa.me/" + phone}>  <WhatsappSharpIcon></WhatsappSharpIcon>  </a>
      <a href={"mailto:" + Email}> <MailOutlineIcon> </MailOutlineIcon></a> 
        </div>
    </div>
       
    </div>
    );
  }