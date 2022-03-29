import '../Cart/Cart.scss'
import { useState , useEffect } from "react";
import axios from 'axios'; 
import { Link } from "react-router-dom";

// import Cart from './view/pages/cart/Cart';
import Card from '../../components/card/Card';
import Header from '../../components/header/header';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface product {
  id:number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  Url: string;
  productsCart:any;
  setproductsCart:any;
  }





function Cart(prop: any) {
  // console.log(prop.arr)

  const [allProducts,setAllProducts] = useState([]);

  const [products,setProducts]=useState([]);
  useEffect(()=>{axios.get('http://localhost:4001/Products').then(({data})=>{
  const {products} = data; 
  console.log(products);
  setAllProducts(products.filter((product:any)=> {
    if(product.quantity>0){
      return product;
    }
  }));
  
})},[]);

// const products = allProducts.filter((product:product) =>  product.quantity>0)

return(
 <div>
         <header className='header'>     <div className="header">

<div className='header-left'>   <Link to="/Store">Store</Link>
</div>
<div className="header-right">
  <Link to="/Cart"><ShoppingCartIcon></ShoppingCartIcon></Link>
  <a href="#contact">Requests</a>
  <a href="#about">Profile</a>
  <Link to="/settings">Settings</Link>
  <Link to="/logIn">LogOut</Link>
  <Link to="/help">help</Link>
  <Link to="/aboutUsIn">About Us</Link>
</div>
</div></header>

      <div className="cart">
     {allProducts.map((product:product, i:number) => {
          const { id, name, price, quantity, description, Url, productsCart, setproductsCart } = product;
          return <Card key={i} id={id} name={name} price={price} quantity={quantity} description={description} Url={Url} productsCart={productsCart} setproductsCart={setproductsCart} />
        })
    }

    </div>
    </div>
);
}

export default Cart;