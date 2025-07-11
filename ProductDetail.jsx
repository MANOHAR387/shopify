import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail() {
  const { id } = useParams(); // Extract the product ID from the route params
  const [product, setProduct] = useState(null); // State to store the matched product
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch all products
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        // Find the product with the matching ID
        const matchedProduct = data.products.find(
          (product) => product.id === parseInt(id, 10)
        );

        if (matchedProduct) {
          setProduct(matchedProduct);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-5">
      {product ? (
        <>
          <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">{product.title}</h1>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-64 h-64 object-cover mb-4"
          />
          <p className="text-gray-700 text-base mb-4 text-center lg:text-left">{product.description}</p>
          <p  className="text-gray-900 font-bold text-xl mb-4 text-center lg:text-left">${product.price}</p>
          <p className="text-gray-600 text-sm text-center lg:text-left">Category: {product.category}</p>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default ProductDetail;
