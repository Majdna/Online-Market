import '../card/Card.scss'
import { useState, useEffect } from "react";
// import Cart from './view/pages/cart/Cart';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import EditProduct from '../../pages/AdminPages/EditProduct/EditProduct'
import { useAppDispatch } from '../../../app/hooks';
import { edit } from '../../../features/product/productReducer';
import { SettingsInputHdmiOutlined } from '@mui/icons-material';




function AdminCard(prop: any) {

  const nav = useNavigate();
  const dispatch = useAppDispatch();

  const [counter, setCounter] = useState(prop.amount); // useState(initial value);
  const [product, setProduct] = useState(prop);
  // const [q,setQ] = useState(0);

  function handleAddCounter(ID: string): void {

    let tempCounter = counter;
    tempCounter++;
    setCounter(tempCounter);
    axios.patch(`http://localhost:4001/products/${ID}`, { amount: tempCounter }).then(({ data }) => console.log(data));
  }
  function handelRemoveProduct(ID: any) {
    axios.delete(`http://localhost:4001/products/${ID}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

    alert("product removed !!")
    nav("/Seller");

  }
  function handleRemveCounter(ID: string) {
    let tempCounter = counter;
    tempCounter--;
    if (tempCounter < 0) {
      tempCounter = 0;
    }
    setCounter(tempCounter);
    axios.patch(`http://localhost:4001/products/${ID}`, { amount: tempCounter }).then(({ data }) => console.log(data));
  }

  //const [ID , setID] = useState("");
  //const [_id , setId] = useState("");
  const [Name , setName] = useState("");
  const [Price , setPrice] = useState();
  const [Catagory , setCatagory] = useState();
  const [Amount , setAmount] = useState();
  const [Quantity , setQuantity] = useState();
  const [Description , setDescription] = useState();
  const [url , setUrl] = useState();

  function handelEditProduct(_id: string) {
    //setID(prop.ID);
   // setId(prop.ID);
    setAmount(prop.amount);
    setCatagory(prop.catagory);
    setDescription(prop.description);
    setName(prop.name);
    setPrice(prop.price);
    setQuantity(prop.quantity);
    setUrl(prop.Url);
    dispatch(edit([ID, Name,Price, Catagory, Amount, Quantity, Description, url, true]));
  }
///_id
  const { id, ID ,name,price, catagory, quantity,amount, description, Url } = prop;


  return (

    <div className="card"  >

      <img src={Url} alt="" />
      <h3>{name}</h3>
      <p>Price : {price}</p>
  
    {/* <p><button onClick={() => handleRemveCounter(_id)}>-</button>  {counter} <button onClick={() => handleAddCounter(ID)}>+</button> </p> */}
      <button onClick={() => handelRemoveProduct(ID)}> Remove </button>
      {/* <button onClick={() => handelEditProduct(_id)}> Edit </button> */}
    </div>
  );
}

export default AdminCard;
