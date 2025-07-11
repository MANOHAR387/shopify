import fetchproducts from '../utils/fetchproducts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/Slice';
function Search()
{
    const dispatch=useDispatch();
    const apiUrl = "https://dummyjson.com/products";
    const { product, loading, error } =  fetchproducts(apiUrl);
    console.log(product);
    const [search,setSearch]=useState("");
    const [filtered,setFilterd]=useState(product||[]);
    function handleSearch()
    {
        const filterd_product=product.filter((ite)=>ite.title.toLowerCase().includes(search.toLowerCase()));
        setFilterd(filterd_product); 
    }
    console.log(filtered);
    return(
        <>
         <div className='mt-6 flex flex-wrap justify-center items-center gap-4'>
         <input
                    type="text"
                    className="w-full sm:w-72 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter the title..."
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
                    onClick={handleSearch}
                >
                    Search
                </button>
        </div>
        <div className="flex flex-wrap justify-center mt-8">
            {filtered.length > 0 ? (filtered.map((item, index) => (
                <div className="w-full sm:w-60 md:w-72 lg:w-80 p-4 bg-white shadow-md rounded-lg flex flex-col items-center">
                    <img src={item.images} className="w-full h-40 object-cover rounded-lg" alt={item.title} />
     
                    <h2 className="font-bold p-2 hover:text-red-500">{item.title}</h2>
                    <FontAwesomeIcon
                        icon={faStar}
                        className="hover:text-blue-500 transition-colors duration-300 flex flex-row"/>
                    <span className="p-2 hover:text-blue-500 transition-colors duration-300">
                        {item.rating}
                    </span>
            <div>
                <span className="p-2">
                {item.minimumOrderQuantity}k+ bought in past 1 month
                </span>
            </div>
            <div className="p-2 font-bold">${item.price}</div>
                <Link
                    to={`/product-detail/${item.id}`}
                    className="bg-yellow-300 m-3 mb-3 rounded-lg p-2 hover:bg-yellow-400"
                >View
                </Link>
            <button className="bg-yellow-300 m-3 mb-3 rounded-lg p-2 hover:bg-yellow-400"
                onClick={() =>{dispatch(addItem(item))}}>
             Add to cart
            </button>
            </div>
        ))
        )       
        : (
          <p className="text-gray-500 text-center w-full">
            No restaurants match your search.
          </p>
        )}
       
      </div>    
        
        </>

    )
}
export default Search;