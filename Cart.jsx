import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import {Link} from "react-router-dom"

const Cart = () => {
  // use selector hook ka use karke cart ka data find kar liya
  const {cart} = useSelector((state)=>state);
   console.log("Printing Cart");
   console.log(cart);
   // total amount ko 0 kar diya
  const [totalAmount,setTotalAmount] = useState(0);
  useEffect(()=>{
    setTotalAmount(cart.reduce( (acc,curr)=>acc+curr.price,0) );
  },[cart])
  
  return (
    <div>
   <div className="flex-row justify-between items-center">
{
  // agar cart ki length non-empty ho to sare data ko print kar do
  // sath sath me summary bhi dikha do
  cart.length > 0 ?
  (<div>
    <div>
      {
        cart.map((item,index)=> {
          // item index pass as a prop
          return <CartItem key ={item.id} item ={item} itemIndex = {index}/>
        })
      }
      
    </div>
    
    <div className=" p-10 justify-between ml-10 ml-y-4 grid xs:grid-col-1 sm:grid-col-2 max-w-6xl space-y-10 space-x-50 min-h-[80v] ">
      <div>
      
        <div className="text-green-600 font-semibold">Your Cart</div>
        <div className="font-bold  text-green-600">Summary</div>
        <p>
          <span className="font-bold">Total Item: {cart.length}</span>
        </p>
      </div>
    
      <div>
         <p>Total Amount:<span className="text-green-500 font-bold">${totalAmount}</span></p>
         <button className="bg-green-500 border-2 border-green-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-green-700 text-white">
          CheckOut Now
         </button>
      </div>
    </div>
  </div>):

  (<div className="flex flex-col items-center">
    <div className="text-blue-800 border:4px flex m-l:auto m-r:auto justify-center p-40 items-center  gap-5">
    <h1 className="flex flex-col width:70% height-700px position:absolute p-5 m-4 mx-4 py-9 border-2px">Cart Empty</h1>
    <Link to={"/"}>
      <button className="flex width:50% height:60% justify-center gap-5 border-4px bg-green-800 text-white items-center  rounded font-semibold text-[12px] p-2 px-5 uppercase ">
        Shop Now
      </button>
    </Link>
  </div>
  </div>)
}
    </div>
    </div>
  );
};

export default Cart;
