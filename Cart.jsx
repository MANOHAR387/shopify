import Header from "./Header";
import { useSelector,useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {removeitem} from "../redux/Slice"
import { Link } from "react-router-dom";
function Cart()
{
    const dispatch=useDispatch();
    const items=useSelector((store)=>store.cart.items);
    console.log(items)
    return(
        <>       
    {items.length===0?(<h1>No cart items</h1>):
       
        <div className="m-4">
        
            {items.map((ite)=>(
                
                <div className="flex flex-row">
                  <img src={ite.thumbnail} className="w-34 h-64"/>
                 <div className="mt-10">
                    sponsered by:
                    <h1 className="font-bold">{ite.brand}</h1>
                    <p className="font-semibold">{ite.title}</p>
                    <p className="mb-7">{ite.description}</p>
                    <span className="bg-green-700 p-1 mt-4 mb-3 text-white cursor-pointer rounded-md font-semibold">
                        {ite.rating}
                    <FontAwesomeIcon
                            icon={faStar}
                            className="hover:text-blue-500 transition-colors duration-300 pl-1"
                          />
                    </span>
                    <p className="text-green-500 font-semibold">special Price</p>
                    <p className="font-bold"><symbol>$<span>{ite.price}<span className="ml-3">{ite.discountPercentage}% off</span></span></symbol></p>
                    <button onClick={()=>{ console.log("hi"); dispatch(removeitem(ite))}} className="bg-blue-400">Remove Item</button>
                 </div>

                
                </div>
              
            
            ))};
        </div>
    }
    
    </>
    )

}




export default Cart;