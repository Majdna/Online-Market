import './Seller.scss';
import { Link } from "react-router-dom";
import Header from '../../../components/header/header';
import './Seller.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';


import AdminCard from '../../../components/AdminCard/AdminCard';
import { useAppSelector } from '../../../../app/hooks';


import Bar from '../../../components/productBar/bar';
import { Console } from 'console';


interface product {
    id: string;
    _id: string;
    name: string;
    price: number;
    catagory: string;
    amount: string;
    quantity: number;
    description: string;
    Url: string;

}


const Seller = () => {

    const admin = useAppSelector(state => state.user)

    useEffect(() => {
        axios.get('http://localhost:4001/products').then(({ data }) => {
            //console.log(data.products);
            setProducts(data.products);
            //console.log(products);
           setProductByCatagory(data.products);
          })
    }, []);

    const [catagory, setCatagory] = useState("")
    const [products, setProducts] = useState([])
    const [productByCatagory, setProductByCatagory] = useState(products)


    function handleClickFunc(){
        //axios.post("/product/addProduct",{id:123,name:"apple",price:100,quantity:10,description:"sssss",Url:"1111111"});
    }
    useEffect(() => {

        function handleClick() {
            // ev.preventDefault();
            //console.log(catagory)
            const arr = products.filter((element: any) => {
                if (element.catagory === catagory) {
                    return element;
                }
            })
            setProductByCatagory([...arr]);
            if (catagory === "All" || catagory === "") {
                setProductByCatagory([...products]);
            }
           // console.log(arr)

        }
        handleClick();
    }, [catagory])

    return (
        <div className="App">
            <div className="header">
                <div className="header-right">
                    <Link to="/AdminProfile">Profile</Link>
                    <Link to="/HelpAdmin">help</Link>
                    <Link to="/aboutUsAdmin">About Us</Link>
                    <Link to="/logIn">LogOut</Link>
                </div>
            </div>
            {/* <Bar></Bar> */}
            <div className="navbar">
            <a href="#All" onClick={(ev: any) => { setCatagory("All") }} >All Product</a>
        <a href="#Laptops" onClick={(ev: any) => { setCatagory("Laptops") }}>Laptops</a>
        <a href="#Smartphones" onClick={(ev: any) => { setCatagory("Smartphones") }}>Smartphones</a>
        <a href="#TV"  onClick={(ev: any) => { setCatagory("TV") }}>TV</a>
        <a href="#Cameras"  onClick={(ev: any) => { setCatagory("Cameras") }}>Cameras</a>
        <div className="dropdown">
          <button className="dropbtn">More
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#"  onClick={(ev: any) => { setCatagory("VideoGames & Consoles") }} >VideoGames & Consoles</a>
            <a href="#"  onClick={(ev: any) => { setCatagory("Computers") }}>Computers</a>
            <a href="#"  onClick={(ev: any) => { setCatagory("Other") }}>Other</a>
          </div>
                </div>

                <div className="search_product">
                    <Link to="/AddProduct">Add Product</Link>
                    {/* <button onClick={handleClickFunc} >add Product From mongo</button> */}
                    <input className="searchDiv__bar__content__a__input" type="text" placeholder=" Search a product" name="search" />
                </div>
            </div>
            <div className="wrapper">
                {productByCatagory.map((product, i) => {
                    const { id, name,_id, price, catagory, amount, quantity, description, Url } = product;
                   
                    return <AdminCard key={i} id={id} ID={_id} name={name} price={price} catagory={catagory} quantity={quantity} amount={amount} description={description} Url={Url} />
                })}

            </div>
        </div>

    )
}


export default Seller;