import fetchproducts from '../utils/fetchproducts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/Slice';
import { useSelector } from 'react-redux';
function Products()
{
    //fetching the products from url
    const apiUrl="https://dummyjson.com/products";
    const {product}=fetchproducts(apiUrl);   
    const dispatch=useDispatch();
    return(
        <div className='flex flex-row flex-wrap  justify-center items-center mt-2'>
            {product.map((ite)=>(
                <div key={ite.id} className='border-2 m-4 p-4 hover:shadow-lg transition-shadow duration-300 w-full sm:w-60 md:w-64 lg:w-72'>
                    <img src={ite.images} className='w-full h-40 object-cover rounded-md'/>
                    <h1>{ite.title}</h1>
                    
                    <FontAwesomeIcon icon={faStar} className="hover:text-blue-500 transition-colors duration-300"/>
                    <span className="p-2 hover:text-blue-500 transition-colors duration-300">
                    {ite.rating}
                    </span>
                    <p><span className='font-semibold'>${ite.price}</span></p>
                    <Link
                    to={`/product-detail/${ite.id}`}
                    className="bg-yellow-300 m-3 mb-3 rounded-lg p-2 hover:bg-yellow-400"
                    >
                     View
                    </Link>
                    <button className="bg-yellow-300 m-3 mb-3 rounded-lg p-2 hover:bg-yellow-400"onClick={() =>{ {window.alert("item is added to the cart")}; dispatch(addItem(ite))}}>
                        Add To Cart
                    </button>
                </div>
               
           ))}
        </div>
    )
}
export default Products;