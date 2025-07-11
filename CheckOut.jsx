import { useState } from "react"
import { useSelector,useDispatch } from "react-redux";
import { clearCart } from "../redux/Slice";
function CheckOut()
{
    const cartItems=useSelector((state)=>state.cart.items)
    const dispatch=useDispatch();
    const [userDetails,setUserDetail]=useState({
        name:"",
        email:"",
        address:""
    });
    const handlechange=(event)=>{
        const {name,value}=event.target;
        setUserDetail((prevDetail)=>({
            ...prevDetail,
            [name]:value

        }

        ))}

     const handleOrder = () => {
    if (!userDetails.name || !userDetails.email || !userDetails.address) {
      alert("Please fill in all the details to place your order.");
      return;
    }
    alert("Order placed successfully!");
    dispatch(clearCart());
  };

    console.log(userDetails);
    return(
    <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Checkout</h1>

    {cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <>
        <div className="border p-4 mb-4">
          <h2 className="text-xl font-semibold">Cart Items:</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between py-2">
              <span>{item.title}</span>
              <span>${item.price}</span>
            </div>
          ))}
          <p className="font-bold mt-4">
            Total: ${cartItems.reduce((total, item) => total + item.price, 0)}
          </p>
        </div>

        <div className="border p-4 mb-4">
          <h2 className="text-xl font-semibold">User Details:</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border p-2 w-full mb-2"
            value={userDetails.name}
            onChange={handlechange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 w-full mb-2"
            value={userDetails.email}
            onChange={handlechange}
          />
          <textarea
            name="address"
            placeholder="Address"
            className="border p-2 w-full mb-2"
            rows="3"
            value={userDetails.address}
            onChange={handlechange}
          />
        </div>

        <button
          onClick={handleOrder}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Place Order
        </button>
      </>
    )}
  </div>
);
        
}

export default CheckOut;