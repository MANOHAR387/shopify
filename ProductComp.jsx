/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { addItem } from "../redux/Slice";
import { useDispatch } from "react-redux";

function ProductComp(props) {
  const dispatch = useDispatch();
  return (
    <>
      <img
        src={props.datas.images}
        className="w-96 h-52 rounded-lg"
        alt={props.datas.title}
      />
      <h2 className="font-bold p-2 hover:text-red-500">{props.datas.title}</h2>
      <FontAwesomeIcon
        icon={faStar}
        className="hover:text-blue-500 transition-colors duration-300"
      />
      <span className="p-2 hover:text-blue-500 transition-colors duration-300">
        {props.datas.rating}
      </span>
      <div>
        <span className="p-2">
          {props.datas.minimumOrderQuantity}k+ bought in past 1 month
        </span>
      </div>
      <div className="p-2 font-bold">${props.datas.price}</div>
      <Link
        to={`/product-detail/${props.datas.id}`}
        className="bg-yellow-300 m-3 mb-3 rounded-lg p-2 hover:bg-yellow-400"
      >
        View
      </Link>
      <button
        className="bg-yellow-300 m-3 mb-3 rounded-lg p-2 hover:bg-yellow-400"
        onClick={() =>{ {window.alert("item is added to the cart")}; dispatch(addItem(props.data))}}
      >
        Add to cart
      </button>
    </>
  );
}

export default ProductComp; */



