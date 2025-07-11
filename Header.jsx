import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHouse, faCartShopping} from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";
import CheckOut from "./CheckOut";

function Header() {
  return (
    <div className="flex flex-row justify-between items-center bg-orange-500 p-4 shadow-md">
      {/* Logo */}
      <img
        src="https://logosmarcas.net/wp-content/uploads/2020/11/Shopify-Logo.png"
        alt="Shopify Logo"
        className="w-24 sm:w-36"
      />

      {/* Navigation Links */}
      <div className="flex flex-wrap space-x-4 sm:space-x-6 items-center mt-4 sm:mt-0">
        <Link
          to="/"
          className="flex items-center text-white text-sm sm:text-base hover:text-gray-100 transition duration-200"
        >
          <FontAwesomeIcon icon={faHouse} className="text-base sm:text-lg" />
          <span className="ml-2">Home</span>
        </Link>
        <Link
          to="/search"
          className="flex items-center text-white sm:text-base hover:text-gray-100 transition duration-200"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-base sm:text-lg" />
          <span className="ml-2">Search</span>
        </Link>
        <Link
          to="/product-detail"
          className="flex items-center text-white sm:text-base hover:text-gray-100 transition duration-200"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-base sm:text-lg" />
          <span className="ml-2">Product Details</span>
        </Link>
        <Link
          to="/cart"
          className="flex items-center text-white sm:text-base hover:text-gray-100 transition duration-200"
        >
          <FontAwesomeIcon icon={faCartShopping} className="text-base sm:text-lg" />
          <span className="ml-2">Cart</span>
        </Link>
        <Link to="/checkout"
  className="flex items-center text-white sm:text-base hover:text-gray-100 transition duration-200"
>
  <FontAwesomeIcon icon={faCartShopping} className="text-base sm:text-lg" />
  <span className="ml-2">Checkout</span>
</Link>

      
      </div>
    </div>
  );
}

export default Header;
