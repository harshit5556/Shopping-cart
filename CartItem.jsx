
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

// cart item me 5 thing are present
const CartItem = ({item,itemIndex}) => {
  const dispatch = useDispatch();
// for delete a button then call these function
 const removeFromCart = () =>{
  dispatch(remove(item.id));
  toast.success("Item Removed");
 }

  return (
    <div className="flex border-line ">
      <div className="flex gap-5">
        <div className="flex flex-col justify-between items-center hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
        <div className="h-[100px]">
          <img src={item.image} className="h-full w-full"/>
        </div>
         
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
          <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
          <div className="flex space-between gap-x-6 ">
            <p className="text-green-600">${item.price}</p>
          <div onClick ={removeFromCart}>
         <MdDelete  className=" w-6 h-6 bg-pink-300 rounded-full absolute hover:bg-pink-600"/>
          </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CartItem;
