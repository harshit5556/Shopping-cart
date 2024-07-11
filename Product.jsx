import { toast } from "react-hot-toast";
import { useDispatch, useSelector} from "react-redux";
import {add,remove} from "../redux/Slices/CartSlice";
//import { Toast } from "react-toastify/dist/components";
const Product = ({post}) => {
// write a logic agar cart add hai remove button ko dikhayo warna add button ko dikhayo
// uske liye cart find kar rahe
  const {cart} = useSelector((state) =>state);
// fUnction call kar skta hu by dispatch 
const dispatch = useDispatch();

const addToCart =() =>{
  dispatch(add(post));
  toast.success("Item added to Cart");
}
const removeFromCart = () =>{
  dispatch(remove(post.id));
  toast.error("Item remove from Cart");

}
  return(
  <div className="flex flex-col justify-between items-center hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
    <div>  
    <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
    </div>
    <div>
      <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
    </div>
    <div className="h-[180px]">
      <img src={post.image} className="h-full w-full"/>
    </div>
    <div className="flex justify-between gap-12">
 
    <div>
  <p className="text-green-600">${post.price}</p>
    </div>
    
    {
      // jo post pass ki hia agar uski id kisi some product ke equal aa jaye to remove ka button show karenge 
    cart.some((p) => p.id==post.id) ?
     (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white" 
     onClick = {removeFromCart}>
      Remove Item
    </button>):
    (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white"  
    onClick={addToCart}>
      Add to Cart
    </button>)
    }
  </div>

    </div>
   
  );
};

export default Product;
