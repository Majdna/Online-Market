import './store.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
//components
import Card from '../../components/card/Card';
import Cart from '../../components/Cart/Cart';

import Bar from '../../components/productBar/bar';
import Header from '../../components/header/header';
import { Console } from 'console';
import { useAppSelector } from '../../../app/hooks';
import { Link } from "react-router-dom";



interface product {
  _id:string;
  id: string;
  name: string;
  price: number;
  catagory: string;
  quantity: number;
  amount: number,
  description: string;
  Url: string;
}




function Store() {

   const user = useAppSelector(state=> state.user)
  
  useEffect(() => {
  
    axios.get('http://localhost:4001/products').then(({ data }) => {
      //console.log(data.products);
      setProducts(data.products);
      //console.log(products);
     setProductByCatagory(data.products);
    })
 
  }, []);

  

  
  const [catagory, setCatagory] = useState("All")
  const [products, setProducts] = useState<Array<any>>([]);
  const [productByCatagory, setProductByCatagory] = useState<Array<any>>([products])
  
  useEffect(()=>{
    function handleClick() {
      // ev.preventDefault();
      console.log(catagory)
      const arr = products.filter((element: any) => {
        if (element.catagory === catagory) {
          return element;
        }
      })
      setProductByCatagory([...arr]);
      if(catagory === "All"){
        setProductByCatagory([...products]);
      }

      console.log(arr)
  
    }
    handleClick();
  },[catagory])

  


  return (
    
    <div className="App">
      
   
     <header className='header'>     <div className="header">
  

<div className='header-left'>   <Link to="/Store">Store</Link>
</div>
<div className="header-right">
  <Link to="/Cart">To The Cart</Link>
  <a href="#contact">Requests</a>
  <a href="#about">Profile</a>
  <Link to="/settings">Settings</Link>
  <Link to="/logIn">LogOut</Link>
  <Link to="/help">help</Link>
  <Link to="/aboutUsIn">About Us</Link>
</div>
</div></header>

 

      <div className="navbar">
        <a href="#All" onClick={(ev: any) => { setCatagory("All") }} >All Product</a>
        <a href="#fruits" onClick={(ev: any) => { setCatagory("fruits vegetables") }}>fruits vegetables</a>
        <a href="#Meat" onClick={(ev: any) => { setCatagory("Meat and fish") }}>Meat and fish</a>
        <a href="#Organic"  onClick={(ev: any) => { setCatagory("Organic and healthy") }}>Organic and healthy</a>
        <a href="#Drinks"  onClick={(ev: any) => { setCatagory("Drinks") }}>Drinks</a>
        <div className="dropdown">
          <button className="dropbtn">More
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#"  onClick={(ev: any) => { setCatagory("Frozen") }} >Frozen</a>
            <a href="#"  onClick={(ev: any) => { setCatagory("fresh bread") }}>fresh bread</a>
            <a href="#"  onClick={(ev: any) => { setCatagory("Snak and Sweets") }}>Snaks and Sweets</a>
          </div>
        </div>
        <div className="search_product">
          <input className="searchDiv__bar__content__a__input" type="text" placeholder=" Search a product" name="search" />
        </div>
      </div>
      <div className="wrapper">
      

      {productByCatagory.map((product) => (
       <div>
       
       <Card key={product.id} id={product.id} name={product.name} price={product.price} catagory={product.catagory} quantity={product.quantity} description={product.description} Url={product.Url}/>
       </div>
      ))};

       
      </div>  
      
   
    </div>
  );
}

export default Store;
